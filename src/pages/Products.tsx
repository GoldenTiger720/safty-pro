
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { categories } from '../data/products';
import { useProducts } from '@/context/ProductContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Grid2X2, List, ChevronRight, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Products = () => {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Filter products based on search term and category
    let filtered = [...products];
    
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search) || 
        p.description.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search)
      );
    }
    
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
      const category = categories.find(c => c.name === categoryFilter);
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, products]);

  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div>
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        {selectedCategory ? (
          <div className="relative h-64 md:h-80 mb-10 rounded-xl overflow-hidden">
            <img 
              src={selectedCategory.image} 
              alt={selectedCategory.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 font-heading">{selectedCategory.name}</h1>
              <p className="text-white/90 max-w-lg">{selectedCategory.description}</p>
            </div>
          </div>
        ) : (
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 font-heading">All Products</h1>
            {searchTerm && <p className="text-gray-600">Search results for: <span className="font-medium">{searchTerm}</span></p>}
          </div>
        )}
        
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-safety-blue">Home</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-800">Products</span>
          {selectedCategory && (
            <>
              <ChevronRight size={16} className="mx-2 text-gray-400" />
              <span className="text-gray-800">{selectedCategory.name}</span>
            </>
          )}
        </nav>
        
        {/* Filters and results section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-gray-600" />
              <span className="text-gray-600 mr-2">Filter by:</span>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {uniqueCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <p className="text-gray-600">Showing {filteredProducts.length} products</p>
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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-gray-500 text-lg">No products found.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
                <p className="text-gray-500 text-lg">No products found.</p>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
