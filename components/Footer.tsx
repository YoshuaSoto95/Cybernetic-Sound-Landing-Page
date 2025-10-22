
import React from 'react';
import { motion } from 'framer-motion';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 border-t border-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Sinean Technologies Inc. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
            <SocialIcon>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.36-.21-1.93-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.94 4.02 2.97-1.47 1.15-3.32 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.89 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
            </SocialIcon>
             <SocialIcon>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H8.078v-2.89h2.36V9.62c0-2.335 1.393-3.64 3.518-3.64.996 0 1.85.074 2.095.107v2.58h-1.51c-1.15 0-1.37.545-1.37 1.32v1.74h2.86l-.46 2.89h-2.4V21.88c4.781-.75 8.438-4.887 8.438-9.88C22 6.477 17.523 2 12 2z" clipRule="evenodd" /></svg>
            </SocialIcon>
             <SocialIcon>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M8 2a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H8zm3.5 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 9a1 1 0 00-1 1v6a1 1 0 001 1h7a1 1 0 001-1v-6a1 1 0 00-1-1h-7z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.038c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v8h-4v-8zm1-2h2v2h-2v-2z"/></svg>
            </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
