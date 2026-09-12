import Link from "next/link";

const services = [
  {
    title: "一発試験・普通免許",
    text: "札幌運転免許試験場での一発試験合格を目指して、第一段階・第二段階を丁寧にサポートします。",
  },
  {
    title: "ペーパードライバー講習",
    text: "久しぶりの運転、苦手な道路、駐車など、お客様の目的に合わせて練習します。",
  },
  {
    title: "企業・安全運転講習",
    text: "新人教育・安全運転教育・違反者教育など、企業の交通安全をサポートします。",
  },
  {
    title: "普通二輪・大型二輪サポート",
    text: "二輪免許取得に向けたアドバイスや運転技術のサポートを行います。",
  },
  {
    title: "その他の運転・試験サポート",
    text: "準中型免許、特殊な運転技術、その他のご相談にも対応します。",
  },
];

const paperPrices = [
  ["お試し 50分", "5,000円"],
  ["90分", "8,500円"],
  ["90分 × 4回", "24,000円"],
  ["90分 × 8回", "48,000円"],];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "60px 20px",
          background:
            "linear-gradient(180deg, rgba(0,120,210,.88), rgba(0,70,150,.92)), linear-gradient(135deg,#58bdf5,#0068b7)",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <p
            style={{
              fontSize: 16,
              letterSpacing: 3,
              marginBottom: 18,
              fontWeight: 700,
            }}
          >
            札幌ドライビングサポート
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 8vw, 70px)",
              lineHeight: 1.25,
              margin: 0,
              fontWeight: 800,
            }}
          >
            免許を取ったら、
            <br />
            行きたい場所。
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 4vw, 24px)",
              lineHeight: 1.8,
              marginTop: 28,
              fontWeight: 600,
            }}
          >
            札幌で、一人ひとりに合わせた
            <br />
            運転サポートを。
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 35,
            }}
          >
            <a
              href="#price"
              style={{
                background: "white",
                color: "#0068b7",
                padding: "15px 28px",
                borderRadius: 999,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              料金を見る
            </a>

            <a
              href="#contact"
              style={{
                background: "#0060a8",
                color: "white",
                border: "2px solid white",
                padding: "13px 28px",
                borderRadius: 999,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              お申し込み
            </a>
          </div>
        </div>
      </section>

      {/* CAMPAIGN */}
      <section
        style={{
          padding: "50px 20px",
          background: "white",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 20,
            }}
          >
            {/* 普通免許 */}
            <div
              style={{
                padding: 35,
                borderRadius: 20,
                background: "linear-gradient(135deg, #0068b7 0%, #004a8f 100%)",
                color: "white",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,104,183,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 12,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "8px 14px",
                  borderRadius: 8,
                  display: "inline-block",
                }}
              >
                ★ 月5名限定 ★
              </div>

              <h3 style={{ fontSize: 28, fontWeight: 800, margin: "15px 0" }}>
                普通免許取得サポート
              </h3>

              <div style={{ fontSize: 48, fontWeight: 800, margin: "20px 0" }}>
                250,000円
              </div>

              <div style={{ fontSize: 16, opacity: 0.95, marginBottom: 20 }}>
                （税込）
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.15)",
                  padding: 15,
                  borderRadius: 12,
                  marginBottom: 20,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                補修・延長・追加料金無料
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0 }}>
                できるだけ安く、でもしっかり合格したい方へ
              </p>
            </div>

            {/* ペーパードライバー */}
            <div
              style={{
                padding: 35,
                borderRadius: 20,
                background: "#f0f8ff",
                border: "3px solid #0068b7",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 15px 0", color: "#0068b7" }}>
                ペーパードライバー
              </h3>

              <div style={{ fontSize: 24, fontWeight: 800, color: "#0068b7", marginBottom: 15 }}>
                お試し 50分
              </div>

              <div style={{ fontSize: 40, fontWeight: 800, color: "#0068b7", margin: "15px 0" }}>
                5,000円
              </div>

              <div style={{ fontSize: 14, color: "#555", marginBottom: 20 }}>
                （税込）
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: "#555" }}>
                まずはお試しプランから始めてみませんか？
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f4faff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "#0075c9", fontWeight: 800 }}>CONCEPT</p>

          <h2 style={{ fontSize: "clamp(28px,6vw,44px)", marginBottom: 25 }}>
            教習所とは違う、
            <br />
            もっと身近な運転サポート。
          </h2>

          <p
            style={{
              lineHeight: 2,
              fontSize: 17,
              color: "#444",
            }}
          >
            札幌ドライビングサポートは、
            <br />
            「運転できるようになりたい」という気持ちに
            <br />
            一人ひとり寄り添います。
            <br />
            <br />
            必要な練習を必要なだけ。
            <br />
            分からないところは、分かるまで。
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "70px 20px",
          background: "white",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ color: "#0075c9", fontWeight: 800 }}>SERVICE</p>
            <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
              サービス
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 18,
            }}
          >
            {services.map((service) => (
              <div
                key={service.title}
                style={{
                  padding: 28,
                  borderRadius: 18,
                  background: "#f4faff",
                  border: "1px solid #d9edf9",
                }}
              >
                <h3
                  style={{
                    color: "#006eb8",
                    fontSize: 21,
                    marginTop: 0,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    lineHeight: 1.9,
                    color: "#555",
                    marginBottom: 0,
                  }}
                >
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTORCYCLE & BUSINESS */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f4faff",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 30,
            }}
          >
            {/* 二輪 */}
            <div
              style={{
                background: "white",
                padding: 30,
                borderRadius: 18,
                border: "1px solid #d9edf9",
              }}
            >
              <h3 style={{ fontSize: 24, color: "#006eb8", marginTop: 0 }}>
                普通二輪・大型二輪
              </h3>

              <div
                style={{
                  background: "#006eb8",
                  color: "white",
                  padding: 15,
                  borderRadius: 12,
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 800,
                  margin: "20px 0",
                }}
              >
                90分 15,000円
              </div>

              <p style={{ color: "#555", lineHeight: 1.8, fontSize: 15 }}>
                <strong>コース使用料込み</strong>
                <br />
                <br />
                一発試験・外免切替などのサポート。
                <br />
                <br />
                iPadによる動画確認で、姿勢・操作・安全運転をチェック。
                <br />
                <br />
                ※ 車両の貸し出しはしません。お客様自身のバイクを使用します。
              </p>
            </div>

            {/* 企業講習 */}
            <div
              style={{
                background: "white",
                padding: 30,
                borderRadius: 18,
                border: "1px solid #d9edf9",
              }}
            >
              <h3 style={{ fontSize: 24, color: "#006eb8", marginTop: 0 }}>
                企業・安全運転講習
              </h3>

              <p style={{ color: "#555", lineHeight: 1.8, fontSize: 15 }}>
                <strong>対応内容：</strong>
                <br />
                • 新人安全運転教育
                <br />
                • 安全運転教育
                <br />
                • 違反者教育
                <br />
                <br />
                <strong>内容：</strong>
                <br />
                PowerPointによる安全運転講義
                <br />
                ＋
                <br />
                運転適性・技能確認
                <br />
                ＋
                <br />
                評価・アドバイス
                <br />
                <br />
                <strong>料金：</strong>
                ご予算に応じてご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONE SHOT */}
      <section
        style={{
          padding: "70px 20px",
          background: "#eef8ff",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#0075c9", fontWeight: 800 }}>
              ONE-SHOT EXAM
            </p>

            <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
              一発試験を、
              <br />
              本気でサポート。
            </h2>
          </div>

          <div
            style={{
              marginTop: 35,
              display: "grid",
              gap: 15,
            }}
          >
            {[
              ["第一段階", "仮免許試験まで", "15回以上の練習を基本にサポート"],
              ["第二段階", "本免許試験まで", "送迎・路上・試験コースを練習"],
              ["動画振り返り", "iPadを活用", "自分の運転を映像で確認"],
            ].map(([title, subtitle, text]) => (
              <div
                key={title}
                style={{
                  background: "white",
                  padding: 24,
                  borderRadius: 16,
                  borderLeft: "5px solid #0075c9",
                }}
              >
                <strong style={{ fontSize: 21 }}>{title}</strong>
                <div style={{ color: "#0075c9", fontWeight: 700 }}>
                  {subtitle}
                </div>
                <p style={{ marginBottom: 0, color: "#555" }}>{text}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 30,
              padding: 25,
              background: "#006eb8",
              color: "white",
              borderRadius: 18,
              textAlign: "center",
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            補修・追加料金はかかりません。
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section
        id="price"
        style={{
          padding: "70px 20px",
          background: "white",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 35 }}>
            <p style={{ color: "#0075c9", fontWeight: 800 }}>PRICE</p>
            <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
              料金
            </h2>
          </div>

          <div
            style={{
              background: "#f4faff",
              borderRadius: 20,
              padding: 25,
              border: "2px solid #d7ecf9",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#006eb8",
                fontSize: 25,
              }}
            >
              ペーパードライバー講習
            </h3>

            <div style={{ display: "grid", gap: 10 }}>
              {paperPrices.map(([name, price]) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 14px",
                    background: "white",
                    borderRadius: 10,
                  }}
                >
                  <span>{name}</span>
                  <strong style={{ color: "#006eb8", fontSize: 19 }}>
                    {price}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 35,
              padding: 25,
              borderRadius: 20,
              background: "#eef8ff",
              border: "2px solid #d7ecf9",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#006eb8",
                fontSize: 25,
                marginTop: 0,
              }}
            >
              普通免許取得サポート（一発試験）
            </h3>

            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["一般", "250,000円"],
                ["学生", "242,000円"],
                ["取り消し者・うっかり失効", "230,000円"],
              ].map(([plan, price]) => (
                <div
                  key={plan}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 14px",
                    background: "white",
                    borderRadius: 10,
                  }}
                >
                  <span>{plan}</span>
                  <strong style={{ color: "#006eb8", fontSize: 19 }}>
                    {price}
                  </strong>
                </div>
              ))}
            </div>

            <p
              style={{
                textAlign: "center",
                color: "#555",
                fontSize: 15,
                marginTop: 15,
                marginBottom: 0,
                fontWeight: 700,
              }}
            >
              ※ 補修・延長・追加料金無料
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f4faff",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#0075c9", fontWeight: 800 }}>FEATURE</p>

          <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
            運転を「見える化」する。
          </h2>

          <p
            style={{
              fontSize: 17,
              lineHeight: 2,
              color: "#444",
            }}
          >
            教習中の運転を動画で記録。
            <br />
            iPadを使って一緒に振り返り、
            <br />
            「なぜうまくいかなかったのか」を
            <br />
            分かりやすく確認します。
          </p>

          <div
            style={{
              marginTop: 30,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 15,
            }}
          >
            {[
              "動画で運転を確認",
              "iPadで分かりやすく解説",
              "運転のクセを把握",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "white",
                  padding: 25,
                  borderRadius: 16,
                  fontWeight: 700,
                  color: "#006eb8",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section
        style={{
          padding: "70px 20px",
          background: "white",
        }}
      >
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#0075c9", fontWeight: 800 }}>PROFILE</p>

            <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
              指導員歴27年。
            </h2>
          </div>

          <div
            style={{
              marginTop: 30,
              padding: 30,
              borderRadius: 20,
              background: "#f4faff",
              lineHeight: 2,
              color: "#444",
            }}
          >
            <p style={{ marginTop: 0 }}>
              <strong>自動車教習指導員歴27年</strong>
              <br />
              <br />
              北海道最大規模の指定自動車学校での副管理者経験を活かし、
              一人ひとりの運転レベルや目的に合わせた指導を行います。
            </p>

            <p>
              <strong>指導経験：</strong>
              <br />
              普通車、準中型、普通二種、普通二輪、大型二輪など
              さまざまな車種の指導を経験。
              <br />
              <br />
              <strong>その他の経験：</strong>
              <br />
              • 技能検定員経験
              <br />
              • 高齢者講習
              <br />
              • 初心者講習
              <br />
              • 取り消し処分者講習
              <br />
              • 応急救護指導員
              <br />
              • 適性検査指導員
            </p>

            <p style={{ marginBottom: 0, fontWeight: 700, color: "#0075c9" }}>
              「免許を取ること」だけではなく、
              <br />
              「免許を取った後も安全に運転できること」
              <br />
              を大切にしています。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f4faff",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ color: "#0075c9", fontWeight: 800 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
              よくある質問
            </h2>
          </div>

          <div style={{ display: "grid", gap: 15 }}>
            {[
              {
                q: "指定自動車学校との違いは？",
                a: "大きな違いは技能試験免除の有無です。指定自動車学校では学校内で技能検定を受け、合格すると技能試験が免除されます。札幌ドライビングサポートでは、札幌運転免許試験場での試験に向けて、合格できる運転技術を身につけるための練習を行います。学科についてはご自身で勉強していただく方式です。",
              },
              {
                q: "なぜ料金が安いの？",
                a: "仮免許取得まで札幌運転免許試験場のコースを活用して練習するなど、専用の大きな教習コースを持たないことで固定費を抑えています。教材のデジタル化など、できるだけ経費を抑え、その分を料金に反映しています。ただし、普通免許取得サポートは月5名限定です。",
              },
              {
                q: "試験に落ちたら追加料金は？",
                a: "補修・延長料金はかかりません。合格できる運転を身につけるまで、一緒に取り組みます。",
              },
              {
                q: "送迎はありますか？",
                a: "送迎には限りがありますが、学校・ご自宅・最寄り駅などへの送迎に対応します。",
              },
              {
                q: "誰が教えるの？",
                a: "指導員歴27年の経験者が直接指導します。さまざまな車種の指導・検定経験に加え、高齢者講習、初心者講習、取り消し処分者講習、応急救護などの経験があります。",
              },
              {
                q: "試験場の試験は厳しいですか？",
                a: "札幌運転免許試験場の試験は厳しいと言われています。しかし、重要なのは試験に合わせた小手先の運転ではなく、正確な法令履行と正確な運転操作によって、安全で円滑な運転ができることです。そこを目標に一緒に練習します。",
              },
              {
                q: "学科は教えてもらえますか？",
                a: "基本的に学科はご自身で勉強していただきます。教材・資料はデジタル化し、学習しやすい環境を整えます。",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  background: "white",
                  padding: 20,
                  borderRadius: 14,
                  border: "1px solid #d9edf9",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontWeight: 700,
                    color: "#006eb8",
                    fontSize: 16,
                    listStyle: "none",
                    userSelect: "none",
                  }}
                >
                  <span style={{ display: "inline-block", marginRight: 10 }}>
                    Q.
                  </span>
                  {faq.q}
                </summary>

                <p
                  style={{
                    marginTop: 15,
                    marginBottom: 0,
                    color: "#555",
                    lineHeight: 1.8,
                  }}
                >
                  <strong style={{ color: "#0075c9" }}>A.</strong> {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AREA */}
      <section
        style={{
          padding: "70px 20px",
          background: "#006eb8",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
            札幌市内を中心に対応
          </h2>

          <p style={{ lineHeight: 2, fontSize: 17 }}>
            ご希望の場所への送迎にも対応します。
            <br />
            札幌運転免許試験場での一発試験対策もお任せください。
          </p>
        </div>
      </section>

      {/* MESSAGE */}
      <section
        style={{
          padding: "70px 20px",
          background: "#0068b7",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,6vw,50px)", lineHeight: 1.3 }}>
            安くするだけではありません。
          </h2>

          <h2 style={{ fontSize: "clamp(28px,6vw,50px)", lineHeight: 1.3, marginTop: 15 }}>
            合格できる運転を身につける。
          </h2>

          <p style={{ fontSize: 18, lineHeight: 2, marginTop: 30 }}>
            免許を取ることだけをゴールにせず、
            <br />
            免許を取った後も安全に運転できるようになることを目指します。
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          background: "#f4faff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: "#0075c9", fontWeight: 800 }}>CONTACT</p>

          <h2 style={{ fontSize: "clamp(28px,6vw,42px)" }}>
            お申し込み・お問い合わせ
          </h2>

          <p style={{ lineHeight: 1.9, color: "#555" }}>
            まずはお気軽にお問い合わせください。
            <br />
            ご希望の講習内容や運転のお悩みをお聞かせください。
          </p>

          <a
            href="tel:011-532-2639"
            style={{
              display: "inline-block",
              marginTop: 35,
              padding: "20px 50px",
              background: "#0068b7",
              color: "white",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 22,
              fontWeight: 800,
              minWidth: 250,
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.background = "#004a8f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "#0068b7";
            }}
          >
            📞 011-532-2639
          </a>

          <div style={{ marginTop: 20, fontSize: 15, color: "#555" }}>
            または
          </div>

          <a
            href="#contact-form"
            style={{
              display: "inline-block",
              marginTop: 15,
              padding: "20px 50px",
              background: "#0075c9",
              color: "white",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 22,
              fontWeight: 800,
              minWidth: 250,
            }}
          >
            メールで相談
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#063b63",
          color: "white",
          textAlign: "center",
          padding: "35px 20px",
        }}
      >
        <strong style={{ fontSize: 20 }}>
          札幌ドライビングサポート
        </strong>

        <p style={{ marginBottom: 0, opacity: 0.8 }}>
          地域の交通安全教育センターを目指して
        </p>
      </footer>
    </main>
  );
}
