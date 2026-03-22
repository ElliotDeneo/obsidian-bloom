import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxProps {
  image: { src: string; title: string; subtitle: string } | null;
  onClose: () => void;
}

const Lightbox = ({ image, onClose }: LightboxProps) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm cursor-pointer"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-5xl max-h-[85vh] mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.title}
              className="max-w-full max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-xl text-foreground">{image.title}</h3>
              <p className="text-label mt-1">{image.subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
