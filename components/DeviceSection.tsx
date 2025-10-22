
import React from 'react';
import { motion } from 'framer-motion';
import MotionWrapper, { itemVariants } from './MotionWrapper';

const FreshIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.9 10.3A5 5 0 0 0 18 9h-1.26a8 8 0 1 0-11.48 0H4a5 5 0 0 0-2.9 8.7" />
        <path d="M8 22v-3a4 4 0 0 0-4-4H3" />
    </svg>
);

const ProbeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.54 11.23c.52-3.1-1.25-6.17-4.3-6.69-3.05-.52-6.17 1.25-6.69 4.3-.52 3.1 1.25 6.17 4.3 6.69 3.05.52 6.17-1.25 6.69-4.3Z" />
        <path d="M11.23 4.46c-3.1.52-6.17-1.25-6.69-4.3-.52-3.1 1.25-6.17 4.3-6.69" />
        <path d="M12.77 21.54c3.1-.52 6.17 1.25 6.69 4.3.52 3.1-1.25 6.17-4.3 6.69" />
        <path d="m7 17 3-3" />
        <path d="m14 10-3 3" />
        <path d="m17 7-3 3" />
    </svg>
);

const SignalIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12.372a10 10 0 1 1 15.657-9.336" />
        <path d="M2 12.372a10 10 0 0 0 15.657 9.336" />
        <path d="M12 18.026a6 6 0 1 0 0-12.052" />
        <path d="M12 18.026a6 6 0 0 1 0-12.052" />
    </svg>
);

const FeatureColumn: React.FC<{ icon: React.ReactNode; title: string; items: string[] }> = ({ icon, title, items }) => (
    <motion.div variants={itemVariants}>
        <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 text-brand-blue">{icon}</div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="text-gray-400">{item}</li>
            ))}
        </ul>
    </motion.div>
);

const DeviceSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <MotionWrapper>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
                Cutting-Edge by Design
            </motion.h2>
        </MotionWrapper>
        <MotionWrapper stagger={0.3} className="grid md:grid-cols-3 gap-12">
          <FeatureColumn
            icon={<FreshIcon />}
            title="Fresh Impulses"
            items={["Quantum Processing", "Neural Sync", "Bio-Feedback"]}
          />
          <FeatureColumn
            icon={<ProbeIcon />}
            title="Protocol Probe"
            items={["Hyper-Secure Layer", "Decentralized ID", "Zero-Knowledge Proofs"]}
          />
          <FeatureColumn
            icon={<SignalIcon />}
            title="Signal Integrity"
            items={["Lossless Streaming", "Adaptive Codecs", "Interference Shielding"]}
          />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default DeviceSection;
