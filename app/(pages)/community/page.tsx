import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-5xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-4xl font-bold mb-6">Community</h1>
        <p className="text-lg mb-8">
          Join our vibrant community of artisans, collectors, and art lovers. Connect, collaborate, and celebrate creativity with like-minded individuals.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-stone-50 dark:bg-neutral-900 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Forums</h2>
            <p>Participate in discussions on art techniques, market trends, and new project ideas.</p>
          </div>
          <div className="bg-stone-50 dark:bg-neutral-900 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Events</h2>
            <p>Stay updated on upcoming workshops, exhibitions, and community gatherings.</p>
          </div>
          <div className="bg-stone-50 dark:bg-neutral-900 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Artist Spotlights</h2>
            <p>Discover featured artists and their inspiring stories every month.</p>
          </div>
          <div className="bg-stone-50 dark:bg-neutral-900 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Collaborations</h2>
            <p>Find opportunities to partner with other artisans for unique creations.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
