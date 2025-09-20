import Header from '@/components/Header';
import Footer from '@/components/Footer';

const commissions = [
  {
    title: 'Custom Painted Vase',
    description: 'A beautiful hand-painted ceramic vase with personalized floral patterns.',
    priceRange: '$100 - $150',
    image: '/images/vase-commission.jpg'
  },
  {
    title: 'Wooden Dining Table',
    description: 'Custom sized dining table made from reclaimed oak wood.',
    priceRange: '$1,200 - $1,800',
    image: '/images/wood-table.jpg'
  }
];

export default function CommissionWorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-5xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-5xl font-bold mb-12">Commission Work</h1>
        <p className="mb-12 max-w-3xl text-lg text-neutral-700 dark:text-neutral-300">
          Many artisans accept commissions for custom pieces. Learn how to request, negotiate, and receive personalized artwork made just for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {commissions.map(({ title, description, priceRange, image }, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-lg">
              <img src={image} alt={title} className="w-full h-56 rounded-2xl object-cover mb-6" />
              <h2 className="text-2xl font-semibold mb-3">{title}</h2>
              <p className="mb-3 text-neutral-700 dark:text-neutral-300">{description}</p>
              <p className="font-bold text-primary">{priceRange}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
