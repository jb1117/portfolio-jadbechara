import type { Metric } from "../data/portfolio";

type MetricStripProps = {
  metrics: Metric[];
};

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <div className="metric-strip">
      {metrics.map((metric) => (
        <article className="metric" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
          <p>{metric.detail}</p>
        </article>
      ))}
    </div>
  );
}
