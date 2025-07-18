import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import Marquee from "react-fast-marquee"
import HeroChatCarousel from "@/components/hero-chat-carousel"

export default function HomePage() {
  const anonymousReports = [
    "I was raped by a cult member in my hostel last semester.",
    "A lecturer asked for 500k to upgrade my results—and still failed me.",
    "Five students gang-raped a new female student off‑campus.",
    "Cultists collect house fees and threaten anyone who won't pay up.",
    "The VC's committee silenced my sexual harassment report.",
    "They spread fake rape rumors just to tarnish my reputation.",
    "I denied a lecturer my body and he failed me.",
    "I saw a student in possession of ammunitions in my hostel.",
    "Exam questions leaked for 200k each.",
    "Lecturer threatened to fail us all because we reported him.",
    "Paid handouts equals a pass, said a lecturer.",
    "Lecturer's child threatens to fail me for rejecting advances.",
    "SUG election results were manipulated by cult groups.",
    "A professor demanded sex for project supervision.",
    "Hostel wardens collect illegal levies and pocket the money.",
    "Final year students are being extorted for clearance.",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />

      {/* Anonymous Reports Marquee */}
      <div className="bg-echo-trust/5 dark:bg-echo-trust/10 border-b border-echo-trust/20 dark:border-echo-trust/30 py-3 overflow-hidden backdrop-blur-sm">
        <Marquee
          speed={30}
          gradient={true}
          gradientColor="rgba(0, 82, 204, 0.05)"
          gradientWidth={100}
        >
          {anonymousReports.map((report, index) => (
            <span
              key={index}
              className="mx-8 text-sm text-gray-800 dark:text-gray-300 italic font-medium"
            >
              "{report}"
            </span>
          ))}
        </Marquee>
      </div>

      {/* Hero Chat Carousel */}
      <HeroChatCarousel />

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">How Echo Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="echo-card">
              <CardHeader>
                <div className="p-2 bg-echo-trust/10 rounded-lg w-fit">
                  <Shield className="h-6 w-6 text-echo-trust" />
                </div>
                <CardTitle>Secure Registration</CardTitle>
                <CardDescription>
                  Register with your verified .edu email for accountability while maintaining anonymity in reports.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="echo-card">
              <CardHeader>
                <div className="p-2 bg-echo-validation/10 rounded-lg w-fit">
                  <CheckCircle className="h-6 w-6 text-echo-validation" />
                </div>
                <CardTitle>AI Content Scoring</CardTitle>
                <CardDescription>
                  Our AI system evaluates report severity to ensure only legitimate concerns are submitted.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="echo-card">
              <CardHeader>
                <div className="p-2 bg-echo-alert/10 rounded-lg w-fit">
                  <Users className="h-6 w-6 text-echo-alert" />
                </div>
                <CardTitle>Community Validation</CardTitle>
                <CardDescription>
                  Students can vote on report credibility, creating a self-regulating community system.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-echo-trust mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Anonymous Reporting</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-echo-validation mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Platform Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-echo-alert mb-2">AI</div>
              <div className="text-gray-600 dark:text-gray-400">Content Verification</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Secure</div>
              <div className="text-gray-600 dark:text-gray-400">Data Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-echo-trust text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Voice Heard?</h2>
          <p className="text-xl mb-8 opacity-90">
            Report incidents anonymously and help create a safer campus environment for everyone.
          </p>
          <Link href="/submit">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Report Anonymously
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Echo. Empowering student voices through secure reporting.</p>
        </div>
      </footer>
    </div>
  )
}
