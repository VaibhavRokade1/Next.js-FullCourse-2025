import LightPillar from "@/components/LightPillar";

const TestPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Effect */}
        <LightPillar
          topColor="#5227FF"
          bottomColor="#f10909"
          intensity={0.7}
          rotationSpeed={1.5}
          pillarRotation={47}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          interactive={false}
          mixBlendMode="normal"
        />

        {/* Hero Content Overlay */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 1.5rem",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Build Experiences,
              <br />
              Not Just Interfaces
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "2rem",
              }}
            >
              High-performance visuals, immersive interactions, and modern web
              engineering—crafted to stand out.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get Started
              </button>

              <button
                style={{
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  background: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.4)",
                  cursor: "pointer",
                }}
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestPage;
