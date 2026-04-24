import React from "react";
import Link from "next/link";

const footerSections = [
  {
    title: "Alisveris ve Bilgi",
    links: [
      { label: "Magaza", href: "#products" },
      { label: "Aura Wristband", href: "#" },
      { label: "Sonic Buds", href: "#" },
      { label: "Nova Speaker", href: "#" },
      { label: "Aksesuarlar", href: "#" },
    ],
  },
  {
    title: "Hesap",
    links: [
      { label: "LuminaTech Hesabini Yonet", href: "/hesabim" },
      { label: "Siparis Durumu", href: "/siparislerim" },
      { label: "Alisveris Sepeti", href: "/cart" },
    ],
  },
  {
    title: "LuminaTech Magazasi",
    links: [
      { label: "Magaza Bul", href: "#" },
      { label: "Egitim Magazasi", href: "#" },
      { label: "Kurumsal", href: "#" },
    ],
  },
  {
    title: "LuminaTech Degerleri",
    links: [
      { label: "Erisilebilirlik", href: "#" },
      { label: "Cevre", href: "#" },
      { label: "Gizlilik", href: "#" },
    ],
  },
  {
    title: "Hakkimizda",
    links: [
      { label: "Kariyer", href: "#" },
      { label: "Yatirimci Iliskileri", href: "#" },
      { label: "Iletisim", href: "#" },
    ],
  },
];

const bottomLinks = [
  { label: "Gizlilik Politikasi", href: "#" },
  { label: "Kullanim Sartlari", href: "#" },
  { label: "Satis ve Iade", href: "#" },
  { label: "Hukuki", href: "#" },
  { label: "Site Haritasi", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-4">
        {/* Promo Text */}
        <div className="py-4 border-b border-[#d2d2d7]">
          <p className="text-[12px] text-[#6e6e73] leading-relaxed">
            Ucretsiz kargo ile alisveris yap. Ucretsiz ve kolay iade. Daha fazla alisveris yontemi icin{" "}
            <Link href="#" className="text-[#0066cc] hover:underline">
              en yakin LuminaTech magazasini
            </Link>{" "}
            bul veya{" "}
            <Link href="#" className="text-[#0066cc] hover:underline">
              444 LUMINA
            </Link>{" "}
            ara.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="py-6 grid grid-cols-2 md:grid-cols-5 gap-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
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
        <div className="py-4 border-t border-[#d2d2d7]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-[12px] text-[#6e6e73]">
              Copyright &copy; 2026 LuminaTech Tum haklari saklidir.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {bottomLinks.map((link, i) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < bottomLinks.length - 1 && (
                    <span className="text-[#d2d2d7]">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="text-[12px] text-[#6e6e73] mt-3">
            Turkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
