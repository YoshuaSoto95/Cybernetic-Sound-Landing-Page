import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PaymentModalProps {
  onClose: () => void;
  planName: string;
  price: string;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.95 },
  visible: { 
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

type PaymentMethod = 'paypal' | 'visa' | 'mastercard' | 'bitcoin';

// SVG Icons for Payment Methods
const PaypalIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.208 6.462c.316-1.173 1.38-1.93 2.583-1.93h8.62c4.463 0 8.248 3.22 8.248 7.488 0 4.16-3.113 7.02-7.318 7.02h-2.756c-.658 0-1.242.443-1.398 1.068l-.93 3.638H7.076l2.11-8.246c.15-.59-.28-1.17-.86-1.17H6.203c-.698 0-1.292.48-1.41 1.17l-1.93 7.246H.75l3.197-11.956zM15.42 12c0-1.815-1.57-3.13-3.602-3.13h-2.67c-.512 0-.98.33-1.13.812l-1.258 4.887c-.015.045.045.06.075.06h3.145c2.4 0 4.05-1.53 4.05-3.69z" fill="currentColor"/></svg>;
const VisaIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.15 9.24-2.64-5.94H3.63l4 12.13H10.1l4-12.13H11.21L9.15 9.24zm8.36 6.19h2.52L17.38 3.3h-2.89zm-6-12.13-1.28 5.7-0.77-5.7H6.38L8.5 15.43h2.6l5.21-12.13z" fill="currentColor"/></svg>;
const MastercardIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" fill="currentColor"/></svg>;
const BitcoinIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2.46 14.5v-1.55h-1.5V13.3h1.5v-2.6c0-1.85 1-2.77 2.66-2.77.6 0 1.03.08 1.34.19l-.34 1.95c-.18-.06-.48-.13-.84-.13-.64 0-.97.34-.97.96v2.4h1.99l-.29 1.65h-1.7v3.05c-1.07.2-2.18.2-3.25-.15z" fill="currentColor"/></svg>;


const PaymentModal: React.FC<PaymentModalProps> = ({ onClose, planName, price }) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('paypal');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    console.log("Form submitted", { planName, price, selectedMethod });
    onClose();
  };

  const paymentMethods: { id: PaymentMethod; icon: React.ReactNode; name: string }[] = [
    { id: 'paypal', icon: <PaypalIcon />, name: 'PayPal' },
    { id: 'visa', icon: <VisaIcon />, name: 'Visa' },
    { id: 'mastercard', icon: <MastercardIcon />, name: 'Mastercard' },
    { id: 'bitcoin', icon: <BitcoinIcon />, name: 'Bitcoin' },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] backdrop-blur-sm p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-gray-900/80 border border-gray-700 rounded-2xl p-6 md:p-8 w-full max-w-3xl"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Pasarela de pago</h2>
            <p className="text-gray-400 mb-6">Complete su compra de forma segura.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" id="name" required className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-pink transition" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" id="email" required className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-pink transition" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                <input type="tel" id="phone" className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-pink transition" placeholder="(123) 456-7890" />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
                <div className="grid grid-cols-4 gap-3">
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-3 border rounded-lg flex items-center justify-center transition-all duration-200 ${
                        selectedMethod === method.id 
                        ? 'border-brand-pink bg-brand-pink/20 text-brand-pink ring-2 ring-brand-pink' 
                        : 'border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500'
                      }`}
                      aria-label={method.name}
                    >
                      <span className="w-8 h-8">{method.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center mt-2">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-brand-pink focus:ring-brand-pink focus:ring-offset-gray-900"
                  />
                  <label htmlFor="terms" className="ml-3 block text-sm text-gray-400">
                    I agree to the{' '}
                    <a href="#" className="font-medium text-brand-pink hover:underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

               <motion.button 
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-full bg-brand-pink text-white shadow-glow-pink mt-6 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={agreedToTerms ? { scale: 1.05 } : {}}
                whileTap={agreedToTerms ? { scale: 0.95 } : {}}
                disabled={!agreedToTerms}
              >
                Pagar {price}
              </motion.button>
            </form>
          </div>

          {/* Right Side: Invoice */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-6">Factura</h3>
              <div className="space-y-4 flex-grow">
                  <div className="flex justify-between items-center text-gray-300">
                      <span>Plan:</span>
                      <span className="font-semibold">{planName}</span>
                  </div>
                   <div className="flex justify-between items-center text-gray-300">
                      <span>Precio:</span>
                      <span className="font-semibold">{price}/mo</span>
                  </div>
              </div>
              <hr className="border-gray-600 my-4" />
              <div className="flex justify-between items-center text-white font-bold text-lg">
                  <span>Total:</span>
                  <span>{price}/mo</span>
              </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentModal;