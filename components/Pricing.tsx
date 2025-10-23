import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionWrapper, { itemVariants } from './MotionWrapper';
import PaymentModal from './PaymentModal';

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
  onSelectPlan: () => void;
  billingCycle: 'monthly' | 'annual';
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, description, features, isHighlighted = false, onSelectPlan, billingCycle }) => {
  const cardClasses = `bg-gray-900/40 border rounded-2xl p-8 flex flex-col relative overflow-hidden h-full ${isHighlighted ? 'border-brand-pink shadow-glow-pink lg:scale-105' : 'border-gray-800'}`;

  return (
    <motion.div variants={itemVariants} className={cardClasses}>
      {isHighlighted && (
        <div className="absolute top-0 right-0 bg-brand-pink text-white text-xs font-bold px-4 py-1 rounded-bl-lg z-10">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <div className="flex items-baseline mb-4">
        <p className="text-5xl font-black">{price}</p>
        <span className="text-lg font-medium text-gray-400">/mo</span>
      </div>
      <p className="text-gray-400 mb-6 min-h-[40px]">
        {description}
      </p>
      <AnimatePresence>
        {billingCycle === 'annual' && (
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-brand-blue text-sm font-semibold mb-4 -mt-2"
          >
            Billed annually
          </motion.p>
        )}
      </AnimatePresence>
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
        onClick={onSelectPlan}
        className={`w-full mt-auto px-8 py-3 font-semibold rounded-full transition-colors ${isHighlighted ? 'bg-brand-pink text-white shadow-glow-pink' : 'bg-transparent border-2 border-gray-700 hover:border-brand-pink hover:bg-brand-pink/20'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Choose Plan
      </motion.button>
    </motion.div>
  );
};

const BillingToggle: React.FC<{ billingCycle: 'monthly' | 'annual'; onToggle: (cycle: 'monthly' | 'annual') => void; }> = ({ billingCycle, onToggle }) => {
    return (
        <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
                Monthly
            </span>
            <motion.div 
                className="w-14 h-8 bg-gray-800/50 border border-gray-700 rounded-full flex items-center p-1 cursor-pointer"
                onClick={() => onToggle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                data-is-annual={billingCycle === 'annual'}
                style={{ justifyContent: billingCycle === 'monthly' ? 'flex-start' : 'flex-end' }}
            >
                <motion.div 
                    className="w-6 h-6 bg-brand-pink rounded-full shadow-glow-pink" 
                    layout 
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </motion.div>
             <span className={`font-medium transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-gray-500'}`}>
                Annual
            </span>
            <span className="bg-brand-blue/20 text-brand-blue text-xs font-bold px-2 py-1 rounded-md">
                Save 20%
            </span>
        </div>
    );
};


const Pricing: React.FC = () => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{ plan: string; price: string; } | null>(null);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

    const handleChoosePlan = (plan: any) => {
        const priceString = billingCycle === 'monthly'
            ? `$${plan.monthlyPrice}/mo`
            : `$${plan.annualPrice}/yr`;

        setSelectedPlan({ plan: plan.plan, price: priceString });
        setIsPaymentModalOpen(true);
    };

    const pricingData = [
        {
            plan: 'Basic',
            monthlyPrice: 12,
            annualPrice: 115,
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
            monthlyPrice: 25,
            annualPrice: 240,
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
            monthlyPrice: 49,
            annualPrice: 470,
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
        <>
            <section id="pricing" className="py-20 px-4 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <MotionWrapper stagger={0.1}>
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
                            Find the Plan That Fits You
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-gray-400 text-center max-w-2xl mx-auto">
                            Transparent pricing for every scale. No hidden fees. Ever.
                        </motion.p>
                    </MotionWrapper>
                    
                    <MotionWrapper>
                        <motion.div variants={itemVariants}>
                            <BillingToggle billingCycle={billingCycle} onToggle={setBillingCycle} />
                        </motion.div>
                    </MotionWrapper>

                    <MotionWrapper stagger={0.2} className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
                        {pricingData.map((plan, index) => (
                            <PricingCard 
                                key={index} 
                                {...plan} 
                                price={billingCycle === 'monthly' ? `$${plan.monthlyPrice}` : `$${Math.round(plan.annualPrice / 12)}`}
                                onSelectPlan={() => handleChoosePlan(plan)} 
                                billingCycle={billingCycle}
                            />
                        ))}
                    </MotionWrapper>
                </div>
            </section>
            <AnimatePresence>
                {isPaymentModalOpen && selectedPlan && (
                    <PaymentModal 
                        planName={selectedPlan.plan} 
                        price={selectedPlan.price} 
                        onClose={() => setIsPaymentModalOpen(false)} 
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default Pricing;