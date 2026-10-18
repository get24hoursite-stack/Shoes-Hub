import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, RotateCcw, BadgeCheck } from "lucide-react";
import { Page, ProductCard } from "@/components/Layout";
import { products, formatPKR } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHOES HUB — Original Nike & Adidas Sneakers in Pakistan" },
      { name: "description", content: "Shop premium original Nike and Adidas shoes at the best prices in PKR." },
      { property: "og:title", content: "SHOES HUB — Nike & Adidas Sneakers" },
      { property: "og:description", content: "Premium original Nike and Adidas shoes, priced in PKR." },
    ],
  }),
  component: Index,
});

function Index() {
  const nike = products.filter((p) => p.brand === "Nike");
  const adidas = products.filter((p) => p.brand === "Adidas");
  return (
    <Page>
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-24">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">New Season 2026</p>
            <h1 className="mt-4 font-display text-7xl leading-[0.9] md:text-9xl">STEP INTO<br /><span className="text-gradient">GREATNESS</span></h1>
            <p className="mt-6 max-w-md text-muted-foreground">100% original Nike & Adidas sneakers. Premium quality, unbeatable prices across Pakistan.</p>
            <div className="mt-8 flex gap-3">
              <a href="#collection" className="rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition hover:scale-105">Shop Now</a>
              <a href="#nike" className="rounded-full border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition hover:border-primary">Explore</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-primary/30 blur-3xl" />
            <img src={hero} alt="Air Jordan 1 High" width={1024} height={1024} className="relative animate-float rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
          {[[BadgeCheck, "100% Original"], [Truck, "Nationwide Delivery"], [RotateCcw, "7-Day Returns"], [ShieldCheck, "Secure Shopping"]].map(([Icon, t]: any) => (
            <div key={t} className="flex items-center gap-3 text-sm font-semibold"><Icon className="h-6 w-6 text-primary" />{t}</div>
          ))}
        </div>
      </section>

      <div id="collection" />
      <Section id="nike" title="NIKE" subtitle="Just Do It" items={nike} />
      <Section id="adidas" title="ADIDAS" subtitle="Impossible Is Nothing" items={adidas} />
    </Page>
  );
}

function Section({ id, title, subtitle, items }: { id: string; title: string; subtitle: string; items: typeof products }) {
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-20 px-5 pt-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{subtitle}</p>
          <h2 className="font-display text-6xl">{title}</h2>
        </div>
        <span className="text-sm text-muted-foreground">{items.length} styles</span>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {items.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
