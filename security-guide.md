# セキュリティガイド

お問い合わせフォームのセキュリティ対策について詳しく説明いたします。

## 🛡️ 実装済みセキュリティ機能

### 1. XSS（クロスサイトスクリプティング）対策

#### ✅ 入力値サニタイズ
```javascript
function sanitizeInput(input) {
    return input
        .trim()
        .replace(/[<>\"'&]/g, function(match) {
            const escape = {
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '&': '&amp;'
            };
            return escape[match];
        });
}
```

**対策内容:**
- HTMLタグの無効化
- JavaScriptコードの実行防止
- 特殊文字のエスケープ処理

#### ✅ Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://cdn.emailjs.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
    font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com;
    img-src 'self' data:;
    connect-src 'self' https://api.emailjs.com;
    frame-src 'none';
    object-src 'none';
">
```

**制限内容:**
- 不正なスクリプト実行を防止
- 外部リソースの読み込み制限
- iframe、objectタグの使用禁止

#### ✅ 危険パターン検出
```javascript
const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i
];
```

### 2. レート制限・DoS攻撃対策

#### ✅ 送信回数制限
- **最大試行回数**: 3回
- **クールダウン時間**: 5分間
- **自動リセット**: 成功時に試行回数リセット

#### ✅ 入力値長さ制限
- **お名前**: 100文字
- **メールアドレス**: 254文字（RFC準拠）
- **会社名**: 200文字
- **メッセージ**: 2,000文字

### 3. 入力値検証

#### ✅ 必須項目チェック
- お名前、メールアドレス、メッセージは必須
- 空文字・空白のみの入力を拒否

#### ✅ 形式チェック
**メールアドレス:**
```javascript
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

**お名前:**
```javascript
const nameRegex = /^[ぁ-ゟ一-龯ァ-ヿa-zA-Z\s\-]+$/;
```

### 4. 個人情報保護

#### ✅ ログ出力制限
- **本番環境**: ログ出力無効化
- **開発環境**: 個人情報をマスク処理

```javascript
function secureLog(message, data = null) {
    // 本番環境では無効化
    if (window.location.hostname === 'hiroogino.github.io') {
        return;
    }
    
    // 個人情報をマスク
    if (safeData.from_email) safeData.from_email = safeData.from_email.replace(/(.{2}).*(@.*)/, '$1***$2');
    if (safeData.from_name) safeData.from_name = safeData.from_name.charAt(0) + '***';
}
```

#### ✅ 一時的データ保持の最小化
- フォーム送信後即座にデータクリア
- ブラウザメモリ上での個人情報保持を最小限に

### 5. 通信セキュリティ

#### ✅ HTTPS通信
- GitHub Pagesによる自動HTTPS化
- すべての通信の暗号化保護

#### ✅ EmailJS API通信
- 暗号化されたAPI通信
- 認証キーによるアクセス制御

## ⚠️ 制限事項・注意点

### GitHub Pages環境の制約

**サーバーサイド処理なし:**
- すべての処理がクライアントサイド
- サーバーレベルのセキュリティヘッダー設定不可
- データベースでの情報保存なし

**CSP制約:**
- インラインスタイル・スクリプトの部分的許可が必要
- 完全なCSP適用は困難

### EmailJSサービス依存

**第三者サービス利用:**
- EmailJSのプライバシーポリシーに依存
- サービスの可用性に依存
- 送信制限（無料プランで月200件）

## 🔧 追加セキュリティ対策の提案

### 推奨される強化策

#### 1. reCAPTCHA導入
```html
<!-- Google reCAPTCHA -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
```

**効果:**
- Bot攻撃の防止
- 自動送信の阻止
- スパム対策

#### 2. ハニーポット実装
```html
<!-- 非表示フィールド：Bot検出用 -->
<input type="text" name="honeypot" style="display:none;">
```

#### 3. IPアドレス制限
- 特定地域からのアクセス制限
- VPN・Proxyからのアクセス監視

### 企業レベルでの対策

#### 1. WAF（Web Application Firewall）
- Cloudflareなどのサービス利用
- より高度な攻撃の防御

#### 2. ログ監視
- 異常なアクセスパターンの検出
- セキュリティインシデントの早期発見

#### 3. 定期的なセキュリティ監査
- 脆弱性診断
- ペネトレーションテスト

## 📊 セキュリティレベル評価

### 現在の実装レベル

| セキュリティ項目 | 対策レベル | 備考 |
|---|---|---|
| XSS対策 | ⭐⭐⭐⭐☆ | CSP + サニタイズで高レベル |
| CSRF対策 | ⭐⭐⭐☆☆ | 読み取り専用のため影響限定的 |
| DoS対策 | ⭐⭐⭐☆☆ | レート制限で基本的な対策 |
| 個人情報保護 | ⭐⭐⭐⭐☆ | ログ制限 + HTTPS通信 |
| 入力検証 | ⭐⭐⭐⭐⭐ | 包括的な検証を実装 |

### 業界標準との比較

**フリーランサーサイトとして:**
- ✅ 必要十分なセキュリティレベル
- ✅ 一般的な攻撃に対する耐性
- ✅ 個人情報保護の基本要件を満たす

**企業サイトとの比較:**
- ⚠️ サーバーサイド処理の追加が望ましい
- ⚠️ より高度な監視・ログ機能が必要
- ⚠️ 法的要件（GDPR等）への詳細対応

## 🔍 セキュリティテスト方法

### 自己診断チェックリスト

#### XSS攻撃テスト
```javascript
// テスト用の危険な入力例（実際には検出・拒否される）
<script>alert('XSS')</script>
javascript:alert('XSS')
<img src="x" onerror="alert('XSS')">
```

#### レート制限テスト
1. フォームを短時間で4回送信
2. 制限メッセージの表示確認
3. 5分後の自動リセット確認

#### 入力検証テスト
- 超長文の入力（2000文字以上）
- 不正なメールアドレス形式
- 空文字・スペースのみの入力

## 📞 セキュリティインシデント対応

### 問題発生時の対応手順

1. **即座の対応**
   - サイトの一時停止を検討
   - 影響範囲の特定

2. **調査・分析**
   - ログの確認
   - 攻撃手法の特定

3. **対策・修正**
   - 脆弱性の修正
   - セキュリティ設定の見直し

4. **再発防止**
   - 監視体制の強化
   - 定期的なセキュリティチェック

---

**総評**: 現在の実装は、フリーランサーのポートフォリオサイトとして必要十分なセキュリティレベルを提供しています。一般的な攻撃手法に対する基本的な防御が実装されており、個人情報の適切な保護も確保されています。 