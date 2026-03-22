import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const JapanPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "tok yo") {
      sessionStorage.setItem("japan-access", "granted");
      navigate("/japan/view");
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <Layout>
      <div className="min-h-[85vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-md text-center"
        >
          <div className="mb-12">
            <p className="text-label mb-4">Private Collection</p>
            <h1 className="text-display text-4xl md:text-5xl text-foreground">
              Japan
            </h1>
            <p className="text-body text-muted-foreground mt-4 text-sm">
              Den här sidan innehåller en plan för JP 2026. Skriv in lösenordet,
              har du det inte ska du inte vara här.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter passphrase"
                className="w-full bg-card border border-border rounded-sm px-5 py-4 text-foreground text-center text-sm tracking-widest font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                autoFocus
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-xs mt-3 tracking-wider uppercase font-body"
              >
                Incorrect passphrase
              </motion.p>
            )}

            <button type="submit" className="btn-primary mt-8 w-full">
              Enter
            </button>
          </motion.form>

          <div className="mt-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span
              className="text-label text-muted-foreground"
              style={{ fontSize: "0.6rem" }}
            >
              Restricted Access
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default JapanPassword;
