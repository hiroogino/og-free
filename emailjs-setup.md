# EmailJS 設定手順書

お問い合わせフォームを実際に動作させるため、EmailJSサービスの設定を行います。

## 🚀 EmailJS設定手順

### 1. EmailJSアカウント作成

1. [EmailJS公式サイト](https://www.emailjs.com/) にアクセス
2. 「Sign Up」をクリックしてアカウント作成
3. メールアドレス認証を完了

### 2. メールサービス設定

1. EmailJSダッシュボードにログイン
2. 「Email Services」をクリック
3. 「Add New Service」を選択
4. お使いのメールプロバイダを選択（Gmail推奨）

**Gmail設定の場合:**
- Service ID: `gmail` (任意の名前)
- Email Address: 受信用のGmailアドレス
- Password: アプリパスワード（Googleアカウントで生成）

### 3. メールテンプレート作成

1. 「Email Templates」をクリック
2. 「Create New Template」を選択
3. 以下のテンプレートを設定:

**テンプレート設定例:**
```
件名: 【ポートフォリオサイト】新しいお問い合わせ

本文:
新しいお問い合わせが届きました。

■ お名前
{{from_name}}

■ メールアドレス
{{from_email}}

■ 会社名・組織名
{{company}}

■ プロジェクト種別
{{project_type}}

■ 予算感
{{budget}}

■ 希望納期
{{timeline}}

■ プロジェクト詳細・ご質問
{{message}}

---
送信日時: {{date}}
```

4. 「Save」をクリック
5. **Template ID** をメモしておく

### 4. JavaScript設定

`script.js` ファイルの以下の部分を更新:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'your_service_id',      // 手順2で作成したService ID
    templateID: 'your_template_id',    // 手順3で作成したTemplate ID
    publicKey: 'your_public_key'       // ダッシュボードのAccount > API Keys
};
```

### 5. 受信メールアドレス設定

`script.js` の以下の行を更新:

```javascript
to_email: 'your-email@example.com' // 実際の受信用メールアドレス
```

## 🔐 API Key取得

1. EmailJSダッシュボードの「Account」をクリック
2. 「API Keys」タブを選択
3. **Public Key** をコピー

## ✅ 動作確認

設定完了後、以下をテスト:

1. ポートフォリオサイトのお問い合わせフォームから送信
2. 指定したメールアドレスにメールが届くか確認
3. ブラウザのコンソールでエラーがないか確認

## 📊 EmailJS制限事項

**無料プラン:**
- 月200件まで送信可能
- EmailJSブランディング表示
- 基本的なサポート

**有料プラン:**
- 月1,000件〜送信可能
- ブランディング非表示
- 優先サポート

## 🔧 トラブルシューティング

### よくある問題

**1. メールが届かない**
- Gmail の場合: アプリパスワードが正しく設定されているか確認
- スパムフォルダをチェック
- Service ID、Template ID が正しいか確認

**2. CORS エラー**
- Public Key が正しく設定されているか確認
- ブラウザのキャッシュをクリア

**3. 送信ボタンが反応しない**
- ブラウザのコンソールでエラーメッセージを確認
- EmailJSライブラリが正しく読み込まれているか確認

## 📧 メール送信フロー

1. ユーザーがフォーム送信
2. JavaScript が EmailJS API を呼び出し
3. EmailJS がメールテンプレートにデータを挿入
4. 設定されたメールアドレスに送信
5. ユーザーに成功メッセージ表示

## 🛡️ セキュリティ考慮事項

- Public Key のみを使用（Secret Key は使わない）
- スパム対策として reCAPTCHA 導入を検討
- 送信回数制限の実装を検討
- 入力値のサニタイズは EmailJS 側で実施

---

設定完了後、お問い合わせフォームが完全に動作し、実際にメールが受信できるようになります。 