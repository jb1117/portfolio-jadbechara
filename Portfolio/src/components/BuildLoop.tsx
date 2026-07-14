import { TimerReset } from "lucide-react";
import { buildLoop } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function BuildLoop() {
  return (
    <section className="section split-section" id="method">
      <SectionHeader
        eyebrow="How I build"
        title="The 62 prototypes are not the headline. The loop is."
        body="The signal is that AI tools changed the cost of learning. I use that speed to test sharper ideas, kill weaker ones, and reserve deeper effort for products that show evidence."
      />
      <div className="loop-panel">
        <div className="loop-title">
          <TimerReset size={22} />
          <span>48-hour validation loop</span>
        </div>
        <ol>
          {buildLoop.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
