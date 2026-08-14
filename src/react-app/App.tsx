import { useEffect, useState } from "react";
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

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="app">
      {/* NAVBAR */}
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
            <a href="#contact" className="nav-cta">
              Let's Talk
            </a>
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Open navigation"
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <nav className="mobile-links">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#contact" onClick={closeMenu}>
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
                Senior Software
                <br />
                Engineer{" "}
                <span className="gradient-text">& Builder.</span>
              </h1>

              <p className="hero-description">
                I design and build{" "}
                <strong>
                  scalable backend systems, distributed applications and
                  modern web platforms
                </strong>{" "}
                using .NET, C#, Microservices, SQL Server, React and
                graph-based technologies.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Work <Arrow />
                </a>

                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Download CV <ExternalIcon />
                </a>
              </div>
            </div>

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
                  <span className="code-string">"Microservices"</span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />

                  &nbsp;&nbsp;frontend: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">"React"</span>,{" "}
                  <span className="code-string">"TypeScript"</span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />

                  &nbsp;&nbsp;database: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-string">"SQL Server"</span>,{" "}
                  <span className="code-string">"Neo4j"</span>,{" "}
                  <span className="code-string">"Redis"</span>
                  <br />
                  &nbsp;&nbsp;],
                  <br />

                  &nbsp;&nbsp;mindset:{" "}
                  <span className="code-string">
                    "Build. Scale. Improve."
                  </span>
                  <br />

                  {"}"};
                </div>

                <div className="metric-grid">
                  <div className="metric">
                    <strong>.NET</strong>
                    <span>Backend Engineering</span>
                  </div>

                  <div className="metric">
                    <strong>DDD</strong>
                    <span>Architecture</span>
                  </div>

                  <div className="metric">
                    <strong>Micro</strong>
                    <span>Services</span>
                  </div>

                  <div className="metric">
                    <strong>Cloud</strong>
                    <span>Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container">
            <div className="section-header">
              <div className="section-label">01 / ABOUT</div>

              <h2 className="section-title">
                Engineering with purpose.
              </h2>

              <p className="section-description">
                More than writing code — I focus on architecture,
                maintainability, performance and delivering systems that
                create real business value.
              </p>
            </div>

            <div className="about-grid">
              <div className="glass-card about-card">
                <p>
                  I am a Software Engineer focused on backend development
                  and scalable enterprise systems. My main ecosystem is
                  C# and .NET, with strong experience in REST APIs,
                  Microservices, Domain-Driven Design, SQL Server and
                  distributed systems.
                </p>

                <p>
                  I also work across the stack when needed, using React and
                  modern JavaScript to create reliable and responsive user
                  experiences.
                </p>

                <p>
                  I enjoy solving complex problems, improving existing
                  systems and turning business requirements into clean,
                  maintainable software.
                </p>
              </div>

              <div className="glass-card">
                <ul className="focus-list">
                  <li>
                    <span className="check">✓</span>
                    Scalable backend architecture
                  </li>

                  <li>
                    <span className="check">✓</span>
                    Microservices & distributed systems
                  </li>

                  <li>
                    <span className="check">✓</span>
                    Clean Architecture & DDD
                  </li>

                  <li>
                    <span className="check">✓</span>
                    Database design & optimization
                  </li>

                  <li>
                    <span className="check">✓</span>
                    Graph databases & Neo4j
                  </li>

                  <li>
                    <span className="check">✓</span>
                    API design & integration
                  </li>

                  <li>
                    <span className="check">✓</span>
                    SOLID & Design Patterns
                  </li>

                  <li>
                    <span className="check">✓</span>
                    Technical leadership & problem solving
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-header">
              <div className="section-label">02 / EXPERTISE</div>

              <h2 className="section-title">
                Technology stack.
              </h2>

              <p className="section-description">
                A practical technology stack focused on building reliable,
                scalable and maintainable software.
              </p>
            </div>

            <div className="skills-grid">
              <SkillCard
                title="Backend"
                icon="λ"
                items={[
                  "C#",
                  ".NET",
                  "ASP.NET Core",
                  "REST API",
                  "EF Core",
                  "LINQ",
                  "SOLID",
                  "OOP",
                ]}
              />

              <SkillCard
                title="Architecture"
                icon="⌘"
                items={[
                  "DDD",
                  "Clean Architecture",
                  "Microservices",
                  "Design Patterns",
                  "Distributed Systems",
                  "Event Driven",
                ]}
              />

              <SkillCard
                title="Databases"
                icon="DB"
                items={[
                  "SQL Server",
                  "EF Core",
                  "Stored Procedures",
                  "Indexing",
                  "Performance Tuning",
                  "Neo4j",
                  "Redis",
                ]}
              />

              <SkillCard
                title="Frontend"
                icon="<>"
                items={[
                  "React",
                  "TypeScript",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "REST Integration",
                  "Responsive UI",
                ]}
              />

              <SkillCard
                title="Infrastructure"
                icon="∞"
                items={[
                  "Docker",
                  "Redis",
                  "Git",
                  "CI/CD",
                  "Cloud Deployment",
                  "Linux",
                ]}
              />

              <SkillCard
                title="Engineering"
                icon="⚙"
                items={[
                  "Code Review",
                  "Refactoring",
                  "Debugging",
                  "Performance",
                  "Technical Design",
                  "Problem Solving",
                ]}
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="container">
            <div className="section-header">
              <div className="section-label">03 / EXPERIENCE</div>

              <h2 className="section-title">
                Building enterprise software.
              </h2>

              <p className="section-description">
                Experience across backend engineering, enterprise
                applications, data platforms and distributed architectures.
              </p>
            </div>

            <div className="timeline">
              <TimelineItem
                date="CURRENT"
                title="Senior Software Engineer"
                company="Enterprise Software Engineering"
                description="Designing and developing scalable .NET services, REST APIs and business applications. Working with domain modeling, microservices, SQL Server, graph data and performance-sensitive enterprise workflows."
              />

              <TimelineItem
                date="RECENT"
                title="Backend & Distributed Systems"
                company=".NET / C# Engineering"
                description="Developing business-critical backend services with focus on clean architecture, SOLID principles, database optimization, integration patterns and maintainable application design."
              />

              <TimelineItem
                date="RECENT"
                title="Full-Stack Engineering"
                company="React + .NET"
                description="Building modern frontend experiences with React and integrating them with robust ASP.NET Core APIs and distributed backend services."
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="container">
            <div className="section-header">
              <div className="section-label">04 / PROJECTS</div>

              <h2 className="section-title">
                Selected engineering work.
              </h2>

              <p className="section-description">
                Examples of the kind of complex systems and engineering
                problems I work with.
              </p>
            </div>

            <div className="project-grid">
              <ProjectCard
                number="01"
                title="Enterprise MLM Platform"
                description="A large-scale sales and marketer management platform involving hierarchical structures, commissions, reporting, APIs and complex business rules."
                stack={[
                  ".NET",
                  "C#",
                  "SQL Server",
                  "EF Core",
                  "DDD",
                  "REST API",
                ]}
                architecture="Client → API → Application → Domain → Infrastructure → SQL"
              />

              <ProjectCard
                number="02"
                title="Neo4j Graph Integration"
                description="A graph-based data integration solution for synchronizing users, nodes and relationships between Neo4j and SQL Server while handling new records and data consistency."
                stack={[
                  "Neo4j",
                  "Cypher",
                  ".NET",
                  "SQL Server",
                  "Graph DB",
                ]}
                architecture="Neo4j → Graph Sync → Mapping → SQL Server"
              />

              <ProjectCard
                number="03"
                title="Commission & Reporting Platform"
                description="Enterprise reporting APIs for marketer commissions, performance metrics, hierarchical data and CSV exports with optimized SQL queries."
                stack={[
                  ".NET",
                  "SQL Server",
                  "LINQ",
                  "REST API",
                  "Reporting",
                ]}
                architecture="React → REST API → Query Layer → SQL"
              />

              <ProjectCard
                number="04"
                title="Distributed Backend Services"
                description="Designing modular backend services with clear boundaries, reusable components, caching, database optimization and production-oriented engineering practices."
                stack={[
                  "Microservices",
                  ".NET",
                  "Redis",
                  "Docker",
                  "DDD",
                  "SOLID",
                ]}
                architecture="API Gateway → Services → Redis / SQL / External APIs"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-box">
              <div className="section-label">05 / CONTACT</div>

              <h2>Let's build something great.</h2>

              <p>
                I am open to remote software engineering opportunities,
                technical collaborations and challenging backend projects.
              </p>

              <div className="contact-links">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <GithubIcon />
                  GitHub
                </a>

                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalIcon />
                  CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            © {new Date().getFullYear()} Roohollah Jafari
          </div>

          <div className="footer-code">
            C# · .NET · Microservices · React
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

type SkillCardProps = {
  title: string;
  icon: string;
  items: string[];
};

function SkillCard({ title, icon, items }: SkillCardProps) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>

      <h3>{title}</h3>

      <div className="tags">
        {items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type TimelineItemProps = {
  date: string;
  title: string;
  company: string;
  description: string;
};

function TimelineItem({
  date,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />

      <div className="timeline-date">{date}</div>

      <h3 className="timeline-title">{title}</h3>

      <div className="timeline-company">{company}</div>

      <p className="timeline-description">
        {description}
      </p>
    </div>
  );
}

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  stack: string[];
  architecture: string;
};

function ProjectCard({
  number,
  title,
  description,
  stack,
  architecture,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div>
        <div className="project-number">
          PROJECT_{number}
        </div>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="architecture">
          {architecture}
        </div>
      </div>

      <div className="project-footer">
        <div className="project-stack">
          {stack.map((item) => (
            <span key={item}>#{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------------- ICONS ---------------- */

function Icon({
  children,
  size = 18,
}: {
  children: React.ReactNode;
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

function Arrow() {
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