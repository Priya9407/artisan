import Header from '@/components/Header';
import Footer from '@/components/Footer';

const featuredArtists = [
  {
    name: 'Sophia Williams',
    specialty: 'Textile Art',
    location: 'Portland, OR',
    bio: 'Sophia creates intricate handwoven tapestries inspired by nature and urban life. Her colorful designs blend tradition with modern aesthetics.',
    image: '/images/artist-sophia.jpg',
    website: 'https://sophiawilliamsart.com'
  },
  {
    name: 'Liam Zhang',
    specialty: 'Metal Sculpture',
    location: 'Austin, TX',
    bio: 'Liam crafts monumental metal sculptures which explore balance and form. His pieces have been featured in numerous galleries across the US.',
    image: '/images/artist-liam.jpg',
    website: 'https://liamzhangsculpture.com'
  },
  {
    name: 'Emma Garcia',
    specialty: 'Painting',
    location: 'New York, NY',
    bio: 'Emma’s paintings evoke emotion through vibrant colors and bold strokes. She often exhibits her work in contemporary art shows.',
    image: '/images/artist-emma.jpg',
    website: 'https://emmagarciapaints.com'
  }
];

export default function FeaturedArtists() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] max-w-7xl mx-auto px-6 py-20 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <h1 className="text-5xl font-bold mb-12 text-center">Featured Artists</h1>
        <p className="mb-16 max-w-4xl mx-auto text-center text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Meet the talented artisans making waves in our marketplace. Each featured artist brings unique vision and skilled craftsmanship to their creations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredArtists.map(({ name, specialty, location, bio, image, website }, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">
              <img
                src={image}
                alt={`${name} portrait`}
                className="w-36 h-36 object-cover rounded-full mb-6 shadow-md"
              />
              <h2 className="text-2xl font-semibold mb-1">{name}</h2>
              <p className="text-primary mb-2">{specialty} — {location}</p>
              <p className="mb-4 text-neutral-700 dark:text-neutral-400">{bio}</p>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-bold hover:text-primary/80 transition"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
