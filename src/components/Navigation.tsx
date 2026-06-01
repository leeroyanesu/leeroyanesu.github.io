import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { label: "about",      href: "#about" },
  { label: "services",   href: "#services" },
  { label: "experience", href: "#experience" },
  { label: "skills",     href: "#skills" },
  { label: "projects",   href: "#projects" },
  { label: "contact",    href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#about")}
            className="flex items-center gap-1 font-mono-display text-sm font-bold"
          >
            <span className="text-primary">{">"}</span>
            <img src="/icon.png" alt="MrLeeC" className="w-20 h-20" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = active === href.slice(1);
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className={`font-mono-display text-xs tracking-widest uppercase transition-all duration-200 relative pb-1 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <span className="absolute -left-3 top-0 text-primary opacity-70">{">"}</span>
                  )}
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-primary/50" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive = active === href.slice(1);
              return (
                <button
                  key={label}
                  onClick={() => scrollTo(href)}
                  className={`flex items-center gap-3 w-full px-4 py-3.5 font-mono-display text-xs tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-primary border-l-2 border-primary pl-3.5"
                      : "text-muted-foreground hover:text-foreground border-l-2 border-transparent pl-3.5"
                  }`}
                >
                  <span className={isActive ? "text-primary" : "opacity-0"}>{">"}</span>
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
