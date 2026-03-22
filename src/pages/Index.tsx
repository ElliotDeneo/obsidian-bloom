import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";
import heroImg from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  {
    src: gallery1,
    title: "Vandring",
    subtitle: "Les Houches, France",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: gallery2,
    title: "Grönt",
    subtitle: "Valais, Switzerland",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: gallery4,
    title: "Osaka castle",
    subtitle: "Japan, 2025",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: gallery3,
    title: "Bakgata i Tokyo",
    subtitle: "Tokyo, Japan",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: gallery5,
    title: "Glittertind",
    subtitle: "2022",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    src: gallery6,
    title: "Hiroshima castle",
    subtitle: "2025",
    span: "md:col-span-1 md:row-span-1",
  },
];

const Index = () => {
  const [lightboxImage, setLightboxImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-20 px-6 md:px-12">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={heroImg}
            alt="Cinematic landscape"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, hsl(0 0% 6%) 0%, hsl(0 0% 6% / 0.4) 40%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <p className="text-label mb-4">Tjena</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-display text-4xl md:text-7xl lg:text-8xl text-foreground max-w-4xl">
              Det här är en hemsida
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body text-muted-foreground mt-6 max-w-xl text-sm md:text-base">
              Jag vet inte riktigt vad jag ska fylla den med. Så här är lite
              bilder jag har fotat.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="page-section px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-display text-2xl md:text-4xl text-foreground">
                Portfolio
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[280px]">
            {galleryItems.map((item, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.08}
                className={`${item.span} min-h-0`}
              >
                <div
                  className="gallery-item w-full h-full rounded-sm"
                  onClick={() => setLightboxImage(item)}
                >
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay flex items-end p-5">
                    <div>
                      <p className="font-display text-lg text-foreground">
                        {item.title}
                      </p>
                      <p
                        className="text-label mt-1"
                        style={{ color: "hsl(0 0% 70%)" }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="page-section px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="text-display text-2xl md:text-4xl text-foreground leading-relaxed">
              Fina bilder va? — Egentligen behövde jag bara hosta en pdf på
              nätet, därav hemsidan
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-8 h-px w-12 bg-primary mx-auto" />
          </ScrollReveal>
        </div>
      </section>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </Layout>
  );
};

export default Index;
