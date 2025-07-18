"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ThumbsUp,
  ThumbsDown,
  Search,
  AlertTriangle,
  Users,
  DollarSign,
  Heart,
  TrendingUp,
  Clock,
  MessageCircle,
  Share2,
  Download,
  Eye,
  BookOpen,
  Filter,
  ArrowUp,
  ArrowDown,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  FileText,
  Calendar,
  MapPin,
  Shield,
  Star,
  CheckCircle,
  Flame,
  Image as ImageIcon,
  Edit3
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { mantaHQAPI } from "@/lib/mantahq-api"
import { EditReportModal } from "@/components/ui/edit-report-modal"

// Fallback mock data for when API is unavailable
const fallbackReports = [
  {
    id: "1",
    title: "Systematic Harassment in University of Lagos Female Hostels: A Pattern of Silence",
    category: "harassment",
    aiScore: 95,
    upvotes: 247,
    downvotes: 12,
    views: 1543,
    shares: 89,
    timeAgo: "3 hours ago",
    readTime: "5 min read",
    location: "University of Lagos",
    excerpt: "Multiple female students report coordinated harassment from male hostel staff, with university administration allegedly ignoring formal complaints filed over the past six months.",
    imagePrompt: "University dormitory building exterior with security concerns, dark atmosphere representing safety issues",
    fullContent: `
      <h2>The Pattern Emerges</h2>
      <p>Over the past six months, more than 15 female students at the University of Lagos have filed formal complaints regarding systematic harassment from male hostel staff in Moremi Hall and Amina Hall. Despite documented evidence and witness statements, university administration has reportedly taken no meaningful action.</p>
      
      <h2>Documented Incidents</h2>
      <p>The incidents include:</p>
      <ul>
        <li>Unauthorized entry into female rooms during late hours</li>
        <li>Inappropriate comments and advances during routine inspections</li>
        <li>Requests for "favors" in exchange for maintenance services</li>
        <li>Intimidation of students who attempt to report incidents</li>
      </ul>
      
      <h2>Administrative Response</h2>
      <p>Students report that their formal complaints have been met with:</p>
      <ul>
        <li>Delays in investigation procedures</li>
        <li>Requests to "handle matters quietly"</li>
        <li>Subtle threats about academic consequences</li>
        <li>Transfer of reporting students to different hostels</li>
      </ul>
      
      <h2>Evidence Collected</h2>
      <p>Documentation includes text messages, recorded conversations, and signed witness statements from multiple students across different academic levels and departments.</p>
      
      <h2>Call for Action</h2>
      <p>Students are calling for immediate administrative action, independent investigation, and implementation of proper safety protocols in all university hostels.</p>
    `,
    isVerified: true,
    isPremium: true,
    tags: ["harassment", "hostel", "UNILAG", "safety"]
  },
  {
    id: "2",
    title: "₦50 Million Admission Fraud Exposed at Federal University of Technology Akure",
    category: "fraud",
    aiScore: 92,
    upvotes: 189,
    downvotes: 8,
    views: 2156,
    shares: 134,
    timeAgo: "1 day ago",
    readTime: "7 min read",
    location: "FUTA, Akure",
    excerpt: "Investigation reveals sophisticated admission fraud scheme involving university officials, with over 200 unqualified students gaining admission through fake JAMB scores and manipulated transcripts.",
    imagePrompt: "University admission office with documents and files, representing academic fraud investigation",
    fullContent: `
      <h2>The Discovery</h2>
      <p>A sophisticated admission fraud scheme at the Federal University of Technology Akure (FUTA) has been uncovered, involving the manipulation of JAMB scores and academic transcripts to secure admission for unqualified candidates in exchange for substantial payments.</p>
      
      <h2>Scale of the Operation</h2>
                        <p>Initial investigations suggest that over 200 students gained admission through fraudulent means between 2022 and 2025, with individual payments ranging from ₦150,000 to ₦500,000 depending on the competitiveness of the program.</p>
      
      <h2>How the Scheme Worked</h2>
      <p>The fraud involved several key components:</p>
      <ul>
        <li>Manipulation of JAMB scores in the university's admission portal</li>
        <li>Creation of fake O-Level certificates and transcripts</li>
        <li>Bribing of admission committee members</li>
        <li>Use of fake credentials from non-existent secondary schools</li>
      </ul>
      
      <h2>Financial Impact</h2>
      <p>Conservative estimates suggest that over ₦50 million has changed hands in this scheme, with additional costs to legitimate students who were denied admission despite meeting requirements.</p>
      
      <h2>University Response</h2>
      <p>FUTA administration has yet to respond to these allegations, despite documented evidence being submitted to relevant authorities including JAMB and the Ministry of Education.</p>
      
      <h2>Ongoing Investigation</h2>
      <p>A formal petition has been submitted to the EFCC, and several whistleblowers have provided detailed testimonies and documentation of the fraud.</p>
    `,
    isVerified: true,
    isPremium: false,
    tags: ["fraud", "admission", "FUTA", "corruption"]
  },
  {
    id: "3",
    title: "Lecturers Demanding Sexual Favors for Grades: The Silent Crisis in Nigerian Universities",
    category: "harassment",
    aiScore: 88,
    upvotes: 312,
    downvotes: 25,
    views: 3247,
    shares: 198,
    timeAgo: "2 days ago", 
    readTime: "6 min read",
    location: "Multiple Universities",
    excerpt: "Cross-university investigation reveals widespread pattern of lecturers exploiting power dynamics to coerce students into sexual relationships in exchange for academic favors.",
    imagePrompt: "University lecture hall or classroom setting with focus on power dynamics and academic environment",
    fullContent: `
      <h2>The Hidden Epidemic</h2>
      <p>A comprehensive investigation across seven Nigerian universities has uncovered a disturbing pattern of lecturers exploiting their positions to coerce students into sexual relationships in exchange for improved grades, project approvals, and academic recommendations.</p>
      
      <h2>Universities Affected</h2>
      <p>The investigation spans multiple institutions including:</p>
      <ul>
        <li>University of Ibadan</li>
        <li>Ahmadu Bello University</li>
        <li>University of Nigeria, Nsukka</li>
        <li>Lagos State University</li>
        <li>Obafemi Awolowo University</li>
      </ul>
      
      <h2>Pattern of Abuse</h2>
      <p>Common tactics identified include:</p>
      <ul>
        <li>Threatening academic failure for non-compliance</li>
        <li>Offering special privileges for cooperation</li>
        <li>Isolating vulnerable students in private meetings</li>
        <li>Using research supervision as leverage</li>
      </ul>
      
      <h2>Student Testimonies</h2>
      <p>Over 50 students have provided testimonies, with many reporting that they felt they had no choice but to comply or risk their academic futures.</p>
      
      <h2>Systemic Issues</h2>
      <p>The investigation reveals systemic problems including:</p>
      <ul>
        <li>Lack of effective reporting mechanisms</li>
        <li>Fear of retaliation among students</li>
        <li>Inadequate oversight of lecturer-student interactions</li>
        <li>Administrative reluctance to address complaints</li>
      </ul>
      
      <h2>Call for Reform</h2>
      <p>Students and activists are calling for comprehensive policy reforms, anonymous reporting systems, and strict enforcement of existing regulations.</p>
    `,
    isVerified: true,
    isPremium: true,
    tags: ["harassment", "lecturers", "sexual-exploitation", "grades"]
  },
  {
    id: "4",
    title: "Cultism and Violence: Inside the Secret Societies Terrorizing University Campuses",
    category: "safety",
    aiScore: 91,
    upvotes: 156,
    downvotes: 34,
    views: 1876,
    shares: 67,
    timeAgo: "3 days ago",
    readTime: "8 min read", 
    location: "Various Universities",
    excerpt: "Detailed investigation into the rise of cult activities on university campuses, including recruitment tactics, initiation rituals, and the impact on student safety and academic environment.",
    imagePrompt: "Dark university campus at night showing security concerns and safety issues",
    fullContent: `
      <h2>The Growing Threat</h2>
      <p>Cult activities on Nigerian university campuses have escalated dramatically over the past five years, with secret societies becoming increasingly bold in their recruitment and operational activities.</p>
      
      <h2>Recruitment Tactics</h2>
      <p>Investigation reveals sophisticated recruitment strategies:</p>
      <ul>
        <li>Targeting vulnerable freshmen during orientation</li>
        <li>Offering protection from academic and social challenges</li>
        <li>Using existing members to recruit friends and roommates</li>
        <li>Leveraging financial difficulties of students</li>
      </ul>
      
      <h2>Campus Violence</h2>
      <p>Recent incidents documented include:</p>
      <ul>
        <li>Intimidation of students who refuse recruitment</li>
        <li>Violence between rival cult groups</li>
        <li>Disruption of academic activities</li>
        <li>Harassment of female students</li>
      </ul>
      
      <h2>Impact on Education</h2>
      <p>The presence of cults on campus has created:</p>
      <ul>
        <li>Climate of fear among students</li>
        <li>Disrupted learning environments</li>
        <li>Compromised academic integrity</li>
        <li>Increased dropout rates</li>
      </ul>
      
      <h2>Administrative Response</h2>
      <p>Universities have implemented various measures with limited success:</p>
      <ul>
        <li>Increased security presence</li>
        <li>Anonymous reporting systems</li>
        <li>Collaboration with law enforcement</li>
        <li>Student awareness programs</li>
      </ul>
      
      <h2>Recommendations</h2>
      <p>Security experts recommend:</p>
      <ul>
        <li>Enhanced screening during admissions</li>
        <li>Regular security training for staff</li>
        <li>Better coordination between universities</li>
        <li>Community engagement programs</li>
      </ul>
    `,
    isVerified: true,
    isPremium: false,
    tags: ["cultism", "violence", "safety", "campus-security"]
  },
  {
    id: "5",
    title: "The Hostel Extortion Racket: How Students Are Being Forced to Pay Illegal Fees",
    category: "fraud",
    aiScore: 86,
    upvotes: 98,
    downvotes: 7,
    views: 1234,
    shares: 43,
    timeAgo: "1 week ago",
    readTime: "4 min read",
    location: "University of Benin",
    excerpt: "Students report systematic extortion by hostel management demanding illegal fees for basic services, with threats of eviction for those who refuse to pay.",
    imagePrompt: "University hostel building with focus on financial exploitation and illegal fee collection",
    fullContent: `
      <h2>The Illegal Fee Structure</h2>
      <p>Students at the University of Benin are reporting a systematic extortion scheme where hostel management demands additional payments beyond official fees for basic services that should be included in accommodation costs.</p>
      
      <h2>Types of Illegal Charges</h2>
      <p>Students report being charged for:</p>
      <ul>
        <li>Water supply restoration (₦5,000 per semester)</li>
        <li>Electricity connections (₦3,000 initial, ₦1,500 monthly)</li>
        <li>Room cleaning services (₦2,000 monthly)</li>
        <li>Security deposits beyond official requirements (₦10,000)</li>
        <li>Wi-Fi access (₦4,000 per semester)</li>
      </ul>
      
      <h2>Enforcement Tactics</h2>
      <p>Management uses various pressure tactics:</p>
      <ul>
        <li>Threats of eviction for non-payment</li>
        <li>Disconnection of basic utilities</li>
        <li>Denial of maintenance services</li>
        <li>Harassment during late-night "inspections"</li>
      </ul>
      
      <h2>Financial Impact</h2>
      <p>Many students report paying an additional ₦25,000-₦40,000 per academic year in illegal fees, representing a significant burden on already stretched family budgets.</p>
      
      <h2>Official Response</h2>
      <p>While the university administration claims ignorance of these practices, students report that complaints to housing offices have been ignored or resulted in subtle retaliation.</p>
      
      <h2>Student Resistance</h2>
      <p>Some students have begun organizing collective action, documenting illegal fee demands and seeking legal advice on their rights as hostel residents.</p>
    `,
    isVerified: false,
    isPremium: false,
    tags: ["extortion", "hostel", "illegal-fees", "UNIBEN"]
  }
]

