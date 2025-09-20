import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-7xl mx-auto px-8 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-5xl font-bold mb-6">Artist Dashboard</h1>
        <p className="mb-10 text-xl max-w-4xl">
          Manage your listings, track sales, and see analytics about your art business. Stay organized and focused so you can spend more time creating.
        </p>

        {/* Example stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-neutral-900 p-8 shadow-lg rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Total Sales</h3>
            <p className="text-3xl font-bold text-primary">1,235</p>
            <p className="text-sm text-neutral-500">This month</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-8 shadow-lg rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Active Listings</h3>
            <p className="text-3xl font-bold text-primary">35</p>
            <p className="text-sm text-neutral-500">Currently live</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-8 shadow-lg rounded-3xl">
            <h3 className="text-xl font-semibold mb-2">Messages</h3>
            <p className="text-3xl font-bold text-primary">84</p>
            <p className="text-sm text-neutral-500">Unread messages</p>
          </div>
        </div>

        {/* Recent orders table */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Recent Orders</h2>
          <table className="w-full text-left border-collapse border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            <thead className="bg-stone-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300">
              <tr>
                <th className="p-4 border-b border-neutral-300 dark:border-neutral-700">Order ID</th>
                <th className="p-4 border-b border-neutral-300 dark:border-neutral-700">Product</th>
                <th className="p-4 border-b border-neutral-300 dark:border-neutral-700">Status</th>
                <th className="p-4 border-b border-neutral-300 dark:border-neutral-700">Date</th>
                <th className="p-4 border-b border-neutral-300 dark:border-neutral-700">Total</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700 dark:text-neutral-400">
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <td className="p-4">#1023</td>
                <td className="p-4">Handcrafted Vase</td>
                <td className="p-4 text-green-600 font-semibold">Completed</td>
                <td className="p-4">Sep 15, 2025</td>
                <td className="p-4">$80.00</td>
              </tr>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <td className="p-4">#1024</td>
                <td className="p-4">Wooden Bowl Set</td>
                <td className="p-4 text-yellow-600 font-semibold">Pending</td>
                <td className="p-4">Sep 18, 2025</td>
                <td className="p-4">$120.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* New section: Top Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Top Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg overflow-hidden">
              <img src="/images/vase.jpg" alt="Vase" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Elegant Ceramic Vase</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Sold 120 times this year</p>
                <p className="text-primary font-semibold">$80.00</p>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg overflow-hidden">
              <img src="/images/bowl.jpg" alt="Bowl" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Handcrafted Wooden Bowl</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Sold 85 times this year</p>
                <p className="text-primary font-semibold">$120.00</p>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg overflow-hidden">
              <img src="/images/necklace.jpg" alt="Necklace" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Silver Artisan Necklace</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Sold 60 times this year</p>
                <p className="text-primary font-semibold">$95.00</p>
              </div>
            </div>
          </div>
        </section>

        {/* New section: Announcements */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Announcements</h2>
          <div className="space-y-6">
            <article className="bg-stone-100 dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">Monthly Seller Webinar</h3>
              <time dateTime="2025-09-25" className="text-sm text-neutral-500">September 25, 2025</time>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Join our monthly webinar to learn new tips, best practices, and upcoming features on the platform!
              </p>
            </article>
            <article className="bg-stone-100 dark:bg-neutral-800 p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg">New Shipping Partner Integration</h3>
              <time dateTime="2025-09-10" className="text-sm text-neutral-500">September 10, 2025</time>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                We integrated with FastShip for discounted rates and reliable shipping options.
              </p>
            </article>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
