
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, Product } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Shield, Package, Ruler } from 'lucide-react';

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState('description');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the product
    const foundProduct = products.find(p => p.id === productId) || null;
    setProduct(foundProduct);
    
    // Get related products if available
    if (foundProduct && foundProduct.relatedProducts) {
      const related = products.filter(p => 
        foundProduct.relatedProducts.includes(p.id)
      );
      setRelatedProducts(related);
    }
  }, [productId]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
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
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-safety-blue">Home</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-safety-blue">Products</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`} className="text-gray-500 hover:text-safety-blue">{product.category}</Link>
          <ChevronRight size={16} className="mx-2 text-gray-400" />
          <span className="text-gray-800">{product.name}</span>
        </nav>
        
        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-contain rounded-md"
              style={{ maxHeight: '500px' }}
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2 font-heading">{product.name}</h1>
            <div className="text-safety-blue font-medium mb-4">{product.category}</div>
            <div className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</div>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            {/* Standards info */}
            {product.applicable_standards && product.applicable_standards.length > 0 && (
              <div className="flex items-center gap-2 mb-6 bg-safety-lightGray/50 p-3 rounded-md">
                <Shield size={20} className="text-safety-blue" />
                <span className="text-sm font-medium">Compliant with: {product.applicable_standards.join(', ')}</span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-safety-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex-1 bg-safety-blue hover:bg-safety-darkBlue text-white py-3 px-6 rounded-md font-medium transition-colors duration-300">
                Add to Cart
              </button>
              <button className="flex-1 border border-safety-blue text-safety-blue hover:bg-safety-blue/5 py-3 px-6 rounded-md font-medium transition-colors duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'description'
                    ? 'border-safety-blue text-safety-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'specifications'
                    ? 'border-safety-blue text-safety-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('standards')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'standards'
                    ? 'border-safety-blue text-safety-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } ${!product.applicable_standards?.length ? 'hidden' : ''}`}
              >
                Standards
              </button>
            </nav>
          </div>
          
          <div className="py-8">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">{product.description}</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-safety-lightGray/50 p-5 rounded-lg flex flex-col items-center text-center">
                    <Package size={32} className="text-safety-blue mb-3" />
                    <h3 className="text-lg font-medium mb-2">Premium Quality</h3>
                    <p className="text-sm text-gray-600">Made from high-quality materials for durability and longevity</p>
                  </div>
                  
                  <div className="bg-safety-lightGray/50 p-5 rounded-lg flex flex-col items-center text-center">
                    <Ruler size={32} className="text-safety-blue mb-3" />
                    <h3 className="text-lg font-medium mb-2">Precision Engineered</h3>
                    <p className="text-sm text-gray-600">Designed with exact specifications for optimal performance</p>
                  </div>
                  
                  <div className="bg-safety-lightGray/50 p-5 rounded-lg flex flex-col items-center text-center">
                    <Shield size={32} className="text-safety-blue mb-3" />
                    <h3 className="text-lg font-medium mb-2">Safety Certified</h3>
                    <p className="text-sm text-gray-600">Meets or exceeds all relevant safety standards and regulations</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 bg-gray-50 w-1/3">{key}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'standards' && product.applicable_standards && (
              <div>
                <h3 className="text-lg font-medium mb-4">Applicable Standards</h3>
                <ul className="space-y-3">
                  {product.applicable_standards.map((standard, index) => (
                    <li key={index} className="flex items-center bg-white p-3 rounded-md border border-gray-200">
                      <Shield size={20} className="text-safety-blue mr-3" />
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-600">
                  All our products are designed and manufactured to comply with the relevant safety standards
                  and regulations. Compliance with these standards ensures our products meet the highest quality
                  and safety requirements.
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 font-heading">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
