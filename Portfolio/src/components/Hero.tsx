import { ArrowRight, Mail, MapPin } from "lucide-react";
import { metrics } from "../data/portfolio";
import { profile } from "../data/profile";
import { MetricStrip } from "./MetricStrip";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">AI product builder · Product manager · Full-loop shipper</p>
        <h1>{profile.headline}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            Talk product
            <Mail size={18} />
          </a>
          <a className="button secondary" href="#flagship">
            See shipped work
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={16} />
            {profile.location}
          </span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Product velocity snapshot">
        <div className="panel-top">
          <span>9-month loop</span>
          <strong>Idea to market</strong>
        </div>
        <div className="flow-card active">
          <span>01</span>
          <p>Whif reaches organic App Store demand without paid spend.</p>
        </div>
        <div className="flow-card">
          <span>02</span>
          <p>Brandcaster closes its first annual subscriber across web, iOS, and Android.</p>
        </div>
        <div className="flow-card">
          <span>03</span>
          <p>62 prototypes create a repeatable filter for what deserves more time.</p>
        </div>
      </div>
      <MetricStrip metrics={metrics} />
    </section>
  );
}
