import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import CursorEffect from './CursorEffect';

interface LayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="noise-overlay" />
      <CursorEffect />
      <Navigation />
      <motion.main
        className="flex-1 pt-16"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
