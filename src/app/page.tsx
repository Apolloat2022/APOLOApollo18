import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Your Musical
              <span className="text-blue-600 block">Potential</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Apollo Performing Arts Academy where AI-powered learning meets world-class instruction. 
              From piano to guitar, singing to performance, we&apos;ll help you achieve your musical dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/trial"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/lessons"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Explore Lessons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Apollo Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of music education with our innovative approach combining 
              personalized instruction and AI-powered support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Assistant */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🤖
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Assistant</h3>
              <p className="text-gray-600">
                Get instant answers, schedule lessons, and receive personalized guidance 
                24/7 with our Apollo Assistant.
              </p>
            </div>

            {/* Expert Teachers */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                👨‍🏫
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from passionate musicians with years of teaching experience 
                and professional performance backgrounds.
              </p>
            </div>

            {/* Flexible Scheduling */}
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📅
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book, reschedule, or cancel lessons easily through our smart 
                scheduling system that works around your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instruments We Teach
            </h2>
            <p className="text-xl text-gray-600">
              Find your perfect instrument and start your musical journey today
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Piano', icon: '🎹', popular: true },
              { name: 'Guitar', icon: '🎸', popular: true },
              { name: 'Voice', icon: '🎤', popular: false },
              { name: 'Violin', icon: '🎻', popular: false },
              { name: 'Drums', icon: '🥁', popular: true },
              { name: 'Saxophone', icon: '🎷', popular: false },
              { name: 'Flute', icon: '🎺', popular: false },
              { name: 'Ukulele', icon: '🎸', popular: false },
            ].map((instrument) => (
              <div
                key={instrument.name}
                className="text-center p-6 bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer relative"
              >
                {instrument.popular && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <div className="text-4xl mb-3">{instrument.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{instrument.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your free trial lesson today and experience the Apollo Academy difference. 
            Our AI assistant is ready to help you get started!
          </p>
          <Link
            href="/trial"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Book Free Trial Now
          </Link>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
