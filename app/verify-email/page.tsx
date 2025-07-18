import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-echo-neutral dark:bg-gray-900">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-echo-validation/10 rounded-full">
                <Mail className="h-8 w-8 text-echo-validation" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-echo-text dark:text-white">Check Your Email</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">We've sent you a verification link</p>
          </div>

          <Card className="echo-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-echo-validation" />
                Registration Successful
              </CardTitle>
              <CardDescription>
                Please check your university email for a verification link to activate your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-echo-neutral dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium text-echo-text dark:text-white mb-2">Next Steps:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>Check your university email inbox</li>
                  <li>Click the verification link in the email</li>
                  <li>Return here to sign in and start reporting</li>
                </ol>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {"Didn't receive the email? Check your spam folder or"}
                </p>
                <Button variant="outline" size="sm">
                  Resend Verification Email
                </Button>
              </div>

              <div className="pt-4 border-t">
                <Link href="/login">
                  <Button className="w-full echo-button-primary">Back to Sign In</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
