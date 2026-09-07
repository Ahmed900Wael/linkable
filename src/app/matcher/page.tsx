import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const stackChips = [
  { name: "React", selected: true },
  { name: "Node.js", selected: true },
  { name: "Next.js", selected: false },
  { name: "Python/FastAPI", selected: true },
  { name: "Django", selected: false },
  { name: "Flutter", selected: false },
  { name: "PostgreSQL", selected: true },
  { name: "Django", selected: false },
  { name: "Docker", selected: true },
  { name: "AI/ML", selected: false },
];

const industries = [
  { name: "FinTech", icon: "🏦", count: 5 },
  { name: "Logistics & Delivery", icon: "🚚", count: 3 },
  { name: "Healthcare", icon: "🏥", count: 2 },
  { name: "E-Commerce", icon: "🛒", count: 4 },
];

const milestones = [
  {
    stage: "01",
    title: "Database Schema & Docker Compose",
    description:
      "Foundation setup with PostgreSQL, Redis, and service orchestration",
    status: "completed",
  },
  {
    stage: "02",
    title: "Auth Gateway & RBAC Middleware",
    description: "JWT-based authentication with role-based access control",
    status: "completed",
  },
  {
    stage: "03",
    title: "Core Business Logic & API Endpoints",
    description:
      "Wallet aggregation, transaction routing, and webhook handlers",
    status: "in-progress",
  },
  {
    stage: "04",
    title: "Real-time Dashboard & Deployment",
    description:
      "WebSocket feeds, Grafana dashboards, and Kubernetes manifests",
    status: "upcoming",
  },
];

const otherProjects = [
  {
    title: "RingRoad Real-Time Fleet Telemetry",
    description:
      "Live GPS tracking, driver scoring, and route optimization for Egyptian logistics fleets.",
    tags: ["Go", "MQTT", "TimescaleDB", "React Native"],
    partners: 3,
    status: "verified",
  },
  {
    title: "Doctor Scheduling & E-Prescription Vault",
    description:
      "HIPAA-aligned patient portal with AES-256 encrypted prescription storage.",
    tags: ["Django", "PostgreSQL", "Vue.js", "Celery"],
    partners: 2,
    status: "verified",
  },
  {
    title: "Kiosk Credit Ledger & Inventory Engine",
    description:
      "Offline-first POS system with eventual consistency and SQLite-to-Postgres sync.",
    tags: ["Flutter", "Node.js", "SQLite", "Redis"],
    partners: 4,
    status: "verified",
  },
];

const sidebarLinks = [
  { name: "Ideator Hub", href: "/ideator", active: false },
  { name: "Matcher Projects", href: "/matcher", active: true },
  { name: "Challenger Arena", href: "/challenger", active: false },
  { name: "Cohort Chat", href: "/chat", active: false },
  { name: "Support & FAQ", href: "/support", active: false },
];

const copilotPrompts = [
  "What tech stack fits a fintech aggregator?",
  "Suggest a CI/CD pipeline for this project",
  "How should I structure the database schema?",
  "Recommend security best practices for payments",
];

