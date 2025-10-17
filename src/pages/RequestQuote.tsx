import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FileText, CheckCircle } from 'lucide-react';

const RequestQuote = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productId = searchParams.get('productId');
  const product = productId ? products.find(p => p.id === productId) : null;

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: '',
    phone: '',
    productName: product?.name || '',
    quantity: '1',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        name: user.name,
        email: user.email,
      }));
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        productName: product.name,
      }));
    }
  }, [product]);

  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '', quantity: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    const quantity = parseInt(formData.quantity);
    if (!formData.quantity || isNaN(quantity) || quantity < 1) {
      newErrors.quantity = 'Please enter a valid quantity';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    toast({
      title: 'Quote request submitted!',
      description: 'We will get back to you within 24 hours.',
    });
  };

  if (isSubmitted) {
    return (
      <div>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-safety-lightGray via-white to-safety-lightGray">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-safety-darkGray mb-4">
                Quote Request Submitted!
              </h1>
              <p className="text-gray-600 mb-8">
                Thank you for your quote request. Our team will review your inquiry
                and get back to you within 24 hours with a detailed quotation.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-left">
                <h3 className="font-semibold text-lg mb-4">Request Details:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company:</span>
                      <span className="font-medium">{formData.company}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Product:</span>
                    <span className="font-medium">{formData.productName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-medium">{formData.quantity}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button className="bg-safety-blue hover:bg-safety-darkBlue">
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="border-safety-blue text-safety-blue">
                    Return to Home
                  </Button>
                </Link>
              </div>
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
      <main className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-safety-lightGray via-white to-safety-lightGray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-safety-blue rounded-full mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-safety-darkGray mb-2">
                Request a Quote
              </h1>
              <p className="text-gray-600">
                Fill out the form below and our team will provide you with a customized
                quote within 24 hours.
              </p>
            </div>

            {/* Product Info (if selected) */}
            {product && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-safety-darkGray">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                  <p className="text-xl font-bold text-safety-blue mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            )}

            {/* Quote Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-safety-darkGray font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`h-12 ${errors.name ? 'border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-safety-darkGray font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`h-12 ${errors.email ? 'border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-safety-darkGray font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-safety-darkGray font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`h-12 ${errors.phone ? 'border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productName" className="text-safety-darkGray font-medium">
                      Product Name
                    </Label>
                    <Input
                      id="productName"
                      name="productName"
                      type="text"
                      placeholder="Enter product name"
                      value={formData.productName}
                      onChange={handleChange}
                      className="h-12"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-safety-darkGray font-medium">
                      Quantity *
                    </Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      placeholder="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={`h-12 ${errors.quantity ? 'border-red-500' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-sm">{errors.quantity}</p>
                    )}
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-safety-darkGray font-medium">
                    Additional Details / Requirements
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide any additional information about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    disabled={isLoading}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-safety-blue hover:bg-safety-darkBlue h-12 text-lg font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit Quote Request'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="flex-1 border-gray-300 h-12"
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> All quote requests are reviewed by our sales team.
                You will receive a detailed quotation including pricing, availability, and
                delivery information within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestQuote;
