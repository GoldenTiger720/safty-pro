
import { Box, ShieldCheck, CreditCard, Award } from 'lucide-react';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1A1F2C] rounded-lg p-6 border border-gray-800 hover:border-safety-purple hover:bg-[#222939] hover:shadow-lg hover:shadow-safety-purple/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="bg-[#9b87f5]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Box className="w-8 h-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Millions of business offerings</h3>
            <p className="text-gray-300">
              Explore products and suppliers for your business from millions of offerings worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A1F2C] rounded-lg p-6 border border-gray-800 hover:border-safety-purple hover:bg-[#222939] hover:shadow-lg hover:shadow-safety-purple/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="bg-[#9b87f5]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Assured quality and transactions</h3>
            <p className="text-gray-300">
              Ensure production quality from verified suppliers, with your orders protected from payment to delivery.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1F2C] rounded-lg p-6 border border-gray-800 hover:border-safety-purple hover:bg-[#222939] hover:shadow-lg hover:shadow-safety-purple/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="bg-[#9b87f5]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">One-stop trading solution</h3>
            <p className="text-gray-300">
              Order seamlessly from product/supplier search to order management, payment, and fulfillment.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1A1F2C] rounded-lg p-6 border border-gray-800 hover:border-safety-purple hover:bg-[#222939] hover:shadow-lg hover:shadow-safety-purple/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="bg-[#9b87f5]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-[#9b87f5]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Tailored trading experience</h3>
            <p className="text-gray-300">
              Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, 
              to help grow your business every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
