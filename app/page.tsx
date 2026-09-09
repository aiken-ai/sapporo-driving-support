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
];

const paperPrices = [
  ["お試し 50分", "5,000円"],
  ["90分", "8,500円"],
  ["120分", "11,000円"],
  ["180分", "15,500円"],
  ["60分 × 4回", "23,500円"],
  ["60分 × 8回", "42,000円"],
];

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
              marginTop: 20,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 15,
            }}
          >
            <div
              style={{
                padding: 25,
                borderRadius: 16,
                background: "#006eb8",
                color: "white",
                textAlign: "center",
              }}
            >
              <div>普通免許 AT限定</div>
              <strong style={{ fontSize: 30 }}>250,000円</strong>
              <div>一発試験サポート</div>
            </div>

            <div
              style={{
                padding: 25,
                borderRadius: 16,
                background: "#eef8ff",
                textAlign: "center",
              }}
            >
              <div>普通二種 AT限定</div>
              <strong style={{ fontSize: 30, color: "#006eb8" }}>
                150,000円
              </strong>
            </div>
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
            <p>
              長年の自動車教習・運転指導の経験を生かし、
              一人ひとりの運転レベルや目的に合わせた指導を行います。
            </p>

            <p>
              普通車、準中型、普通二種、普通二輪、大型二輪などの
              指導経験を活かし、初心者から久しぶりに運転する方まで
              丁寧にサポートします。
            </p>

            <p style={{ marginBottom: 0, fontWeight: 700 }}>
              目標は「地域の交通安全教育センター」です。
            </p>
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
            href="#"
            style={{
              display: "inline-block",
              marginTop: 25,
              padding: "17px 45px",
              background: "#0075c9",
              color: "white",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            お申し込みはこちら
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
