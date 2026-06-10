function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-screen text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          Rakesh Rosan Paital
        </h1>

        <h2 className="text-2xl text-cyan-400 mb-6">
          GenAI Lead Engineer
        </h2>

        <p className="max-w-3xl text-lg text-gray-300">
          8+ years of experience in Generative AI, Agentic AI,
          Machine Learning, NLP, and Cloud AI solutions.
          Specialized in Hybrid RAG, LangGraph, FastAPI,
          Databricks and GCP.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold">
            View Projects
          </button>

          <button className="border border-cyan-500 px-6 py-3 rounded-lg">
            Download Resume
          </button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-8">
          GenAI Lead Engineer with expertise in
          Retrieval-Augmented Generation (RAG),
          Agentic AI, NLP, Machine Learning and
          enterprise AI deployments. Passionate about
          building scalable AI systems that solve
          real-world business problems.
        </p>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Experience
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="text-2xl text-cyan-400">
              Wipro
            </h3>
            <p>GenAI Lead Engineer (2025 - Present)</p>
          </div>

          <div>
            <h3 className="text-2xl text-cyan-400">
              CureBay
            </h3>
            <p>Data Scientist (2024 - 2025)</p>
          </div>

          <div>
            <h3 className="text-2xl text-cyan-400">
              IBM
            </h3>
            <p>Senior Developer (2022 - 2024)</p>
          </div>

          <div>
            <h3 className="text-2xl text-cyan-400">
              BIPROS
            </h3>
            <p>Analyst (2017 - 2022)</p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border border-slate-700 rounded-xl p-6">
            <h3 className="text-2xl mb-3 text-cyan-400">
              Hybrid RAG System
            </h3>

            <p className="text-gray-300">
              Built a production-ready Hybrid RAG
              architecture using vector search,
              embeddings and LLMs, reducing
              information retrieval time by 70%.
            </p>
          </div>

          <div className="border border-slate-700 rounded-xl p-6">
            <h3 className="text-2xl mb-3 text-cyan-400">
              Agentic AI Framework
            </h3>

            <p className="text-gray-300">
              Developed intelligent agents capable
              of planning, reasoning and tool usage
              for enterprise workflows.
            </p>
          </div>

          <div className="border border-slate-700 rounded-xl p-6">
            <h3 className="text-2xl mb-3 text-cyan-400">
              Medical AI Assistant
            </h3>

            <p className="text-gray-300">
              AI-powered healthcare assistant for
              prescription generation and clinical
              workflow automation.
            </p>
          </div>

          <div className="border border-slate-700 rounded-xl p-6">
            <h3 className="text-2xl mb-3 text-cyan-400">
              Document Intelligence
            </h3>

            <p className="text-gray-300">
              OCR + LLM solution for intelligent
              document extraction and automation.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Generative AI",
            "Agentic AI",
            "LangGraph",
            "LangChain",
            "Python",
            "FastAPI",
            "GCP",
            "Databricks",
            "Machine Learning",
            "NLP",
            "Docker",
            "Vector Search"
          ].map(skill => (
            <span
              key={skill}
              className="bg-slate-800 px-4 py-2 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;