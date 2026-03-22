import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Placeholder = () => {
  return (
    <Layout>
      <div className="min-h-[85vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-lg"
        >
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <p className="text-label">In Progress</p>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h1 className="text-display text-4xl md:text-6xl text-foreground mb-6">
            Coming Soon
          </h1>

          <p className="text-body text-muted-foreground text-sm leading-relaxed">
            Får se om jag kommer på något att ha här.
          </p>

          <div className="mt-12">
            <div className="w-24 h-px bg-border mx-auto" />
          </div>

          <motion.div
            className="mt-16 inline-block w-1 h-1 rounded-full bg-primary"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Placeholder;
