import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import BenefitsSection from "../components/BenefitsSection";
import FeaturedCategories from "../components/FeaturedCategories";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import FeaturedProductSections from "../components/FeaturedProductSections";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Featured Products Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center font-heading">
          Featured Products
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Top-quality safety equipment trusted by industry professionals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-block bg-safety-blue hover:bg-safety-darkBlue text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </section>

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Featured Product Sections */}
      <FeaturedProductSections />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center font-heading">
            Why Choose SafetyPro?
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            We provide industry-leading safety solutions with unmatched quality
            and service
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-safety-lightGray rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-safety-blue rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">
                Certified Quality
              </h3>
              <p className="text-gray-600">
                All our products meet or exceed industry standards, with
                certifications from recognized testing laboratories.
              </p>
            </div>

            <div className="text-center p-6 bg-safety-lightGray rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-safety-blue rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Our team of safety professionals provides personalized guidance
                for your specific requirements.
              </p>
            </div>

            <div className="text-center p-6 bg-safety-lightGray rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-safety-blue rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                We design and implement tailored safety systems to meet the
                specific needs of your facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-safety-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to enhance your workplace safety?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of safety experts is ready to help you find the right
            solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-safety-blue hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="/products"
              className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors duration-300"
            >
              View Products
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
