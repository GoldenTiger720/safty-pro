
import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the subscription process
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 bg-safety-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">Stay Updated on Safety Standards</h2>
          <p className="mb-8">Subscribe to our newsletter to receive updates on product innovations and safety regulations</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow max-w-md"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-safety-blue font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              {isSubmitted ? 'Thank You!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
