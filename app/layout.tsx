import type { Metadata } from 'next';
import Link from 'next/link';
import { CarFront, Menu } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = {
  title: { default: '札幌ドライビングサポート', template: '%s｜札幌ドライビングサポート' },
  description: '札幌の一発試験対策・普通免許取得・ペーパードライバー講習。補修・追加教習料金0円の出張運転教習。',
  openGraph: {
    title: '札幌ドライビングサポート',
    description: '免許を取ったら、行きたい場所。札幌の出張運転教習。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '札幌ドライビングサポート',
    description: '免許を取ったら、行きたい場所。札幌の出張運転教習。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>
    <header className="site-header"><div className="shell header-inner">
      <Link className="brand" href="/" aria-label="札幌ドライビングサポート トップページ"><span className="brand-mark"><CarFront size={25}/></span><span><strong>札幌</strong><b>DRIVING SUPPORT</b></span></Link>
      <nav aria-label="メインナビゲーション"><Link href="/license">一発試験・免許取得</Link><Link href="/motorcycle">二輪サポート</Link><Link href="/paper-driver">ペーパードライバー</Link><Link className="nav-cta" href="/#contact">無料相談</Link></nav>
      <details className="mobile-menu"><summary aria-label="メニューを開く"><Menu/></summary><div><Link href="/license">一発試験・免許取得</Link><Link href="/motorcycle">二輪サポート</Link><Link href="/paper-driver">ペーパードライバー</Link><Link href="/#contact">無料相談</Link></div></details>
    </div></header>
    {children}
    <footer><div className="shell footer-inner"><div className="brand"><span className="brand-mark"><CarFront size={24}/></span><span><strong>札幌</strong><b>DRIVING SUPPORT</b></span></div><p>札幌で、行きたい場所へ走り出すための運転教習。</p><small>© 札幌ドライビングサポート</small></div></footer>
  </body></html>;
}
