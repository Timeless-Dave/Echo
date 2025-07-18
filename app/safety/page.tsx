"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Heart, 
  MessageSquare, 
  CheckCircle, 
  Phone, 
  Mail, 
  BookOpen,
  FileText,
  UserCheck,
  Globe,
  Zap,
  Info
} from "lucide-react"
import Link from "next/link"

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-echo-trust/10 dark:from-black dark:via-gray-900 dark:to-echo-trust/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              safety
              <br />
              <span className="text-echo-trust">centre</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Your safety is our priority. Learn how we protect your identity,
              ensure secure reporting, and maintain community standards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              our approach
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  At Echo, safety is our fundamental principle. We've designed our platform 
                  with multiple layers of protection to ensure that students can report incidents 
                  without fear of retaliation or exposure.
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  We believe in empowering students through education, providing clear guidelines, 
                  and maintaining the highest standards of digital security and community moderation.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-echo-trust/10 border-echo-trust/30 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <Lock className="w-8 h-8 text-echo-trust mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Encrypted</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">End-to-end encryption</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-echo-validation/10 border-echo-validation/30 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <UserCheck className="w-8 h-8 text-echo-validation mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Verified</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Identity protection</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-echo-trust mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Anonymous by Design</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Your reports are completely anonymous. We never store identifying information 
                          with your submissions, ensuring your identity remains protected.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Eye className="w-8 h-8 text-echo-validation mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Moderation</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Our community-driven validation system ensures report quality while 
                          maintaining anonymity and preventing misuse.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              safety guidelines
            </h2>
            
            <div className="space-y-8">
              {/* Reporting Safety */}
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <FileText className="w-6 h-6 text-echo-trust" />
                    Reporting Safety
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Do Report:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                        <li>• Incidents that affect student safety</li>
                        <li>• Academic fraud or misconduct</li>
                        <li>• Harassment or discrimination</li>
                        <li>• Safety concerns on campus</li>
                        <li>• Unethical behavior by staff or students</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✗ Don't Report:</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                        <li>• False or unverified information</li>
                        <li>• Personal disputes or gossip</li>
                        <li>• Offensive content without context</li>
                        <li>• Information that could harm innocents</li>
                        <li>• Revenge or malicious reports</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Digital Security */}
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <Lock className="w-6 h-6 text-echo-validation" />
                    Digital Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Your Privacy</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          No IP tracking
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          Encrypted data
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          Anonymous submissions
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Data Protection</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          Secure servers
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          Regular security audits
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          GDPR compliant
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Your Security</h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          Use private networks
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          Clear browser history
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-echo-validation mt-0.5" />
                          Avoid public computers
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community Standards */}
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-900 dark:text-white">
                    <Users className="w-6 h-6 text-echo-alert" />
                    Community Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Respect & Dignity</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        We maintain a respectful environment where every student feels safe to share their experiences 
                        without judgment or harassment.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-echo-validation" />
                          Treat all community members with respect
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-echo-validation" />
                          Avoid discriminatory language
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-echo-validation" />
                          Support fellow students appropriately
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Accountability</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        While reports are anonymous, we maintain accountability through verification systems 
                        and community moderation to prevent misuse.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-echo-validation" />
                          Reports must be truthful and factual
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-echo-validation" />
                          Evidence should support claims
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-echo-validation" />
                          False reporting has consequences
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-950 dark:to-black">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              crisis support
            </h2>
            
            <Alert className="bg-echo-alert/20 border-echo-alert/50 mb-12">
              <AlertTriangle className="h-5 w-5 text-echo-alert" />
              <AlertDescription className="text-gray-900 dark:text-white">
                <strong>Emergency situations:</strong> If you are in immediate danger, contact local emergency services (199) 
                or campus security immediately. Echo is for reporting incidents, not emergency response.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 text-echo-alert mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Emergency Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">For immediate danger or emergency situations</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-echo-alert hover:bg-red-700" asChild>
                      <a href="tel:199">Call 199</a>
                    </Button>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Nigeria Emergency Services</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 text-echo-validation mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Mental Health Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Professional counseling and mental health resources</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-echo-validation hover:bg-teal-700" asChild>
                      <a href="tel:0800-123-4567">Call Support Line</a>
                    </Button>
                    <p className="text-xs text-gray-500 dark:text-gray-400">24/7 Crisis Helpline</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-12 h-12 text-echo-trust mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Online Resources</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Access support materials and educational content</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-echo-trust hover:bg-blue-700" asChild>
                      <Link href="/support">View Resources</Link>
                    </Button>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Support guides & articles</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              safety tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Personal Safety</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-echo-trust mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Trust Your Instincts</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">If something feels wrong, it probably is. Don't ignore your gut feelings.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-echo-trust mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Stay Connected</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Keep trusted friends informed about your whereabouts and plans.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-echo-trust mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Know Your Rights</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Understand your rights as a student and how to access support services.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Digital Safety</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-echo-validation mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Protect Your Privacy</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Use private browsing and avoid sharing personal information unnecessarily.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-echo-validation mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Secure Reporting</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Use Echo's secure platform for anonymous reporting rather than social media.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-echo-validation mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Safe Networks</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Use secure, private networks when accessing sensitive platforms like Echo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-echo-trust via-echo-trust/90 to-blue-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need to report something?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Your safety is protected. Your voice matters. Report incidents anonymously and help create 
              a safer campus environment for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/submit">
                <Button className="bg-white text-echo-trust px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  <Shield className="w-5 h-5 mr-2" />
                  Report Safely
                </Button>
              </Link>
              
              <Link href="/about">
                <Button variant="outline" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-echo-trust transition-all transform hover:scale-105 shadow-xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-echo-trust" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Echo Safety Centre</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Protecting student voices through secure, anonymous reporting.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            If you're in immediate danger, contact emergency services: 199
          </p>
        </div>
      </footer>
    </div>
  )
} 