// app/categories/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PotteryIcon from '@/components/icons/PotteryIcon';
import JewelryIcon from '@/components/icons/JewelryIcon';
import TextilesIcon from '@/components/icons/TextilesIcon';
import WoodworkIcon from '@/components/icons/Woodworks';
import MetalworkIcon from '@/components/icons/Metalwork';
import PaintingsIcon from '@/components/icons/Paintings';

export default function CategoriesPage() {
  const categories = [
    { id: 'pottery', name: 'Pottery & Ceramics', description: 'Functional and decorative ceramic pieces.', icon: <PotteryIcon/> },
    { id: 'jewelry', name: 'Jewelry & Accessories', description: 'Unique handcrafted jewelry from artisans.', icon: <JewelryIcon/> },
    { id: 'textiles', name: 'Textiles & Fabrics', description: 'Handwoven and traditional fabrics.', icon: <TextilesIcon/> },
    { id: 'woodwork', name: 'Woodwork & Furniture', description: 'Custom and reclaimed wood products.', icon: <WoodworkIcon/> },
    { id: 'metalwork', name: 'Metalwork & Sculpture', description: 'Original metal art and sculptures.', icon: <MetalworkIcon /> },
    { id: 'paintings', name: 'Paintings & Art', description: 'Original paintings and framed art.', icon: <PaintingsIcon/> }
  ];
  return (<>
    <Header />
    <section className="px-6 py-20 bg-background dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Artisan Categories</h1>
        <p className="text-lg text-muted-foreground">Explore diverse handcrafted art and creative products by category.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {categories.map(category => (
          <div key={category.id} className="p-8 bg-stone-50 dark:bg-neutral-900 rounded-3xl border border-stone-200 dark:border-neutral-800 hover:shadow-lg transition">
            <div className="mb-4 text-primary">{category.icon}</div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">{category.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{category.description}</p>
          </div>
        ))}
      </div>
    </section><Footer></Footer></>
  );
}
