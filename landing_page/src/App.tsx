import React from 'react';
import { Fingerprint, Shield, UserCheck, Lock, Smartphone, Building, ArrowRight, CheckCircle, Key, ShieldCheck, Database } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20 text-center md:text-left md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 slide-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Secure Identity Verification
            <span className="block mt-2">For The Digital Age</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Verify your identity using Aadhaar with complete privacy through zero-knowledge proofs and biometric authentication.
          </p>
          <div className="space-x-4">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 slide-in slide-in-delay-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80"
              alt="Security Visualization"
              className="w-full h-auto rounded-2xl shadow-2xl animate-float glow-hover"
            />
            <div className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-xl shadow-xl animate-pulse-slow">
              <Fingerprint className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute -top-6 -right-6 bg-gray-800 p-4 rounded-xl shadow-xl animate-pulse-slow">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <section className="bg-gray-800/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6" />
              <span>Government Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Key className="w-6 h-6" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-6 h-6" />
              <span>Zero Data Storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How Verif Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Fingerprint className="w-8 h-8 text-blue-400" />}
              title="Biometric Authentication"
              description="Use your phone's fingerprint scanner to match with your Aadhaar biometrics securely."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-purple-400" />}
              title="Zero-Knowledge Proofs"
              description="Prove your identity without revealing any personal information from your Aadhaar card."
            />
            <FeatureCard
              icon={<UserCheck className="w-8 h-8 text-green-400" />}
              title="Pseudonymous Identity"
              description="Get a unique identifier that maintains privacy while ensuring accountability."
            />
          </div>
        </div>
      </section>

      {/* Security Visualization */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
                alt="Security Technology"
                className="rounded-2xl shadow-2xl animate-float glow-hover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Bank-Grade Security</h2>
              <p className="text-gray-400">Our zero-knowledge proof technology ensures your personal information never leaves your device. The same security standards used by leading financial institutions worldwide.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <Lock className="w-6 h-6 text-blue-400 mb-2" />
                  <h3 className="font-semibold">End-to-End Encryption</h3>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-400 mb-2" />
                  <h3 className="font-semibold">Privacy Guaranteed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Verif?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Lock />}
              title="Privacy First"
              description="Your data never leaves your device"
            />
            <BenefitCard
              icon={<Smartphone />}
              title="Easy to Use"
              description="Verify identity in seconds using your phone"
            />
            <BenefitCard
              icon={<ArrowRight />}
              title="Instant Verification"
              description="Quick and seamless verification process"
            />
            <BenefitCard
              icon={<CheckCircle />}
              title="Government Approved"
              description="Compliant with all regulations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of users who trust Verif for secure identity verification
          </p>
          <button className="btn-primary">
            Start Verifying Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Verif</h3>
              <p className="text-gray-500">
                Secure identity verification powered by zero-knowledge proofs
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li className="nav-link">Features</li>
                <li className="nav-link">Security</li>
                <li className="nav-link">Pricing</li>
                <li className="nav-link">Documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li className="nav-link">About</li>
                <li className="nav-link">Blog</li>
                <li className="nav-link">Careers</li>
                <li className="nav-link">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li className="nav-link">Privacy Policy</li>
                <li className="nav-link">Terms of Service</li>
                <li className="nav-link">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Verif. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="inline-block p-3 bg-gray-700/50 rounded-lg mb-4 glow-hover">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="benefit-card">
      <div className="inline-block p-3 bg-gray-800 rounded-lg mb-4 glow-hover">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;