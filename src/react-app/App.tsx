import { useEffect, useState, type ReactNode } from "react";
import "./App.css";

const CV_URL =
  "https://drive.google.com/file/d/1PqhkXiOZif3bDAKZH1Y7S0E4ws4QnP4p/view?usp=sharing";

const GITHUB_URL = "https://github.com/ruhollahjafari1994";
const LINKEDIN_URL = "https://www.linkedin.com/in/ruhollah-jafari/";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <div className="app">
      {/* NAVIGATION */}

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="logo">
            RJ<span>.</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className="mobile-menu"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-links">
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>

            <a href="#skills" onClick={closeMobileMenu}>
              Skills
            </a>

            <a href="#experience" onClick={closeMobileMenu}>
              Experience
            </a>

            <a href="#projects" onClick={closeMobileMenu}>
              Projects
            </a>

            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}

        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="status-dot" />
                AVAILABLE FOR REMOTE OPPORTUNITIES
              </div>

              <h1>
                Senior Software Engineer
                <br />
                <span className="gradient-text">
                  C# · .NET · Microservices
                </span>
              </h1>

              <p className="hero-description">
                <strong>Roohollah Jafari</strong> is a Senior Software
                Engineer specializing in C#, .NET, ASP.NET Core,
                Microservices, SQL Server, React and scalable backend
                systems.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                  <ArrowIcon />
                </a>

                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Download CV
                  <ExternalIcon />
                </a>
              </div>

              <div className="social-links">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* CODE CARD */}

            <div className="hero-card">
              <div className="hero-card-inner">
                <div className="code-window">
                  <div className="code-comment">
                    // Senior Software Engineer
                  </div>

                  <br />

                  <span className="code-key">const</span>{" "}
                  <span className="code-function">engineer</span> = {"{"}
                  <br />

                  &nbsp;&nbsp;name:{" "}
                  <span className="code-string">
                    "Roohollah Jafari"
                  </span>
                  ,
                  <br />

                  &nbsp;&nbsp;role:{" "}
                  <span className="code-string">
                    "Senior Software Engineer"
                  </span>
                  ,
                  <br />

                  &nbsp;&nbsp;backend: [
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">"C#"</span>,{" "}
                  <span className="code-string">".NET"</span>,{" "}
                  <span className="code-string">
                    "ASP.NET Core"
                  </span>
                  ,
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">
                    "Microservices"
                  </span>
                  <br />

                  &nbsp;&nbsp;],
                  <br />

                  &nbsp;&nbsp;database: [
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">
                    "SQL Server"
                  </span>
                  ,{" "}
                  <span className="code-string">"Neo4j"</span>,{" "}
                  <span className="code-string">"Redis"</span>
                  <br />

                  &nbsp;&nbsp;],
                  <br />

                  &nbsp;&nbsp;frontend: [
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">"React"</span>,{" "}
                  <span className="code-string">
                    "TypeScript"
                  </span>
                  <br />

                  &nbsp;&nbsp;]
                  <br />

                  {"}"};
                </div>

                <div className="metric-grid">
                  <Metric value=".NET" label="Backend" />
                  <Metric value="DDD" label="Architecture" />
                  <Metric value="Neo4j" label="Graph DB" />
                  <Metric value="React" label="Frontend" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section className="section" id="about">
          <div className="container">
            <SectionHeader
              number="01"
              title="About me."
              description="Software engineering focused on scalable systems, clean architecture and real business value."
            />

            <div className="about-grid">
              <article className="glass-card">
                <h3>Senior Software Engineer</h3>

                <p>
                  I am a software engineer specializing in backend
                  development and enterprise software systems.
                </p>

                <p>
                  My primary technology stack is C# and .NET, with
                  experience in ASP.NET Core, REST APIs, Microservices,
                  Domain-Driven Design, SQL Server and distributed
                  systems.
                </p>

                <p>
                  I also work with React and TypeScript when building
                  full-stack applications and modern web interfaces.
                </p>
              </article>

              <article className="glass-card">
                <h3>What I focus on</h3>

                <ul className="focus-list">
                  <li>✓ Scalable backend architecture</li>
                  <li>✓ Microservices & distributed systems</li>
                  <li>✓ Clean Architecture & DDD</li>
                  <li>✓ SQL Server performance</li>
                  <li>✓ Graph databases & Neo4j</li>
                  <li>✓ REST API design</li>
                  <li>✓ SOLID & Design Patterns</li>
                  <li>✓ Technical problem solving</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}

        <section className="section" id="skills">
          <div className="container">
            <SectionHeader
              number="02"
              title="Technology stack."
              description="Technologies and engineering practices I use to build reliable and scalable software."
            />

            <div className="skills-grid">
              <SkillCard
                title="Backend"
                items={[
                  "C#",
                  ".NET",
                  "ASP.NET Core",
                  "REST API",
                  "EF Core",
                  "LINQ",
                ]}
              />

              <SkillCard
                title="Architecture"
                items={[
                  "DDD",
                  "Clean Architecture",
                  "Microservices",
                  "SOLID",
                  "OOP",
                  "Design Patterns",
                ]}
              />

              <SkillCard
                title="Databases"
                items={[
                  "SQL Server",
                  "Neo4j",
                  "Redis",
                  "Stored Procedures",
                  "Indexing",
                  "Performance Tuning",
                ]}
              />

              <SkillCard
                title="Frontend"
                items={[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "HTML",
                  "CSS",
                ]}
              />

              <SkillCard
                title="Infrastructure"
                items={[
                  "Docker",
                  "Git",
                  "CI/CD",
                  "Cloudflare",
                  "Linux",
                ]}
              />

              <SkillCard
                title="Engineering"
                items={[
                  "Code Review",
                  "Refactoring",
                  "Debugging",
                  "Performance",
                  "Technical Design",
                ]}
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section className="section" id="experience">
          <div className="container">
            <SectionHeader
              number="03"
              title="Professional experience."
              description="Enterprise software engineering with a focus on backend systems, architecture and complex business domains."
            />

            <div className="timeline">
              <Experience
                title="Senior Software Engineer"
                company="Enterprise Software Engineering"
                description="Designing and developing scalable .NET services, REST APIs, business applications and data-intensive enterprise systems."
              />

              <Experience
                title="Backend & Distributed Systems"
                company="C# / .NET"
                description="Building maintainable backend services using clean architecture, SOLID principles, domain modeling, SQL Server and distributed system patterns."
              />

              <Experience
                title="Full-Stack Engineering"
                company="React + .NET"
                description="Developing modern React interfaces integrated with ASP.NET Core APIs and scalable backend services."
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="section" id="projects">
          <div className="container">
            <SectionHeader
              number="04"
              title="Selected projects."
              description="Examples of enterprise systems, backend platforms and architecture problems I work with."
            />

            <div className="project-grid">
              <Project
                number="01"
                title="Enterprise MLM Platform"
                description="A large-scale enterprise platform involving marketer management, hierarchical structures, commissions, reporting and complex business rules."
                technologies={[
                  ".NET",
                  "C#",
                  "SQL Server",
                  "EF Core",
                  "DDD",
                ]}
              />

              <Project
                number="02"
                title="Neo4j Graph Integration"
                description="Graph-based data synchronization between Neo4j and SQL Server with node, relationship and data consistency management."
                technologies={[
                  "Neo4j",
                  "Cypher",
                  ".NET",
                  "SQL Server",
                ]}
              />

              <Project
                number="03"
                title="Commission & Reporting APIs"
                description="Enterprise APIs for commissions, marketer performance, hierarchical reporting and CSV exports."
                technologies={[
                  ".NET",
                  "SQL Server",
                  "REST API",
                  "LINQ",
                ]}
              />

              <Project
                number="04"
                title="Distributed Backend Services"
                description="Modular backend services with caching, database optimization, clean architecture and production-oriented engineering practices."
                technologies={[
                  "Microservices",
                  ".NET",
                  "Redis",
                  "Docker",
                  "DDD",
                ]}
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-box">
              <div className="section-label">
                05 / CONTACT
              </div>

              <h2>Let's build something great.</h2>

              <p>
                Open to remote software engineering opportunities,
                technical collaborations and challenging backend projects.
              </p>

              <div className="contact-links">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon />
                  GitHub
                </a>

                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Download CV
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Roohollah Jafari
          </span>

          <span className="footer-code">
            C# · .NET · Microservices · React
          </span>
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------- */
/* COMPONENTS */
/* -------------------------------- */

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-header">
      <div className="section-label">
        {number} / ROOHOLLAH JAFARI
      </div>

      <h2 className="section-title">{title}</h2>

      <p className="section-description">
        {description}
      </p>
    </div>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <article className="skill-card">
      <div className="skill-icon">◆</div>

      <h3>{title}</h3>

      <div className="tags">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function Experience({
  title,
  company,
  description,
}: {
  title: string;
  company: string;
  description: string;
}) {
  return (
    <article className="timeline-item">
      <div className="timeline-dot" />

      <h3>{title}</h3>

      <div className="timeline-company">
        {company}
      </div>

      <p>{description}</p>
    </article>
  );
}

function Project({
  number,
  title,
  description,
  technologies,
}: {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}) {
  return (
    <article className="project-card">
      <div className="project-number">
        PROJECT_{number}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-stack">
        {technologies.map((technology) => (
          <span key={technology}>
            #{technology}
          </span>
        ))}
      </div>
    </article>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

/* -------------------------------- */
/* ICONS */
/* -------------------------------- */

function Icon({
  children,
  size = 18,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <Icon>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

function ExternalIcon() {
  return (
    <Icon size={15}>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </Icon>
  );
}

function GithubIcon() {
  return (
    <Icon>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6a4.6 4.6 0 0 0-1.2-3.2A4.3 4.3 0 0 0 18.7 2S17.5 1.6 15 3a13.4 13.4 0 0 0-6 0C6.5 1.6 5.3 2 5.3 2a4.3 4.3 0 0 0-.1 3.3A4.6 4.6 0 0 0 4 8.5c0 4.5 3 6 6 6a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </Icon>
  );
}

function LinkedinIcon() {
  return (
    <Icon>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  );
}

export default App;