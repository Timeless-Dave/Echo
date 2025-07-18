import axios, { AxiosInstance } from 'axios'

const MANTAHQ_API_BASE = process.env.NEXT_PUBLIC_MANTAHQ_API_URL || 'https://api.mantahq.com/api/workflow/aodferanmi2004/echo'

interface ReportSubmissionData {
  email: string
  title: string
  category: string
  reportText: string
  isAnonymous: boolean
  evidence?: string[]
  timestamp: string
  location?: string
  severity?: string
  witnessCount?: string
  tags?: string[]
  incidentDate?: string
  timeOfIncident?: string
  additionalContext?: string
  contactEmail?: string
  contactPhone?: string
  customCategory?: string
  aiScore?: number
}

interface MantaHQResponse {
  success: boolean
  message: string
  data?: any
  reportId?: string
}

export class MantaHQAPI {
  private static instance: MantaHQAPI
  private apiClient: AxiosInstance

  constructor() {
    this.apiClient = axios.create({
      baseURL: MANTAHQ_API_BASE,
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 second timeout
    })

    // Add response interceptor for error handling
    this.apiClient.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('MantaHQ API Error:', error.response?.data || error.message)
        return Promise.reject(error)
      }
    )
  }

  public static getInstance(): MantaHQAPI {
    if (!MantaHQAPI.instance) {
      MantaHQAPI.instance = new MantaHQAPI()
    }
    return MantaHQAPI.instance
  }

  async submitReport(data: ReportSubmissionData): Promise<MantaHQResponse> {
    try {
      const response = await this.apiClient.post('/report-table1', data)
      
      return {
        success: true,
        message: 'Report submitted successfully',
        data: response.data,
        reportId: response.data?.id || response.data?.reportId
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          error.message || 
                          'Failed to submit report'
      
      return {
        success: false,
        message: errorMessage,
        data: error.response?.data
      }
    }
  }

  validateEmailDomain(email: string): boolean {
    const eduDomains = [
      '.edu.ng',
      '.edu',
      'unilag.edu.ng',
      'ui.edu.ng',
      'abu.edu.ng',
      'unn.edu.ng',
      'oauife.edu.ng'
    ]
    
    return eduDomains.some(domain => email.toLowerCase().endsWith(domain))
  }

  formatReportData(formData: any, userEmail: string): ReportSubmissionData {
    return {
      email: userEmail,
      title: formData.title,
      category: formData.category === 'custom' ? formData.customCategory : formData.category,
      reportText: formData.description,
      isAnonymous: formData.isAnonymous,
      evidence: [], // Will be populated externally with uploaded file URLs
      timestamp: new Date().toISOString(),
      location: formData.location === 'Other Nigerian University' ? formData.customLocation : formData.location,
      severity: formData.severity,
      witnessCount: formData.witnessCount,
      tags: formData.tags.length > 0 ? formData.tags : undefined,
      incidentDate: formData.incidentDate ? formData.incidentDate.toISOString() : undefined,
      timeOfIncident: formData.timeOfIncident || undefined,
      additionalContext: formData.evidence || undefined,
      contactEmail: formData.isAnonymous ? undefined : formData.contactEmail,
      contactPhone: formData.isAnonymous ? undefined : formData.contactPhone,
      customCategory: formData.category === 'custom' ? formData.customCategory : undefined,
      aiScore: undefined // Will be set by the calling component
    }
  }
}

// Export singleton instance
export const mantaHQAPI = MantaHQAPI.getInstance()

// Export default
export default mantaHQAPI 