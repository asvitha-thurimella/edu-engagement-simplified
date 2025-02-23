
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Globe, MessageSquare, Calendar, ArrowRight, CheckCircle } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          AI-Powered Parent Engagement Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Bridging the gap between parents and education through smart, accessible technology
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Essential Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Book className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>
                Monitor your child's academic and non-academic progress with easy-to-understand visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Real-time grade updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Attendance tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Multilingual Support</CardTitle>
              <CardDescription>
                Access all information in your preferred language for better understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Multiple language options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Instant translation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageSquare className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Low-Tech Access</CardTitle>
              <CardDescription>
                Stay connected through SMS and WhatsApp updates, no smartphone required
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>SMS notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>WhatsApp updates</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-sm my-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full shrink-0">
                  <Book className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Easy Access</h3>
                  <p className="text-gray-600">Log in through web, mobile, or receive SMS updates</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Language</h3>
                  <p className="text-gray-600">Select your preferred language for all communications</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full shrink-0">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                  <p className="text-gray-600">Receive regular updates about your child's progress</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full shrink-0">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Communicate</h3>
                  <p className="text-gray-600">Connect with teachers through your preferred channel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of parents who are actively engaging in their children's education
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Start Using AI-PEP Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Index
