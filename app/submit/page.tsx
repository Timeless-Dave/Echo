"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/hooks/use-toast"
import {
  Upload,
  FileText,
  ImageIcon,
  Video,
  Mic,
  AlertTriangle,
  X,
  Info,
  HelpCircle,
  Shield,
  Eye,
  EyeOff,
  Calendar as CalendarIcon,
  MapPin,
  User,
  Mail,
  Phone,
  Send,
  Save,
  Lock,
  Unlock,
  Plus,
  Trash2,
  Bold,
  Italic,
  Underline,
  List,
  Link as LinkIcon,
  Quote,
  Camera,
  FileVideo,
  FileAudio,
  File,
  CheckCircle,
  Clock,
  Star,
  AlertCircle,
  MessageSquare,
  Search,
  Zap,
  DollarSign,
  Heart,
  Users,
  Target,
  Megaphone
} from "lucide-react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import Link from "next/link"

// Nigerian Universities for location dropdown
const nigerianUniversities = [
  "University of Lagos (UNILAG)",
  "University of Ibadan (UI)",
  "Ahmadu Bello University (ABU)",
  "University of Nigeria, Nsukka (UNN)",
  "Obafemi Awolowo University (OAU)",
  "Federal University of Technology, Akure (FUTA)",
  "Lagos State University (LASU)",
  "Covenant University",
  "University of Benin (UNIBEN)",
  "Federal University of Technology, Minna (FUTMINNA)",
  "University of Port Harcourt (UNIPORT)",
  "Bayero University Kano (BUK)",
  "University of Calabar (UNICAL)",
  "Delta State University (DELSU)",
  "Redeemer's University",
  "Babcock University",
  "Afe Babalola University",
  "Federal University of Agriculture, Abeokuta (FUNAAB)",
  "University of Jos (UNIJOS)",
  "University of Maiduguri (UNIMAID)",
  "Nnamdi Azikiwe University (UNIZIK)",
  "Federal University, Oye-Ekiti (FUOYE)",
  "Kwara State University (KWASU)",
  "Other Nigerian University"
]

const incidentCategories = [
  {
    value: "harassment",
    label: "Harassment & Discrimination",
    description: "Sexual harassment, gender discrimination, bullying, intimidation",
    icon: <Heart className="w-5 h-5" />,
    color: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
  },
  {
    value: "fraud",
    label: "Academic Fraud & Corruption",
    description: "Grade manipulation, admission fraud, examination malpractice",
    icon: <DollarSign className="w-5 h-5" />,
    color: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800"
  },
  {
    value: "safety",
    label: "Safety & Security Concerns",
    description: "Campus violence, cult activities, physical threats, security issues",
    icon: <Shield className="w-5 h-5" />,
    color: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
  },
  {
    value: "exploitation",
    label: "Financial Exploitation",
    description: "Illegal fees, extortion, financial abuse, unauthorized charges",
    icon: <AlertCircle className="w-5 h-5" />,
    color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
  },
  {
    value: "misconduct",
    label: "Staff/Faculty Misconduct",
    description: "Unprofessional behavior, abuse of power, ethical violations",
    icon: <Users className="w-5 h-5" />,
    color: "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
  },
  {
    value: "facilities",
    label: "Infrastructure & Facilities",
    description: "Poor infrastructure, health hazards, accommodation issues",
    icon: <AlertTriangle className="w-5 h-5" />,
    color: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
  },
  {
    value: "debunk",
    label: "Fact-Check & Debunking",
    description: "Correct misinformation, provide facts, clarify false reports",
    icon: <Search className="w-5 h-5" />,
    color: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
  },
  {
    value: "anonymous_tip",
    label: "Anonymous Tip/Information",
    description: "General information, tips, observations about campus issues",
    icon: <Info className="w-5 h-5" />,
    color: "bg-teal-100 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800"
  },
  {
    value: "custom",
    label: "Custom Category",
    description: "Define your own category for unique situations",
    icon: <Target className="w-5 h-5" />,
    color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
  }
]

