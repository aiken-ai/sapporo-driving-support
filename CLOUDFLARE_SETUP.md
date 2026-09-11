# Cloudflare Pages セットアップガイド

札幌ドライビングサポート公式ホームページをCloudflare Pagesで自動公開するためのセットアップです。

---

## 📋 必要な準備

### 1. Cloudflareアカウント
- [Cloudflare](https://cloudflare.com) でアカウント作成
- メールアドレスで確認

### 2. GitHubシークレット設定

GitHub Actions からCloudflareへデプロイするため、以下2つのシークレットを設定：

#### ステップA: Cloudflare API トークン取得
1. [Cloudflare Dashboard](https://dash.cloudflare.com) にログイン
2. **アカウント設定** → **API トークン** → **トークン作成**
3. **Cloudflare Pages用** テンプレート選択
4. トークンをコピー

#### ステップB: Cloudflare Account ID 取得
1. Cloudflare Dashboard → **アカウント設定**
2. **アカウントID** をコピー（右下に表示）

#### ステップC: GitHub シークレット登録
1. GitHub リポジトリ → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** をクリック
3. 以下2つを追加：

| Secret Name | Value |
|------------|-------|
| `CLOUDFLARE_API_TOKEN` | (ステップAで取得したトークン) |
| `CLOUDFLARE_ACCOUNT_ID` | (ステップBで取得したID) |

---

## 📁 ファイル構成

```
sapporo-driving-support/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions自動デプロイ
├── src/
│   ├── main.ts                 ← Viteエントリーポイント
│   └── components/             ← Vue コンポーネント
├── public/
│   ├── images/                 ← 北海道観光写真
│   └── favicon.ico
├── dist/                        ← ビルド出力（Cloudflareで公開）
├── index.html                  ← HTMLテンプレート
├── vite.config.js              ← Viteビルド設定
├── wrangler.toml               ← Cloudflare Pages設定
├── _routes.json                ← SPA ルーティング設定
├── package.json
└── CLOUDFLARE_SETUP.md         ← このファイル
```

---

## 🚀 デプロイフロー

### 自動デプロイ（推奨）

```bash
# 1. ローカルで変更を加える
git add .
git commit -m "ホームページ更新：料金セクション修正"

# 2. GitHubにプッシュ
git push origin main

# 3. GitHub Actions が自動実行
#    - npm run build
#    - dist/ を Cloudflare Pages にアップロード
#    - sapporo-driving-support.pages.dev で公開
```

**GitHub Actions** が起動 → 自動ビルド → Cloudflareに自動デプロイ

### 手動デプロイ（テスト時）

```bash
# ローカルでビルド
npm run build

# Cloudflareにデプロイ
npm run deploy:pages
```

---

## 🔧 設定ファイル説明

### wrangler.toml
- Cloudflare Pages の設定
- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist/`
- 分析・オブザーバビリティ有効化

### vite.config.js
- Vue.js + Vite ビルド設定
- SPA向けに最適化
- アセット分割（js/, css/, images/）
- 本番環境でコンソール削除、minify

### _routes.json
- SPA ルーティング設定
- すべてのリクエストを `index.html` にルーティング
- 静的ファイル（js, css, images）は直接配信
- **重要**: 404エラー自動修正用

### deploy.yml (GitHub Actions)
- `main` ブランチ push → 自動デプロイ
- PR時は preview URL 生成
- Node.js 18 環境
- キャッシュ最適化

---

## 📊 公開後のモニタリング

### アクセス確認
```
https://sapporo-driving-support.pages.dev
```

### Cloudflare Analytics
1. [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **Pages** → **sapporo-driving-support**
3. **Analytics** で アクセス数、パフォーマンス確認

### GitHub Actions 実行状況
1. GitHub リポジトリ → **Actions** タブ
2. **Deploy to Cloudflare Pages** で実行ログ確認

---

## 🛠 トラブルシューティング

### デプロイが失敗する場合

**① Secrets が設定されているか確認**
```bash
# GitHub Settings → Secrets で確認
CLOUDFLARE_API_TOKEN: ✓ 設定済み
CLOUDFLARE_ACCOUNT_ID: ✓ 設定済み
```

**② ビルドが成功しているか確認**
```bash
npm run build
ls -la dist/  # dist/ が生成されているか確認
```

**③ wrangler.toml が正しいか確認**
- `name` = "sapporo-driving-support"
- `projectName` が一致

### ホームページが 404 になる場合

**→ _routes.json が正しく配置されているか確認**

```bash
# public/ または dist/ に _routes.json が必要
ls -la public/_routes.json
ls -la dist/_routes.json
```

**→ index.html がビルド出力に含まれているか確認**
```bash
ls -la dist/index.html
```

---

## 📝 更新の流れ（日常運用）

1. **Instagram 画像・テキスト生成** → Canva で作成
2. **ホームページ更新が必要** → index.html を修正
3. **Git コミット**
   ```bash
   git add index.html
   git commit -m "冬道講習セクション更新"
   git push origin main
   ```
4. **自動デプロイ完了** → Cloudflare Pages で即座に公開

---

## 🔗 参考リンク

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [GitHub Actions for Cloudflare Pages](https://github.com/cloudflare/pages-action)

---

**質問や問題がある場合：**
- GitHub Issues で報告
- Cloudflare Support に問い合わせ
