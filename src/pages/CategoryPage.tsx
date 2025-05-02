
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Grid2X2, List } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<any>(null);
  const [categoryProducts, setCategoryProducts] = useState<any[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the category
    const foundCategory = categories.find(c => c.id === categoryId);
    setCategory(foundCategory);
    
    // Get products in this category
    if (foundCategory) {
      const filtered = products.filter(p => 
        p.category.toLowerCase() === foundCategory.name.toLowerCase() || 
        p.category.toLowerCase().includes(foundCategory.name.toLowerCase())
      );
      setCategoryProducts(filtered);
    }
  }, [categoryId]);

  if (!category) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
          <p className="mb-8">The category you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="bg-safety-blue hover:bg-safety-darkBlue text-white px-6 py-3 rounded-md">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        {/* Hero section */}
        <div className="relative h-64 md:h-80 mb-10 rounded-xl overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 font-heading">{category.name}</h1>
            <p className="text-white/90 max-w-lg">{category.description}</p>
          </div>
        </div>
        
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-safety-blue">Home</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-safety-blue">Products</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-800">{category.name}</span>
        </nav>
        
        {/* Filters and results section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-600">Showing {categoryProducts.length} products</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-safety-blue text-white' : 'bg-gray-100'}`}
              title="Grid view"
            >
              <Grid2X2 size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-safety-blue text-white' : 'bg-gray-100'}`}
              title="List view"
            >
              <List size={18} />
            </button>
          </div>
        </div>
        
        {/* Products grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product) => (
                <div key={product.id} className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-40 h-40 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-heading text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-safety-gray font-bold text-lg">${product.price.toFixed(2)}</span>
                      <Link to={`/product/${product.id}`} className="bg-safety-blue hover:bg-safety-darkBlue text-white px-4 py-2 rounded text-sm">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-16 text-center">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
