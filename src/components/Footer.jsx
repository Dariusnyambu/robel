import { Link } from "react-router-dom";
import { brand, contact, socials } from "../data/config";
import logo from "../assets/logo.png";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.3 22H1.2l8.1-9.3L1 2h7.3l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 4H5.6l12.1 16Z" />
    </svg>
  );
}

const socialIcons = {
  Facebook: FacebookIcon,
  "X (Twitter)": XIcon,
};

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/#process", label: "Process" },
  { to: "/#faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

const footerServices = [
  "PhD Thesis",
  "Masters Thesis",
  "Undergraduate Dissertation",
  "Data Collection",
  "Data Analysis",
  "Research Writing",
  "Editing & Proofreading",
  "Presentation Preparation",
];

export default function Footer() {
  return (
    <footer className="bg-royal-900 text-white">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt={`${brand.name} logo`} className="h-10 w-10 rounded-xl" />
            <span className="font-serif text-lg font-semibold">Robel Consulting</span>
          </div>
          <p className="mt-4 text-sm text-white/60">{brand.tagline}</p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.label] || FacebookIcon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-ember-600 hover:text-ember-500"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-white/70 hover:text-ember-500">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Services</p>
          <ul className="mt-4 space-y-2.5">
            {footerServices.map((s) => (
              <li key={s} className="text-sm text-white/70">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>
              <a href={contact.phoneLink} className="hover:text-ember-500">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-ember-500">
                WhatsApp: {contact.whatsapp}
              </a>
            </li>
            <li>
              <a href={contact.emailLink} className="hover:text-ember-500">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.secondaryEmailLink} className="hover:text-ember-500">
                {contact.secondaryEmail}
              </a>
            </li>
            <li>{contact.location}</li>
            <li>{contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-page text-center text-xs text-white/40">
          © 2026 Robel Consulting. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
