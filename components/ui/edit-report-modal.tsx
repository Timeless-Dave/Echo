"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/components/auth-provider"
import { mantaHQAPI } from "@/lib/mantahq-api"
import { Save, AlertTriangle, X } from "lucide-react"

interface EditReportModalProps {
  report: any
  open: boolean
  onClose: () => void
  onUpdate: (updatedContent: string) => void
}

export function EditReportModal({ report, open, onClose, onUpdate }: EditReportModalProps) {
  const [content, setContent] = useState(report?.reportText || report?.excerpt || "")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()
  const { toast } = useToast()

  const handleUpdate = async () => {
    if (!content.trim()) {
      setError("Content cannot be empty")
      return
    }

    if (!user?.email) {
      setError("User email is required for updates")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await mantaHQAPI.updatePost({
        content: content.trim(),
        email: user.email
      })

      if (response.success) {
        toast({
          title: "Report Updated Successfully! ✅",
          description: response.message || "Your report has been updated in the news store."
        })
        
        // Update the parent component
        onUpdate(content.trim())
        onClose()
      } else {
        if (response.statusCode === 404) {
          setError("Report not found. It may have been deleted or you may not have permission to edit it.")
        } else {
          setError(response.message || "Failed to update report")
        }
      }
    } catch (error: any) {
      console.error('Update error:', error)
      setError(error.message || "Network error occurred while updating the report")
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setContent(report?.reportText || report?.excerpt || "")
    setError(null)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-gray-900 dark:text-white">Edit Report</DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                Update the content of your report. Changes will be reflected immediately.
              </DialogDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Report Info */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              {report?.title || "Report Title"}
            </h4>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Category: {report?.category || "Unknown"}</span>
              <span>Location: {report?.location || "Not specified"}</span>
              {report?.isAnonymous && <span>🔒 Anonymous</span>}
            </div>
          </div>

          {/* Content Editor */}
          <div className="space-y-3">
            <Label htmlFor="content" className="text-gray-900 dark:text-white">
              Report Content *
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Update your report content..."
              className="min-h-[200px] resize-none"
              disabled={isLoading}
            />
            <p className="text-sm text-gray-500">
              {content.length}/5000 characters • Be clear and specific about the incident
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-800 dark:text-red-200">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Update Guidelines */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Update Guidelines</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Ensure your content is accurate and factual</li>
              <li>• Avoid naming specific individuals directly</li>
              <li>• Include relevant details like dates, locations, and circumstances</li>
              <li>• Updates are logged for transparency and accountability</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="outline" 
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleUpdate}
              disabled={isLoading || !content.trim() || content === (report?.reportText || report?.excerpt)}
              className="bg-echo-trust hover:bg-blue-700 text-white"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Update Report
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 