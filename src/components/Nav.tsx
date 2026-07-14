import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  ["Flagship", "#flagship"],
  ["Consumer", "#consumer"],
  ["AI Tools", "#ai-tools"],
  ["Platform", "#platform"],
  ["Experimental", "#experimental"],
  ["Method", "#method"],
];

export function Nav() {
  return (
    <header className="nav-shell">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Jad Bechara home">
          Jad Bechara
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </nav>
    </header>
  );
}
