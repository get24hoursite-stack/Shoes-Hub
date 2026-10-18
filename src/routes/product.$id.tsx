import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Star, Check, Truck, ShieldCheck, ArrowLeft, Heart } from "lucide-react";
import { Page, ProductCard } from "@/components/Layout";
import { formatPKR, getProduct, products } from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.brand} ${loaderData.name} — SHOES HUB` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.brand} ${loaderData.name} — SHOES HUB` },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "Product — SHOES HUB" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
});

const sizes = [39, 40, 41, 42, 43, 44, 45];

function ProductPage() {
  const p = Route.useLoaderData();
  const [size, setSize] = useState<number | null>(null);
  const [color, setColor] = useState(p.colors[0]);
  const related = [...products.filter((x) => x.id !== p.id && x.brand === p.brand), ...products.filter((x) => x.brand !== p.brand)].slice(0, 4);

  return (
    <Page>
      <div className="mx-auto max-w-7xl px-5 py-8" key={p.id}>
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" />Back to shop</Link>
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
            <img src={p.image} alt={`${p.brand} ${p.name}`} width={1024} height={1024} className="w-full animate-in fade-in zoom-in-95 duration-500" />
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">{p.tag}</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{p.brand}</p>
            <h1 className="mt-2 font-display text-6xl leading-none">{p.name}</h1>
            <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              <span className="ml-2">{p.rating} · 128 reviews</span>
            </div>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">{formatPKR(p.price)}</span>
              <span className="text-muted-foreground line-through">{formatPKR(p.oldPrice)}</span>
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">{p.description}</p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-widest">Colour: <span className="text-muted-foreground">{color}</span></p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`rounded-full border px-4 py-2 text-sm transition ${color === c ? "border-primary text-primary" : "border-border"}`}>{c}</button>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-widest">Size (EU)</p>
            <div className="mt-3 grid grid-cols-7 gap-2">
              {sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`rounded-lg border py-3 text-sm font-semibold transition ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>{s}</button>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button className="flex-1 rounded-full bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition hover:scale-[1.02]">Add to Bag</button>
              <button aria-label="Wishlist" className="grid w-14 place-items-center rounded-full border border-border hover:border-primary"><Heart className="h-5 w-5" /></button>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest">Features</p>
              <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                {p.features.map((f) => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{f}</li>)}
              </ul>
            </div>
            <div className="mt-4 flex gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" />Delivery all over Pakistan</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />100% Original</span>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="mb-8 font-display text-5xl">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </section>
      </div>
    </Page>
  );
}
