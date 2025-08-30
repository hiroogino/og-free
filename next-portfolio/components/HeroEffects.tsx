"use client";

import { useEffect } from "react";

export default function HeroEffects() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".js-hero") || undefined;
    const heroCard = document.querySelector<HTMLElement>(".js-hero-card") || undefined;
    if (!hero) return;

    // Particles
    const particlesContainer = document.createElement("div");
    particlesContainer.className = "particles";
    particlesContainer.style.cssText = `position:absolute;inset:0;pointer-events:none;z-index:1;`;
    hero.appendChild(particlesContainer);

    const createParticle = (container: HTMLElement, type: "normal" | "glow" = "normal") => {
      const p = document.createElement("div");
      if (type === "glow") {
        p.style.cssText = `position:absolute;width:8px;height:8px;background:radial-gradient(circle, rgba(37,99,235,.8) 0%, rgba(37,99,235,.2) 70%, transparent 100%);border-radius:50%;pointer-events:none;box-shadow:0 0 20px rgba(37,99,235,.5);`;
      } else {
        const w = Math.random() * 4 + 2;
        const h = Math.random() * 4 + 2;
        const r = Math.random() * 100 + 155;
        const g = Math.random() * 100 + 155;
        const a = Math.random() * 0.5 + 0.2;
        p.style.cssText = `position:absolute;width:${w}px;height:${h}px;background:rgba(${r},${g},255,${a});border-radius:50%;pointer-events:none;`;
      }
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 30 + 15;
      const delay = Math.random() * 10;
      p.style.left = `${x}%`;
      p.style.top = `${y}%`;
      p.style.animation = `floatEnhanced ${duration}s ${delay}s infinite linear`;
      container.appendChild(p);
    };

    const createConnectionLine = (container: HTMLElement) => {
      const line = document.createElement("div");
      line.style.cssText = `position:absolute;width:1px;height:100px;background:linear-gradient(180deg, transparent 0%, rgba(37,99,235,.3) 50%, transparent 100%);pointer-events:none;transform-origin:top;`;
      const x = Math.random() * 100;
      const rotation = Math.random() * 360;
      const duration = Math.random() * 20 + 10;
      line.style.left = `${x}%`;
      line.style.top = `0%`;
      line.style.transform = `rotate(${rotation}deg)`;
      line.style.animation = `lineFloat ${duration}s infinite ease-in-out`;
      container.appendChild(line);
    };

    for (let i = 0; i < 80; i++) createParticle(particlesContainer, "normal");
    for (let i = 0; i < 15; i++) createParticle(particlesContainer, "glow");
    for (let i = 0; i < 5; i++) createConnectionLine(particlesContainer);

    // Typing effect
    const textElements = Array.from(document.querySelectorAll<HTMLElement>(".hero-text-anime"));
    textElements.forEach((el, index) => {
      const text = el.textContent || "";
      el.textContent = "";
      el.style.overflow = "hidden";
      el.style.borderRight = "3px solid #2563eb";
      el.style.whiteSpace = "nowrap";
      let i = 0;
      const speed = 100;
      const start = index * 600;
      setTimeout(() => {
        const timer = window.setInterval(() => {
          if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
          } else {
            window.clearInterval(timer);
            setTimeout(() => (el.style.borderRight = "none"), 1000);
          }
        }, speed);
      }, start);
    });

    // Mouse ripple for impact buttons
    const buttons = Array.from(document.querySelectorAll<HTMLElement>(".btn-impact, .c-btn--impact"));
    const onRipple = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const ripple = document.createElement("span");
      ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}px;top:${y}px;background:rgba(255,255,255,.3);border-radius:50%;transform:scale(0);animation:rippleEffect .6s ease-out;pointer-events:none;`;
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };
    buttons.forEach((b) => b.addEventListener("click", onRipple));

    // Scroll parallax
    const onScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.3;
      const cardRate = scrolled * 0.1;
      if (hero) hero.style.transform = `translateY(${rate}px)`;
      if (heroCard) heroCard.style.transform = `perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(${cardRate}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Cleanup
    return () => {
      buttons.forEach((b) => b.removeEventListener("click", onRipple));
      window.removeEventListener("scroll", onScroll);
      particlesContainer.remove();
    };
  }, []);

  return null;
}

