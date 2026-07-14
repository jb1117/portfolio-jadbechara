export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export const metrics: Metric[] = [
  {
    value: "2",
    label: "AI products shipped",
    detail: "Designed, coded, and released end to end",
  },
  {
    value: "710",
    label: "Whif downloads",
    detail: "Zero marketing spend",
  },
  {
    value: "93%",
    label: "Organic App Store search",
    detail: "Distribution from intent, not paid acquisition",
  },
  {
    value: "62",
    label: "Products tested",
    detail: "Most cut within 48 hours",
  },
];

export const buildLoop = [
  "Write the raw idea and user promise",
  "Build a 48-hour prototype with Claude Code and Codex",
  "Cut weak ideas quickly instead of polishing them",
  "Launch the few that earn real signal",
  "Measure distribution, conversion, latency, and retention signals",
];
