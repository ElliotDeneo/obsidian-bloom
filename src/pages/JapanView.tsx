import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const JapanView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("japan-access") !== "granted") {
      navigate("/japan");
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="min-h-[85vh] px-6 md:px-12">
        <div className="max-w-5xl mx-auto py-20">
          {/* Header with subtle Japan-inspired styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-label mb-4" style={{ letterSpacing: "0.3em" }}>
              東京 — 2026
            </p>
            <h1 className="text-display text-4xl md:text-6xl text-foreground">
              Japan
            </h1>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="h-px w-16 bg-primary opacity-50" />
              <span className="text-label text-muted-foreground">
                Allt samlat i ett dokument
              </span>
              <div className="h-px w-16 bg-primary opacity-50" />
            </div>
          </motion.div>

          {/* PDF Viewer area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-sm overflow-hidden"
          >
            <div className="border-b border-border px-6 py-3 flex items-center justify-between">
              <span className="text-label">Document Viewer</span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-muted-foreground opacity-30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground opacity-30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground opacity-30" />
              </div>
            </div>
            <div className="relative" style={{ height: "75vh" }}>
              {/* Placeholder for PDF — replace src with actual PDF URL */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-2xl text-foreground mb-3">
                    PDF Document
                  </p>
                  <p className="text-body text-muted-foreground text-sm max-w-sm">
                    Laddar.
                  </p>
                </div>
              </div>
              <iframe
                src="/JP.pdf"
                className="w-full h-full relative z-10"
                title="Japan Document"
                style={{ background: "transparent" }}
              />
            </div>
          </motion.div>

          {/* Subtle divider */}
          <div className="mt-20 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span
              className="text-label text-muted-foreground"
              style={{ fontSize: "0.55rem", letterSpacing: "0.3em" }}
            >
              末 — End
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JapanView;