const TextEditor = ({ value, onChange, placeholder }: { value: string, onChange: (value: string) => void, placeholder: string }) => {
  const [isPreview, setIsPreview] = useState(false)
  
  const insertText = (before: string, after: string = '') => {
    const textarea = document.getElementById('editor-textarea') as HTMLTextAreaElement
    if (!textarea) return
    
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)
    
    onChange(newText)
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, end + before.length)
    }, 0)
  }
  
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => insertText('**', '**')}
            className="p-2"
          >
            <Bold className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => insertText('*', '*')}
            className="p-2"
          >
            <Italic className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => insertText('- ')}
            className="p-2"
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => insertText('> ')}
            className="p-2"
          >
            <Quote className="w-4 h-4" />
          </Button>
        </div>
        
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setIsPreview(!isPreview)}
        >
          {isPreview ? 'Edit' : 'Preview'}
        </Button>
      </div>
      
      {isPreview ? (
        <div className="min-h-[200px] p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 prose dark:prose-invert max-w-none">
          {value.split('\n').map((line, index) => (
            <p key={index} className="mb-2">
              {line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                   .replace(/\*(.*?)\*/g, '<em>$1</em>')
                   .split(/<(.*?)>/).map((part, i) => 
                     i % 2 === 0 ? part : <span key={i} dangerouslySetInnerHTML={{ __html: `<${part}>` }} />
                   )}
            </p>
          ))}
        </div>
      ) : (
        <Textarea
          id="editor-textarea"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="min-h-[200px] resize-none"
        />
      )}
    </div>
  )
}

