import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Location", href: "#location" }
  ];
  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return <>
      <header
    className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-background/95 backdrop-blur-md border-border/50 py-4 shadow-lg shadow-black/20" : "bg-transparent border-transparent py-6"}`}
  >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <a
    href="#home"
    onClick={(e) => scrollToSection(e, "#home")}
    className="flex flex-col group cursor-pointer"
  >
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
              KHUFU
            </span>
            <span className="font-display text-xs text-primary/80 tracking-[0.3em] uppercase mt-0.5">
              Restaurant
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 items-center">
              {navLinks.map((link) => <li key={link.name}>
                  <a
    href={link.href}
    onClick={(e) => scrollToSection(e, link.href)}
    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
  >
                    {link.name}
                  </a>
                </li>)}
            </ul>
            <a
    href="#reservations"
    onClick={(e) => scrollToSection(e, "#reservations")}
    className="px-6 py-2.5 rounded-sm font-medium text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_10px_rgba(212,165,116,0)] hover:shadow-[0_0_20px_rgba(212,165,116,0.3)]"
  >
              Reserve a Table
            </a>
          </nav>

          <button
    className="md:hidden text-foreground hover:text-primary transition-colors"
    onClick={() => setMobileMenuOpen(true)}
  >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl md:hidden flex flex-col"
  >
            <div className="p-6 flex justify-end">
              <button
    className="text-foreground hover:text-primary transition-colors"
    onClick={() => setMobileMenuOpen(false)}
  >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              {navLinks.map((link, i) => <motion.a
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    key={link.name}
    href={link.href}
    onClick={(e) => scrollToSection(e, link.href)}
    className="font-serif text-3xl text-foreground hover:text-primary transition-colors"
  >
                  {link.name}
                </motion.a>)}
              <motion.a
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    href="#reservations"
    onClick={(e) => scrollToSection(e, "#reservations")}
    className="mt-4 px-8 py-3 rounded-sm font-medium text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(212,165,116,0.3)]"
  >
                Reserve a Table
              </motion.a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}
export {
  Navbar
};
