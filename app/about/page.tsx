"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Heart, Lock, Eye, MessageSquare, Volume2, CheckCircle, Globe, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-echo-trust/10 dark:from-black dark:via-gray-900 dark:to-echo-trust/20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              A new way to
              <br />
              <span className="text-echo-trust">speak truth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Echo empowers Nigerian university students to report incidents anonymously,
              creating safer campus communities through truth and accountability.
            </p>
            
            {/* Mobile Mockup */}
            <div className="relative mt-16 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-4 shadow-2xl">
                  <div className="bg-white dark:bg-black rounded-2xl h-full p-4 flex flex-col shadow-inner">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-echo-trust rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white">Echo</span>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                        <p className="text-sm text-gray-700 dark:text-gray-300">Anonymous Report</p>
                        <p className="text-xs text-gray-500 mt-1">Your voice. Your shield.</p>
                      </div>
                      <div className="bg-echo-trust/20 rounded-lg p-3">
                        <p className="text-sm text-gray-900 dark:text-white">Report safely</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Protected • Verified • Anonymous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              who are we?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We're students who experienced the silence around campus incidents. Too many stories 
                  go untold, too many voices remain unheard, and too many issues stay hidden.
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Echo was born from our belief that every student deserves to speak up safely, 
                  without fear, and with the confidence that their voice will make a difference.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-echo-trust text-white px-4 py-2">Student-Built</Badge>
                  <Badge className="bg-echo-validation text-white px-4 py-2">Community-Driven</Badge>
                  <Badge className="bg-echo-alert text-white px-4 py-2">Change-Focused</Badge>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Users className="w-8 h-8 text-echo-trust mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">For Students, By Students</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Built by Nigerian university students who understand the unique challenges 
                          and culture of campus life.
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

      {/* Our Goal Section */}
      <section className="py-20 px-4 bg-white dark:bg-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              our goal
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 text-echo-trust mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Safe Reporting</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enable anonymous reporting of harassment, fraud, safety concerns, and discrimination 
                    without fear of retaliation.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Eye className="w-12 h-12 text-echo-validation mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Transparency</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create visibility around campus issues through community validation and 
                    evidence-based reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-echo-alert mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Justice</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Empower the community to hold individuals and institutions accountable 
                    for their actions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-950 dark:to-black">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              our community
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                  Building safer campuses together
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-echo-validation mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Verified Students Only</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        .edu email verification ensures authentic community participation while maintaining anonymity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-echo-trust mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Community Validation</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Peer voting system helps verify report credibility and builds collective accountability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Lock className="w-6 h-6 text-echo-alert mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Anonymous but Accountable</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Reports are anonymous, but false reporting can be traced to prevent misuse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-echo-trust/10 border-echo-trust/30 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 text-echo-trust mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">100+</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Universities</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-echo-validation/10 border-echo-validation/30 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-echo-validation mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">10k+</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Students</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-echo-alert/10 border-echo-alert/30 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-8 h-8 text-echo-alert mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">500+</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Reports</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-200/50 dark:bg-white/10 border-gray-300 dark:border-white/30 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-8 h-8 text-gray-700 dark:text-white mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">95%</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Verified</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              how echo works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-32 h-48 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-2xl mx-auto p-3 shadow-xl">
                    <div className="bg-white dark:bg-black rounded-xl h-full p-3 flex flex-col">
                      <div className="bg-echo-trust/20 rounded-lg p-2 mb-2">
                        <Shield className="w-4 h-4 text-echo-trust" />
                      </div>
                      <div className="text-xs text-gray-900 dark:text-white font-medium mb-1">Register</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">university@.edu</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-echo-trust text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Verify Identity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Register with your university email to ensure authentic community participation.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-32 h-48 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-2xl mx-auto p-3 shadow-xl">
                    <div className="bg-white dark:bg-black rounded-xl h-full p-3 flex flex-col">
                      <div className="bg-echo-validation/20 rounded-lg p-2 mb-2">
                        <Volume2 className="w-4 h-4 text-echo-validation" />
                      </div>
                      <div className="text-xs text-gray-900 dark:text-white font-medium mb-1">Report</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Anonymous</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-echo-validation text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Submit Report</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Report incidents anonymously with evidence and detailed descriptions.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-32 h-48 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-2xl mx-auto p-3 shadow-xl">
                    <div className="bg-white dark:bg-black rounded-xl h-full p-3 flex flex-col">
                      <div className="bg-echo-alert/20 rounded-lg p-2 mb-2">
                        <Users className="w-4 h-4 text-echo-alert" />
                      </div>
                      <div className="text-xs text-gray-900 dark:text-white font-medium mb-1">Community</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Validates</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-echo-alert text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Justice</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Community validates reports and holds individuals accountable for their actions.
                </p>
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
              Ready to make your voice heard?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of students creating safer campus communities through anonymous reporting and collective accountability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/submit">
                <Button className="bg-white text-echo-trust px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  <Volume2 className="w-5 h-5 mr-2" />
                  Report Now
                </Button>
              </Link>
              
              <Link href="/reports">
                <Button variant="outline" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-echo-trust transition-all transform hover:scale-105 shadow-xl">
                  View Reports
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
            <span className="text-xl font-bold text-gray-900 dark:text-white">Echo</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Empowering student voices through secure, anonymous reporting.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Echo. Building safer campuses together.
          </p>
        </div>
      </footer>
    </div>
  )
} 