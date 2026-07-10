import CodePanel from "./CodePanel";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">

        <div className="terminal-badge">
          Open to work
        </div>

        <h1 className="hero-name">
          RAMYA <span className="accent">Kalali</span>
        </h1>

        <p className="hero-title">
          Full Stack .NET Developer
        </p>

        <p className="hero-desc">
          Building scalable APIs and clean UIs with .NET Core, React & Azure.
        </p>
   <div className="button-group">
    <a href="#contact" className="btn-primary">Hire Me →</a>

    <a href="#projects" className="btn-outline">View Work</a>

    <a href="/Ram_Resume.docx" className="btn-ghost" download>
   ↓ Resume  </a>
  </div>
  

      </div>
      <div className="hero-right">
  <CodePanel />
</div>
    </section>
  )
}