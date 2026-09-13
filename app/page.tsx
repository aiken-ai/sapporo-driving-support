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
      {/* HERO with Background Image */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "80px 20px 60px",
          backgroundImage: "url('/IMG_0173.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(0,68,183,0.75), rgba(0,104,183,0.70)), linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
            zIndex: 1,
          }}
        />

        <div style={{ maxWidth: 1000, position: "relative", zIndex: 2 }}>
          <p
            style={{
              fontSize: "clamp(13px, 3vw, 16px)",
              letterSpacing: 4,
              marginBottom: 20,
              fontWeight: 900,
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Sapporo Driving Support
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 10vw, 90px)",
              lineHeight: 1.1,
              margin: "0 0 20px 0",
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            免許を取ったら、
            <br />
            行きたい場所。
          </h1>

          <div
            style={{
              height: 4,
              width: 80,
              background: "#FFD700",
              margin: "25px auto",
              borderRadius: 2,
            }}
          />

          <p
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              lineHeight: 1.6,
              marginTop: 20,
              fontWeight: 500,
              opacity: 0.95,
            }}
          >
            安心と信頼で、安全な運転人生をスタート。
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 50,
            }}
          >
            <a
              href="#campaign"
              style={{
                background: "#FFD700",
                color: "#003060",
                padding: "18px 40px",
                borderRadius: 50,
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 16,
                boxShadow: "0 8px 20px rgba(255,215,0,0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(255,215,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(255,215,0,0.3)";
              }}
            >
              料金をチェック
            </a>

            <a
              href="#contact"
              style={{
                background: "white",
                color: "#003060",
                padding: "18px 40px",
                borderRadius: 50,
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 16,
                boxShadow: "0 8px 20px rgba(255,255,255,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(255,255,255,0.2)";
              }}
            >
              無料相談
            </a>
          </div>
        </div>
      </section>

      {/* CAMPAIGN */}
      <section
        id="campaign"
        style={{
          padding: "80px 20px",
          background: "#f8f9fa",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              textAlign: "center",
              marginBottom: 60,
              fontWeight: 900,
              color: "#003060",
            }}
          >
            キャンペーン
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 25,
            }}
          >
            {/* 普通免許 */}
            <div
              style={{
                padding: 40,
                borderRadius: 24,
                background: "linear-gradient(135deg, #003060 0%, #0068b7 100%)",
                color: "white",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(0,48,96,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  background: "rgba(255,215,0,0.1)",
                  borderRadius: "50%",
                }}
              />

              <div
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#FFD700",
                  marginBottom: 15,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                ⭐ 限定 5名 / 月 ⭐
              </div>

              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  margin: "15px 0 25px 0",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                普通免許
                <br />
                取得サポート
              </h3>

              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  margin: "25px 0",
                  color: "#FFD700",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                ¥250K
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.15)",
                  padding: 16,
                  borderRadius: 14,
                  marginBottom: 20,
                  fontSize: 16,
                  fontWeight: 800,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                補修・延長・追加料金
                <br />
                すべて無料
              </div>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  marginBottom: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                確実に合格できる運転技術を身につけたい全ての方へ
              </p>
            </div>

            {/* ペーパードライバー */}
            <div
              style={{
                padding: 40,
                borderRadius: 24,
                background: "white",
                border: "3px solid #FFD700",
                textAlign: "center",
                boxShadow: "0 15px 40px rgba(255,215,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#FFD700",
                  marginBottom: 15,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                🚗 お試しプラン
              </div>

              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  margin: "15px 0",
                  color: "#003060",
                }}
              >
                ペーパー
                <br />
                ドライバー
              </h3>

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#0068b7",
                  marginBottom: 15,
                }}
              >
                50分体験
              </div>

              <div
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  color: "#FFD700",
                  margin: "20px 0",
                }}
              >
                ¥5K
              </div>

              <div
                style={{
                  background: "#f0f8ff",
                  padding: 16,
                  borderRadius: 14,
                  marginBottom: 20,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#003060",
                }}
              >
                久しぶりの運転、得意な道、苦手な道路も安心
              </div>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  marginBottom: 0,
                  color: "#555",
                }}
              >
                まずはお気軽にお試しください
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section
        style={{
          padding: "100px 20px",
          background: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p
            style={{
              color: "#0068b7",
              fontWeight: 900,
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 20,
            }}
          >
            Our Concept
          </p>

          <h2
            style={{
              fontSize: "clamp(36px, 8vw, 56px)",
              marginBottom: 40,
              fontWeight: 900,
              lineHeight: 1.2,
              color: "#003060",
            }}
          >
            安全に、自信を持って、
            <br />
            運転できる人を育てる。
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 30,
              marginTop: 50,
            }}
          >
            {[
              {
                title: "個別対応",
                desc: "一人ひとりの運転レベルと目標に合わせたカスタマイズ指導",
              },
              {
                title: "必要な分だけ",
                desc: "無駄な追加料金なし。確実な合格まで何度でも練習",
              },
              {
                title: "27年の経験",
                desc: "指導員歴27年。さまざまな車種と状況での実践指導",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: 30,
                  background: "#f8f9fa",
                  borderRadius: 18,
                  border: "2px solid #e8eef5",
                }}
              >
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 900,
                    color: "#FFD700",
                    marginBottom: 15,
                  }}
                >
                  {idx === 0 && "👤"}
                  {idx === 1 && "✓"}
                  {idx === 2 && "⚡"}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#003060",
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "100px 20px",
          background: "#f8f9fa",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p
              style={{
                color: "#0068b7",
                fontWeight: 900,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 20,
              }}
            >
              Services
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 8vw, 52px)",
                fontWeight: 900,
                color: "#003060",
              }}
            >
              サービス
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
            }}
          >
            {services.map((service, idx) => (
              <div
                key={service.title}
                style={{
                  padding: 35,
                  borderRadius: 20,
                  background: "white",
                  border: "none",
                  boxShadow: "0 8px 24px rgba(0,48,96,0.08)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,48,96,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,48,96,0.08)";
                }}
              >
                <div
                  style={{
                    fontSize: 40,
                    marginBottom: 15,
                  }}
                >
                  {idx === 0 && "🎯"}
                  {idx === 1 && "🚗"}
                  {idx === 2 && "🏢"}
                  {idx === 3 && "🏍️"}
                  {idx === 4 && "⚙️"}
                </div>

                <h3
                  style={{
                    color: "#003060",
                    fontSize: 20,
                    marginTop: 0,
                    fontWeight: 900,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    lineHeight: 1.8,
                    color: "#666",
                    marginBottom: 0,
                    fontSize: 15,
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
          padding: "100px 20px",
          background: "white",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p
              style={{
                color: "#0068b7",
                fontWeight: 900,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 20,
              }}
            >
              One-Shot Exam Support
            </p>

            <h2
              style={{
                fontSize: "clamp(36px, 8vw, 52px)",
                fontWeight: 900,
                color: "#003060",
              }}
            >
              一発試験
              <br />
              完全サポート
            </h2>
          </div>

          <div
            style={{
              marginTop: 50,
              display: "grid",
              gap: 20,
            }}
          >
            {[
              {
                num: "01",
                title: "第一段階",
                subtitle: "仮免許試験まで",
                text: "15回以上の練習を基本。仮免許試験合格まで丁寧にサポート。",
              },
              {
                num: "02",
                title: "第二段階",
                subtitle: "本免許試験まで",
                text: "送迎・路上・試験コースを練習。本試験での確実な合格を目指す。",
              },
              {
                num: "03",
                title: "動画振り返り",
                subtitle: "iPadで即座に確認",
                text: "自分の運転を映像で確認。運転のクセや改善点を明確にします。",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#f8f9fa",
                  padding: 30,
                  borderRadius: 18,
                  borderLeft: "6px solid #FFD700",
                  display: "flex",
                  gap: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: "#FFD700",
                    minWidth: 50,
                  }}
                >
                  {item.num}
                </div>

                <div>
                  <strong style={{ fontSize: 22, color: "#003060" }}>
                    {item.title}
                  </strong>
                  <div
                    style={{
                      color: "#0068b7",
                      fontWeight: 700,
                      marginBottom: 8,
                      fontSize: 15,
                    }}
                  >
                    {item.subtitle}
                  </div>
                  <p style={{ marginBottom: 0, color: "#666" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 40,
              padding: 30,
              background: "linear-gradient(135deg, #003060, #0068b7)",
              color: "white",
              borderRadius: 20,
              textAlign: "center",
              fontWeight: 900,
              fontSize: 22,
              boxShadow: "0 10px 30px rgba(0,48,96,0.2)",
            }}
          >
            ✓ 補修・延長・追加料金 一切かかりません
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section
        id="price"
        style={{
          padding: "100px 20px",
          background: "#f8f9fa",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p
              style={{
                color: "#0068b7",
                fontWeight: 900,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 20,
              }}
            >
              Pricing
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 8vw, 52px)",
                fontWeight: 900,
                color: "#003060",
              }}
            >
              料金
            </h2>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: 20,
              padding: 35,
              boxShadow: "0 10px 30px rgba(0,48,96,0.08)",
              marginBottom: 30,
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#003060",
                fontSize: 28,
                fontWeight: 900,
                marginTop: 0,
              }}
            >
              ペーパードライバー講習
            </h3>

            <div style={{ display: "grid", gap: 12, marginTop: 25 }}>
              {paperPrices.map(([name, price]) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 20px",
                    background: "#f8f9fa",
                    borderRadius: 12,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#333" }}>
                    {name}
                  </span>
                  <strong style={{ color: "#0068b7", fontSize: 20 }}>
                    {price}
                  </strong>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 30,
              padding: 35,
              borderRadius: 20,
              background: "white",
              boxShadow: "0 10px 30px rgba(0,48,96,0.08)",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "#003060",
                fontSize: 28,
                fontWeight: 900,
                marginTop: 0,
              }}
            >
              普通免許取得サポート
              <br />
              （一発試験）
            </h3>

            <div style={{ display: "grid", gap: 12, marginTop: 25 }}>
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
                    padding: "18px 20px",
                    background: "#f8f9fa",
                    borderRadius: 12,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#333" }}>
                    {plan}
                  </span>
                  <strong style={{ color: "#0068b7", fontSize: 20 }}>
                    {price}
                  </strong>
                </div>
              ))}
            </div>

            <p
              style={{
                textAlign: "center",
                color: "#0068b7",
                fontSize: 15,
                marginTop: 20,
                marginBottom: 0,
                fontWeight: 900,
              }}
            >
              ✓ 補修・延長・追加料金無料
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE */}
      <section
        style={{
          padding: "100px 20px",
          background: "white",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              color: "#0068b7",
              fontWeight: 900,
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 3,
              marginBottom: 20,
            }}
          >
            Feature
          </p>

          <h2
            style={{
              fontSize: "clamp(36px, 8vw, 52px)",
              fontWeight: 900,
              color: "#003060",
              marginBottom: 20,
            }}
          >
            運転を「見える化」
          </h2>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              color: "#666",
              marginBottom: 50,
            }}
          >
            教習中の運転を動画で記録。iPadを使って一緒に振り返り、
            <br />
            「何が足りなかったのか」を分かりやすく確認します。
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {[
              { icon: "🎬", title: "動画で運転を確認", desc: "毎回の教習を記録" },
              { icon: "📱", title: "iPadで解説", desc: "その場で分かりやすく" },
              { icon: "🎯", title: "クセを把握", desc: "改善点を明確に" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f8f9fa",
                  padding: 30,
                  borderRadius: 18,
                  fontWeight: 700,
                  boxShadow: "0 8px 24px rgba(0,48,96,0.08)",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 15 }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    color: "#003060",
                    fontSize: 18,
                    marginTop: 0,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#666", marginBottom: 0, fontSize: 14 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section
        style={{
          padding: "100px 20px",
          background: "#f8f9fa",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <p
              style={{
                color: "#0068b7",
                fontWeight: 900,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 20,
              }}
            >
              Profile
            </p>

            <h2
              style={{
                fontSize: "clamp(36px, 8vw, 52px)",
                fontWeight: 900,
                color: "#003060",
              }}
            >
              指導員歴 27年
            </h2>
          </div>

          <div
            style={{
              marginTop: 40,
              padding: 40,
              borderRadius: 24,
              background: "white",
              boxShadow: "0 10px 30px rgba(0,48,96,0.08)",
            }}
          >
            <p
              style={{
                marginTop: 0,
                fontSize: 18,
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              <strong style={{ fontSize: 24, color: "#003060" }}>
                北海道最大規模の指定自動車学校
              </strong>
              <br />
              副管理者として25年以上の経験を持つ指導員が、
              一人ひとりの運転レベルや目的に合わせた指導を行います。
            </p>

            <div
              style={{
                marginTop: 30,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 20,
              }}
            >
              {[
                ["普通車・準中型", "🚗"],
                ["普通二輪・大型二輪", "🏍️"],
                ["技能検定員", "✓"],
                ["高齢者講習", "👴"],
                ["初心者講習", "🎓"],
                ["応急救護指導員", "🏥"],
              ].map(([text, icon]) => (
                <div
                  key={text}
                  style={{
                    padding: 18,
                    background: "#f8f9fa",
                    borderRadius: 14,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>
                    {icon}
                  </div>
                  <p style={{ margin: 0, color: "#333", fontWeight: 700 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 30,
                padding: 25,
                background: "linear-gradient(135deg, #003060, #0068b7)",
                borderRadius: 18,
                color: "white",
                textAlign: "center",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              「免許を取ること」だけでなく、<br />
              「免許を取った後も安全に運転できること」を目指します。
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "100px 20px",
          background: "white",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p
              style={{
                color: "#0068b7",
                fontWeight: 900,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 3,
                marginBottom: 20,
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontSize: "clamp(36px, 8vw, 52px)",
                fontWeight: 900,
                color: "#003060",
              }}
            >
              よくある質問
            </h2>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
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
                  background: "#f8f9fa",
                  padding: 24,
                  borderRadius: 16,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,48,96,0.06)",
                }}
              >
                <summary
                  style={{
                    fontWeight: 900,
                    color: "#003060",
                    fontSize: 16,
                    listStyle: "none",
                    userSelect: "none",
                  }}
                >
                  <span style={{ display: "inline-block", marginRight: 10, fontSize: 18 }}>
                    Q.
                  </span>
                  {faq.q}
                </summary>

                <p
                  style={{
                    marginTop: 16,
                    marginBottom: 0,
                    color: "#666",
                    lineHeight: 1.8,
                  }}
                >
                  <strong style={{ color: "#0068b7", fontSize: 16 }}>A.</strong>{" "}
                  {faq.a}
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
