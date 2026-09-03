import { useState } from "react";
import { MessageCircle, Send, CheckCircle2, Mail, Phone, MapPin, Clock3, Loader2, AlertCircle } from "lucide-react";
import { contact, formEndpoint } from "../data/config";
import { academicLevels, quoteServices } from "../data/content";
import Reveal from "./Reveal";

const contactDetails = [
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneLink },
  { icon: MessageCircle, label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappLink },
  { icon: Mail, label: "Email", value: contact.email, href: contact.emailLink },
  { icon: Mail, label: "Email (alt)", value: contact.secondaryEmail, href: contact.secondaryEmailLink },
  { icon: MapPin, label: "Location", value: contact.location },
  { icon: Clock3, label: "Working Hours", value: contact.hours },
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | submitted | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    formData.append("_subject", "New Research Inquiry — Robel Consulting Website");
    formData.append("_template", "table");

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("submitted");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-20 sm:py-28" id="contact">
      <div className="container-page grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-heading mt-4">Let's Discuss Your Research</h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Tell us about your project and our team will get back to you with a personalized quotation.
          </p>

          <div className="mt-8 space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal-50 text-royal-600">
                  <Icon size={17} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-ink/40">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-ink/80 transition-colors hover:text-royal-600"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-ink/80">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a href={contact.whatsappLink} target="_blank" rel="noreferrer" className="btn-secondary mt-8 inline-flex">
            <MessageCircle size={16} /> Chat with Robel Consulting on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={100} className="card-base p-6 sm:p-9">
          {status === "submitted" ? (
            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-verdant-50 text-verdant-600">
                <CheckCircle2 size={28} />
              </span>
              <h3 className="font-serif text-xl text-ink">Inquiry submitted</h3>
              <p className="max-w-sm text-sm text-ink/60">
                Thank you for reaching out. Our team will review your project details and respond with a
                personalized quotation shortly.
              </p>
              <button onClick={() => setStatus("idle")} className="btn-ghost mt-2">
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name">
                <input required name="Full Name" type="text" placeholder="Jane Wanjiru" className="input-field" />
              </Field>
              <Field label="Email">
                <input required name="Email" type="email" placeholder="you@email.com" className="input-field" />
              </Field>
              <Field label="Phone Number">
                <input required name="Phone Number" type="tel" placeholder="07xx xxx xxx" className="input-field" />
              </Field>
              <Field label="WhatsApp Number">
                <input name="WhatsApp Number" type="tel" placeholder="07xx xxx xxx" className="input-field" />
              </Field>
              <Field label="Academic Level">
                <select name="Academic Level" defaultValue="" className="input-field">
                  <option value="" disabled>Select level</option>
                  {academicLevels.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </Field>
              <Field label="Service Required">
                <select name="Service Required" defaultValue="" className="input-field">
                  <option value="" disabled>Select service</option>
                  {quoteServices.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Research Topic" full>
                <input name="Research Topic" type="text" placeholder="Working title of your research" className="input-field" />
              </Field>
              <Field label="Deadline">
                <input name="Deadline" type="date" className="input-field" />
              </Field>
              <Field label="Project Details" full>
                <textarea
                  name="Project Details"
                  rows={4}
                  placeholder="Tell us more about your research and requirements"
                  className="input-field resize-none"
                />
              </Field>

              {status === "error" && (
                <div className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-ember-100 bg-ember-50 px-4 py-3 text-sm text-ember-700">
                  <AlertCircle size={16} /> Something went wrong sending your inquiry. Please try again, or
                  message us directly on WhatsApp.
                </div>
              )}

              <div className="sm:col-span-2">
                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
                  {status === "sending" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Submit Research Inquiry <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children, full }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="font-mono text-[11px] uppercase tracking-wide text-ink/50">{label}</span>
      {children}
    </label>
  );
}
