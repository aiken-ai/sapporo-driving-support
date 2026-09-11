# Cloudflare Pages + Vercel デュアルデプロイメント ガイド

札幌ドライビングサポート公式ホームページを **Cloudflare Pages（メイン）** と **Vercel（冗長化）** の両方で同時に公開するためのセットアップガイドです。

---

## 📋 概要

| プラットフォーム | URL | 役割 |
|---|---|---|
| **Cloudflare Pages** | `sapporo-driving-support.pages.dev` | メイン公開先 |
| **Vercel** | `sapporo-driving-support.vercel.app` | バックアップ・冗長化 |

**モバイル・デスクトップ対応**: 両方のURLから完全に同じサイトが閲覧可能。

---

## 🚀 セットアップ手順（全6ステップ）

### **ステップ1: Cloudflareで Project を作成**

1. [Cloudflare Dashboard](https://dash.cloudflare.com) にログイン
2. **Pages** → **Create application**
3. **GitHub に接続**
   - Organization: `aiken-ai`
   - Repository: `sapporo-driving-support`
4. **Build settings**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. **Environment variables** → 設定なし（不要）
6. **Deploy** をクリック

---

### **ステップ2: Vercel で Project を作成**

1. [Vercel Dashboard](https://vercel.com) にログイン
2. **New Project** → **Import Git Repository**
3. **GitHub に接続**
   - Repository: `aiken-ai/sapporo-driving-support`
4. **Project name**: `sapporo-driving-support`
5. **Build settings**
   - Framework: `Other` (カスタム)
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Environment variables** → 設定なし（不要）
7. **Deploy** をクリック

---

### **ステップ3: GitHub Secrets を登録（6つ）**

GitHub リポジトリ → **Settings** → **Secrets and variables** → **Actions**

**Cloudflare 関連（2つ）:**

| Secret名 | 値 |
|--|--|
| `CLOUDFLARE_API_TOKEN` | [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens) から **Edit Cloudflare Workers** テンプレートでトークン生成 |
| `CLOUDFLARE_ACCOUNT_ID` | [Cloudflare Dashboard](https://dash.cloudflare.com) 右下の Account ID |

**Vercel 関連（3つ）:**

| Secret名 | 値 |
|--|--|
| `VERCEL_TOKEN` | [Vercel Account Settings](https://vercel.com/account/tokens) で新規トークン生成 |
| `VERCEL_ORG_ID` | Vercel Dashboard → Project → Settings → Team ID |
| `VERCEL_PROJECT_ID` | Vercel Dashboard → Project → Settings → Project ID |

---

### **ステップ4: GitHub Actions ワークフローを作成**

1. GitHub リポジトリ → **Code** タブ
2. **新規ファイル作成**
3. **パス**: `.github/workflows/deploy.yml`
4. **以下の内容をコピペ:**

```yaml
name: Deploy to Cloudflare & Vercel

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18.x'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci
        env:
          CI: true

      - name: Build project
        run: npm run build
        env:
          NODE_ENV: production

      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/
          retention-days: 1

  deploy-cloudflare:
    needs: build
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist/

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: sapporo-driving-support
          directory: dist
          productionBranch: main

  deploy-vercel:
    needs: build
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist/

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}
```

5. **Commit** をクリック

---

### **ステップ5: 初回デプロイをテスト**

```bash
# ローカルで変更をコミット
git add .
git commit -m "Setup dual deployment (Cloudflare + Vercel)"
git push origin main
```

GitHub Actions が自動で以下を実行：
1. ✅ ビルド成功
2. ✅ Cloudflare Pages にデプロイ
3. ✅ Vercel にデプロイ

---

### **ステップ6: 公開確認**

| プラットフォーム | URL | 確認方法 |
|---|---|---|
| **Cloudflare** | https://sapporo-driving-support.pages.dev | ブラウザで開く |
| **Vercel** | https://sapporo-driving-support.vercel.app | ブラウザで開く |
| **GitHub** | Actions → 最新の run | 自動デプロイのログ |

---

## 🔧 ファイル構成と説明

### **Cloudflare 用**
- `wrangler.toml` — Cloudflare Workers 設定
- `_routes.json` — SPA ルーティング設定

### **Vercel 用**
- `vercel.json` — Vercel デプロイ設定、リダイレクト、キャッシュ設定

### **共通**
- `package.json` — ビルドコマンド、依存関係
- `vite.config.js` — Vite ビルド設定（両プラットフォーム最適化）
- `.github/workflows/deploy.yml` — GitHub Actions ワークフロー
- `index.html` — ホームページ（変更なし）

---

## 📱 日常運用（毎日3分）

### ホームページを更新するフロー

```bash
# 1. ローカルで編集
nano index.html  # または好きなエディタ

# 2. コミット・プッシュ
git add index.html
git commit -m "冬道講習セクション更新"
git push origin main

# 3. 自動デプロイ開始
# → GitHub Actions が自動で以下を実行：
#    ✅ npm run build
#    ✅ Cloudflare Pages にデプロイ
#    ✅ Vercel にデプロイ
```

**2分後に両方のサイトで公開完了** 🎉

---

## 🛠 トラブルシューティング

### ❌ ビルドが失敗する場合

```bash
# ローカルで確認
npm install
npm run build
ls -la dist/  # dist/ が生成されているか確認
```

### ❌ Cloudflare Pages で 404 エラー

**原因**: `_routes.json` がない、または `wrangler.toml` の設定ミス

**解決**:
```bash
# _routes.json が dist/ に含まれているか確認
ls -la dist/_routes.json

# 含まれていない場合、手動でコピー
cp _routes.json dist/
git add dist/
git commit -m "Add _routes.json"
git push
```

### ❌ Vercel で 404 エラー

**原因**: `vercel.json` の SPA リダイレクト設定

**解決**: `vercel.json` が以下を含んでいるか確認

```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

### ❌ GitHub Actions が実行されない

**原因**: Secrets が設定されていない

**確認**:
```
Settings → Secrets and variables → Actions
```

以下6つが表示されているか確認：
- ✅ CLOUDFLARE_API_TOKEN
- ✅ CLOUDFLARE_ACCOUNT_ID
- ✅ VERCEL_TOKEN
- ✅ VERCEL_ORG_ID
- ✅ VERCEL_PROJECT_ID

不足していれば追加。

---

## 📊 デプロイ監視

### Cloudflare Pages のデプロイ状況
- [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → sapporo-driving-support

### Vercel のデプロイ状況
- [Vercel Dashboard](https://vercel.com) → Projects → sapporo-driving-support

### GitHub Actions のログ
- リポジトリ → **Actions** タブ → **Deploy to Cloudflare & Vercel** → 最新の run

---

## 🔐 セキュリティ設定

### キャッシュ戦略
- **HTML** (`index.html`): 1時間キャッシュ（必ず最新を確認）
- **JS/CSS** (`/js/`, `/css/`): 1年間キャッシュ（ハッシュ付き）
- **画像** (`/images/`): 1時間キャッシュ

### セキュリティヘッダー
- `X-Content-Type-Options: nosniff` — MIME タイプの推測を防止
- `X-Frame-Options: DENY` — クリックジャッキング対策
- `Cache-Control: public` — CDN キャッシュ有効

---

## 💡 ベストプラクティス

### デプロイ前に確認
```bash
# ローカルでビルド・プレビュー
npm run build
npm run preview

# http://localhost:4173 で確認
```

### コミットメッセージの例
- ✅ "Add冬道講習セクション"
- ✅ "Fix料金表の表示ズレ"
- ✅ "Update企業講習の説明"
- ❌ "update"
- ❌ "fix bug"

### 定期メンテナンス
- 月1回: Vite のアップデート確認 (`npm update`)
- 月1回: GitHub Secrets の有効期限確認
- 月1回: Cloudflare / Vercel のコンソールで異常なし

---

## 📞 サポート

| 問題 | 確認先 |
|---|---|
| ビルドエラー | GitHub Actions ログ |
| デプロイ失敗 | Cloudflare / Vercel ダッシュボード |
| サイト表示エラー | ブラウザの開発者ツール（F12）|
| Secrets エラー | GitHub Settings → Secrets → 値を再入力 |

---

**セットアップ完了後は、毎日の更新は `git push` するだけで完全自動化されます。** 🚀
