import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";

export default function GlobastylePage() {
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
            <span>GlobaStyle Inc.</span>
          </div>
          <div className="project-hero-content">
            <div className="project-hero-text">
              <div className="project-category">大規模ECサイト リニューアル</div>
              <h1 className="project-hero-title">GlobaStyle Inc.<br />ECサイト全面リニューアル</h1>
              <p className="project-hero-description">
                世界20カ国に展開する年商500億円の大手アパレルブランドECサイトの全面リニューアル。<br />
                25名の国際チームを統括し、UX改善・多言語化・パフォーマンス向上を実現した大規模プロジェクト。
              </p>
              <div className="project-hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-number">25名</span>
                  <span className="hero-stat-label">プロジェクトチーム</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">8ヶ月</span>
                  <span className="hero-stat-label">プロジェクト期間</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">20カ国</span>
                  <span className="hero-stat-label">多言語対応</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-number">5,000+</span>
                  <span className="hero-stat-label">商品点数</span>
                </div>
              </div>
            </div>
            <div className="project-hero-visual">
              <div className="project-mockup">
                <div className="mockup-screen">
                  <div className="mockup-header">
                    <div className="mockup-dots"><span></span><span></span><span></span></div>
                    <div className="mockup-url">globastyle.com</div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-hero">GlobaStyle</div>
                    <div className="mockup-nav">
                      <div className="nav-item">Women</div>
                      <div className="nav-item">Men</div>
                      <div className="nav-item">Kids</div>
                      <div className="nav-item">Sale</div>
                    </div>
                    <div className="mockup-products">
                      <div className="product-grid">
                        <div className="product-item"></div>
                        <div className="product-item"></div>
                        <div className="product-item"></div>
                        <div className="product-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクト概要（課題など一部抜粋） */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-main">
              <h2>プロジェクト概要</h2>
              <p>
                GlobaStyle Inc.は世界20カ国に展開する年商500億円の大手アパレルブランドです。既存ECサイトの課題解決と海外展開強化を目的とした全面リニューアルプロジェクトを実施。
                国内外のメンバー25名からなる多国籍チームを統括し、8ヶ月間のプロジェクトを成功に導きました。
              </p>
              <h3>解決した課題</h3>
              <div className="challenge-list">
                <div className="challenge-item">
                  <i className="fas fa-exclamation-triangle"></i>
                  <div>
                    <h4>UX・UIの課題</h4>
                    <p>複雑な商品検索、直感的でないナビゲーション、モバイル対応不足</p>
                  </div>
                </div>
                <div className="challenge-item">
                  <i className="fas fa-tachometer-alt"></i>
                  <div>
                    <h4>パフォーマンスの課題</h4>
                    <p>ページ速度や描画性能の劣化による離脱率の増加</p>
                  </div>
                </div>
                <div className="challenge-item">
                  <i className="fas fa-language"></i>
                  <div>
                    <h4>多言語対応の課題</h4>
                    <p>各国向けの適切な商品情報・表記・SEO最適化の不足</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-sidebar">
              <div className="project-info-card">
                <h3>プロジェクト詳細</h3>
                <div className="info-item"><span className="info-label">クライアント</span><span className="info-value">GlobaStyle Inc.</span></div>
                <div className="info-item"><span className="info-label">業種</span><span className="info-value">アパレル・EC</span></div>
                <div className="info-item"><span className="info-label">期間</span><span className="info-value">8ヶ月</span></div>
                <div className="info-item"><span className="info-label">対応範囲</span><span className="info-value">要件定義/情報設計/実装指針/品質管理</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 私の役割（抜粋） */}
      <section className="project-roles">
        <div className="container">
          <h2 className="section-title">担当範囲・役割</h2>
          <div className="roles-grid">
            <div className="role-card">
              <div className="role-icon"><i className="fas fa-clipboard-list"></i></div>
              <h3>要件定義・仕様調整</h3>
              <p>クライアントおよび海外チームとの仕様調整を含む要件定義を主導。多国籍チーム間の認識統一を図り、プロジェクトスコープを明確化。</p>
            </div>
            <div className="role-card">
              <div className="role-icon"><i className="fas fa-sitemap"></i></div>
              <h3>情報設計・ワイヤーフレーム</h3>
              <p>5,000点以上の商品を効率的に展示するサイト構造を設計。ユーザビリティを重視したワイヤーフレームを作成。</p>
            </div>
            <div className="role-card">
              <div className="role-icon"><i className="fas fa-code"></i></div>
              <h3>技術設計・実装指針</h3>
              <p>FLOCSS手法による設計指針やコンポーネント設計、パフォーマンス最適化方針を策定。</p>
            </div>
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
