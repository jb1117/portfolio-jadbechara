import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <p className="eyebrow">Next role</p>
        <h2>Looking for teams that value shipping, judgment, and speed.</h2>
        <p>
          I am strongest where product strategy, AI systems, user experience, and hands-on execution all meet.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${profile.email}`}>
          Email Jad
          <Mail size={18} />
        </a>
        <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
