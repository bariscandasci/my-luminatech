import React from "react";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Linear Single-Row Pattern */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <Link href="/homepage" className="flex items-center gap-2 group">
              <AppLogo size={28} />
              <span className="font-display text-sm font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
                LUMINA<span className="text-primary">TECH</span>
              </span>
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {[
                { label: "Ürünler", href: "#products" },
                { label: "Kampanya", href: "#campaign" },
                { label: "Sepet", href: "/cart" },
                { label: "Gizlilik", href: "#" },
                { label: "Kullanım Şartları", href: "#" },
              ]?.map((item) => (
                <Link
                  key={item?.label}
                  href={item?.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item?.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            © 2026 LuminaTech
          </p>
        </div>
      </div>
    </footer>
  );
}