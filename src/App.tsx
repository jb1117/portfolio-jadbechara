import { BuildLoop } from "./components/BuildLoop";
import { Contact } from "./components/Contact";
import { Enterprise } from "./components/Enterprise";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ProductSections } from "./components/ProductSections";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductSections />
        <BuildLoop />
        <Enterprise />
        <Contact />
      </main>
    </>
  );
}
