
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Team } from './Team';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { GeminiAssistant } from './GeminiAssistant';
import { CustomCursor } from './CustomCursor';
import { MotivationalQuote } from './MotivationalQuote';
import { Stats } from './Stats';
import { Clients } from './Clients';
import { ServiceDetail } from './ServiceDetail';
import { SectionScrollNav } from './SectionScrollNav';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('[data-scroll-grow]');

      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { autoAlpha: 0, y: 48, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: 'power3.out',
            duration: 1,
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 0.8,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative" ref={pageRef}>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#1FCDD2] z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <SectionScrollNav />

      <main>
        <section id="home" data-scroll-grow>
          <Hero />
        </section>

        <section id="services" data-scroll-grow>
          <Services onSelectService={(s) => setSelectedService(s)} />
        </section>

        <section data-scroll-grow>
          <MotivationalQuote />
        </section>

        <section data-scroll-grow>
          <Stats />
        </section>

        <section id="portfolio" data-scroll-grow>
          <Portfolio />
        </section>

        <section data-scroll-grow>
          <Clients />
        </section>

        <section id="team" data-scroll-grow>
          <Team />
        </section>

        <section id="contact" data-scroll-grow>
          <Contact />
        </section>
      </main>

      <Footer />
      <GeminiAssistant />

      <AnimatePresence>
        {selectedService && (
          <ServiceDetail
            serviceType={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
