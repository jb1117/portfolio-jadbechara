import { CheckCircle2 } from "lucide-react";
import { aiToolProducts } from "../data/products/aiTools";
import { consumerProducts } from "../data/products/consumer";
import { experimentalProducts } from "../data/products/experimental";
import { flagshipProducts } from "../data/products/flagship";
import { platformProducts } from "../data/products/platform";
import type { CompactProduct, FlagshipProduct, StandardProduct } from "../data/products/types";
import { SectionHeader } from "./SectionHeader";

const standardSections = [
  {
    id: "consumer",
    eyebrow: "Consumer apps",
    title: "Consumer Apps",
    body: "Mobile and web products built for everyday people.",
    products: consumerProducts,
  },
  {
    id: "ai-tools",
    eyebrow: "AI tools",
    title: "AI Tools & Utilities",
    body: "Purpose-built AI tools solving specific workflow and creative problems.",
    products: aiToolProducts,
  },
  {
    id: "platform",
    eyebrow: "Platform",
    title: "Platform & B2B",
    body: "Products targeting businesses, marketplaces, and professional workflows.",
    products: platformProducts,
  },
];

export function ProductSections() {
  return (
    <>
      <section className="section" id="flagship">
        <SectionHeader
          eyebrow="Flagship projects"
          title="Production-ready or App Store-released products."
          body="The deepest technical and product detail from the original portfolio."
        />
        <div className="flagship-list">
          {flagshipProducts.map((product) => (
            <FlagshipCard key={product.title} product={product} />
          ))}
        </div>
      </section>
      {standardSections.map((section) => (
        <section className="section" id={section.id} key={section.id}>
          <SectionHeader eyebrow={section.eyebrow} title={section.title} body={section.body} />
          <div className="product-grid">
            {section.products.map((product) => (
              <StandardCard key={product.title} product={product} />
            ))}
          </div>
        </section>
      ))}
      <section className="section" id="experimental">
        <SectionHeader
          eyebrow="Experimental"
          title="Experimental & Games"
          body="Smaller experiments, games, and creative builds."
        />
        <div className="compact-grid">
          {experimentalProducts.map((product) => (
            <CompactCard key={product.title} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

function FlagshipCard({ product }: { product: FlagshipProduct }) {
  return (
    <article className="flagship-card">
      <div className="flagship-main">
        <div className="product-title-row">
          <div>
            <h3>{product.title}</h3>
            <p>{product.tagline}</p>
          </div>
        </div>
        <TagRow tags={product.tags} />
        {product.details.map((detail) => (
          <div className="detail-block" key={detail.label}>
            <strong>{detail.label}</strong>
            <p>{detail.body}</p>
          </div>
        ))}
        <TagRow tags={product.stack} compact />
      </div>
      <aside className="flagship-side">
        {product.sidebar.map((section, index) => (
          <div className="side-section" key={`${section.heading}-${index}`}>
            {section.heading && <h4>{section.heading}</h4>}
            {section.rows.map((row) => (
              <div className="side-row" key={`${row.label}-${row.value}`}>
                <span>{row.label}</span>
                <strong>
                  {row.value}
                  {row.check && <CheckCircle2 size={15} />}
                </strong>
              </div>
            ))}
            {section.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        ))}
      </aside>
    </article>
  );
}

function StandardCard({ product }: { product: StandardProduct }) {
  return (
    <article className="standard-card">
      <div className="standard-top">
        <TagRow tags={product.tags} />
      </div>
      <h3>{product.title}</h3>
      <p className="tagline">{product.tagline}</p>
      <p>{product.description}</p>
      <TagRow tags={product.stack} compact />
    </article>
  );
}

function CompactCard({ product }: { product: CompactProduct }) {
  return (
    <article className="compact-product-card">
      <div className="compact-product-top">
        <h3>{product.title}</h3>
        <TagRow tags={product.tags} />
      </div>
      <p>{product.description}</p>
    </article>
  );
}

function TagRow({ tags, compact = false }: { tags: string[]; compact?: boolean }) {
  return (
    <div className={compact ? "tag-row compact-tags" : "tag-row"}>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
