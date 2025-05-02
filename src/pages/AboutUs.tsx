
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';
import { CheckCircle, Award, Shield, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm">
            <Link to="/" className="text-gray-500 hover:text-safety-blue">Home</Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800">About Us</span>
          </nav>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">About SafetyPro</h1>
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2005, SafetyPro has been at the forefront of providing high-quality safety products and systems for industrial, commercial, and residential applications around the world.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to protect lives and ensure workplace safety through innovative, reliable, and compliant safety solutions. We combine expertise, quality, and innovation to deliver products that meet or exceed international safety standards.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link to="/products" className="bg-safety-blue hover:bg-safety-darkBlue text-white px-6 py-3 rounded-md font-medium text-center">
                  Browse Our Products
                </Link>
                <Link to="/contact" className="border-2 border-safety-blue text-safety-blue hover:bg-safety-blue hover:text-white px-6 py-3 rounded-md font-medium transition-colors text-center">
                  Contact Our Team
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="SafetyPro Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our business decisions and help us maintain the highest standards in safety solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-safety-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety First</h3>
              <p className="text-gray-600">
                We prioritize human safety above all else in our product design, manufacturing, and recommendations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-safety-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure the highest quality and compliance with international standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-safety-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We build lasting relationships with our clients through exceptional service and personalized solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-safety-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our products and processes to stay ahead in safety technology and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming an industry leader in safety solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">From Local to Global</h3>
              <p className="text-gray-600 mb-4">
                SafetyPro began as a small local supplier of safety equipment. Today, we're proud to serve clients across multiple continents, providing comprehensive safety solutions for various industries.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've expanded our product line to include advanced fall protection systems, guardrails, walkways, and other safety equipment designed to protect workers in hazardous environments.
              </p>
              <p className="text-gray-600">
                Our team of safety experts, engineers, and technical specialists work together to design, manufacture, and install safety systems that save lives and prevent injuries every day.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/placeholder.svg" 
                alt="Company History" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Certifications & Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products meet or exceed the following international safety standards and certifications:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">EN ISO 14122-3</h3>
              <p className="text-sm text-gray-600">Safety of machinery - Permanent means of access to machinery</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">EN ISO 14122-4</h3>
              <p className="text-sm text-gray-600">Fixed ladders</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">NF E85-016</h3>
              <p className="text-sm text-gray-600">French standard for safety devices</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">EN ISO 14122-2</h3>
              <p className="text-sm text-gray-600">Working platforms and walkways</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-safety-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Enhance Your Workplace Safety?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect safety solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-safety-blue hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors">
              Contact Us
            </Link>
            <Link to="/products" className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
      
      <Footer />
    </div>
  );
};

export default AboutUs;
