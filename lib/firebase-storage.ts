import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { storage } from './firebase'

export class FirebaseStorageService {
  private static instance: FirebaseStorageService

  public static getInstance(): FirebaseStorageService {
    if (!FirebaseStorageService.instance) {
      FirebaseStorageService.instance = new FirebaseStorageService()
    }
    return FirebaseStorageService.instance
  }

  async uploadReportEvidence(files: File[], reportId?: string): Promise<string[]> {
    const uploadPromises = files.map(async (file) => {
      // Create unique filename with timestamp and report ID
      const timestamp = Date.now()
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
      const fileName = `evidence/${reportId || 'temp'}_${timestamp}_${sanitizedFileName}`
      
      // Create storage reference
      const storageRef = ref(storage, fileName)
      
      try {
        // Upload file
        const snapshot = await uploadBytes(storageRef, file)
        
        // Get download URL
        const downloadURL = await getDownloadURL(snapshot.ref)
        
        return downloadURL
      } catch (error) {
        console.error(`Failed to upload file ${file.name}:`, error)
        throw new Error(`Failed to upload ${file.name}`)
      }
    })

    try {
      const urls = await Promise.all(uploadPromises)
      return urls
    } catch (error) {
      console.error('Failed to upload some files:', error)
      throw error
    }
  }

  async deleteFile(url: string): Promise<void> {
    try {
      // Extract file path from URL
      const urlObj = new URL(url)
      const pathSegments = urlObj.pathname.split('/')
      const filePath = decodeURIComponent(pathSegments[pathSegments.length - 1])
      
      const storageRef = ref(storage, filePath)
      await deleteObject(storageRef)
    } catch (error) {
      console.error('Failed to delete file:', error)
      throw error
    }
  }

  validateFile(file: File): { valid: boolean; error?: string } {
    const maxSize = 10 * 1024 * 1024 // 10MB
    const allowedTypes = [
      'image/',
      'video/',
      'audio/',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ]

    if (file.size > maxSize) {
      return {
        valid: false,
        error: `File ${file.name} is too large. Maximum size is 10MB.`
      }
    }

    const isAllowedType = allowedTypes.some(type => file.type.startsWith(type))
    if (!isAllowedType) {
      return {
        valid: false,
        error: `File ${file.name} has an unsupported format.`
      }
    }

    return { valid: true }
  }

  validateFiles(files: File[]): { valid: boolean; errors: string[] } {
    const errors: string[] = []
    
    files.forEach(file => {
      const validation = this.validateFile(file)
      if (!validation.valid && validation.error) {
        errors.push(validation.error)
      }
    })

    return {
      valid: errors.length === 0,
      errors
    }
  }
}

// Export singleton instance
export const firebaseStorageService = FirebaseStorageService.getInstance()

export default firebaseStorageService 