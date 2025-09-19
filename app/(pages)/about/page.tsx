import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About Us
            <br />
            <span className="text-blue-600">Page</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            This is your about page content.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
