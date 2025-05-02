
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 right-3 bg-safety-blue text-white px-3 py-1 text-sm rounded-full">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-safety-blue transition-colors duration-300">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
          {product.description.split(' ').slice(0, 15).join(' ')}...
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-safety-gray font-bold text-lg">${product.price.toFixed(2)}</span>
          <span className="text-sm text-safety-blue font-medium group-hover:underline">View Details</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
