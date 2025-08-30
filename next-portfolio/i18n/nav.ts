export type Locale = "ja" | "en";

export const NAV_LABELS: Record<Locale, { home: string; about: string; experience: string; skills: string; projects: string; contact: string }>
  = {
    ja: {
      home: "ホーム",
      about: "プロフィール",
      experience: "経験・実績",
      skills: "スキル",
      projects: "プロジェクト",
      contact: "お問い合わせ",
    },
    en: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  };
