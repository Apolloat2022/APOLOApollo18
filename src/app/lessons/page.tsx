import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import Link from 'next/link';

export default function LessonsPage() {
  const instruments = [
    {
      name: 'Piano',
      icon: '🎹',
      description: 'Learn classical, jazz, pop, and contemporary piano. Perfect for beginners and advanced students.',
      prices: '$60 (30min) | $90 (45min) | $120 (60min)',
      popular: true,
    },
    {
      name: 'Guitar',
      icon: '🎸',
      description: 'Acoustic and electric guitar lessons. Learn your favorite songs while building technique.',
      prices: '$60 (30min) | $90 (45min) | $120 (60min)',
      popular: true,
    },
    {
      name: 'Voice',
      icon: '🎤',
      description: 'Develop your singing voice with professional vocal coaching and performance techniques.',
      prices: '$70 (30min) | $100 (45min) | $130 (60min)',
      popular: false,
    },
    {
      name: 'Violin',
      icon: '🎻',
      description: 'Classical and contemporary violin instruction for all ages and skill levels.',
      prices: '$65 (30min) | $95 (45min) | $125 (60min)',
      popular: false,
    },
    {
      name: 'Drums',
      icon: '🥁',
      description: 'Rock, jazz, and world percussion. We provide a full drum kit for lessons.',
      prices: '$70 (30min) | $100 (45min) | $130 (60min)',
      popular: true,
    },
    {
      name: 'Saxophone',
      icon: '🎷',
      description: 'Jazz, classical, and contemporary saxophone instruction with instrument rental available.',
      prices: '$65 (30min) | $95 (45min) | $125 (60min)',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Lessons
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the perfect instrument for you with our comprehensive lesson programs. 
            All skill levels welcome, from complete beginners to advanced musicians.
          </p>
          <Link
            href="/trial"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Book Free Trial
          </Link>
        </div>
      </section>

      {/* Instruments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instruments.map((instrument) => (
              <div
                key={instrument.name}
                className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow relative"
              >
                {instrument.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{instrument.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {instrument.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {instrument.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                  <p className="text-blue-600 font-medium">{instrument.prices}</p>
                </div>
                
                <div className="space-y-3">
                  <Link
                    href="/trial"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-colors block"
                  >
                    Free Trial
                  </Link>
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need to bring my own instrument?
              </h3>
              <p className="text-gray-600">
                For piano and drums, we provide the instruments. For other instruments, 
                we recommend bringing your own, but we can help with rentals or purchases 
                if needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What age groups do you teach?
              </h3>
              <p className="text-gray-600">
                We welcome students of all ages, from young children (4+) to seniors. 
                Our instructors adapt their teaching methods to suit each student&apos;s age 
                and learning style.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How often should I take lessons?
              </h3>
              <p className="text-gray-600">
                Most students benefit from weekly lessons, but we offer flexible 
                scheduling including bi-weekly options. Your instructor will recommend 
                the best frequency based on your goals and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}