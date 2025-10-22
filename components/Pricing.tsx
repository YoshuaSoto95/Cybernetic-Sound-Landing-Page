import React from 'react';
import { motion } from 'framer-motion';
import MotionWrapper, { itemVariants } from './MotionWrapper';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, description, features, isHighlighted = false }) => {
  const cardClasses = `bg-gray-900/40 border rounded-2xl p-8 flex flex-col relative overflow-hidden h-full ${isHighlighted ? 'border-brand-pink shadow-glow-pink transform scale-105' : 'border-gray-800'}`;

  return (
    <motion.div variants={itemVariants} className={cardClasses}>
      {isHighlighted && (
        <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-4 py-1 rounded-bl-lg z-10">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <p className="text-5xl font-black mb-4">{price}<span className="text-lg font-medium text-gray-400">/mo</span></p>
      <p className="text-gray-400 mb-6 min-h-[40px]">
        {description}
      </p>
      <hr className="border-gray-700 my-6" />
      <ul className="space-y-4 flex-grow mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="w-5 h-5 text-brand-blue mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button
        className={`w-full mt-auto px-8 py-3 font-semibold rounded-full transition-colors ${isHighlighted ? 'bg-brand-pink text-white shadow-glow-pink' : 'bg-transparent border-2 border-gray-700 hover:border-brand-pink hover:bg-brand-pink/20'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
    const pricingData = [
        {
            plan: 'Basic',
            price: '$12',
            description: 'For individuals starting their audio journey.',
            features: [
                'HD Spatial Audio',
                'Basic AI Noise Cancellation',
                'Community Support',
                '10GB Secure Cloud Storage'
            ],
            isHighlighted: false,
        },
        {
            plan: 'Standard',
            price: '$25',
            description: 'For professionals and serious enthusiasts.',
            features: [
                'Lossless 3D Audio',
                'Advanced AI Noise Cancellation',
                'Neural Sync Technology',
                '100GB Secure Cloud Storage',
                'Priority Email Support'
            ],
            isHighlighted: true,
        },
        {
            plan: 'Premium',
            price: '$49',
            description: 'For enterprises and power users needing it all.',
            features: [
                'Everything in Standard',
                'Quantum Audio Processing',
                'Dedicated Onboarding',
                '1TB Secure Cloud Storage',
                '24/7 Priority Support'
            ],
            isHighlighted: false,
        }
    ];

    return (
        <section id="pricing" className="py-20 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                <MotionWrapper stagger={0.1}>
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Find the Plan That Fits You
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
                        Transparent pricing for every scale. No hidden fees. Ever.
                    </motion.p>
                </MotionWrapper>
                <MotionWrapper stagger={0.2} className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                    {pricingData.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </MotionWrapper>
            </div>
        </section>
    );
}

export default Pricing;