const FileUpload = ({ files, setFiles }: { files: File[], setFiles: (files: File[]) => void }) => {
  const [dragActive, setDragActive] = useState(false)
  
  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return
    
    const validFiles = Array.from(newFiles).filter(file => {
      const maxSize = 10 * 1024 * 1024 // 10MB
      return file.size <= maxSize
    })
    
    setFiles([...files, ...validFiles])
  }
  
  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }
  
  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <ImageIcon className="w-4 h-4" />
    if (file.type.startsWith('video/')) return <FileVideo className="w-4 h-4" />
    if (file.type.startsWith('audio/')) return <FileAudio className="w-4 h-4" />
    return <File className="w-4 h-4" />
  }
  
  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-echo-trust bg-echo-trust/5' 
            : 'border-gray-300 dark:border-gray-600 hover:border-echo-trust/50'
        }`}
        onDragEnter={(e) => { e.preventDefault(); setDragActive(true) }}
        onDragLeave={(e) => { e.preventDefault(); setDragActive(false) }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          setDragActive(false)
          handleFiles(e.dataTransfer.files)
        }}
      >
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Upload Evidence</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Drag and drop files here, or click to select
        </p>
        <input
          type="file"
          multiple
          className="hidden"
          id="file-upload"
          onChange={(e) => handleFiles(e.target.files)}
          accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
        />
        <Button
          type="button"
          variant="outline"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <Plus className="w-4 h-4 mr-2" />
          Select Files
        </Button>
        <p className="text-xs text-gray-500 mt-2">
          Maximum file size: 10MB each. Supported: Images, Videos, Audio, Documents
        </p>
      </div>
      
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900 dark:text-white">Uploaded Files ({files.length})</h4>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                {getFileIcon(file)}
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{file.name}</p>
                  <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SubmitReportPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    customCategory: "",
    location: "",
    customLocation: "",
    incidentDate: undefined as Date | undefined,
    timeOfIncident: "",
    description: "",
    evidence: "",
    isAnonymous: true,
    severity: "medium",
    tags: [] as string[],
    contactEmail: "",
    contactPhone: "",
    witnessCount: "",
    previousReports: false,
    consentToContact: false,
    files: [] as File[]
  })
  
  const [aiScore, setAiScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [newTag, setNewTag] = useState("")

  const { user } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  // Calculate AI Score based on form completeness and content quality
  useEffect(() => {
    const calculateAIScore = () => {
      let score = 0
      
      // Basic information (30 points)
      if (formData.title.length > 10) score += 15
      if (formData.category) score += 10
      if (formData.location) score += 5
      
      // Detailed description (40 points)
      if (formData.description.length > 50) score += 15
      if (formData.description.length > 200) score += 15
      if (formData.description.length > 500) score += 10
      
      // Evidence and support (20 points)
      if (formData.files.length > 0) score += 10
      if (formData.evidence.length > 50) score += 5
      if (formData.witnessCount && parseInt(formData.witnessCount) > 0) score += 5
      
      // Additional details (10 points)
      if (formData.incidentDate) score += 3
      if (formData.timeOfIncident) score += 2
      if (formData.tags.length > 0) score += 3
      if (formData.previousReports) score += 2
      
      setAiScore(Math.min(score, 100))
    }
    
    calculateAIScore()
  }, [formData])

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, newTag.trim()] })
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(tag => tag !== tagToRemove) })
  }

  const handleSubmit = async () => {
    if (!formData.title.trim() || !formData.category || !formData.description.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in the title, category, and description fields.",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Report Submitted Successfully",
        description: formData.isAnonymous 
          ? "Your anonymous report has been submitted and is under review." 
          : "Your report has been submitted. You may be contacted for additional information.",
      })
      
      router.push("/reports")
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authentication Required</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Please log in with your verified university email to submit a report.
          </p>
          <Button asChild>
            <Link href="/login">Login to Continue</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Create Your Report
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Share your story safely. Your voice creates positive change on campus.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-4">
              <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                  <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-2">
                    <Megaphone className="w-6 h-6 text-echo-trust" />
                    Report Details
                  </CardTitle>
                  <CardDescription>
                    Provide information about the incident you want to report
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  {/* Title */}
                  <div className="space-y-3">
                    <Label htmlFor="title" className="text-lg font-medium">Report Headline *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Write a clear, descriptive headline for your report"
                      className="text-lg h-12"
                    />
                    <p className="text-sm text-gray-500">
                      Make it specific but avoid naming individuals directly
                    </p>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg font-medium">Incident Category *</Label>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {incidentCategories.map((cat) => (
                        <div
                          key={cat.value}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                            formData.category === cat.value
                              ? `${cat.color} border-current shadow-md`
                              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                          onClick={() => setFormData({ ...formData, category: cat.value })}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              formData.category === cat.value 
                                ? 'bg-white/20' 
                                : 'bg-gray-100 dark:bg-gray-700'
                            }`}>
                              {cat.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-sm mb-1">{cat.label}</h3>
                              <p className="text-xs opacity-80">{cat.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {formData.category === "custom" && (
                      <div className="space-y-2 mt-4">
                        <Label htmlFor="customCategory">Define Your Category *</Label>
                        <Input
                          id="customCategory"
                          value={formData.customCategory}
                          onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                          placeholder="e.g., 'Academic Strike Issues', 'Student Union Elections'"
                        />
                      </div>
                    )}
                  </div>

                  {/* Location and Date */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="location" className="text-lg font-medium">University/Location *</Label>
                      <Select 
                        value={formData.location} 
                        onValueChange={(value) => setFormData({ ...formData, location: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your university" />
                        </SelectTrigger>
                        <SelectContent>
                          {nigerianUniversities.map((uni) => (
                            <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {formData.location === "Other Nigerian University" && (
                        <Input
                          value={formData.customLocation}
                          onChange={(e) => setFormData({ ...formData, customLocation: e.target.value })}
                          placeholder="Enter university name"
                        />
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label className="text-lg font-medium">When did this happen?</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="h-12 justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.incidentDate ? format(formData.incidentDate, "MMM dd, yyyy") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.incidentDate}
                              onSelect={(date) => setFormData({ ...formData, incidentDate: date })}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <Input
                          type="time"
                          value={formData.timeOfIncident}
                          onChange={(e) => setFormData({ ...formData, timeOfIncident: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    <Label className="text-lg font-medium">Tell Your Story *</Label>
                    <TextEditor
                      value={formData.description}
                      onChange={(value) => setFormData({ ...formData, description: value })}
                      placeholder="Describe what happened in detail. Include:

• When and where it occurred
• What exactly happened
• Who was involved (without naming specific people)
• How it affected you or others
• Any relevant background information

Be as detailed as possible - your story matters."
                    />
                    <p className="text-sm text-gray-500">
                      Minimum 50 characters. The more details you provide, the stronger your report becomes.
                    </p>
                  </div>

                  {/* Additional Context */}
                  <div className="space-y-3">
                    <Label>Additional Evidence or Context (Optional)</Label>
                    <Textarea
                      value={formData.evidence}
                      onChange={(e) => setFormData({ ...formData, evidence: e.target.value })}
                      placeholder="Any additional information, supporting details, or context that might be relevant..."
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-3">
                    <Label className="text-lg font-medium">Supporting Evidence (Optional)</Label>
                    <FileUpload 
                      files={formData.files} 
                      setFiles={(files) => setFormData({ ...formData, files })} 
                    />
                  </div>

                  {/* Quick Details */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label>Severity Level</Label>
                      <Select 
                        value={formData.severity} 
                        onValueChange={(value) => setFormData({ ...formData, severity: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">🟡 Low Impact</SelectItem>
                          <SelectItem value="medium">🟠 Medium Impact</SelectItem>
                          <SelectItem value="high">🔴 High Impact</SelectItem>
                          <SelectItem value="critical">⚫ Critical/Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Number of Witnesses</Label>
                      <Select 
                        value={formData.witnessCount} 
                        onValueChange={(value) => setFormData({ ...formData, witnessCount: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">No witnesses</SelectItem>
                          <SelectItem value="1">1 witness</SelectItem>
                          <SelectItem value="2-5">2-5 witnesses</SelectItem>
                          <SelectItem value="6-10">6-10 witnesses</SelectItem>
                          <SelectItem value="10+">More than 10</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label>Anonymity</Label>
                      <div className="flex items-center space-x-3">
                        <Switch
                          checked={formData.isAnonymous}
                          onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked })}
                        />
                        <span className="text-sm">
                          {formData.isAnonymous ? '🔒 Anonymous' : '👤 Identified'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-3">
                    <Label>Tags (Optional)</Label>
                    <div className="flex gap-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add relevant tags"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      />
                      <Button type="button" onClick={addTag} variant="outline">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {formData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                            #{tag}
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeTag(tag)}
                              className="h-auto p-0 hover:bg-transparent"
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Contact Information (if not anonymous) */}
                  {!formData.isAnonymous && (
                    <div className="space-y-4 p-6 border rounded-lg bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-gray-900 dark:text-white">Contact Information</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Provide at least one contact method for follow-up questions.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contactEmail">Email Address</Label>
                          <Input
                            id="contactEmail"
                            type="email"
                            value={formData.contactEmail}
                            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                            placeholder="your.email@university.edu"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Phone Number</Label>
                          <Input
                            id="contactPhone"
                            type="tel"
                            value={formData.contactPhone}
                            onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                            placeholder="+234 xxx xxx xxxx"
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="consentToContact"
                          checked={formData.consentToContact}
                          onCheckedChange={(checked) => setFormData({ ...formData, consentToContact: checked as boolean })}
                        />
                        <Label htmlFor="consentToContact" className="text-sm">
                          I consent to being contacted about this report for clarification
                        </Label>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end pt-6 border-t">
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading || !formData.title.trim() || !formData.category || !formData.description.trim()}
                      className="bg-echo-trust hover:bg-blue-700 text-white px-8 py-3 text-lg h-auto"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Publishing Report...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Publish Report
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* AI Score */}
                <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Report Strength</h3>
                        <Badge variant={aiScore >= 80 ? 'default' : aiScore >= 60 ? 'secondary' : 'destructive'}>
                          {aiScore}%
                        </Badge>
                      </div>
                      
                      <Progress value={aiScore} className="h-3" />
                      
                      <div className="text-sm space-y-2">
                        <div className={`flex items-center gap-2 ${formData.title.length > 10 ? 'text-green-600' : 'text-gray-400'}`}>
                          <CheckCircle className="w-4 h-4" />
                          Clear headline ({formData.title.length}/10+ chars)
                        </div>
                        <div className={`flex items-center gap-2 ${formData.category ? 'text-green-600' : 'text-gray-400'}`}>
                          <CheckCircle className="w-4 h-4" />
                          Category selected
                        </div>
                        <div className={`flex items-center gap-2 ${formData.description.length > 50 ? 'text-green-600' : 'text-gray-400'}`}>
                          <CheckCircle className="w-4 h-4" />
                          Detailed description ({formData.description.length}/50+ chars)
                        </div>
                        <div className={`flex items-center gap-2 ${formData.files.length > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                          <CheckCircle className="w-4 h-4" />
                          Supporting evidence ({formData.files.length} files)
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 pt-2 border-t">
                        Higher scores increase report visibility and credibility in the community
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Tips */}
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Quick Tips
                    </h3>
                    <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Be specific about times, locations, and circumstances</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Include evidence like screenshots or documents</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Avoid naming individuals directly in public reports</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p>Use the anonymous option for sensitive matters</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Alert */}
                <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-800 dark:text-red-200">
                    <strong>Emergency?</strong> If you're in immediate danger, contact emergency services (199) or campus security immediately.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
