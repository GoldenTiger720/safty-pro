import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const handleQuantityChange = (productId: string, currentQuantity: number, delta: number) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
      title: 'Item removed',
      description: `${productName} has been removed from your cart.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: 'Cart cleared',
      description: 'All items have been removed from your cart.',
    });
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-safety-darkGray mb-4">
                Your cart is empty
              </h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/products">
                <Button className="bg-safety-blue hover:bg-safety-darkBlue">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-safety-darkGray">
                Shopping Cart
              </h1>
              <Button
                variant="outline"
                onClick={handleClearCart}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-6"
                  >
                    {/* Product Image */}
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-shrink-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full sm:w-32 h-32 object-contain rounded-md hover:opacity-75 transition-opacity"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-lg font-semibold text-safety-darkGray hover:text-safety-blue transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">
                        {product.category}
                      </p>
                      <p className="text-xl font-bold text-safety-blue mt-3">
                        ${product.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() =>
                              handleQuantityChange(product.id, quantity, -1)
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                            disabled={quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(product.id, quantity, 1)
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(product.id, product.name)}
                          className="text-red-600 hover:text-red-700 flex items-center gap-2 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="flex sm:flex-col items-end justify-between sm:justify-start">
                      <span className="text-sm text-gray-600 sm:mb-2">
                        Subtotal
                      </span>
                      <span className="text-xl font-bold text-safety-darkGray">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-safety-darkGray mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-medium">
                        ${getCartTotal().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-medium text-green-600">
                        Calculated at checkout
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold text-safety-darkGray">
                        <span>Total</span>
                        <span className="text-safety-blue">
                          ${getCartTotal().toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {isAuthenticated ? (
                    <Button className="w-full bg-safety-blue hover:bg-safety-darkBlue h-12 text-lg font-semibold">
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <Link to="/login">
                        <Button className="w-full bg-safety-blue hover:bg-safety-darkBlue h-12 text-lg font-semibold">
                          Sign In to Checkout
                        </Button>
                      </Link>
                      <p className="text-center text-sm text-gray-600">
                        New customer?{' '}
                        <Link
                          to="/signup"
                          className="text-safety-blue hover:underline font-medium"
                        >
                          Create an account
                        </Link>
                      </p>
                    </div>
                  )}

                  <Link to="/products">
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-safety-blue text-safety-blue hover:bg-safety-lightGray"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
