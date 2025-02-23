
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Globe, MessageSquare, Calendar, ArrowRight, CheckCircle, Star, Trophy, Award } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      {/* Hero Section with enhanced animation */}
      <section className="container mx-auto px-4 py-24 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-purple-500 to-cyan-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>

        <div className="relative">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 animate-fade-in">
            AI-Powered Parent Engagement Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Revolutionizing education through intelligent parent-school connectivity
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Trophy className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">98%</h3>
              <p className="text-gray-600">Parent Satisfaction</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Star className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Award className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">15+</h3>
              <p className="text-gray-600">Languages Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section with glassmorphism */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Essential Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Book className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-center">Progress Tracking</CardTitle>
              <CardDescription className="text-center text-base">
                Monitor your child's academic and non-academic progress with easy-to-understand visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">Real-time grade updates</span>
                </li>
                <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">Attendance tracking</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-center">Multilingual Support</CardTitle>
              <CardDescription className="text-center text-base">
                Access all information in your preferred language for better understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">Multiple language options</span>
                </li>
                <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">Instant translation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-purple-100">
            <CardHeader>
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-center">Low-Tech Access</CardTitle>
              <CardDescription className="text-center text-base">
                Stay connected through SMS and WhatsApp updates, no smartphone required
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">SMS notifications</span>
                </li>
                <li className="flex items-center gap-3 bg-white/50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">WhatsApp updates</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works with modern design */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-white/50 to-purple-50/50 rounded-3xl shadow-sm my-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-xl">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Easy Access</h3>
                  <p className="text-gray-600 text-lg">Log in through web, mobile, or receive SMS updates</p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-xl">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Choose Your Language</h3>
                  <p className="text-gray-600 text-lg">Select your preferred language for all communications</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-xl">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Stay Updated</h3>
                  <p className="text-gray-600 text-lg">Receive regular updates about your child's progress</p>
                </div>
              </div>
              <div className="flex items-start gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-xl">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Communicate</h3>
                  <p className="text-gray-600 text-lg">Connect with teachers through your preferred channel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-12 md:p-20 max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Education?</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Join thousands of parents who are actively engaging in their children's education journey
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Start Using AI-PEP Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
