import React, { useEffect, useState } from "react";

function App() {
  const [health, setHealth] = useState(null);
  const [version, setVersion] = useState(null);

  useEffect(() => {
    fetch("/healthz")
      .then((r) => r.json())
      .then((data) => setHealth(data))
      .catch(() => setHealth({ status: "unknown", port: 5173 }));

    fetch("/version")
      .then((r) => r.json())
      .then((data) => setVersion(data.version))
      .catch(() => setVersion("v2.0.0"));
  }, []);

  return (
    <div className="app-root-green">
      {/* BACKGROUND SYMBOLS */}
      <div className="bg-symbols-green">
        <span className="bg-symbol bg-symbol-1">{`{}`}</span>
        <span className="bg-symbol bg-symbol-2">&lt;/&gt;</span>
        <span className="bg-symbol bg-symbol-3">☁</span>
        <span className="bg-symbol bg-symbol-4">∞</span>
        <span className="bg-symbol bg-symbol-5">#</span>
      </div>

      {/* Header + tagline */}
      <header className="app-header-green">
        <div className="header-container-green">
          <h1 className="header-title-green">KUBELANCER LABS</h1>
          <div className="header-tagline-green">
            <span>Green Release</span>
            <span>Next Candidate</span>
            <span>Realtime</span>
          </div>
          <div className="header-divider-green" />
        </div>
      </header>

      {/* Main */}
      <main className="app-main-green">
        <div className="badge-pill-green">
          Green Version · Next / Candidate Release
        </div>

        <section className="card-green">
          <div className="card-header-row">
            <span className="env-pill">ENV: GREEN</span>
            <span className="env-pill soft">Traffic: Pending / Partial</span>
          </div>

          <p className="card-subtitle-green">
            GREEN / NEXT / CANDIDATE VERSION
          </p>

          <h1 className="card-version-green">{version || "…"}</h1>

          <div className="status-row">
            <div className="status-pill-green">
              <span className="status-dot-green" />
              <span>
                Live Demo · 
              </span>
            </div>
            <div className="status-meta">
              <span>Built for Blue-Green rollouts</span>
            </div>
          </div>

          <div className="endpoints-panel">
            <h2>Test Endpoints</h2>
            <ul>
              <li>
                <code>GET</code>{" "}
                <a
                  href="/healthz"
                  className="endpoint-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  /healthz
                </a>
              </li>
              <li>
                <code>GET</code>{" "}
                <a
                  href="/version"
                  className="endpoint-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  /version
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer-green">
        <p className="footer-line-green footer-tech-green">
          CLOUD • AWS • GCP • AZURE • DEVOPS • DEVSECOPS • GITOPS • SERVICE
          MESH • CI/CD PIPELINES • MONITORING • LOGGING • ALERTING
        </p>
        <p className="footer-line-green footer-link-green">
          <span className="footer-brand-green">Green Realtime Demos</span> at{" "}
          <span className="footer-brand-green">KUBELANCER LABS</span> —{" "}
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