const ShareModal = ({ report, onClose }: { report: any, onClose: () => void }) => {
  const [copied, setCopied] = useState(false)
  
  const reportUrl = `${window.location.origin}/reports/${report.id}`
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(reportUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  const shareToSocial = (platform: string) => {
    const text = `${report.title} - ${report.excerpt.substring(0, 100)}...`
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
          <DialogTitle className="text-gray-900 dark:text-white">Share Report</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Share this report to raise awareness about campus issues
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
                <MessageCircle className="w-4 h-4 mr-2" />
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

const ReportCard = ({ report, onClick, onEdit, canEdit }: { 
  report: any, 
  onClick: () => void,
  onEdit?: () => void,
  canEdit?: boolean 
}) => {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null)
  const [showShareModal, setShowShareModal] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState(true)
  
  // Simulate API call for image generation (replace with actual API call later)
  const fetchOGImage = async (prompt: string) => {
    setImageLoading(true)
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/generate-image', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ prompt, reportId: report.id })
      // })
      // const data = await response.json()
      // setImageUrl(data.imageUrl)
      
      // For now, simulate loading and use placeholder
      setTimeout(() => {
        setImageLoading(false)
        // Placeholder image service with consistent dimensions
        setImageUrl(`https://picsum.photos/400/300?random=${report.id}`)
      }, 1000)
    } catch (error) {
      console.error('Failed to fetch image:', error)
      setImageLoading(false)
    }
  }
  
  // Fetch image on component mount
  useState(() => {
    if (report.imagePrompt) {
      fetchOGImage(report.imagePrompt)
    }
  })
  
  const handleVote = (type: 'up' | 'down') => {
    setUserVote(userVote === type ? null : type)
  }
  
  const downloadReport = () => {
    const element = document.createElement('a')
    const content = `
      ${report.title}
      
      Location: ${report.location}
      Category: ${report.category}
      Published: ${report.timeAgo}
      
      ${report.excerpt}
      
      Generated from Echo Platform - Student Voice Protection System
    `
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `echo-report-${report.id}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'harassment': return <Heart className="w-4 h-4" />
      case 'fraud': return <DollarSign className="w-4 h-4" />
      case 'safety': return <Shield className="w-4 h-4" />
      default: return <AlertTriangle className="w-4 h-4" />
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
    <>
      <Card className="bg-gradient-to-r from-echo-trust/5 to-blue-50/50 dark:from-echo-trust/10 dark:to-blue-900/10 border-echo-trust/20 hover:shadow-lg transition-all duration-300 overflow-hidden">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="outline" className={getCategoryColor(report.category)}>
                  {getCategoryIcon(report.category)}
                  <span className="ml-1 capitalize">{report.category}</span>
                </Badge>
                {report.isVerified && (
                  <Badge variant="outline" className="bg-echo-trust/10 text-echo-trust border-echo-trust/20">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
                {report.isPremium && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                )}
                <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                  AI Score: {report.aiScore}%
                </Badge>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight cursor-pointer hover:text-echo-trust transition-colors" onClick={onClick}>
                {report.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {report.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{report.location}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{report.readTime}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{report.views.toLocaleString()} views</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <Button 
                  onClick={onClick}
                  className="bg-echo-trust hover:bg-blue-700 text-white"
                >
                  Read Full Report
                </Button>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVote('up')}
                      className={`gap-1 ${userVote === 'up' ? 'text-echo-trust bg-echo-trust/10' : 'text-gray-600 dark:text-gray-400'}`}
                    >
                      <ArrowUp className="w-4 h-4" />
                      {report.upvotes + (userVote === 'up' ? 1 : 0)}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVote('down')}
                      className={`gap-1 ${userVote === 'down' ? 'text-echo-alert bg-echo-alert/10' : 'text-gray-600 dark:text-gray-400'}`}
                    >
                      <ArrowDown className="w-4 h-4" />
                      {report.downvotes + (userVote === 'down' ? 1 : 0)}
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowShareModal(true)}
                    className="gap-1 text-gray-600 dark:text-gray-400 hover:text-echo-trust"
                  >
                    <Share2 className="w-4 h-4" />
                    {report.shares}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={downloadReport}
                    className="gap-1 text-gray-600 dark:text-gray-400 hover:text-echo-validation"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  
                  {canEdit && onEdit && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onEdit}
                      className="gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500"
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-2">
                {report.tags.slice(0, 4).map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* OG Image */}
            <div className="hidden md:block">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                {imageLoading ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-echo-trust"></div>
                    <p className="text-xs text-gray-500">Generating image...</p>
                  </div>
                ) : imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={`Visual representation of ${report.title}`}
                    className="w-full h-full object-cover"
                    onError={() => setImageUrl(null)}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <ImageIcon className="w-12 h-12" />
                    <p className="text-xs text-center px-4">Visual content will be generated for this report</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {showShareModal && (
        <ShareModal report={report} onClose={() => setShowShareModal(false)} />
      )}
    </>
  )
}

const ReportModal = ({ report, onClose }: { report: any, onClose: () => void }) => {
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null)
  
  const handleVote = (type: 'up' | 'down') => {
    setUserVote(userVote === type ? null : type)
  }
  
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className={`
              ${report.category === 'harassment' ? 'bg-echo-alert/10 text-echo-alert border-echo-alert/20' : ''}
              ${report.category === 'fraud' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800' : ''}
              ${report.category === 'safety' ? 'bg-echo-validation/10 text-echo-validation border-echo-validation/20' : ''}
            `}>
              <span className="capitalize">{report.category}</span>
            </Badge>
            {report.isVerified && (
              <Badge variant="outline" className="bg-echo-trust/10 text-echo-trust border-echo-trust/20">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
            {report.isPremium && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <Star className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            )}
          </div>
          
          <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            {report.title}
          </DialogTitle>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {report.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {report.timeAgo}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {report.readTime}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {report.views.toLocaleString()} views
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div 
            className="prose dark:prose-invert max-w-none text-gray-900 dark:text-gray-100"
            dangerouslySetInnerHTML={{ __html: report.fullContent }}
          />
          
          <Separator />
          
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  onClick={() => handleVote('up')}
                  className={`gap-1 ${userVote === 'up' ? 'text-echo-trust bg-echo-trust/10' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <ArrowUp className="w-4 h-4" />
                  {report.upvotes + (userVote === 'up' ? 1 : 0)}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleVote('down')}
                  className={`gap-1 ${userVote === 'down' ? 'text-echo-alert bg-echo-alert/10' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <ArrowDown className="w-4 h-4" />
                  {report.downvotes + (userVote === 'down' ? 1 : 0)}
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {report.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [reports, setReports] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingReport, setEditingReport] = useState<any>(null)
  const { user } = useAuth()

  // Fetch reports from MantaHQ API
  useEffect(() => {
    async function fetchReports() {
      setIsLoading(true)
      setError(null)
      
      try {
        const response = await mantaHQAPI.fetchReports()
        
        if (response.success) {
          // Transform API data to match our component format
          const transformedReports = response.data.map((report: any, index: number) => ({
            id: report.id || `api-${index}`,
            title: report.title || 'Untitled Report',
            category: report.category || 'custom',
            aiScore: report.aiScore || 70,
            upvotes: report.votes?.upvotes || Math.floor(Math.random() * 100),
            downvotes: report.votes?.downvotes || Math.floor(Math.random() * 20),
            views: Math.floor(Math.random() * 2000) + 100,
            shares: Math.floor(Math.random() * 50) + 10,
            timeAgo: report.timestamp ? new Date(report.timestamp).toLocaleDateString() : 'Recently',
            readTime: `${Math.floor(Math.random() * 8) + 3} min read`,
            location: report.location || 'Nigerian University',
            excerpt: report.reportText ? report.reportText.substring(0, 200) + '...' : 'No description available',
            reportText: report.reportText || 'Full content not available', // Add this for editing
            fullContent: `<div class="space-y-4">
              <p>${report.reportText || 'Full content not available'}</p>
              ${report.additionalContext ? `<div class="mt-4"><h3 class="font-semibold">Additional Context:</h3><p>${report.additionalContext}</p></div>` : ''}
              ${report.evidence && report.evidence.length > 0 ? `<div class="mt-4"><h3 class="font-semibold">Evidence:</h3><ul>${report.evidence.map((e: string) => `<li><a href="${e}" target="_blank" class="text-blue-600">${e}</a></li>`).join('')}</ul></div>` : ''}
            </div>`,
            isVerified: report.isAnonymous === false,
            isPremium: (report.aiScore || 0) > 85,
            tags: report.tags || [report.category || 'general'],
            isAnonymous: report.isAnonymous !== false,
            severity: report.severity || 'medium',
            witnessCount: report.witnessCount || 'unknown',
            incidentDate: report.incidentDate ? new Date(report.incidentDate).toLocaleDateString() : null,
            timeOfIncident: report.timeOfIncident || null,
            userEmail: report.email // Store the original email for edit permission checking
          }))
          
          setReports(transformedReports)
        } else {
          console.warn('Failed to fetch reports:', response.message)
          setReports(fallbackReports)
        }
      } catch (error) {
        console.error('Error fetching reports:', error)
        setError('Failed to load reports. Showing sample data.')
        setReports(fallbackReports)
      } finally {
        setIsLoading(false)
      }
    }

    fetchReports()
  }, [])

  const handleReportUpdate = (reportId: string, updatedContent: string) => {
    setReports(prevReports => 
      prevReports.map(report => 
        report.id === reportId 
          ? { 
              ...report, 
              reportText: updatedContent,
              excerpt: updatedContent.substring(0, 200) + '...',
              fullContent: `<div class="space-y-4"><p>${updatedContent}</p></div>`
            }
          : report
      )
    )
  }

  const canEditReport = (report: any) => {
    // User can edit if they're the author (email matches) or if it's a fallback report and they're logged in
    return user && (
      user.email === report.userEmail || 
      (!report.userEmail && report.id?.startsWith('fallback-'))
    )
  }

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || report.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedReports = [...filteredReports].sort((a, b) => {
    switch (sortBy) {
      case "votes":
        return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
      case "aiScore":
        return b.aiScore - a.aiScore
      case "views":
        return b.views - a.views
      case "trending":
        return b.shares - a.shares
      default:
        return 0 // Keep original order for "recent"
    }
  })

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Campus <span className="text-echo-trust">Chronicles</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories from Nigerian university students. Anonymous reporting for safer campuses.
          </p>
        </div>

            {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                placeholder="Search reports, tags, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="harassment">Harassment</SelectItem>
                  <SelectItem value="fraud">Fraud</SelectItem>
                  <SelectItem value="safety">Safety</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="votes">Most Voted</SelectItem>
                <SelectItem value="views">Most Viewed</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="aiScore">AI Score</SelectItem>
                </SelectContent>
              </Select>
            </div>

          {user && (
            <Button asChild className="bg-echo-alert hover:bg-red-700">
              <Link href="/submit">
                <FileText className="w-4 h-4 mr-2" />
                Submit Report
                                </Link>
                                </Button>
          )}
                              </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-echo-trust mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Loading reports...</h3>
            <p className="text-gray-600 dark:text-gray-400">Fetching the latest campus reports from our database</p>
                              </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">Notice</span>
            </div>
            <p className="text-yellow-700 dark:text-yellow-300 mt-2">{error}</p>
          </div>
        )}

        {/* Results Count */}
        {!isLoading && (
          <div className="flex items-center justify-between">
            <div className="text-gray-600 dark:text-gray-400">
              Showing {sortedReports.length} reports {reports.length > 0 && `(${reports.length} total)`}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {reports.length > 0 && reports.some(r => r.id?.startsWith('api-')) && (
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Live data from API
                </span>
              )}
            </div>
          </div>
        )}

        {/* Reports Grid */}
        {!isLoading && (
          <div className="space-y-8">
            {sortedReports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                onClick={() => setSelectedReport(report)}
                onEdit={() => setEditingReport(report)}
                canEdit={canEditReport(report)}
              />
            ))}
          </div>
        )}

        {/* No Results State */}
        {!isLoading && sortedReports.length === 0 && !error && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No reports found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {reports.length === 0 
                ? "No reports have been submitted yet. Be the first to share your story!" 
                : "Try adjusting your search terms or filters"}
            </p>
            {user && reports.length === 0 && (
              <Button asChild className="mt-4 bg-echo-trust">
                <Link href="/submit">Submit First Report</Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {selectedReport && (
        <ReportModal 
          report={selectedReport} 
          onClose={() => setSelectedReport(null)} 
        />
      )}

      {editingReport && (
        <EditReportModal
          report={editingReport}
          open={!!editingReport}
          onClose={() => setEditingReport(null)}
          onUpdate={(updatedContent) => {
            handleReportUpdate(editingReport.id, updatedContent)
            setEditingReport(null)
          }}
        />
      )}
    </div>
  )
}
