type FooterItem = { href: string; label: string };
type FooterProps = { items?: FooterItem[] };

export default function Footer({ items }: FooterProps) {
  const links: FooterItem[] = items ?? [
    { href: "#home", label: "ホーム" },
    { href: "#about", label: "プロフィール" },
    { href: "#experience", label: "実績" },
    { href: "#contact", label: "お問い合わせ" },
  ];

  return (
    <footer className="footer p-footer">
      <div className="container l-container">
        <div className="footer-content p-footer__content">
          <div className="footer-logo">
            <span className="logo-text">Portfolio</span>
            <p>フリーランス Webディレクター</p>
          </div>
          <div className="footer-links p-footer__links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom p-footer__bottom">
          <p>&copy; 2024 Web Director Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
