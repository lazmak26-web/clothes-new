import ClothingRailHero from "@/components/ui/product-rail-gallery";
import { PRODUCTS } from "@/lib/products";
import { CartProvider } from "@/components/site/cart";
import { Header } from "@/components/site/header";
import { ProductGrid } from "@/components/site/product-grid";
import { Care, Footer, NewsletterSection, Perks, Story } from "@/components/site/sections";

export default function Home() {
  return (
    <CartProvider>
      <div id="top" className="flex min-h-svh flex-col">
        <Header />
        <main className="flex-1">
          <ClothingRailHero
            items={PRODUCTS}
            hanger="wood"
            autoplay
            eyebrow="New drop · Three tees on the rail"
            heading="Pick it off the rail. Wear it out."
            caption="Brush along the rail, slide a hanger, tap a tee to take a closer look."
            className="py-10 sm:py-16"
            action={
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#shop"
                  className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
                >
                  Shop the edit
                </a>
                <a
                  href="#story"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-medium outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Our story
                </a>
              </div>
            }
          />
          <Perks />
          <ProductGrid products={PRODUCTS} />
          <Story />
          <Care />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
