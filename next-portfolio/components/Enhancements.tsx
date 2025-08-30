"use client";

import { useEffect } from "react";

export default function Enhancements() {
  useEffect(() => {
    const navbar = document.querySelector<HTMLElement>(".js-navbar") || undefined;
    const hamburger = document.querySelector<HTMLElement>(".js-hamburger") || undefined;
    const navMenu = document.querySelector<HTMLElement>(".js-nav-menu") || undefined;

    // Scroll navbar background
    const onScrollNav = () => {
      if (!navbar) return;
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(10, 10, 10, 0.98)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
      } else {
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
        navbar.style.boxShadow = "none";
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
      }
    };
    window.addEventListener("scroll", onScrollNav, { passive: true });
    onScrollNav();

    // Hamburger toggle
    const onHamburgerClick = () => {
      if (!hamburger || !navMenu) return;
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };
    hamburger?.addEventListener("click", onHamburgerClick);

    const onNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target?.tagName === "A" && hamburger && navMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    };
    navMenu?.addEventListener("click", onNavClick);

    // Smooth scroll for anchor links
    const onAnchor = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href) as HTMLElement | null;
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
    anchors.forEach((a) => a.addEventListener("click", onAnchor));

    // IntersectionObserver reveal
    const observerOptions: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          io.unobserve(el);
        }
      });
    }, observerOptions);
    const animated = Array.from(document.querySelectorAll(".js-animate")) as HTMLElement[];
    animated.forEach((el) => io.observe(el));

    // Active nav highlight (throttled)
    let scrollTimeout: number | null = null;
    const updateActive = () => {
      const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
      const links = Array.from(document.querySelectorAll('.js-nav-menu a[href^="#"]')) as HTMLAnchorElement[];
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.clientHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute("id") || "";
        }
      });
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    };
    const onScrollActive = () => {
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(updateActive, 10);
    };
    window.addEventListener("scroll", onScrollActive, { passive: true });
    updateActive();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", onScrollNav);
      window.removeEventListener("scroll", onScrollActive);
      hamburger?.removeEventListener("click", onHamburgerClick);
      navMenu?.removeEventListener("click", onNavClick);
      anchors.forEach((a) => a.removeEventListener("click", onAnchor));
      io.disconnect();
    };
  }, []);

  return null;
}
