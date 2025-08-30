# Web Director Portfolio - Next.js版

フリーランスWebディレクターのポートフォリオサイト（Next.js実装版）

## 🚀 技術スタック

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: SCSS (FLOCSS設計手法)
- **Form**: EmailJS
- **Build Tool**: Turbopack

## 📁 プロジェクト構造

```
next-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   ├── globals.scss       # グローバルスタイル
│   ├── styles/            # FLOCSS構造のスタイル
│   └── project/           # プロジェクト詳細ページ
├── components/            # 再利用可能コンポーネント
├── i18n/                  # 国際化設定
└── public/                # 静的ファイル
```

## 🛠️ セットアップ

1. **依存関係のインストール**:
   ```bash
   npm install
   ```

2. **環境変数の設定**:
   ```bash
   cp .env.example .env.local
   ```
   EmailJSの設定値を`.env.local`に記述してください。

3. **開発サーバーの起動**:
   ```bash
   npm run dev
   ```

4. **本番ビルド**:
   ```bash
   npm run build
   npm start
   ```

## 📧 EmailJS設定

お問い合わせフォームを利用するには、以下の環境変数を設定してください：

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 スタイル設計

FLOCSS設計手法に基づいたCSS構造：

- **Foundation**: 基本設定・変数・ミックスイン
- **Layout**: レイアウト系コンポーネント
- **Object**: 
  - Component: 再利用可能なUIコンポーネント
  - Project: ページ固有のスタイル
  - Utility: ユーティリティクラス

## 🔧 コマンド

- `npm run dev` - 開発サーバー起動
- `npm run build` - 本番ビルド
- `npm run start` - 本番サーバー起動
- `npm run lint` - ESLintチェック
- `npm run type-check` - TypeScriptタイプチェック

## 📱 レスポンシブ対応

モバイルファーストのアプローチで、全デバイスに対応したレスポンシブデザインを実装。

## 🌐 多言語対応

日本語・英語対応の基盤を実装済み。`i18n/nav.ts`で管理。

## 🔒 セキュリティ

- Content Security Policy (CSP)
- セキュリティヘッダー
- XSS対策
-入力値のサニタイゼーション