export default function MatcherPage() {
  return (
    <div className="min-h-screen bg-alabaster">
      <Navbar />

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Top Bar */}
          <div className="sticky top-16 z-30 bg-alabaster/80 backdrop-blur-md border-b border-primary-deep/10 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-primary-deep flex items-center justify-center text-butter text-xs font-display">
                EG
              </div>
              <div>
                <p className="text-sm font-medium text-primary-deep">
                  Egyptian Developer Workstation
                </p>
                <p className="text-xs text-primary-deep/60">
                  Cairo, Egypt · UTC+2
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">Matcher Tier</Badge>
              <div className="w-9 h-9 rounded-full bg-accent-copper text-butter flex items-center justify-center text-sm font-display">
                AH
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-10">
            {/* Hero Section */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default">Production Ready</Badge>
                <Badge variant="outline">Phase 2</Badge>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl text-primary-deep mb-4">
                Matcher: Production Project Discovery
              </h1>
              <p className="text-lg text-primary-deep/70 leading-relaxed">
                Transition beyond theoretical coursework into verified,
                production-grade Egyptian ecosystem projects. Each sandbox is
                partner-vetted with real deployment targets, code reviews, and
                mentorship checkpoints.
              </p>
            </section>

            {/* Stats Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-primary-deep! text-butter border-0">
                <p className="label-uppercase text-butter/60 mb-2">
                  Partner Sandboxes
                </p>
                <div className="flex items-end gap-3">
                  <span className="font-display text-5xl">12</span>
                  <span className="text-butter/80 text-lg mb-1">Active</span>
                </div>
                <div className="mt-4 h-1.5 bg-butter/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-butter rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </Card>
              <Card className="p-6 bg-alabaster border border-primary-deep/10">
                <p className="label-uppercase text-primary-deep/60 mb-2">
                  Verified Placements
                </p>
                <div className="flex items-end gap-3">
                  <span className="font-display text-5xl text-primary-deep">
                    89.4
                  </span>
                  <span className="text-primary-deep/80 text-lg mb-1">%</span>
                </div>
                <div className="mt-4 h-1.5 bg-primary-deep/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-deep rounded-full"
                    style={{ width: "89.4%" }}
                  />
                </div>
              </Card>
            </section>

            {/* Stack Selection */}
            <section>
              <h2 className="font-display text-2xl text-primary-deep mb-2">
                Your Tech Stack
              </h2>
              <p className="label-uppercase text-primary-deep/60 mb-4">
                Select your preferred technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {stackChips.map((chip) => (
                  <button
                    key={chip.name}
                    className={`px-4 py-2 rounded-sm text-sm font-medium transition-all border ${
                      chip.selected
                        ? "bg-primary-deep text-butter border-primary-deep"
                        : "bg-alabaster text-primary-deep border-primary-deep/20 hover:border-primary-deep/40"
                    }`}
                  >
                    {chip.selected && <span className="mr-1.5">✓</span>}
                    {chip.name}
                  </button>
                ))}
              </div>
            </section>

            {/* Industry Selection */}
            <section>
              <h2 className="font-display text-2xl text-primary-deep mb-2">
                Industry Focus
              </h2>
              <p className="label-uppercase text-primary-deep/60 mb-4">
                Choose a domain to explore
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((industry) => (
                  <button
                    key={industry.name}
                    className="p-5 rounded-md bg-alabaster border border-primary-deep/10 hover:border-accent-copper hover:shadow-md transition-all text-left group"
                  >
                    <span className="text-2xl mb-2 block">{industry.icon}</span>
                    <p className="font-display text-primary-deep text-sm">
                      {industry.name}
                    </p>
                    <p className="text-xs text-primary-deep/60 mt-1">
                      {industry.count} projects
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Featured Project - Dark Variant */}
            <section>
              <h2 className="font-display text-2xl text-primary-deep mb-2">
                Featured Sandbox
              </h2>
              <p className="label-uppercase text-primary-deep/60 mb-4">
                Partner-vetted production project
              </p>
              <Card className="bg-primary-deep! text-butter border-0 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="secondary">Featured</Badge>
                    <Badge variant="primary" className="bg-primary!">
                      FinTech
                    </Badge>
                    <Badge variant="primary" className="bg-primary!">
                      Egyptian Market
                    </Badge>
                  </div>
                  <h3 className="font-display text-3xl mb-3">
                    PayFlow: Egyptian Multi-Wallet FinTech Aggregator
                  </h3>
                  <p className="text-butter/70 leading-relaxed mb-6">
                    Unified API layer aggregating Fawry, Vodafone Cash, and
                    InstaPay wallets with real-time transaction routing, fraud
                    detection heuristics, and compliance-ready audit trails for
                    Egyptian fintech startups.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {[
                      "Node.js",
                      "Redis Streams",
                      "Webhooks",
                      "AES-256 Security",
                      "PostgreSQL",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-sm bg-butter/10 text-butter/80 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Milestone Roadmap */}
                  <div>
                    <p className="label-uppercase text-butter/60 mb-4">
                      4-Stage Milestone Roadmap
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {milestones.map((m) => (
                        <div
                          key={m.stage}
                          className={`p-4 rounded-sm border ${
                            m.status === "completed"
                              ? "border-accent-teal/30 bg-accent-teal/5"
                              : m.status === "in-progress"
                                ? "border-accent-copper/30 bg-accent-copper/5"
                                : "border-butter/10 bg-butter/5"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-display ${
                                m.status === "completed"
                                  ? "bg-primary-elevated text-butter"
                                  : m.status === "in-progress"
                                    ? "bg-primary-elevated text-butter"
                                    : "bg-butter/10 text-butter/60"
                              }`}
                            >
                              {m.status === "completed" ? "✓" : `0${m.stage}`}
                            </span>
                          </div>
                          <p className="font-display text-sm text-butter mb-1">
                            {m.title}
                          </p>
                          <p className="text-xs text-butter/50 leading-relaxed">
                            {m.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <Button variant="primary" className="bg-primary-elevated!">
                      View Sandbox
                    </Button>
                    <Button variant="secondary">Fork Repository</Button>
                  </div>
                </div>
              </Card>
            </section>

            {/* Other Verified Projects */}
            <section>
              <h2 className="font-display text-2xl text-primary-deep mb-2">
                Other Verified Ecosystem Projects
              </h2>
              <p className="label-uppercase text-primary-deep/60 mb-4">
                Ready for placement
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <Card
                    key={project.title}
                    className="p-6 bg-alabaster border border-primary-deep/10 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="success">Verified</Badge>
                      <span className="text-xs text-primary-deep/60">
                        {project.partners} Partners
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-primary-deep mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-deep/70 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-sm bg-primary-deep/5 text-primary-deep/70 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* AI Copilot Section */}
            <section>
              <h2 className="font-display text-2xl text-primary-deep mb-2">
                AI Copilot
              </h2>
              <p className="label-uppercase text-primary-deep/60 mb-4">
                Context-aware project guidance
              </p>
              <Card className="p-6 border border-primary-deep/10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {copilotPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      className="px-4 py-2 rounded-sm bg-primary-deep/5 text-primary-deep text-sm hover:bg-primary-deep/10 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="bg-primary-deep/5 rounded-md p-5 border border-primary-deep/10">
                  <p className="label-uppercase text-primary-deep/60 mb-2">
                    Generated Architecture Recommendation
                  </p>
                  <p className="text-sm text-primary-deep/80 leading-relaxed">
                    For a multi-wallet fintech aggregator targeting the Egyptian
                    market, I recommend a microservices architecture with an API
                    Gateway (Kong/Nginx), event-driven communication via Redis
                    Streams for transaction routing, PostgreSQL with row-level
                    security for audit compliance, and a dedicated fraud
                    detection service using rule-based heuristics. Deploy with
                    Docker Compose for staging and Kubernetes for production,
                    with automated CI/CD via GitHub Actions.
                  </p>
                </div>
              </Card>
            </section>

            {/* Project Progress Tracker */}
            <section>
              <h2 className="font-display text-2xl text-primary-deep mb-2">
                Project Progress Tracker
              </h2>
              <p className="label-uppercase text-primary-deep/60 mb-4">
                Milestone completion overview
              </p>
              <div className="space-y-4">
                {milestones.map((m) => (
                  <div
                    key={m.stage}
                    className="flex items-center gap-4 p-4 rounded-md bg-alabaster border border-primary-deep/10"
                  >
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-display shrink-0 ${
                        m.status === "completed"
                          ? "bg-accent-teal text-primary-deep"
                          : m.status === "in-progress"
                            ? "bg-butter/30 text-yellow-400"
                            : "bg-primary-deep/10 text-primary-deep/40"
                      }`}
                    >
                      {m.status === "completed" ? "✓" : `0${m.stage}`}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-display text-primary-deep">
                          {m.title}
                        </p>
                        {m.status === "in-progress" && (
                          <Badge variant="warning">In Progress</Badge>
                        )}
                        {m.status === "completed" && (
                          <Badge variant="success">Done</Badge>
                        )}
                      </div>
                      <p className="text-sm text-primary-deep/60 mt-0.5">
                        {m.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
