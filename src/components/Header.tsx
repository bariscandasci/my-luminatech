"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartAnimating, setCartAnimating] = useState(false);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (totalItems > prevCount) {
      setCartAnimating(true);
      const t = setTimeout(() => setCartAnimating(false), 400);
      setPrevCount(totalItems);
      return () => clearTimeout(t);
    }
    setPrevCount(totalItems);
  }, [totalItems, prevCount]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border" :"bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center gap-2 group shrink-0"
          >
            <AppLogo size={32} />
            <span className="font-display text-base md:text-lg font-bold tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
              LUMINA<span className="text-primary">TECH</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Ürünler", href: "#products" },
              { label: "Kampanya", href: "#campaign" },
              { label: "Quiz", href: "#quiz" },
            ]?.map((item) => (
              <a
                key={item?.href}
                href={item?.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {item?.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-10 h-10 glass-card rounded-full hover:neon-border-cyan transition-all duration-300 group"
              aria-label="Sepet"
            >
              <Icon
                name="ShoppingCartIcon"
                size={18}
                className="text-foreground group-hover:text-primary transition-colors duration-300"
              />
              {totalItems > 0 && (
                <span
                  className={`absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center font-display ${
                    cartAnimating ? "animate-cart-bounce" : ""
                  }`}
                >
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 group p-1"
              aria-label="Menü"
            >
              <span
                className={`block h-px bg-foreground transition-all duration-300 ${
                  menuOpen
                    ? "w-full rotate-45 translate-y-2" :"w-full group-hover:w-3/4"
                }`}
              />
              <span
                className={`block h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? "opacity-0 w-0" : "w-2/3 group-hover:w-full"
                }`}
              />
              <span
                className={`block h-px bg-foreground transition-all duration-300 ${
                  menuOpen
                    ? "w-full -rotate-45 -translate-y-2" :"w-full group-hover:w-1/2"
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
          {[
            { label: "Ürünler", href: "#products" },
            { label: "Kampanya", href: "#campaign" },
            { label: "Quiz", href: "#quiz" },
          ]?.map((item, i) => (
            <a
              key={item?.href}
              href={item?.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              {item?.label}
            </a>
          ))}
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="font-display text-2xl font-bold text-primary animate-fade-in-up delay-400"
          >
            Sepet {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </>
  );
}