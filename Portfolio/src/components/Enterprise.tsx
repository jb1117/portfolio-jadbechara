import { Building2, UsersRound } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeader } from "./SectionHeader";

export function Enterprise() {
  return (
    <section className="section enterprise-section" id="enterprise">
      <SectionHeader
        eyebrow="Enterprise foundation"
        title="Startup-speed builder, enterprise-trained operator."
        body={profile.enterprise}
      />
      <div className="enterprise-grid">
        <article>
          <Building2 size={24} />
          <strong>PwC delivery discipline</strong>
          <p>
            Managed implementation work where ambiguity, deadlines, executive updates, and cross-functional
            alignment were everyday operating conditions.
          </p>
        </article>
        <article>
          <UsersRound size={24} />
          <strong>100+ stakeholder environments</strong>
          <p>
            Comfortable translating between business owners, technical teams, vendors, and leadership without
            losing the product thread.
          </p>
        </article>
      </div>
    </section>
  );
}
