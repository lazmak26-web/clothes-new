"use client";

import * as React from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "./cart";

const NAV = [
  { href: "#shop", label: "Shop" },
  { href: "#story", label: "Our story" },
  { href: "#care", label: "Care" },
  { href: "#newsletter", label: "Journal" },
];

export function Header() {
  const { items } = useCart();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-serif text-2xl tracking-tight">Hangline</a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button type="button" aria-label="Search" className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none">
            <Search className="size-[18px]" />
          </button>
          <a href="#shop" aria-label={`Bag, ${items.length} item${items.length === 1 ? "" : "s"}`} className="relative inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none">
            <ShoppingBag className="size-[18px]" />
            {items.length > 0 && (
              <span className="absolute right-1 top-1 flex min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[10px] font-medium leading-4 text-background tabular-nums">
                {items.length}
              </span>
            )}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring outline-none md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-base hover:bg-accent">
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
