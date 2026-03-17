import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiInstagram } from "react-icons/si";

const INSTAGRAM_URL = "https://instagram.com/ss_crafts_2026";
const INSTAGRAM_DM_URL = "https://ig.me/m/ss_crafts_2026";

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#top"
            className="font-script text-3xl md:text-4xl text-terracotta hover:opacity-80 transition-opacity"
            data-ocid="nav.link"
          >
            SS Crafts
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-foreground hover:text-terracotta transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              data-ocid="nav.primary_button"
            >
              <SiInstagram className="w-4 h-4" />
              Follow Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-terracotta transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-border py-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:text-terracotta transition-colors"
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                data-ocid="nav.primary_button"
              >
                <SiInstagram className="w-4 h-4" />
                Follow Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-banner.dim_1200x600.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/50 to-brown-dark/70" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-script text-mustard text-xl md:text-2xl mb-4 opacity-90">
          @ss_crafts_2026
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Crafting Beauty,{" "}
          <span className="text-mustard italic">One Piece</span> at a Time
        </h1>
        <p className="font-body text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Handmade wonders designed to inspire your everyday life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-terracotta text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            data-ocid="hero.primary_button"
          >
            <SiInstagram className="w-5 h-5" />
            Follow @ss_crafts_2026 on Instagram
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs font-body">
        <div className="w-0.5 h-10 bg-gradient-to-b from-white/60 to-transparent" />
        Scroll to explore
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative">
              <img
                src="/assets/generated/about-us.dim_800x600.jpg"
                alt="Artisan crafting handmade items in a warm workshop"
                className="w-full rounded-2xl shadow-craft object-cover aspect-[4/3]"
              />
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-terracotta/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p className="font-script text-terracotta text-lg mb-2">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Made with Heart,{" "}
              <span className="text-terracotta italic">Loved by All</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              Born from a deep love for handmade artistry, SS Crafts was founded
              with one simple belief — that every handcrafted piece carries a
              piece of the maker's soul. We pour our heart into every creation,
              from hand-painted ceramics to woven home décor, using only
              sustainable, eco-friendly materials sourced responsibly. Our
              mission is to bring warmth, beauty, and personality into your
              everyday life — one handmade piece at a time.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "✋ 100% Handmade",
                "🌿 Eco-Friendly Materials",
                "❤️ Made with Love",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-primary/10 text-terracotta border border-terracotta/25 px-4 py-2 rounded-full text-sm font-medium font-body"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const galleryItems = [
  {
    id: 1,
    image: "/assets/generated/gallery-decor.dim_600x600.jpg",
    category: "Home Décor",
    caption: "Handcrafted pieces to elevate your space",
    ocid: "gallery.item.1",
  },
  {
    id: 2,
    image: "/assets/generated/gallery-gifts.dim_600x600.jpg",
    category: "Gift Sets",
    caption: "Thoughtful gifts wrapped with love",
    ocid: "gallery.item.2",
  },
  {
    id: 3,
    image: "/assets/generated/gallery-personalized.dim_600x600.jpg",
    category: "Personalized",
    caption: "Custom creations made just for you",
    ocid: "gallery.item.3",
  },
];

function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 px-4"
      style={{ background: "oklch(0.94 0.015 60)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-terracotta text-lg mb-2">
            Browse Our Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Creations
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Each piece is a labor of love — explore our collections and find
            something that speaks to your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, i) => (
            <a
              key={item.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-card block overflow-hidden rounded-2xl bg-card shadow-craft reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              data-ocid={item.ocid}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-terracotta text-white text-xs font-semibold font-body px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <p className="font-body text-sm text-muted-foreground">
                  {item.caption}
                </p>
                <p className="font-body text-terracotta text-sm font-medium mt-2 flex items-center gap-1.5">
                  <SiInstagram className="w-3.5 h-3.5" />
                  View on Instagram
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "🧵",
    title: "Handmade with Care",
    desc: "Every piece is crafted by hand with meticulous attention to detail.",
    ocid: "features.item.1",
  },
  {
    icon: "🌿",
    title: "Sustainable Materials",
    desc: "We use eco-conscious, responsibly sourced materials in all our work.",
    ocid: "features.item.2",
  },
  {
    icon: "🎁",
    title: "Perfect for Gifting",
    desc: "Beautifully packaged and ready to delight your loved ones.",
    ocid: "features.item.3",
  },
  {
    icon: "🚚",
    title: "Worldwide Shipping",
    desc: "We deliver our handcrafted creations to your doorstep, globally.",
    ocid: "features.item.4",
  },
];

function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="font-script text-terracotta text-lg mb-2">
            The SS Crafts Difference
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Choose SS Crafts?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <div
              key={feat.ocid}
              className="feature-card bg-card border border-border rounded-2xl p-7 text-center reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              data-ocid={feat.ocid}
            >
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {feat.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "oklch(0.50 0.08 193)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-10"
        style={{ background: "oklch(0.97 0.01 75)" }}
      />
      <div
        className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-10"
        style={{ background: "oklch(0.97 0.01 75)" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
        <p className="font-script text-mustard text-xl mb-3">
          Let's create something beautiful
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to find your{" "}
          <span className="text-mustard italic">perfect piece?</span>
        </h2>
        <p className="font-body text-white/80 text-lg mb-10">
          Browse our collection on Instagram or reach out for a custom order.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-brown-dark px-8 py-4 rounded-full font-semibold font-body text-base hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg"
            data-ocid="cta.primary_button"
          >
            <SiInstagram className="w-5 h-5 text-terracotta" />
            Shop Now via Instagram
          </a>
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold font-body text-base hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            data-ocid="cta.secondary_button"
          >
            ✉️ DM for Custom Orders
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="py-16 px-4"
      style={{ background: "oklch(0.18 0.04 50)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-script text-5xl text-terracotta mb-3">SS Crafts</p>
          <p className="font-body text-white/60 text-sm italic mb-6">
            Crafting Beauty, One Piece at a Time
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-mustard hover:opacity-80 transition-opacity text-lg font-semibold font-body mb-6"
            data-ocid="footer.link"
          >
            <SiInstagram className="w-5 h-5" />
            @ss_crafts_2026
          </a>

          <p className="font-body text-white/50 text-sm">
            📩 DM us on Instagram for inquiries
          </p>
        </div>

        <div
          className="border-t pt-8"
          style={{ borderColor: "oklch(0.30 0.04 50)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body text-white/40">
            <p>© {year} SS Crafts. All rights reserved. Made with ❤️</p>
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
