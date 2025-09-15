import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';

export default function TrialPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Free Trial Lesson
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the Apollo Academy difference with a complimentary 30-minute lesson. 
            No commitment required!
          </p>
        </div>
      </section>

      {/* Trial Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Let&apos;s Get Started!
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                💡 <strong>Quick Tip:</strong> You can also use our AI assistant (bottom right) 
                to book your trial lesson instantly!
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="instrument" className="block text-sm font-medium text-gray-700 mb-2">
                  Instrument of Interest *
                </label>
                <select
                  id="instrument"
                  name="instrument"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select an instrument</option>
                  <option value="piano">Piano</option>
                  <option value="guitar">Guitar</option>
                  <option value="voice">Voice</option>
                  <option value="violin">Violin</option>
                  <option value="drums">Drums</option>
                  <option value="saxophone">Saxophone</option>
                  <option value="flute">Flute</option>
                  <option value="ukulele">Ukulele</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Age
                </label>
                <select
                  id="age"
                  name="age"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select age range</option>
                  <option value="4-7">4-7 years old</option>
                  <option value="8-12">8-12 years old</option>
                  <option value="13-17">13-17 years old</option>
                  <option value="18-25">18-25 years old</option>
                  <option value="26-40">26-40 years old</option>
                  <option value="41+">41+ years old</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  What are your musical goals?
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  placeholder="Tell us what you'd like to achieve..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>What to expect in your trial lesson:</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Meet your potential instructor</li>
                  <li>• Assess your current skill level</li>
                  <li>• Learn about our teaching approach</li>
                  <li>• Try playing your chosen instrument</li>
                  <li>• Discuss lesson plans and pricing</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Book My Free Trial
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              By submitting this form, you agree to be contacted by Apollo Academy about your trial lesson.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}