import React, { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState(null);
  const [version, setVersion] = useState(null);
  const [theme, setTheme] = useState("dark"); // "dark" | "light"

  useEffect(() => {
    // Fetch /healthz
    fetch("/healthz")
      .then((r) => r.json())
      .then((data) => setHealth(data))
      .catch(() => setHealth({ status: "unknown", port: 5173 }));

    // Fetch /version
    fetch("/version")
      .then((r) => r.json())
      .then((data) => setVersion(data.version))
      .catch(() => setVersion("v1.0.0"));
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app-root theme-${theme}`}>
      {/* BACKGROUND LAYERS */}
      <div className="background-grid" />
      <div className="fog-layer" />
      <div className="bg-particles">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      <div className="floating-shapes">
        <div className="shape shape-cube" />
        <div className="shape shape-orb" />
        <div className="shape shape-cloud" />
      </div>

      {/* HEADER */}
      <header className="app-header">
        <div className="header-container">
          {/* MAIN TITLE */}
          <h1 className="header-title">KUBELANCER LABS</h1>

          {/* TAGLINE */}
          <div className="header-tagline-animated">
            <span>CloudTime</span>
            <span>DevOpsTime</span>
            <span>Realtime</span>
          </div>

          {/* DIVIDER */}
          <div className="header-divider-animated" />

          {/* THEME TOGGLE */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
          >
            <span className="toggle-track">
              <span className="toggle-thumb" />
            </span>
            <span className="toggle-label">
              {theme === "dark" ? "Dark mode" : "Light mode"}
            </span>
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="app-main">
        <div className="badge-pill">
           CI/CD Release Automation -  Smart Traffic Shift  -  GitOps Experience Zone
        </div>

        <section className="card large-card">
          <p className="card-subtitle">
            BLUE / STABLE / CURRENT PROD VERSION
          </p>

          <h1 className="card-version">{version || "…"}</h1>

          <div className="status-pill">
            <span className="status-dot" />
            <span>
               Live Demo
            </span>
          </div>

          <p className="card-links">
            Try:{" "}
            <a
              href="/healthz"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              /healthz
            </a>{" "}
            ·{" "}
            <a
              href="/version"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              /version
            </a>
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        <p className="footer-line footer-tech">
          CLOUD • AWS • GCP • AZURE • DEVOPS • DEVSECOPS • GITOPS • SERVICE
          MESH • CI/CD PIPELINES • MONITORING • LOGGING • ALERTING
        </p>
        <p className="footer-line footer-link">
          <span className="footer-brand">Simplified Real-Time Demos</span> at{" "}
          <span className="footer-brand">KUBELANCER LABS</span> —{" "}
          <a
            href="https://labs.kubelancer.com"
            target="_blank"
            rel="noreferrer"
          >
            labs.kubelancer.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
