
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useProducts } from '@/context/ProductContext';

const FeaturedProductSections = () => {
  const { products } = useProducts();

  // Get most popular products (first 5)
  const popularProducts = products.slice(0, 5);

  // Get new arrivals (next 4)
  const newArrivals = products.slice(5, 9);

  // Get deals (next 2)
  const deals = products.slice(9, 11);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Top Ranking Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold">Top ranking</h3>
              <Link to="/products" className="text-sm text-gray-600 hover:text-safety-blue flex items-center">
                View more <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
            
            <div className="p-4">
              <div className="mb-2">
                <p className="font-medium">Most popular</p>
                <p className="text-sm text-gray-600">Safety Equipment</p>
              </div>
              
              <div className="relative mb-4 p-2 bg-gray-50 rounded-lg">
                <div className="absolute top-2 left-2 bg-white/80 rounded px-2 py-1 text-xs">
                  Popularity score: 4.7
                </div>
                <img 
                  src={popularProducts[0].image} 
                  alt={popularProducts[0].name}
                  className="w-full h-48 object-cover rounded" 
                />
                <div className="absolute bottom-4 left-4 text-5xl font-bold text-safety-orange">
                  1
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {popularProducts.slice(1, 4).map((product, index) => (
                  <Link to={`/product/${product.id}`} key={product.id} className="block hover:opacity-90 transition-opacity">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-20 object-cover rounded border border-gray-200"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* New Arrivals Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold">New arrivals</h3>
              <Link to="/products" className="text-sm text-gray-600 hover:text-safety-blue flex items-center">
                View more <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">50+ products added today</p>
              
              <div className="grid grid-cols-2 gap-3">
                {newArrivals.map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="block hover:opacity-90 transition-opacity">
                    <Card className="border border-gray-200 overflow-hidden h-32">
                      <CardContent className="p-0">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              
              <div className="mt-4">
                <Link to="/products" className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                    <img 
                      src={popularProducts[4].image}
                      alt="New this week"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium">New this week</p>
                    <p className="text-xs text-gray-600">Products from Verified Suppliers only</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Top Deals Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-bold">Top deals</h3>
              <Link to="/products" className="text-sm text-gray-600 hover:text-safety-blue flex items-center">
                View more <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
            
            <div className="p-4">
              <Link to={`/product/${deals[0].id}`} className="block mb-4 hover:opacity-90 transition-opacity">
                <Card className="border border-gray-200 overflow-hidden">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0">
                      <img 
                        src={deals[0].image}
                        alt={deals[0].name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-safety-blue">180-day lowest price</p>
                      <p className="text-sm text-gray-600">Limited time offer</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              <p className="font-medium mb-2">Deals on best sellers</p>
              
              <Link to={`/product/${deals[1].id}`} className="block hover:opacity-90 transition-opacity">
                <Card className="border border-gray-200 overflow-hidden relative">
                  <div className="absolute top-2 left-2 bg-safety-orange text-white px-2 py-1 text-xs rounded">
                    20% off
                  </div>
                  <CardContent className="p-0 h-52">
                    <img 
                      src={deals[1].image}
                      alt={deals[1].name}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductSections;
