import { useState } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("code-generation");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    alert(`Task: Code Generation\nPrompt: ${prompt}`);
  };

  return (
    <div className="app-root">

      {/* ===== TOP HEADER ===== */}
      <header className="top-header">
        <div className="header-left">
          <h1 className="app-title">ADAM SDLC</h1>
          <span className="app-subtitle">AI-Powered Development</span>
        </div>

        <div className="header-right">
          <span className="status-badge">● All Systems Operational</span>
        </div>
      </header>
      {/* ===== END HEADER ===== */}

      {/* ===== MAIN CONTENT ===== */}
      <div className="app-container">

        {/* LEFT PANEL */}
        <aside className="left-panel">

          {/* ===== ADAM ORCHESTRATOR BOX ===== */}
          <div className="orchestrator-box">
            <div className="orchestrator-header">
              <h2 className="orchestrator-title">ADAM Orchestrator</h2>
              <p className="orchestrator-subtitle">
                Your AI Development Assistant
              </p>
            </div>
          </div>
          {/* ===== END ORCHESTRATOR BOX ===== */}

          <label className="label">Task</label>
          <select
            className="dropdown"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          >
            <option value="code-generation">Code Generation</option>
          </select>

          <label className="label">Prompt</label>
          <textarea
            className="prompt-box"
            placeholder="Describe the code you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button className="submit-btn" onClick={handleSubmit}>
            Generate Code
          </button>
        </aside>

        {/* RIGHT PANEL */}
        <main className="right-panel">
          {task === "code-generation" && (
            <div className="codespace-view">
              <div className="codespace-header">
                <h3>GitHub Codespaces</h3>
                <span className="badge">Code Generation</span>
              </div>

              <div className="codespace-body">
                <p>
                  A cloud-based VS Code environment will be used to generate
                  and run your code.
                </p>

                <div className="repo-box">
                  

                  <div>
                    <strong>Branch</strong>
                    <span>main</span>
                  </div>

                  <div>
                    <strong>Environment</strong>
                    <span>Codespaces (VS Code Web)</span>
                  </div>
                </div>

                <button
                  className="codespace-btn"
                  onClick={() =>
                    window.open(
                      "https://github.com/codespaces/new",
                      "_blank"
                    )
                  }
                >
                  Open GitHub Codespace
                </button>
              </div>
            </div>
          )}
        </main>

      </div>
      {/* ===== END MAIN CONTENT ===== */}
    </div>
  );
}
