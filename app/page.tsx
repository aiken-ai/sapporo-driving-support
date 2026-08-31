import Link from 'next/link';
import { ArrowRight, BadgeCheck, Bike, CarFront, GraduationCap, HeartHandshake, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Users } from 'lucide-react';

const services = [
  ['一発試験／普通一種・普通二種','普通免許に加え、タクシー・ハイヤー等に必要な普通二種の取得もサポート。','/license',GraduationCap],
  ['ペーパードライバー講習','苦手な道や駐車を、ご自身のペースで一つずつ練習できます。','/paper-driver',CarFront],
  ['普通二輪・大型二輪サポート','基本操作から試験課題まで、経験に合わせて苦手を整理します。','/motorcycle',Bike],
  ['家族・友達と一緒にOK','慣れた方と同乗できるから、安心して練習を始められます。','#support',Users],
  ['送迎サービスあり','札幌市内を中心に、ご希望の場所から練習をスタートできます。','#support',MapPin],
] as const;

export default function Home() { return <main>
  <section className="hero"><div className="hero-image"/><div className="hero-shade"/><div className="shell hero-content"><p className="eyebrow hero-eyebrow">札幌の出張運転教習</p><h1>免許を取ったら、<br/>行きたい場所。</h1><p className="hero-lead">札幌の街で、あなたらしく走り出すために。<br/>不安に寄り添う、マンツーマンの運転サポートです。</p><div className="hero-actions"><Link className="button button-primary" href="#services">教習メニューを見る <ArrowRight size={18}/></Link><Link className="button button-glass" href="#contact">無料で相談する</Link></div></div><div className="fee-ribbon"><span>もしものときも安心</span><strong>補修・追加教習料金 <em>0</em>円</strong></div></section>
  <section className="section" id="services"><div className="shell"><div className="section-heading"><p className="eyebrow">LESSON MENU</p><h2>あなたに合った教習を</h2><p>免許取得を目指す方も、もう一度運転したい方も。今の気持ちから始められます。</p></div><div className="service-grid">{services.map(([title,text,href,Icon],i)=><Link className={`service-card ${i<3?'featured':''}`} href={href} key={title}><span className="service-icon"><Icon size={27}/></span><span className="service-copy"><strong>{title}</strong><small>{text}</small></span><ArrowRight size={20}/></Link>)}</div></div></section>
  <section className="section support-section" id="support"><div className="shell split"><div><p className="eyebrow">OUR PROMISE</p><h2>できるまで、<br/>いっしょに。</h2><p className="large-copy">緊張も、苦手も、人それぞれ。その日の調子や目標に合わせて進めます。</p></div><div className="promise-list"><article><HeartHandshake/><div><h3>やさしいマンツーマン</h3><p>周りを気にせず、分からないことを何度でも聞けます。</p></div></article><article><ShieldCheck/><div><h3>追加料金の心配なし</h3><p>補修・追加教習料金は0円。納得できるまで練習できます。</p></div></article><article><Sparkles/><div><h3>いつもの道で練習</h3><p>通勤・買い物・送迎など、実際に走りたい道にも対応します。</p></div></article></div></div></section>
  <section className="profile-slot"><div className="shell profile-placeholder"><div className="profile-mark"><BadgeCheck/></div><div><p className="eyebrow">INSTRUCTOR</p><h2>担当インストラクター</h2><p>普通車・準中型・普通二種・普通二輪・大型二輪・学科・各種講習まで、幅広い指導経験をプロフィールとして追加予定です。</p><div className="experience-tags"><span>運転指導歴25年</span><span>普通二種</span><span>普通・大型二輪</span><span>学科・各種講習</span></div></div><span>準備中</span></div></section>
  <section className="section contact-section" id="contact"><div className="shell contact-panel"><div><p className="eyebrow">FREE CONSULTATION</p><h2>まずは、気軽に<br/>お話しください。</h2><p>「自分に合う教習は？」「この場所でも送迎できる？」など、どんな小さなことでも大丈夫です。</p></div><div className="contact-actions"><a className="contact-button phone" href="tel:"><Phone/><span><small>お電話で相談</small>電話番号 準備中</span></a><a className="contact-button line" href="#contact-note"><MessageCircle/><span><small>LINEで相談</small>公式LINE 準備中</span></a><a className="contact-button reserve" href="mailto:?subject=無料相談予約"><ArrowRight/><span><small>24時間受付</small>無料相談を予約</span></a><p id="contact-note">※ 公開前に正式な電話番号・LINE・予約先へ差し替えられます。</p></div></div></section>
</main>; }
