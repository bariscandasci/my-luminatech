"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import UserMenu from "@/components/UserMenu";

const navItems = [
  { label: "Magaza", href: "#products" },
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
            ? "bg-[rgba(251,251,253,0.8)] backdrop-blur-xl"
            : "bg-[#fbfbfd]"
        }`}
      >
        <nav className="max-w-[980px] mx-auto px-4">
          <div className="h-[44px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/homepage" className="text-[#1d1d1f]" aria-label="LuminaTech">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[12px] text-[#1d1d1f] hover:text-[#6e6e73] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-5">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-[#1d1d1f] hover:text-[#6e6e73] transition-colors"
                aria-label="Ara"
              >
                <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative text-[#1d1d1f] hover:text-[#6e6e73] transition-colors"
                aria-label="Sepet"
              >
                <svg className="w-[15px] h-[15px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span
                    className={`absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#0071e3] text-white text-[10px] font-medium flex items-center justify-center ${
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
                className="lg:hidden text-[#1d1d1f] hover:text-[#6e6e73] transition-colors"
                aria-label="Menu"
              >
                {menuOpen ? (
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        {searchOpen && (
          <div className="border-t border-[#d2d2d7] bg-[#fbfbfd] animate-fade-in-down">
            <div className="max-w-[680px] mx-auto px-4 py-3">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="luminatech.com'da Ara"
                  className="w-full bg-[#f5f5f7] rounded-lg py-2 pl-10 pr-4 text-[14px] text-[#1d1d1f] placeholder:text-[#86868b] border-none focus:ring-2 focus:ring-[#0071e3]/20"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#fbfbfd] pt-[44px] lg:hidden animate-fade-in overflow-auto">
          <div className="px-6 py-4">
            <div className="mb-4">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Ara"
                  className="w-full bg-[#f5f5f7] rounded-lg py-2 pl-10 pr-4 text-[14px] text-[#1d1d1f] placeholder:text-[#86868b] border-none"
                />
              </div>
            </div>
            <div className="border-t border-[#d2d2d7] pt-4">
              {navItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-[#d2d2d7] text-[17px] font-semibold text-[#1d1d1f] animate-fade-in-up"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {item.label}
                  <svg className="w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3 text-[14px] text-[#1d1d1f]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Sepet {totalItems > 0 && `(${totalItems})`}
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3 text-[14px] text-[#1d1d1f]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Giris Yap
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
