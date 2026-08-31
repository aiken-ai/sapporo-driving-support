import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CarFront, ClipboardCheck, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '一発試験・普通一種・普通二種',
  description: '札幌運転免許試験場で普通一種・普通二種の一発試験を目指す方へ。技能・学科・受験準備をサポートします。',
};

export default function LicensePage() {
  const steps = [
    ['01', 'ご相談・現状確認', '現在の免許、運転経験、希望時期を伺い、受験条件と練習計画を整理します。'],
    ['02', '学科・技能の準備', '試験で見られるポイントを整理し、受験する免許に合わせて練習します。'],
    ['03', '試験場で受験', '適性・学科・技能試験を、指定された日時に札幌運転免許試験場で受験します。'],
    ['04', '合格後の講習・交付', '必要な取得時講習等を受け、免許交付へ進みます。'],
  ];

  return <main className="detail-page">
    <section className="detail-hero"><div className="shell"><p className="eyebrow">LICENSE SUPPORT</p><h1>普通一種も、普通二種も。<br/>一発試験をサポート。</h1><p>札幌運転免許試験場で直接試験を受ける方へ。今の免許状況と目標に合わせて、必要な練習を丁寧に組み立てます。</p><Link className="button button-primary" href="/#contact">無料で相談する <ArrowRight/></Link></div></section>

    <section className="section license-types"><div className="shell"><div className="section-heading"><p className="eyebrow">LICENSE TYPES</p><h2>目指す免許に合わせたサポート</h2></div><div className="license-type-grid">
      <article><span>第一種</span><h3>普通一種免許</h3><p>日常生活や仕事で普通自動車を運転するための免許。初めての取得、再取得など、現在の状況から受験までを整理します。</p><ul><li>仮免許・本免許の技能対策</li><li>安全確認と基本走行</li><li>路上練習の組み立て</li></ul></article>
      <article className="second-class"><span>第二種</span><h3>普通二種免許</h3><p>タクシー・ハイヤーなど、旅客を乗せて運送する仕事に必要な免許。より高い安全性と円滑な運転が求められます。</p><ul><li>普通二種の技能試験対策</li><li>旅客を意識した安全・快適な運転</li><li>学科と受験手続きの整理</li></ul></article>
    </div><p className="official-note">普通二種には年齢・免許経歴などの受験条件があります。最新の条件・受付日時・費用は、<a href="https://www.police.pref.hokkaido.lg.jp/guide/menkyo/menkyo-resp/oogata2syu.html" target="_blank" rel="noreferrer">北海道警察の公式案内</a>をご確認ください。</p></div></section>

    <section className="section steps-section"><div className="shell"><p className="eyebrow">FLOW</p><h2>免許取得までの流れ</h2><div className="step-list">{steps.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">SUPPORT</p><h2>札幌での受験をサポート</h2></div><div className="benefit-grid"><article><ClipboardCheck/><h3>試験ポイントを整理</h3><p>安全確認や走行位置など、技能試験で大切な点を具体的に練習。</p></article><article><MapPin/><h3>札幌の道路に対応</h3><p>地域特有の道路状況も見据えてアドバイス。</p></article><article><CarFront/><h3>必要な分だけ練習</h3><p>得意・苦手を見ながら内容を組み立てます。</p></article></div></div></section>
    <section className="mini-cta"><div className="shell"><MessageCircle/><div><h2>普通一種・普通二種、どちらもご相談ください。</h2><p>現在の免許状況から、受験までの道筋を一緒に整理します。</p></div><Link className="button button-primary" href="/#contact">無料相談へ</Link></div></section>
  </main>;
}
