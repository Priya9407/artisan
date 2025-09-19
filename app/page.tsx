import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to
            <br />
            <span className="text-blue-600">Artisans Marketplace</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Choose where you'd like to go:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/landing" className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg w-full sm:w-auto">
              View Landing Page
            </Link>
            <Link href="/about" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-semibold text-lg w-full sm:w-auto">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
