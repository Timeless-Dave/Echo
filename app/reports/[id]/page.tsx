"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"
import {
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Share2,
  Flag,
  Clock,
  Users,
  DollarSign,
  AlertTriangle,
  Heart,
  FileText,
  Download,
  Copy,
  BookmarkPlus,
  ArrowUp,
  ArrowDown,
  Eye,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle,
  Star,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  Shield
} from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"

// Enhanced mock data for individual report
const getReportById = (id: string) => {
  const reports = {
    "1": {
      id: "1",
      title: "Systematic Harassment in University of Lagos Female Hostels: A Pattern of Silence",
      category: "harassment",
      aiScore: 95,
      upvotes: 247,
      downvotes: 12,
      views: 1543,
      shares: 89,
      timeAgo: "3 hours ago",
      publishedDate: "December 15, 2025",
      readTime: "5 min read",
      location: "University of Lagos",
      author: "Anonymous Student",
      excerpt: "Multiple female students report coordinated harassment from male hostel staff, with university administration allegedly ignoring formal complaints filed over the past six months.",
      fullContent: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Pattern Emerges</h2>
          <p class="text-lg leading-relaxed">Over the past six months, more than 15 female students at the University of Lagos have filed formal complaints regarding systematic harassment from male hostel staff in Moremi Hall and Amina Hall. Despite documented evidence and witness statements, university administration has reportedly taken no meaningful action.</p>
          
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Documented Incidents</h2>
          <p class="mb-4">The incidents include:</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Unauthorized entry into female rooms during late hours</li>
            <li>Inappropriate comments and advances during routine inspections</li>
            <li>Requests for "favors" in exchange for maintenance services</li>
            <li>Intimidation of students who attempt to report incidents</li>
          </ul>
          
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Administrative Response</h2>
          <p class="mb-4">Students report that their formal complaints have been met with:</p>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Delays in investigation procedures</li>
            <li>Requests to "handle matters quietly"</li>
            <li>Subtle threats about academic consequences</li>
            <li>Transfer of reporting students to different hostels</li>
          </ul>
          
          <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-6">
            <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Evidence Collected</h3>
            <p class="text-yellow-700 dark:text-yellow-300">Documentation includes text messages, recorded conversations, and signed witness statements from multiple students across different academic levels and departments.</p>
          </div>
          
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Call for Action</h2>
          <p class="text-lg">Students are calling for immediate administrative action, independent investigation, and implementation of proper safety protocols in all university hostels.</p>
          
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
            <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">How You Can Help</h3>
            <p class="text-blue-700 dark:text-blue-300">If you have experienced similar incidents or have additional information, please report anonymously through Echo's secure platform. Your voice matters in creating change.</p>
          </div>
        </div>
      `,
      isVerified: true,
      isPremium: true,
      tags: ["harassment", "hostel", "UNILAG", "safety"],
      relatedIncidents: 12,
      evidenceFiles: 8,
      witnessCount: 15
    }
  }
  
  return reports[id as keyof typeof reports] || null
}

const ShareModal = ({ report, onClose }: { report: any, onClose: () => void }) => {
  const [copied, setCopied] = useState(false)
  
  const reportUrl = `${window.location.origin}/reports/${report.id}`
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(reportUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const shareToSocial = (platform: string) => {
    const text = `${report.title} - Important campus safety report from Echo`
    const url = reportUrl
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    }
    
    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400')
    }
  }
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">Share This Report</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Help raise awareness about this important campus issue
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Share to social platforms</h4>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="justify-start"
                onClick={() => shareToSocial('twitter')}
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button 
                variant="outline" 
                className="justify-start"
                onClick={() => shareToSocial('facebook')}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button 
                variant="outline" 
                className="justify-start"
                onClick={() => shareToSocial('linkedin')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="justify-start"
                onClick={() => shareToSocial('whatsapp')}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Copy link</h4>
            <div className="flex gap-2">
              <Input 
                value={reportUrl} 
                readOnly 
                className="bg-gray-50 dark:bg-gray-800"
              />
              <Button onClick={handleCopyLink} variant="outline">
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ReportDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const { toast } = useToast()
  
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [comment, setComment] = useState("")
  
  const report = getReportById(params.id as string)
  
  if (!report) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Report Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The report you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/reports">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Reports
            </Link>
          </Button>
        </div>
      </div>
    )
  }
  
  const handleVote = (type: 'up' | 'down') => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to vote on reports.",
        variant: "destructive"
      })
      return
    }
    setUserVote(userVote === type ? null : type)
  }
  
  const handleBookmark = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to bookmark reports.",
        variant: "destructive"
      })
      return
    }
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "Bookmark Removed" : "Report Bookmarked",
      description: isBookmarked ? "Report removed from your bookmarks" : "Report saved to your bookmarks"
    })
  }
  
  const downloadReport = () => {
    const element = document.createElement('a')
    const content = `
      ${report.title}
      
      Location: ${report.location}
      Category: ${report.category}
      Published: ${report.publishedDate}
      AI Verification Score: ${report.aiScore}%
      
      ${report.excerpt}
      
      [Full content would be included here in production]
      
      Generated from Echo Platform - Student Voice Protection System
      Report ID: ${report.id}
    `
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `echo-report-${report.id}-${report.title.substring(0, 30).replace(/[^a-zA-Z0-9]/g, '-')}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'harassment': return <Heart className="w-5 h-5" />
      case 'fraud': return <DollarSign className="w-5 h-5" />
      case 'safety': return <Shield className="w-5 h-5" />
      default: return <AlertTriangle className="w-5 h-5" />
    }
  }
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'harassment': return 'bg-echo-alert/10 text-echo-alert border-echo-alert/20'
      case 'fraud': return 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800'
      case 'safety': return 'bg-echo-validation/10 text-echo-validation border-echo-validation/20'
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <Link href="/reports">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Reports
            </Link>
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Article Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="outline" className={getCategoryColor(report.category)}>
                  {getCategoryIcon(report.category)}
                  <span className="ml-2 capitalize">{report.category}</span>
                </Badge>
                {report.isVerified && (
                  <Badge variant="outline" className="bg-echo-trust/10 text-echo-trust border-echo-trust/20">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified
                  </Badge>
                )}
                {report.isPremium && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Premium Report
                  </Badge>
                )}
                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  AI Score: {report.aiScore}%
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                {report.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{report.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{report.publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{report.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{report.views.toLocaleString()} views</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-echo-trust pl-6">
                {report.excerpt}
              </p>
            </div>
            
            {/* Report Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-echo-alert/5 border-echo-alert/20">
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 text-echo-alert mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{report.relatedIncidents}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Related Incidents</p>
                </CardContent>
              </Card>
              <Card className="bg-echo-trust/5 border-echo-trust/20">
                <CardContent className="p-4 text-center">
                  <FileText className="w-6 h-6 text-echo-trust mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{report.evidenceFiles}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Evidence Files</p>
                </CardContent>
              </Card>
              <Card className="bg-echo-validation/5 border-echo-validation/20">
                <CardContent className="p-4 text-center">
                  <Shield className="w-6 h-6 text-echo-validation mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{report.witnessCount}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Witness Accounts</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Article Content */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-8">
                <div 
                  className="prose dark:prose-invert max-w-none text-gray-900 dark:text-gray-100"
                  dangerouslySetInnerHTML={{ __html: report.fullContent }}
                />
              </CardContent>
            </Card>
            
            {/* Tags */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {report.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Action Buttons */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 sticky top-4">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Actions</h3>
                
                {/* Voting */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Community Vote</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleVote('up')}
                      className={`flex-1 ${userVote === 'up' ? 'bg-echo-trust text-white border-echo-trust' : ''}`}
                    >
                      <ArrowUp className="w-4 h-4 mr-1" />
                      {report.upvotes + (userVote === 'up' ? 1 : 0)}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleVote('down')}
                      className={`flex-1 ${userVote === 'down' ? 'bg-echo-alert text-white border-echo-alert' : ''}`}
                    >
                      <ArrowDown className="w-4 h-4 mr-1" />
                      {report.downvotes + (userVote === 'down' ? 1 : 0)}
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                {/* Share & Save */}
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowShareModal(true)}
                    className="w-full justify-start"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share ({report.shares})
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleBookmark}
                    className={`w-full justify-start ${isBookmarked ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400' : ''}`}
                  >
                    <BookmarkPlus className="w-4 h-4 mr-2" />
                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadReport}
                    className="w-full justify-start"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </div>
                
                <Separator />
                
                {/* Report Issues */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-echo-alert border-echo-alert/20 hover:bg-echo-alert/10"
                >
                  <Flag className="w-4 h-4 mr-2" />
                  Report Issue
                </Button>
              </CardContent>
            </Card>
            
            {/* Report Info */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Report Information</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Author:</span>
                    <span className="text-gray-900 dark:text-white">{report.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Published:</span>
                    <span className="text-gray-900 dark:text-white">{report.timeAgo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="text-gray-900 dark:text-white capitalize">{report.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">AI Verification:</span>
                    <span className="text-gray-900 dark:text-white">{report.aiScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                    <Badge variant="outline" className="bg-echo-trust/10 text-echo-trust border-echo-trust/20">
                      {report.isVerified ? 'Verified' : 'Under Review'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Related Reports */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Related Reports</h3>
                <div className="space-y-3">
                  <Link href="/reports/2" className="block p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Academic Fraud Investigation</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Similar incidents reported at FUTA</p>
                  </Link>
                  <Link href="/reports/3" className="block p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">Hostel Safety Concerns</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Cross-university pattern analysis</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {showShareModal && (
        <ShareModal report={report} onClose={() => setShowShareModal(false)} />
      )}
    </div>
  )
}
