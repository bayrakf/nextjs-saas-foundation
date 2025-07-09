import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Smartphone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <Zap className="mr-2 h-4 w-4" />
            Production-Ready SaaS Starter
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Build Your SaaS in{" "}
            <span className="text-primary">Days, Not Months</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete SaaS starter with Next.js 14, TypeScript, authentication, 
            payments, and everything you need to launch your product quickly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://github.com/bayrakf/nextjs-saas-foundation/discussions">
                Get Notified When Ready
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <a href="https://github.com/bayrakf/nextjs-saas-foundation">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground">
            Production-ready features that save you months of development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Authentication & Security</CardTitle>
              <CardDescription>
                Complete auth system with OAuth, email/password, and security best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  NextAuth.js integration
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Google & GitHub OAuth
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Protected routes
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Multi-Tenant & i18n</CardTitle>
              <CardDescription>
                Organizations, teams, and internationalization ready
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Team management
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Role-based access
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  German & English
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Modern UI & Design</CardTitle>
              <CardDescription>
                Beautiful, responsive components built with Shadcn/UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  50+ UI components
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Dark/Light mode
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mobile-first design
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-20 bg-white rounded-lg my-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Modern Tech Stack</h2>
          <p className="text-xl text-muted-foreground">
            Built with the latest and most reliable technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="text-center">
            <div className="bg-black text-white p-4 rounded-lg mb-2">
              Next.js 14
            </div>
            <p className="text-sm text-muted-foreground">App Router</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-2">
              TypeScript
            </div>
            <p className="text-sm text-muted-foreground">Type Safety</p>
          </div>
          <div className="text-center">
            <div className="bg-cyan-500 text-white p-4 rounded-lg mb-2">
              Tailwind CSS
            </div>
            <p className="text-sm text-muted-foreground">Styling</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 text-white p-4 rounded-lg mb-2">
              Shadcn/UI
            </div>
            <p className="text-sm text-muted-foreground">Components</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Complete Version Coming Soon</h2>
          <p className="text-xl mb-8 opacity-90">
            Full source code with payments, auth & documentation will be available soon
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="mailto:nextjs.saas.foundation@gmail.com?subject=Next.js%20SaaS%20Foundation%20-%20Notify%20Me&body=Hi!%0A%0APlease%20notify%20me%20when%20the%20complete%20version%20is%20available.%0A%0AThanks!">
                Notify Me When Available
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://github.com/bayrakf/nextjs-saas-foundation">
                Star on GitHub
              </a>
            </Button>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            Expected price: $197 • Lifetime access • Commercial license included
          </p>
        </div>
      </section>
    </div>
  );
}
