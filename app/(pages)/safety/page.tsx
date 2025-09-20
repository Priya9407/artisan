import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-4xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-4xl font-bold mb-8">Safety & Trust</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Secure Transactions</h2>
          <p>
            We prioritize your security by ensuring all transactions are encrypted with latest SSL technology. Our payment systems comply with industry standards for maximum protection.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Verified Sellers</h2>
          <p>
            All artisan sellers on our platform undergo a thorough verification process to maintain authenticity and quality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Buyer Protection</h2>
          <p>
            We offer buyer protection programs including refunds, returns, and dispute resolution to ensure you can shop with confidence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Community Guidelines</h2>
          <p>
            Our marketplace is committed to respectful and fair commerce. Please follow our community guidelines to keep the platform welcoming for all.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
