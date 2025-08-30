import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaButton from "@/components/CtaButton";
import HeroEffects from "@/components/HeroEffects";
import ContactForm from "@/components/ContactForm";
import ExperienceCard from "@/components/ExperienceCard";
import SkillItem from "@/components/SkillItem";
import StatCard from "@/components/StatCard";
import TagList from "@/components/TagList";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
export default function Home() {
  return (
    <>
      {/* ナビゲーション */}
      <Header />

      {/* ヒーローセクション */}
      <section id="home" className="hero js-hero l-hero p-hero">
        <div className="hero-container l-container l-hero__container">
          <div className="hero-content">
            <div className="hero-impact">
              <h1 className="hero-title-impact">
                <span className="hero-line-1">
                  <span className="hero-text-anime">Weaving</span>
                </span>
                <span className="hero-line-2">
                  <span className="hero-text-anime">Digital</span>
                  <span className="hero-text-anime">Future</span>
                </span>
                <span className="hero-line-3">
                  <span className="hero-japanese">デジタルの未来を紡ぐ</span>
                </span>
              </h1>
              <div className="hero-role">
                <span className="role-tag">Web Director</span>
                <span className="role-tag">Frontend Developer</span>
                <span className="role-tag">Project Manager</span>
              </div>
            </div>
            <p className="hero-description-new">
              10年以上の豊富な経験を持つWebディレクターとして、<br />
              大規模・多国籍チームでの実装から設計まで一貫したサポートを提供。<br />
              <strong>グローバル案件での即戦力として、デジタル体験の革新を推進。</strong>
            </p>
            <div className="hero-stats-inline">
              <div className="stat-inline">
                <span className="stat-number-inline">10+</span>
                <span className="stat-label-inline">Years Experience</span>
              </div>
              <div className="stat-inline">
                <span className="stat-number-inline">50+</span>
                <span className="stat-label-inline">Projects</span>
              </div>
              <div className="stat-inline">
                <span className="stat-number-inline">20+</span>
                <span className="stat-label-inline">Global</span>
              </div>
            </div>
            {/* CTAボタン */}
            <div className="hero-buttons">
              <CtaButton href="#contact" variant="primary">
                <span>プロジェクトを始める</span>
                <i className="fas fa-arrow-right"></i>
              </CtaButton>
              <CtaButton href="#experience" variant="outline">
                <span>実績を見る</span>
                <i className="fas fa-eye"></i>
              </CtaButton>
            </div>
          </div>
          {/* 右側ビジュアル */}
          <div className="hero-visual js-animate">
            <div className="hero-card js-hero-card c-card c-card--glass p-hero__card">
              <div className="card-glow p-hero__glow"></div>
              <div className="card-content">
                <i className="fas fa-globe-americas"></i>
                <div className="card-title">グローバル対応</div>
                <p>海外クライアントとの英語コミュニケーション経験豊富</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroEffects />

      {/* プロフィール */}
      <section id="about" className="about p-about l-section">
        <div className="container l-container">
          <h2 className="section-title">プロフィール</h2>
          <div className="about-content p-about__content">
            <div className="about-text js-animate">
              <h3>経験豊富なWebディレクター</h3>
              <p>
                Webディレクターとして10年以上の経験を持ち、大規模・多国籍チームによるWebサイト構築を主導してきました。
                海外アパレルブランドのECサイト立ち上げ、大手家電メーカー海外サイトのディレクション、
                国内大手飲料メーカーやテレビ局のWebプロジェクトを多数担当しています。
              </p>
              <p>
                近年はフロントエンド実装スキルを活かし、設計からコーディング、品質管理まで一貫して対応。
                海外クライアントとの英語によるメール・ドキュメントやり取りも経験し、
                グローバル案件や外資系環境でも即戦力として対応可能です。
              </p>
              <div className="about-highlights p-about__highlights">
                <div className="highlight-item">
                  <i className="fas fa-trophy"></i>
                  <span>10年以上の経験</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-users"></i>
                  <span>多国籍チーム主導</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-language"></i>
                  <span>英語対応可能</span>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <StatCard value="10+" label="年の経験" />
              <StatCard value="50+" label="プロジェクト" />
              <StatCard value="20+" label="グローバル案件" />
            </div>
          </div>
        </div>
      </section>

      {/* 経験・実績 */}
      <section id="experience" className="experience p-experience l-section">
        <div className="container l-container">
          <h2 className="section-title">経験・実績</h2>
          <div className="experience-grid p-experience__grid">
            <ExperienceCard
              iconClass="fas fa-shopping-bag"
              title="海外アパレルブランド"
              subtitle="ECサイト立ち上げ"
              description="多国籍チームと連携し、大規模ECサイトの企画から運用開始までを主導。ユーザー体験を重視した設計で売上向上に貢献。"
              tags={["EC", "多国籍", "UX設計"]}
            />
            <ExperienceCard
              iconClass="fas fa-tv"
              title="大手家電メーカー"
              subtitle="海外サイトディレクション"
              description="グローバル展開を見据えた企業サイトの戦略立案・設計・実装を統括。多言語対応とブランド統一を実現。"
              tags={["企業サイト", "多言語", "戦略立案"]}
            />
            <ExperienceCard
              iconClass="fas fa-broadcast-tower"
              title="大手飲料メーカー・テレビ局"
              subtitle="Webプロジェクト多数"
              description="ブランドサイト、キャンペーンサイト、メディアサイトなど多様なプロジェクトでディレクション業務を担当。"
              tags={["ブランド", "キャンペーン", "メディア"]}
            />
          </div>
        </div>
      </section>

      {/* スキル */}
      <section id="skills" className="skills p-skills l-section">
        <div className="container l-container">
          <h2 className="section-title">スキル</h2>
          <div className="skills-content p-skills__content">
            <div className="skills-category c-card p-skills__category js-animate">
              <h3>ディレクション</h3>
              <div className="skill-grid p-skills__grid">
                <SkillItem iconClass="fas fa-project-diagram" label="プロジェクト管理" />
                <SkillItem iconClass="fas fa-users-cog" label="チームマネジメント" />
                <SkillItem iconClass="fas fa-sitemap" label="情報設計" />
                <SkillItem iconClass="fas fa-pencil-ruler" label="UX/UI設計" />
              </div>
            </div>

            <div className="skills-category c-card p-skills__category js-animate">
              <h3>技術スキル</h3>
              <div className="skill-grid p-skills__grid">
                <SkillItem iconClass="fab fa-html5" label="HTML5/CSS3" />
                <SkillItem iconClass="fab fa-js" label="JavaScript" />
                <SkillItem iconClass="fab fa-react" label="React/Vue.js" />
                <SkillItem iconClass="fas fa-mobile-alt" label="レスポンシブ" />
              </div>
            </div>

            <div className="skills-category c-card p-skills__category js-animate">
              <h3>コミュニケーション</h3>
              <div className="skill-grid p-skills__grid">
                <SkillItem iconClass="fas fa-language" label="英語対応" />
                <SkillItem iconClass="fas fa-globe" label="グローバル案件" />
                <SkillItem iconClass="fas fa-handshake" label="クライアント折衝" />
                <SkillItem iconClass="fas fa-file-alt" label="ドキュメント作成" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクト */}
      <section id="projects" className="projects p-projects l-section">
        <div className="container l-container">
          <h2 className="section-title">プロジェクト実績</h2>
          <div className="projects-grid p-projects__grid">
            <ProjectCard
              featured
              imageClass="globastyle"
              overlay={<><Badge variant="primary">大規模ECサイト</Badge><div className="u-spacing--top-sm"><Badge variant="glass">年商500億円企業</Badge></div></>}
              title="GlobaStyle Inc. ECサイト全面リニューアル"
              summary="世界20カ国展開の大手アパレルブランドECサイト。25名の国際チームを統括し、UX改善・多言語化・パフォーマンス向上を実現。"
              stats={[{ value: "25名", label: "チーム規模" }, { value: "8ヶ月", label: "プロジェクト期間" }, { value: "5,000+", label: "商品点数" }]}
              tech={["React", "Node.js", "AWS", "多言語対応", "FLOCSS"]}
              href="/project/globastyle"
            />
            <ProjectCard
              featured
              imageClass="technovision"
              overlay={<><Badge variant="primary">グローバル企業サイト</Badge><div className="u-spacing--top-sm"><Badge variant="glass">売上1兆円企業</Badge></div></>}
              title="TechnoVision Corp. 海外サイト立ち上げ"
              summary="大手家電メーカーの海外展開強化プロジェクト。多地域サイト構築から運用センター設立、人材育成まで一貫して統括。"
              stats={[{ value: "15カ国", label: "展開地域" }, { value: "12ヶ月", label: "プロジェクト期間" }, { value: "30名", label: "運用センター体制" }]}
              tech={["Vue.js", "PHP", "MySQL", "CMS構築", "運用体制"]}
              action={<a href="/project/technovision" className="btn btn-outline btn-small c-btn c-btn--outline"><i className="fas fa-eye"></i>詳細を見る</a>}
            />
            <ProjectCard
              title="飲料メーカー ブランドサイト"
              summary="インタラクティブな体験を提供するブランドサイト"
              overlay={<Badge variant="muted">キャンペーン</Badge>}
              tech={["JavaScript", "WebGL", "GSAP"]}
            />
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="contact p-contact l-section">
        <div className="container l-container">
          <h2 className="section-title">お問い合わせ</h2>
            <div className="contact-content p-contact__content">
            <div className="contact-info js-animate">
              <h3>プロジェクトのご相談はこちら</h3>
              <p>
                大規模プロジェクトから小規模案件まで、<br />お気軽にご相談ください。<br />グローバル案件や英語対応も承ります。
              </p>
              <div className="contact-items p-contact__items">
                <div className="contact-item c-card p-contact__item">
                  <i className="fas fa-envelope"></i>
                  <span>hello@example.com</span>
                </div>
                <div className="contact-item c-card p-contact__item">
                  <i className="fas fa-globe"></i>
                  <span>日本語・English対応</span>
                </div>
                <div className="contact-item c-card p-contact__item">
                  <i className="fas fa-clock"></i>
                  <span>24時間以内に返信</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* フッター */}
      <Footer />
    </>
  );
}
