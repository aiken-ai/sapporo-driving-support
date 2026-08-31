import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bike, CircleGauge, ClipboardCheck, Route, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: '普通二輪・大型二輪サポート',
  description: '札幌で普通二輪・大型二輪免許の取得を目指す方へ。基本操作から技能試験課題まで、苦手に合わせてサポートします。',
};

export default function MotorcyclePage() {
  return <main className="detail-page motorcycle-page">
    <section className="detail-hero"><div className="shell"><p className="eyebrow">MOTORCYCLE SUPPORT</p><h1>二輪の「できない」を、<br/>一つずつ「できる」へ。</h1><p>普通二輪・大型二輪の免許取得を目指す方へ。基本操作、安全確認、試験課題のポイントを、経験に合わせて整理します。</p><Link className="button button-primary" href="/#contact">二輪サポートを相談する <ArrowRight/></Link></div></section>
    <section className="section"><div className="shell detail-split"><div><p className="eyebrow">TWO LICENSES</p><h2>普通二輪・大型二輪に対応</h2></div><div><p>二輪は、視線・バランス・クラッチ操作などが一つにつながることで安定します。苦手な課題だけを繰り返すのではなく、原因となる基本操作から見直します。</p><div className="notice"><ShieldCheck/><span><strong>安全を最優先に進めます</strong>現在の免許・経験・車両環境を確認し、無理のない練習内容をご案内します。</span></div></div></div></section>
    <section className="section motorcycle-skills"><div className="shell"><div className="section-heading"><p className="eyebrow">SKILL SUPPORT</p><h2>サポートできること</h2></div><div className="scene-grid"><article><Bike/><h3>基本操作</h3><p>発進・停止、クラッチ、低速バランスなど、土台から確認。</p></article><article><Route/><h3>課題走行</h3><p>一本橋・スラロームなど、課題に必要な操作を分けて整理。</p></article><article><CircleGauge/><h3>速度とブレーキ</h3><p>安定した加速・減速と、安全な制動のポイントを確認。</p></article><article><ClipboardCheck/><h3>試験対策</h3><p>安全確認、走行位置、合図など、採点を意識した走行へ。</p></article></div><p className="official-note">北海道では二輪技能試験に季節上の制限があります。試験日・手続きなどは、<a href="https://www.police.pref.hokkaido.lg.jp/guide/menkyo/menkyo-resp/jyuken-menu.html" target="_blank" rel="noreferrer">北海道警察の公式案内</a>で最新情報をご確認ください。</p></div></section>
    <section className="mini-cta"><div className="shell"><Bike/><div><h2>普通二輪・大型二輪の目標をお聞かせください。</h2><p>現在の経験と苦手に合わせて、必要なサポートを整理します。</p></div><Link className="button button-primary" href="/#contact">無料相談へ</Link></div></section>
  </main>;
}
