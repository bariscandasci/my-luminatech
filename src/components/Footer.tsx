import React from "react";
import Link from "next/link";

const footerSections = [
  {
    title: "Alışveriş ve Bilgi",
    links: [
      { label: "Mağaza", href: "#products" },
      { label: "Aura Wristband", href: "#" },
      { label: "Sonic Buds", href: "#" },
      { label: "Nova Speaker", href: "#" },
      { label: "Aksesuarlar", href: "#" },
    ],
  },
  {
    title: "Hesap",
    links: [
      { label: "LuminaTech Hesabını Yönet", href: "/hesabim" },
      { label: "Sipariş Durumu", href: "/siparislerim" },
      { label: "Alışveriş Sepeti", href: "/cart" },
    ],
  },
  {
    title: "LuminaTech Mağazası",
    links: [
      { label: "Mağaza Bul", href: "#" },
      { label: "Eğitim İndirimi", href: "#" },
      { label: "Kurumsal", href: "#" },
    ],
  },
  {
    title: "LuminaTech Değerleri",
    links: [
      { label: "Erişilebilirlik", href: "#" },
      { label: "Çevre", href: "#" },
      { label: "Gizlilik", href: "#" },
    ],
  },
  {
    title: "Hakkımızda",
    links: [
      { label: "Kariyer", href: "#" },
      { label: "Yatırımcı İlişkileri", href: "#" },
      { label: "İletişim", href: "#" },
    ],
  },
];

const bottomLinks = [
  { label: "Gizlilik Politikası", href: "#" },
  { label: "Kullanım Şartları", href: "#" },
  { label: "Satış ve İade", href: "#" },
  { label: "Hukuki", href: "#" },
  { label: "Site Haritası", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Promo Text */}
        <div className="py-4 border-b border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Ücretsiz kargo ile alışveriş yap. Ücretsiz ve kolay iade. Daha fazla alışveriş yöntemi için{" "}
            <Link href="#" className="text-primary hover:underline">
              en yakın LuminaTech mağazasını
            </Link>{" "}
            bul veya{" "}
            <Link href="#" className="text-primary hover:underline">
              444 LUMINA
            </Link>{" "}
            ara.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="py-4 border-t border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              Copyright © 2026 LuminaTech Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {bottomLinks.map((link, i) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < bottomLinks.length - 1 && (
                    <span className="text-border">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
