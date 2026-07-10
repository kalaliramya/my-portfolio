export default function Projects() {
  return (

    <section id="projects">

      <div className="container">

        <div className="sec-label">Projects</div>
        <h2 className="sec-heading">Things I’ve Built</h2>
        <div className="sec-line"></div>

        <div className="projects-grid">

          {/* <div className="project-card">
            <div className="project-num">01</div>
            <div className="project-title">Portfolio Website</div>
            <div className="project-desc">
              Modern developer portfolio with futuristic UI and animations.
            </div>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">CSS</span>
            </div>
            <a className="project-link" href="#">View Project →</a>
          </div> */}


          <div className="project-card">
            <div className="project-num">01</div>

            <div className="project-title">
              Document Management API
            </div>

            <div className="project-desc">
              Scalable ASP.NET Core Web API with JWT authentication,
              Google Drive document upload integration, fund management,
              account transactions, and clean layered architecture.
            </div>

            <div className="project-tags">
              <span className="tag">ASP.NET Core</span>
              <span className="tag">JWT</span>
              <span className="tag">SQL Server</span>
              <span className="tag">Google Drive API</span>
            </div>

            <a
              className="project-link"
              href="https://github.com/kalaliramya/SampleBackedApi"
              target="_blank"
            >
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-num">02</div>

            <div className="project-title">
              Razorpay Payment Integration
            </div>

            <div className="project-desc">
              End-to-end payment gateway integration using Razorpay
              with backend API handling, transaction storage,
              and frontend payment flow.
            </div>

            <div className="project-tags">
              <span className="tag">Razorpay</span>
              <span className="tag">Web API</span>
              <span className="tag">JavaScript</span>
              <span className="tag">SQL Server</span>
            </div>

            <a
              className="project-link"
              href="https://github.com/kalaliramya/SecurePayX"
              target="_blank"
            >
              View Project →
            </a>
          </div>

 <div className="project-card">
            <div className="project-num">03</div>

            <div className="project-title">
              Repository pattern 
            </div>

            <div className="project-desc">
              Built secure authentication system following clean architecture principles.
            </div>

            <div className="project-tags">
              <span className="tag">ASP.NET Core</span>
              <span className="tag">JWT</span>
              <span className="tag">SQL Server</span>
              <span className="tag">Google Drive API</span>
            </div>

            <a
              className="project-link"
              href="https://github.com/kalaliramya/GogagaAssignment"
              target="_blank"
            >
              View Project →
            </a>
          </div>


        </div>

      </div>
    </section>
  );
}