"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

const MAX = {
  name: 100,
  email: 254,
  company: 200,
  message: 2000,
};

const NAME_RE = /^[ぁ-ゟ一-龯ァ-ヿa-zA-Z\s\-]+$/;
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function sanitize(input: string, max: number) {
  return (input || "")
    .trim()
    .replace(/[<>\"'&]/g, (m) => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '&': '&amp;' }[m] as string))
    .slice(0, max);
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [attempts, setAttempts] = useState(0);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);

  const EMAILJS = useMemo(() => ({
    serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  }), []);

  useEffect(() => {
    if (EMAILJS.publicKey && EMAILJS.publicKey !== "YOUR_PUBLIC_KEY") {
      emailjs.init(EMAILJS.publicKey);
    }
  }, [EMAILJS.publicKey]);

  const validate = useCallback((form: HTMLFormElement) => {
    const data = new FormData(form);
    const name = (data.get("from_name") as string) || "";
    const email = (data.get("from_email") as string) || "";
    const message = (data.get("message") as string) || "";
    const company = ((data.get("company") as string) || "").slice(0, MAX.company);

    if (!name) return "お名前は必須です。";
    if (name.length > MAX.name) return `お名前は${MAX.name}文字以内で入力してください。`;
    if (!NAME_RE.test(name)) return "お名前には日本語、英字、ハイフンのみ使用できます。";

    if (!EMAIL_RE.test(email) || email.length > MAX.email) return "正しいメールアドレスを入力してください。";

    if (!message) return "メッセージは必須です。";
    if (message.length > MAX.message) return `メッセージは${MAX.message}文字以内で入力してください。`;

    // simple xss/urls check
    const dangerous = /<script|javascript:|vbscript:|on\w+\s*=|<iframe|<object|<embed/i;
    if (dangerous.test(`${name} ${email} ${message} ${company}`)) return "不正な文字列が検出されました。";

    return null;
  }, []);

  const inCooldown = cooldownUntil && Date.now() < cooldownUntil;

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inCooldown) {
      const remain = Math.ceil(((cooldownUntil as number) - Date.now()) / 1000);
      setStatus({ type: "error", message: `送信制限中です。${remain}秒後に再度お試しください。` });
      return;
    }
    const form = e.currentTarget;
    const err = validate(form);
    if (err) { setStatus({ type: "error", message: err }); return; }

    setStatus({ type: "loading", message: "送信中です..." });
    setAttempts((a) => a + 1);

    const data = new FormData(form);
    const params = {
      from_name: sanitize(data.get("from_name") as string, MAX.name),
      from_email: sanitize(data.get("from_email") as string, MAX.email),
      company: sanitize((data.get("company") as string) || "未記入", MAX.company),
      project_type: sanitize((data.get("project_type") as string) || "未選択", 100),
      budget: sanitize((data.get("budget") as string) || "未選択", 100),
      timeline: sanitize((data.get("timeline") as string) || "未選択", 100),
      message: sanitize(data.get("message") as string, MAX.message),
      timestamp: new Date().toLocaleString("ja-JP"),
      user_agent: navigator.userAgent.substring(0, 100),
    } as Record<string, string>;

    try {
      if (EMAILJS.serviceID !== "YOUR_SERVICE_ID") {
        await emailjs.send(EMAILJS.serviceID, EMAILJS.templateID, params);
        setStatus({ type: "success", message: "✅ お問い合わせありがとうございます！24時間以内にご返信いたします。" });
        form.reset();
        setAttempts(0);
      } else {
        // demo mode
        await new Promise((r) => setTimeout(r, 1200));
        setStatus({ type: "success", message: "✅ お問い合わせありがとうございます！（デモモード）" });
        form.reset();
        setAttempts(0);
      }
    } catch (err: any) {
      setStatus({ type: "error", message: `❌ ${err?.message || "送信に失敗しました"}` });
      // cooldown on repeated failures
      if (attempts + 1 >= 3) setCooldownUntil(Date.now() + 5 * 60 * 1000);
    }
  }, [EMAILJS, validate, attempts, inCooldown, cooldownUntil]);

  return (
    <form className="contact-form c-form js-animate" onSubmit={onSubmit} noValidate>
      <div className={`form-status c-form__status ${status.type === "success" ? "success" : status.type === "error" ? "error" : status.type === "loading" ? "loading" : ""}`}>{status.message}</div>
      <div className="form-group c-form__group">
        <label htmlFor="name" className="c-form__label">お名前 *</label>
        <input type="text" id="name" name="from_name" required className="c-form__input" maxLength={MAX.name} />
      </div>
      <div className="form-group c-form__group">
        <label htmlFor="email" className="c-form__label">メールアドレス *</label>
        <input type="email" id="email" name="from_email" required className="c-form__input" maxLength={MAX.email} />
      </div>
      <div className="form-group c-form__group">
        <label htmlFor="company" className="c-form__label">会社名・組織名</label>
        <input type="text" id="company" name="company" className="c-form__input" maxLength={MAX.company} />
      </div>
      <div className="form-group c-form__group">
        <label htmlFor="project" className="c-form__label">プロジェクト種別</label>
        <select id="project" name="project_type" className="c-form__select">
          <option value="">選択してください</option>
          <option value="direction">Webディレクション</option>
          <option value="frontend">フロントエンド開発</option>
          <option value="consulting">コンサルティング</option>
          <option value="global">グローバル案件</option>
          <option value="other">その他</option>
        </select>
      </div>
      <div className="form-group c-form__group">
        <label htmlFor="budget" className="c-form__label">予算感</label>
        <select id="budget" name="budget" className="c-form__select">
          <option value="">選択してください</option>
          <option value="under-50">50万円未満</option>
          <option value="50-100">50万円〜100万円</option>
          <option value="100-300">100万円〜300万円</option>
          <option value="300-500">300万円〜500万円</option>
          <option value="over-500">500万円以上</option>
          <option value="discuss">要相談</option>
        </select>
      </div>
      <div className="form-group c-form__group">
        <label htmlFor="timeline" className="c-form__label">希望納期</label>
        <select id="timeline" name="timeline" className="c-form__select">
          <option value="">選択してください</option>
          <option value="urgent">1ヶ月以内</option>
          <option value="normal">2-3ヶ月</option>
          <option value="relaxed">3-6ヶ月</option>
          <option value="flexible">6ヶ月以上</option>
          <option value="discuss">要相談</option>
        </select>
      </div>
      <div className="form-group c-form__group">
        <label htmlFor="message" className="c-form__label">プロジェクトの詳細・ご質問 *</label>
        <textarea id="message" name="message" rows={6} required placeholder="プロジェクトの概要、目的、要望などをご記入ください" className="c-form__textarea" maxLength={MAX.message}></textarea>
      </div>
      <button type="submit" className={`btn btn-primary c-btn c-btn--primary ${status.type === "loading" ? "is-loading" : ""}`} disabled={status.type === "loading"}>
        <i className="fas fa-paper-plane"></i>
        送信する
      </button>
    </form>
  );
}

