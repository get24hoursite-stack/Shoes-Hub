import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Star } from "lucide-react";
import type { ReactNode } from "react";
import { formatPKR, type Product } from "@/lib/products";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="font-display text-3xl tracking-wider text-foreground">
          SHOES<span className="text-primary">HUB</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground md:flex">
          <a href="/#nike" className="hover:text-primary">Nike</a>
          <a href="/#adidas" className="hover:text-primary">Adidas</a>
          <a href="/#collection" className="hover:text-primary">Collection</a>
        </nav>
        <div className="flex items-center gap-4 text-foreground">
          <Search className="h-5 w-5" />
          <div className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">0</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-4xl tracking-wider">SHOES<span className="text-primary">HUB</span></p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">Pakistan's premium destination for 100% original Nike & Adidas sneakers.</p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="font-semibold uppercase tracking-widest text-foreground">Shop</p>
          <p>Nike</p><p>Adidas</p><p>New Arrivals</p>
        </div>
        <div className="text-sm text-muted-foreground space-y-2">
          <p className="font-semibold uppercase tracking-widest text-foreground">Help</p>
          <p>Size Guide</p><p>Returns</p><p>Contact</p>
        </div>
      </div>
      <p className="border-t border-border py-5 text-center text-xs text-muted-foreground">© 2026 SHOES HUB. All rights reserved.</p>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (<><Header /><main>{children}</main><Footer /></>);
}

export function ProductCard({ p }: { p: Product }) {
  const off = Math.round((1 - p.price / p.oldPrice) * 100);
  return (
    <Link to="/product/$id" params={{ id: p.id }} className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img src={p.image} alt={`${p.brand} ${p.name}`} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">{p.tag}</span>
        <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2 py-1 text-[10px] font-bold text-foreground">-{off}%</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
          <span>{p.brand}</span>
          <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-primary text-primary" />{p.rating}</span>
        </div>
        <h3 className="mt-1 font-display text-2xl tracking-wide">{p.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-bold text-primary">{formatPKR(p.price)}</span>
          <span className="text-xs text-muted-foreground line-through">{formatPKR(p.oldPrice)}</span>
        </div>
      </div>
    </Link>
  );
}
