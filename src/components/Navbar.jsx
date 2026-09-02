import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { brand, contact } from "../data/config";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/#process", label: "Our Process" },
  { to: "/#why-us", label: "Why Choose Us" },
  { to: "/#faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-black/[0.06] bg-white/90 backdrop-blur" : "border-transparent bg-white"
      }`}
    >
      <div className="container-page flex h-[74px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt={`${brand.name} logo`} className="h-10 w-10 rounded-xl" />
          <span className="font-serif text-lg font-semibold leading-tight text-ink">
            Robel <span className="text-royal-600">Consulting</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 pl-10 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `font-mono text-[13px] uppercase tracking-wide transition-colors ${
                  isActive ? "text-royal-600" : "text-ink/70 hover:text-royal-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary !px-5 !py-2.5">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link to="/contact" className="btn-primary !px-5 !py-2.5">
            Get a Free Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/[0.06] bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-mono text-sm uppercase tracking-wide text-ink/80 hover:bg-mist hover:text-royal-600"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary w-full">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
