"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";
import UserMenu from "@/components/UserMenu";

const navItems = [
  { label: "Mağaza", href: "#products" },
  { label: "Aura Wristband", href: "#products" },
  { label: "Sonic Buds", href: "#products" },
  { label: "Nova Speaker", href: "#products" },
  { label: "Aksesuarlar", href: "#accessories" },
  { label: "Destek", href: "#" },
];

export default function Header() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartAnimating, setCartAnimating] = useState(false);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-12 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/homepage"
              className="flex items-center shrink-0"
            >
              <AppLogo size={20} />
            </Link>

            {/* Desktop Nav - Center */}
            <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.href + item.label}
                    href={item.href}
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Ara"
              >
                <Icon name="MagnifyingGlassIcon" size={18} />
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Sepet"
              >
                <Icon name="ShoppingBagIcon" size={18} />
                {totalItems > 0 && (
                  <span
                    className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center ${
                      cartAnimating ? "animate-cart-bounce" : ""
                    }`}
                  >
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <UserMenu />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Menü"
              >
                {menuOpen ? (
                  <Icon name="XMarkIcon" size={20} />
                ) : (
                  <Icon name="Bars2Icon" size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
              <div className="relative max-w-2xl mx-auto">
                <Icon
                  name="MagnifyingGlassIcon"
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="LuminaTech'te Ara"
                  className="w-full bg-card rounded-xl py-3 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-12 lg:hidden animate-fade-in overflow-auto">
          <div className="px-4 py-8 space-y-1">
            {navItems.map((item, i) => (
              <a
                key={item.href + item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 text-2xl font-semibold text-foreground hover:text-primary transition-colors animate-fade-in-up`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 border-t border-border mt-6">
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3 text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="ShoppingBagIcon" size={20} />
                Sepet {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3 text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="UserIcon" size={20} />
                Giriş Yap
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
