"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Mail, 
  MessageSquare, 
  HelpCircle, 
  Shield, 
  Zap, 
  Clock, 
  User,
  Heart,
  AlertTriangle,
  Info,
  ChevronRight
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-echo-trust/10 dark:from-black dark:via-gray-900 dark:to-echo-trust/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              contact
              <br />
              <span className="text-echo-trust">us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We're here to help. Reach out with questions, feedback, or support needs.
              Your voice matters to us.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              get in touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose the best way to reach us based on your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* General Contact */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-echo-trust/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-echo-trust/30 transition-colors">
                  <Mail className="w-8 h-8 text-echo-trust" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">General Inquiries</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  Questions about Echo, partnerships, or general feedback
                </p>
                <Button className="w-full bg-echo-trust hover:bg-blue-700" asChild>
                  <a href="mailto:havillahaod@gmail.com?subject=General Inquiry - Echo Platform">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-echo-validation/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-echo-validation/30 transition-colors">
                  <Zap className="w-8 h-8 text-echo-validation" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  Having trouble with the platform? Get technical help
                </p>
                <Button className="w-full bg-echo-validation hover:bg-teal-700" asChild>
                  <a href="mailto:havillahaod@gmail.com?subject=Technical Support - Echo Platform&body=Please describe the issue you're experiencing:">
                    Get Support
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Feedback */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-echo-alert/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-echo-alert/30 transition-colors">
                  <Heart className="w-8 h-8 text-echo-alert" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Feedback & Ideas</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                  Share suggestions to help us improve Echo for students
                </p>
                <Button className="w-full bg-echo-alert hover:bg-red-700" asChild>
                  <a href="mailto:havillahaod@gmail.com?subject=Feedback - Echo Platform&body=I'd like to share feedback about:">
                    Share Feedback
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Contact Options */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              more ways to reach us
            </h2>
            
            <div className="space-y-6">
              {/* Email Templates */}
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <MessageSquare className="w-6 h-6 text-echo-trust" />
                    Quick Email Templates
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    Pre-written email templates for common inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="justify-between h-auto p-4 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href="mailto:havillahaod@gmail.com?subject=Platform Bug Report&body=I found a bug on Echo:%0D%0A%0D%0ASteps to reproduce:%0D%0A1. %0D%0A2. %0D%0A3. %0D%0A%0D%0AExpected behavior:%0D%0A%0D%0AActual behavior:%0D%0A%0D%0ABrowser and device info:">
                        <span className="text-left">
                          <div className="font-medium text-gray-900 dark:text-white">Report a Bug</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Found something broken?</div>
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Button>

                    <Button 
                      variant="outline" 
                      className="justify-between h-auto p-4 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href="mailto:havillahaod@gmail.com?subject=Feature Request&body=I'd like to suggest a new feature for Echo:%0D%0A%0D%0AFeature description:%0D%0A%0D%0AWhy this would be helpful:%0D%0A%0D%0AHow it should work:">
                        <span className="text-left">
                          <div className="font-medium text-gray-900 dark:text-white">Request Feature</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Have an idea for Echo?</div>
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Button>

                    <Button 
                      variant="outline" 
                      className="justify-between h-auto p-4 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href="mailto:havillahaod@gmail.com?subject=University Partnership Inquiry&body=Hello Echo Team,%0D%0A%0D%0AI'm interested in partnering with Echo for our university:%0D%0A%0D%0AUniversity name:%0D%0AContact person:%0D%0AEmail:%0D%0A%0D%0AHow we'd like to collaborate:">
                        <span className="text-left">
                          <div className="font-medium text-gray-900 dark:text-white">Partnership</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">University collaboration</div>
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Button>

                    <Button 
                      variant="outline" 
                      className="justify-between h-auto p-4 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href="mailto:havillahaod@gmail.com?subject=Safety Concern&body=I have a safety concern about Echo:%0D%0A%0D%0AConcern details:%0D%0A%0D%0AHow this affects user safety:%0D%0A%0D%0ASuggested solution (if any):">
                        <span className="text-left">
                          <div className="font-medium text-gray-900 dark:text-white">Safety Concern</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Report safety issues</div>
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <User className="w-6 h-6 text-echo-validation" />
                    Primary Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-echo-trust/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-echo-trust" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">havillahaod@gmail.com</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Primary contact for all Echo-related inquiries</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-echo-validation/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-echo-validation" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Response Time</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-950 dark:to-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              quick answers
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-echo-trust mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How do I report an incident?</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Click the "Blow Whistle" button in the navigation or visit our submit page. You'll need a verified .edu email to create an account, but your reports remain completely anonymous.
                      </p>
                      <Button size="sm" className="bg-echo-trust hover:bg-blue-700" asChild>
                        <a href="/submit">Report Now</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-echo-validation mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is my identity really protected?</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Yes. We use advanced encryption and never store identifying information with reports. Your email is only used for account verification, not connected to your submissions.
                      </p>
                      <Button size="sm" className="bg-echo-validation hover:bg-teal-700" asChild>
                        <a href="/safety">Learn More</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-echo-alert mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What if I'm in immediate danger?</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        Echo is for reporting incidents, not emergency response. If you're in immediate danger, contact local emergency services (199) or campus security right away.
                      </p>
                      <Button size="sm" className="bg-echo-alert hover:bg-red-700" asChild>
                        <a href="tel:199">Call 199</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-gray-600 dark:text-gray-400 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How can I get involved?</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        We're always looking for student feedback, university partnerships, and ways to improve. Email us with your ideas or how you'd like to contribute to making campuses safer.
                      </p>
                      <Button size="sm" variant="outline" className="border-gray-300 dark:border-gray-600" asChild>
                        <a href="mailto:havillahaod@gmail.com?subject=Getting Involved with Echo">Get Involved</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-echo-trust via-echo-trust/90 to-blue-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Still have questions?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Don't hesitate to reach out. We're here to support students and make Echo the best platform for safe reporting.
            </p>
            
            <Button className="bg-white text-echo-trust px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl" asChild>
              <a href="mailto:havillahaod@gmail.com?subject=Question about Echo">
                <Mail className="w-5 h-5 mr-2" />
                Send Us an Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-echo-trust" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Echo Contact</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Supporting student voices through accessible communication.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Primary contact: havillahaod@gmail.com
          </p>
        </div>
      </footer>
    </div>
  )
} 