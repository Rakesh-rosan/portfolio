function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>
        Rakesh Rosan Paital
      </h1>

      <h2>
        GenAI Lead Engineer
      </h2>

      <p>
        Agentic AI • Hybrid RAG • LangGraph • GCP
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        View Projects
      </button>
    </div>
  );
}

export default App;