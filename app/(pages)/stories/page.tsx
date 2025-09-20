import Header from '@/components/Header';
import Footer from '@/components/Footer';

const testimonials = [
  {
    quote: "This platform gave me the confidence and reach I never had before.",
    author: "Maya R."
  },
  {
    quote: "Easy to use, great support, and a wonderful community.",
    author: "Roque L."
  },
  {
    quote: "Solely focusing on my art without worrying about the business side.",
    author: "Priya S."
  }
];

const timeline = [
  {
    year: '2020',
    event: 'Platform Launch',
    description: 'Started with 100 artisans and 500 products.'
  },
  {
    year: '2023',
    event: '10,000 Sales',
    description: 'Celebrated 10,000 art pieces sold worldwide.'
  },
  {
    year: '2025',
    event: 'Expanded Globally',
    description: 'Launched in 15+ countries with international shipping.'
  }
];

export default function SuccessStoriesAligned() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-7xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-5xl font-bold mb-12 text-center">Success Stories</h1>
        <div className="flex flex-col md:flex-row gap-12 items-start justify-center mb-20">
          {/* Testimonials Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">What Our Artisans Say</h2>
            <div className="grid grid-cols-1 gap-8">
              {testimonials.map(({ quote, author }, idx) => (
                <blockquote key={idx} className="p-6 bg-stone-100 dark:bg-neutral-800 rounded-xl shadow-lg relative mb-4">
                  <p className="text-lg italic mb-4">"{quote}"</p>
                  <footer className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">- {author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          {/* Timeline Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">Our Journey Together</h2>
           <ul className="max-w-xl mx-auto space-y-12 pl-12">
  {timeline.map(({ year, event, description }, idx) => (
    <li key={idx} className="relative flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full mt-1"></div>
      <div>
        <h3 className="font-bold text-2xl mb-1">
          <span className="mr-1">{year}</span> - {event}
        </h3>
        <p className="text-neutral-700 dark:text-neutral-400">{description}</p>
      </div>
    </li>
  ))}
</ul>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
