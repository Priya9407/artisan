'use client'

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Landing() {
  return (
    <div className="font-sans min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Connecting Artists Worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Where Art Meets
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Opportunity
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Discover unique handcrafted pieces, connect with talented artisans, and support 
            creative communities from around the world. Your next masterpiece awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-[1.02]">
              Start Shopping
            </button>
            <button className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
              Become an Artist
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Discover Amazing Art
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From traditional crafts to contemporary masterpieces, find pieces that inspire your soul
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Handmade Jewelry",
                description: "Unique pieces crafted with love",
                icon: "💎",
                count: "2.5K+",
                color: "from-amber-500 to-orange-500"
              },
              {
                title: "Traditional Textiles",
                description: "Authentic global patterns",
                icon: "🧵",
                count: "1.8K+",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Pottery & Ceramics",
                description: "Beautiful functional art",
                icon: "🏺",
                count: "1.2K+",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Digital Art",
                description: "Modern creative expressions",
                icon: "🎨",
                count: "900+",
                color: "from-green-500 to-emerald-500"
              }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-card border border-border rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{category.count} items</span>
                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from artists and customers who've found their perfect match
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite] hover:pause">
            {[
              {
                quote: "I found the most beautiful handmade necklace here. The artist was so helpful and even customized it perfectly for my special day!",
                author: "Sarah Johnson",
                role: "Art Collector",
                rating: 5,
                location: "New York, USA",
                avatar: "SJ"
              },
              {
                quote: "As an artist, this platform helped me reach customers worldwide. My pottery sales have increased 300% since joining!",
                author: "Carlos Rivera",
                role: "Ceramic Artist",
                rating: 5,
                location: "Mexico City, MX",
                avatar: "CR"
              },
              {
                quote: "The quality of handmade textiles here is incredible. Each piece tells a story and the artists are so passionate about their work.",
                author: "Priya Sharma",
                role: "Interior Designer",
                rating: 5,
                location: "Mumbai, India",
                avatar: "PS"
              },
              {
                quote: "Love supporting independent artists! The customer service is amazing and shipping is always careful and secure.",
                author: "Emma Thompson",
                role: "Art Enthusiast",
                rating: 5,
                location: "London, UK",
                avatar: "ET"
              },
              {
                quote: "Found unique pieces for my art gallery here. The variety and authenticity of work is unmatched anywhere else online.",
                author: "David Kim",
                role: "Gallery Owner",
                rating: 5,
                location: "Seoul, Korea",
                avatar: "DK"
              },
              {
                quote: "The commission process was seamless. The artist understood exactly what I wanted and delivered beyond my expectations!",
                author: "Maria Santos",
                role: "Collector",
                rating: 5,
                location: "São Paulo, Brazil",
                avatar: "MS"
              }
              // Duplicate for infinite scroll effect
            ].concat([
              {
                quote: "I found the most beautiful handmade necklace here. The artist was so helpful and even customized it perfectly for my special day!",
                author: "Sarah Johnson",
                role: "Art Collector",
                rating: 5,
                location: "New York, USA",
                avatar: "SJ"
              },
              {
                quote: "As an artist, this platform helped me reach customers worldwide. My pottery sales have increased 300% since joining!",
                author: "Carlos Rivera",
                role: "Ceramic Artist",
                rating: 5,
                location: "Mexico City, MX",
                avatar: "CR"
              },
              {
                quote: "The quality of handmade textiles here is incredible. Each piece tells a story and the artists are so passionate about their work.",
                author: "Priya Sharma",
                role: "Interior Designer",
                rating: 5,
                location: "Mumbai, India",
                avatar: "PS"
              }
            ]).map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div className="bg-card border border-border rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-card-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Featured Artists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented creators sharing their passion and skills with the world
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Maya Chen", 
                craft: "Ceramic Artist", 
                location: "Tokyo, Japan", 
                rating: "4.9",
                sales: "500+",
                image: "MC",
                specialty: "Traditional pottery with modern twists"
              },
              { 
                name: "Carlos Rivera", 
                craft: "Textile Designer", 
                location: "Mexico City, MX", 
                rating: "4.8",
                sales: "300+",
                image: "CR",
                specialty: "Vibrant cultural textiles"
              },
              { 
                name: "Priya Sharma", 
                craft: "Jewelry Maker", 
                location: "Mumbai, India", 
                rating: "4.9",
                sales: "800+",
                image: "PS",
                specialty: "Handcrafted silver accessories"
              },
              { 
                name: "Emma Thompson", 
                craft: "Glass Blower", 
                location: "London, UK", 
                rating: "4.7",
                sales: "200+",
                image: "ET",
                specialty: "Contemporary glass sculptures"
              }
            ].map((artist, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {artist.image}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="font-bold text-card-foreground mb-1">{artist.name}</h3>
                  <p className="text-primary font-medium mb-1">{artist.craft}</p>
                  <p className="text-xs text-muted-foreground mb-3">{artist.specialty}</p>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-muted-foreground">{artist.location}</span>
                    <span className="text-primary font-semibold">{artist.sales} sales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">{artist.rating}</span>
                    <span className="text-xs text-muted-foreground">(Reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center mb-20">
            {[
              { number: "15K+", label: "Active Artists", icon: "👨‍🎨" },
              { number: "75K+", label: "Unique Products", icon: "🎨" },
              { number: "50K+", label: "Happy Customers", icon: "😊" },
              { number: "98%", label: "Satisfaction Rate", icon: "⭐" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-border/50">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Join thousands of art lovers and creators in our vibrant marketplace community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-[1.02]">
                Shop Now
              </button>
              <button className="border-2 border-border hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Sell Your Art
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
