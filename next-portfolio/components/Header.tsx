import { NAV_LABELS, Locale } from "@/i18n/nav";

type HeaderItem = { href: string; label: string };
type HeaderProps = {
  items?: HeaderItem[];
  brand?: string;
  locale?: Locale;
};

export default function Header({ items, brand = "Portfolio", locale = "ja" }: HeaderProps) {
  const L = NAV_LABELS[locale];
  const navItems: HeaderItem[] = items ?? [
    { href: "#home", label: L.home },
    { href: "#about", label: L.about },
    { href: "#experience", label: L.experience },
    { href: "#skills", label: L.skills },
    { href: "#projects", label: L.projects },
    { href: "#contact", label: L.contact },
  ];

  return (
    <nav className="navbar js-navbar l-header c-navbar">
      <div className="nav-container js-nav-container l-container c-navbar__inner">
        <div className="nav-logo">
          <span className="logo-text">{brand}</span>
        </div>
        <ul className="nav-menu js-nav-menu c-navbar__menu">
          {(navItems).map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hamburger js-hamburger c-navbar__hamburger" aria-label="メニューを開く" role="button" tabIndex={0}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
    </nav>
  );
}
