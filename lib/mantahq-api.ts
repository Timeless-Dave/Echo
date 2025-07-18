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

interface ReportUpdateData {
  content: string
  email: string
}

interface MantaHQResponse {
  success: boolean
  message: string
  data?: any
  reportId?: string
  statusCode?: number
}

interface ReportData {
  id?: string
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
  aiScore?: number
  votes?: {
    upvotes: number
    downvotes: number
  }
}

interface FetchReportsResponse {
  success: boolean
  data: ReportData[]
  message?: string
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

  async fetchReports(): Promise<FetchReportsResponse> {
    try {
      const response = await this.apiClient.get('/news-report')
      
      return {
        success: true,
        data: response.data?.data || response.data || [],
        message: 'Reports fetched successfully'
      }
    } catch (error: any) {
      console.error('Failed to fetch reports:', error)
      
      return {
        success: false,
        data: [],
        message: error.response?.data?.message || error.message || 'Failed to fetch reports'
      }
    }
  }

  async updatePost(data: ReportUpdateData): Promise<MantaHQResponse> {
    try {
      const response = await this.apiClient.patch('/update-post', data)
      
      return {
        success: true,
        message: response.data?.message || 'Post updated successfully',
        data: response.data,
        statusCode: response.status
      }
    } catch (error: any) {
      const statusCode = error.response?.status || 500
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error || 
                          error.message || 
                          'Failed to update post'
      
      return {
        success: false,
        message: errorMessage,
        data: error.response?.data,
        statusCode
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

  // Helper method to get category info for display
  getCategoryInfo(category: string) {
    const categories = {
      harassment: {
        label: 'Harassment & Discrimination',
        color: 'bg-red-100 text-red-700 border-red-200',
        icon: '❤️'
      },
      fraud: {
        label: 'Academic Fraud & Corruption',
        color: 'bg-orange-100 text-orange-700 border-orange-200',
        icon: '💰'
      },
      safety: {
        label: 'Safety & Security Concerns',
        color: 'bg-blue-100 text-blue-700 border-blue-200',
        icon: '🛡️'
      },
      exploitation: {
        label: 'Financial Exploitation',
        color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        icon: '⚠️'
      },
      misconduct: {
        label: 'Staff/Faculty Misconduct',
        color: 'bg-purple-100 text-purple-700 border-purple-200',
        icon: '👥'
      },
      facilities: {
        label: 'Infrastructure & Facilities',
        color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
        icon: '🏗️'
      },
      debunk: {
        label: 'Fact-Check & Debunking',
        color: 'bg-green-100 text-green-700 border-green-200',
        icon: '🔍'
      },
      anonymous_tip: {
        label: 'Anonymous Tip/Information',
        color: 'bg-teal-100 text-teal-700 border-teal-200',
        icon: 'ℹ️'
      },
      custom: {
        label: 'Custom Category',
        color: 'bg-gray-100 text-gray-700 border-gray-200',
        icon: '🎯'
      }
    }

    return categories[category as keyof typeof categories] || categories.custom
  }
}

// Export singleton instance
export const mantaHQAPI = MantaHQAPI.getInstance()

// Export default
export default mantaHQAPI 