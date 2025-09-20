import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingGuidePage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-5xl mx-auto px-6 py-20 bg-gradient-to-br from-primary/20 to-primary/50 dark:from-primary/40 dark:to-primary/90 rounded-xl shadow-lg text-neutral-900 dark:text-neutral-100">
        <h1 className="text-5xl font-extrabold mb-12 text-primary dark:text-primary/80">Pricing Guide for Artisans</h1>
        
        <section className="mb-12 bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6">How to Price Your Artwork</h2>
          <p className="mb-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Properly pricing your handcrafted artwork is essential to maintain profitability while attracting buyers. Consider factors like material costs, time, skill, and market demand.
          </p>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-400 space-y-3">
            <li>Calculate the total cost of materials used.</li>
            <li>Estimate the time invested and set an hourly wage.</li>
            <li>Research similar items on our marketplace and beyond.</li>
            <li>Factor in shipping, fees, and taxes.</li>
            <li>Include perceived value and artistic uniqueness.</li>
          </ul>
        </section>

        <section className="mb-12 bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6">Sample Pricing Calculations</h2>
          <table className="w-full border-collapse border border-neutral-300 dark:border-neutral-700 rounded-lg overflow-hidden text-neutral-800 dark:text-neutral-300">
            <thead className="bg-stone-100 dark:bg-neutral-800">
              <tr>
                <th className="p-4 border-r border-neutral-300 dark:border-neutral-700">Item</th>
                <th className="p-4 border-r border-neutral-300 dark:border-neutral-700">Material Cost</th>
                <th className="p-4 border-r border-neutral-300 dark:border-neutral-700">Hours Spent</th>
                <th className="p-4 border-r border-neutral-300 dark:border-neutral-700">Hourly Wage</th>
                <th className="p-4 border-neutral-300 dark:border-neutral-700">Final Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-300 dark:border-neutral-700">
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">Handwoven Basket</td>
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">$12.00</td>
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">5</td>
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">$15.00</td>
                <td className="p-4">$87.00</td>
              </tr>
              <tr className="border-t border-neutral-300 dark:border-neutral-700">
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">Pottery Bowl Set</td>
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">$20.00</td>
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">8</td>
                <td className="p-4 border-r border-neutral-300 dark:border-neutral-700">$18.00</td>
                <td className="p-4">$164.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-12 bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6">Best Practices</h2>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-400 space-y-3">
            <li>Review pricing regularly based on material costs and demand fluctuations.</li>
            <li>Be transparent with buyers about your pricing rationale.</li>
            <li>Offer bundles or limited edition pricing for special occasions.</li>
          </ul>
        </section>
        
        <section className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-semibold mb-6">Pricing Resources and Tools</h2>
          <p className="mb-4">
            Download our pricing template to help calculate costs and profits:
            <a href="/docs/pricing-template.xlsx" className="ml-2 text-primary underline">Pricing Template (Excel)</a>
          </p>
          <p>
            Watch our video tutorials on pricing strategies on our YouTube channel:
            <a href="https://youtube.com/artisanspricing" target="_blank" rel="noopener noreferrer" className="ml-2 text-primary underline">Watch Videos</a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
