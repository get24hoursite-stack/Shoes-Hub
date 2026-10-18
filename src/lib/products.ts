import n1 from "@/assets/n1.jpg";
import n2 from "@/assets/n2.jpg";
import n3 from "@/assets/n3.jpg";
import n4 from "@/assets/n4.jpg";
import a1 from "@/assets/a1.jpg";
import a2 from "@/assets/a2.jpg";
import a3 from "@/assets/a3.jpg";
import a4 from "@/assets/a4.jpg";

export type Product = {
  id: string;
  brand: "Nike" | "Adidas";
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  tag: string;
  rating: number;
  description: string;
  features: string[];
  colors: string[];
};

export const products: Product[] = [
  { id: "nike-air-max-1", brand: "Nike", name: "Air Max 1 OG", price: 32999, oldPrice: 38999, image: n1, tag: "Best Seller", rating: 4.9, description: "The icon that started it all. Visible Air cushioning, premium suede overlays and a timeless red & white colourway built for everyday comfort.", features: ["Visible Max Air unit", "Suede & mesh upper", "Rubber waffle outsole", "Padded collar"], colors: ["University Red", "White"] },
  { id: "nike-jordan-1", brand: "Nike", name: "Air Jordan 1 High", price: 54999, oldPrice: 62999, image: n2, tag: "Limited", rating: 5.0, description: "Legendary high-top silhouette in full-grain leather. Bold black & orange blocking made for the court and the streets.", features: ["Full-grain leather", "Encapsulated Air-Sole", "Wings logo collar", "High-top support"], colors: ["Black", "Shattered Orange"] },
  { id: "nike-af1", brand: "Nike", name: "Air Force 1 '07", price: 27999, oldPrice: 31999, image: n3, tag: "Classic", rating: 4.8, description: "Crisp triple-white leather and hoops heritage. The cleanest sneaker you'll own — pairs with literally everything.", features: ["Premium leather", "Nike Air cushioning", "Pivot-circle outsole", "Perforated toe box"], colors: ["Triple White"] },
  { id: "nike-pegasus", brand: "Nike", name: "Pegasus 41", price: 29999, oldPrice: 34999, image: n4, tag: "Running", rating: 4.7, description: "Responsive ReactX foam and Zoom Air units deliver an energised ride, mile after mile. Engineered mesh keeps you cool.", features: ["ReactX foam midsole", "Dual Zoom Air units", "Engineered mesh", "Reflective details"], colors: ["Volt", "Black"] },
  { id: "adidas-ultraboost", brand: "Adidas", name: "Ultraboost 1.0", price: 39999, oldPrice: 45999, image: a1, tag: "Best Seller", rating: 4.9, description: "Endless energy return with full-length BOOST cushioning and a sock-like Primeknit upper that adapts to your foot.", features: ["Full-length BOOST", "Primeknit upper", "Continental rubber", "Heel counter support"], colors: ["Core Black", "Cloud White"] },
  { id: "adidas-samba", brand: "Adidas", name: "Samba OG", price: 24999, oldPrice: 28999, image: a2, tag: "Trending", rating: 4.8, description: "Born on the football pitch, adopted by the streets. Soft leather, suede T-toe and the signature gum sole.", features: ["Leather upper", "Suede T-toe overlay", "Gum rubber cupsole", "Gold foil branding"], colors: ["Cloud White", "Core Black", "Gum"] },
  { id: "adidas-forum", brand: "Adidas", name: "Forum Low", price: 26999, oldPrice: 30999, image: a3, tag: "Retro", rating: 4.7, description: "'84 basketball legend with its iconic ankle strap. Clean leather and royal blue accents for a confident retro look.", features: ["Leather upper", "Hook-and-loop strap", "Rubber cupsole", "Trefoil heel logo"], colors: ["White", "Royal Blue"] },
  { id: "adidas-yeezy", brand: "Adidas", name: "Boost 350 V2", price: 64999, oldPrice: 72999, image: a4, tag: "Exclusive", rating: 5.0, description: "Ultra-soft Primeknit and a translucent BOOST midsole in a muted sand tone. Pure comfort, pure hype.", features: ["Primeknit upper", "Full BOOST midsole", "Translucent sole", "Heel pull tab"], colors: ["Sand", "Taupe"] },
];

export const formatPKR = (n: number) => "Rs " + n.toLocaleString("en-PK");
export const getProduct = (id: string) => products.find((p) => p.id === id);
