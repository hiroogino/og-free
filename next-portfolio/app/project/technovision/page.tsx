import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";

export default function TechnoVisionPage() {
  return (
    <>
      {/* ナビゲーション */}
      <Header items={[
        { href: "/#home", label: "ホーム" },
        { href: "/#about", label: "プロフィール" },
        { href: "/#experience", label: "経験・実績" },
        { href: "/#skills", label: "スキル" },
        { href: "/#projects", label: "プロジェクト" },
        { href: "/#contact", label: "お問い合わせ" },
      ]} />

      {/* プロジェクトヒーロー */}
      <section className="project-hero">
        <div className="container">
          <div className="project-breadcrumb">
            <a href="/">ホーム</a>
            <i className="fas fa-chevron-right"></i>
            <a href="/#projects">プロジェクト</a>
            <i className="fas fa-chevron-right"></i>
            <span>TechnoVision Corp.</span>
          </div>
          <div className="project-hero-content">
            <div className="project-hero-text">
              <div className="project-category">グローバル企業サイト 構築・運用</div>
              <h1 className="project-hero-title">TechnoVision Corp.<br />海外サイト立ち上げ・運用センター構築</h1>
              <p className="project-hero-description">
                売上1兆円の大手家電メーカーの海外展開強化プロジェクト。<br />
                15カ国のサイト構築から運用センター設立、30名の人材育成まで、<br />
                グローバル展開の基盤づくりを一貫して統括。
              </p>
              <div className="project-hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number">15カ国</span>
                  <span className="hero-stat-label">サイト展開</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">12ヶ月</span>
                  <span className="hero-stat-label">プロジェクト期間</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">30名</span>
                  <span className="hero-stat-label">運用センター体制</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">8言語</span>
                  <span className="hero-stat-label">ローカライゼーション</span>
                </div>
              </div>
            </div>
            <div className="project-hero-visual">
              <div className="project-mockup">
                <div className="mockup-screen techno-theme">
                  <div className="mockup-header">
                    <div className="mockup-dots"><span></span><span></span><span></span></div>
                    <div className="mockup-url">technovision-global.com</div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-hero">TechnoVision</div>
                    <div className="mockup-nav">
                      <div className="nav-item">Products</div>
                      <div className="nav-item">Support</div>
                      <div className="nav-item">About</div>
                      <div className="nav-item">Global</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクト概要（抜粋） */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-main">
              <h2>プロジェクト概要</h2>
              <div className="challenge-list">
                <div className="challenge-item">
                  <i className="fas fa-sitemap"></i>
                  <div>
                    <h4>多地域運用体制の未整備</h4>
                    <p>地域別の更新・ガバナンスを担う組織とプロセスの不足</p>
                  </div>
                </div>
                <div className="challenge-item">
                  <i className="fas fa-language"></i>
                  <div>
                    <h4>ローカライゼーション課題</h4>
                    <p>現地文化・法規制に対応した適切なコンテンツ展開の仕組み不在</p>
                  </div>
                </div>
                <div className="challenge-item">
                  <i className="fas fa-users-cog"></i>
                  <div>
                    <h4>運用体制の不備</h4>
                    <p>各地域の更新・保守を担う専門スタッフ不足と教育体制の欠如</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-sidebar">
              <div className="project-info-card">
                <h3>プロジェクト詳細</h3>
                <div className="info-item"><span className="info-label">クライアント</span><span className="info-value">TechnoVision Corp.</span></div>
                <div className="info-item"><span className="info-label">業種</span><span className="info-value">家電・電子機器製造</span></div>
                <div className="info-item"><span className="info-label">期間</span><span className="info-value">12ヶ月</span></div>
                <div className="info-item"><span className="info-label">展開地域</span><span className="info-value">15カ国・8言語</span></div>
                <div className="info-item"><span className="info-label">運用体制</span><span className="info-value">30名のセンター構築</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他のプロジェクト */}
      <section className="other-projects l-section">
        <div className="container l-container">
          <h2 className="section-title">その他のプロジェクト実績</h2>
          <div className="projects-grid p-projects__grid">
            <ProjectCard
              featured
              imageClass="globastyle"
              overlay={<><span className="c-badge c-badge--primary">大規模ECサイト</span><span className="c-badge c-badge--glass" style={{marginTop:".5rem"}}>年商500億円企業</span></>}
              title="GlobaStyle Inc. ECサイト全面リニューアル"
              summary="UX改善・多言語化・パフォーマンス向上を実現した大規模プロジェクト。"
              href="/project/globastyle"
            />
          </div>
        </div>
      </section>

      {/* フッター */}
      <Footer items={[
        { href: "/#home", label: "ホーム" },
        { href: "/#about", label: "プロフィール" },
        { href: "/#experience", label: "実績" },
        { href: "/#contact", label: "お問い合わせ" },
      ]} />
    </>
  );
}
