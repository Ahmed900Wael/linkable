import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const stats = [
  { value: "420+", label: "ENGINEERS" },
  { value: "1,850+", label: "MENTORSHIP HOURS" },
  { value: "EGP 2.4M+", label: "EARNED" },
];

const partners = ["INSTABUG", "fawry", "SWVL", "VALEO", "paymob", "TELDA"];

const tracks = [
  {
    number: "01",
    title: "I have a project or graduation idea, but I don't know how to start",
    description:
      "Meet with experienced engineers, CTOs, and vetted academic TAs to guide your graduation projects and startup ideas from proof-of-concept to production defense.",
    features: [
      "1-on-1 sessions or study groups with your team",
      "Direct messaging with mentors and cohort peers",
      "Submit your GitHub repos and architecture diagrams",
      "CV-ready endorsement & project validation",
    ],
    cta: "Find a Mentor",
    href: "/ideator",
  },
  {
    number: "02",
    title: "I know coding basics, but I need a trending project to join",
    description:
      "Put your skills to the test with real production architectures. Collaborate with local tech giants and get verified credentials.",
    features: [
      "Verified GitHub Badges and Milestones",
      "Automated Split Payments & Session recordings",
      "Build portfolio-ready MVPs for Egyptian companies",
    ],
    cta: "Explore Project Tools",
    href: "/matcher",
  },
  {
    number: "03",
    title: "I want to solve real, contract-based challenges from local Egyptian companies.",
    description:
      "Compete against fellow developers, Egyptian companies post real production problems. Win XP, points, and fast-track interview opportunities.",
    features: [
      "Showcase mastery to improve LinkedIn & resume",
      "Win/cash out prizes and EGP rewards",
      "Build real-world architecture experience",
    ],
    cta: "Enter Challenge Arena",
    href: "/challenger",
  },
];

const hiringStats = [
  { value: "EGP 2,400", label: "Bounties" },
  { value: "10 Competitions", label: "Active" },
];

const comparisonRows = [
  {
    feature: "Curriculum & Syllabus",
    traditional: "Theoretical MCQs & 750$. Theory-heavy assignments with zero production relevance",
    linkable: "Real-world project track: Code against Egyptian company architectures (Instabug, Swvl, Paymob).",
  },
  {
    feature: "Academic Credibility",
    traditional: "No collaboration, single-cert resolution or theoretical exams from tech engineers.",
    linkable: "Live 1-on-1 mentorship & graduated teams: Senior engineers review your GitHub repositories line-by-line.",
  },
  {
    feature: "Diverse Portfolio Projects",
    traditional: "Clone Netflix, Netflix clones, that every student builds. Zero production relevance.",
    linkable: "Build real-world MVPs with architecture validated by industry leads. Verified credentials on completion.",
  },
  {
    feature: "Foreign Currency Payment Friction",
    traditional: "High USD-denominated subscription fees with foreign transaction fees or credit card issues.",
    linkable: "Zero-friction local payments: Instant EGP checkout via Vodafone Cash, InstaPay, and Fawry gates.",
  },
];

const paymentMethods = [
  { name: "Vodafone Cash", icon: "V" },
  { name: "InstaPay", icon: "I" },
  { name: "Fawry Pay", icon: "F" },
  { name: "Visa / Mastercard", icon: "M" },
];

const faqs = [
  "How do 1-on-1 mentor sessions work?",
  "Can I form a study group with my university graduation team to split mentor costs?",
  "How are projects validated for my CV and LinkedIn?",
  "What are the payment methods accepted in Egypt?",
  "Can companies recruit directly through Linkable challenges?",
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-alabaster overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6">
                CAIRO COHORTS · SPRING 2025 · LIVE
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-display font-semibold text-primary-deep leading-[1.1] tracking-tight mb-6">
                Stop Learning on Paper. Start Building for Real.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                Bridge the gap between Egyptian university computer science
                theory and real-world production systems. Build verified partner
                portfolio projects, or compete contract-based bounties.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/signup">
                  <Button variant="secondary" size="lg">
                    Start Learning Today ↓
                  </Button>
                </Link>
                <Link href="#tracks">
                  <Button variant="tertiary" size="lg">
                    Explore Pathways
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-display font-semibold text-primary-deep">
                      {stat.value}
                    </div>
                    <div className="label-uppercase text-outline mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner logos / Code preview */}
            <div className="hidden lg:block">
              <Card variant="inverse" padding="lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-butter/70">
                      Linkable · ideation-v2
                    </span>
                  </div>
                  <div className="space-y-2 text-sm font-mono">
                    <p className="text-butter/60">
                      <span className="text-emerald-400">~/projects</span> $
                      linkable init
                    </p>
                    <p className="text-butter/80">
                      Project: PayFlow Gateway Node
                    </p>
                    <p className="text-butter/60">
                      <span className="text-emerald-400">~/projects</span> $
                      linkable submit
                    </p>
                    <p className="text-butter">
                      ✅ Milestone 1: DB Schema & Ledger
                    </p>
                    <p className="text-butter">
                      ⏳ Milestone 2: Webhook Receiver
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-butter/15">
                    <p className="text-xs font-mono text-butter/50 mb-3">
                      Mentor Selection
                    </p>
                    <div className="flex items-center gap-3 bg-butter/10 rounded-sm p-3">
                      <div className="w-10 h-10 rounded-full bg-butter/20 flex items-center justify-center text-butter text-sm font-bold shrink-0">
                        KM
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-butter">
                          Eng. Kareem Mansour
                        </p>
                        <p className="text-xs text-butter/60">
                          Principal Architect @ Paymob
                        </p>
                      </div>
                      <span className="ml-auto px-2 py-0.5 text-xs font-mono bg-emerald-500/20 text-emerald-300 rounded">
                        ACCEPTED
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-surface-container-low py-10 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs label-uppercase text-outline mb-6">
            TRUSTED BY GRADUATES & ENGINEERS FROM CAIRO UNI, GUC, AUC, BUE, AZU,
            MEMBERS OF TOP STARTUPS & REGIONAL TECH LEADERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-lg font-semibold text-outline/60 tracking-wider"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Track Selection */}
      <section id="tracks" className="bg-alabaster py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              SELECT YOUR TRACK
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary-deep mb-4">
              Engineered for where you are right now.
            </h2>
            <p className="text-on-surface-variant max-w-[65ch] mx-auto">
              Whether you&apos;re stuck on graduation architecture or ready to
              claim bounties from Cairo scale-ups, choose your unique path.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <Card key={track.number} padding="lg" className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-outline">
                    TRACK · {track.number}
                  </span>
                </div>
                <h3 className="text-xl  font-display font-semibold text-primary-deep mb-3 leading-snug">
                  {track.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6">
                  {track.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {track.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-on-surface-variant"
                    >
                      <span className="text-verdigris mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={track.href}>
                  <Button variant="primary" className="w-full">
                    {track.cta} →
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-surface-container-low py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-4">
            PORTFOLIO HIRING MANAGERS ACTUALLY REVIEW.
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary-deep mb-4">
            A portfolio hiring managers actually review.
          </h2>
          <p className="text-on-surface-variant mb-12">
            Engineering portfolios validated by Egyptian industry leaders. Every
            Linkable credential carries verified proof of complex architecture
            competency automatically verified in production context.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringStats.map((stat) => (
              <Card key={stat.label} padding="md">
                <div className="text-xl font-display font-semibold text-primary-deep mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-on-surface-variant">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-alabaster py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              THE LINKABLE DIFFERENCE
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary-deep mb-4">
              Built specifically for the Egyptian software ecosystem.
            </h2>
            <p className="text-on-surface-variant mx-auto">
              Why traditional bootcamps and foreign course platforms fail to
              fill Egyptian students&apos; high-potential needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-160">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="text-left py-4 px-6 text-xs label-uppercase text-outline">
                    TRADITIONAL ONLINE COURSES & BOOTCAMPS
                  </th>
                  <th className="text-left py-4 px-6 text-xs label-uppercase text-primary-deep">
                    THE LINKABLE PRODUCTION STANDARD
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-outline-variant"
                  >
                    <td className="py-5 px-6">
                      <div className="text-sm font-semibold text-on-surface mb-1">
                        {row.feature}
                      </div>
                      <div className="text-sm text-on-surface-variant">
                        {row.traditional}
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="text-sm flex gap-2 font-semibold text-primary-deep mb-1">
                        <span>✓</span>
                        {row.feature}
                      </div>
                      <div className="text-sm text-on-surface-variant">
                        {row.linkable}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Local Payments */}
      <section className="bg-primary-deep py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="primary"
                className="mb-6 border border-butter/30 text-butter"
              >
                LOCAL EGYPTIAN PAYMENTS
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-display font-semibold text-butter mb-4">
                Local Egyptian payments. Instant, accessible, unblocked.
              </h2>
              <p className="text-butter/70">
                Zero-friction onboarding: Verified instant EGP checkout via
                Vodafone Cash, InstaPay, or Fawry gates. No foreign transaction
                fees, no blocked cards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-primary-elevated border border-butter/15 rounded-md p-5 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-butter/20 flex items-center justify-center text-butter font-bold text-sm">
                    {method.icon}
                  </div>
                  <span className="text-sm font-semibold text-butter">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-alabaster py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              FREQUENTLY ASKED QUESTIONS
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary-deep mb-4">
              Got questions? We have answers.
            </h2>
            <p className="text-on-surface-variant mx-auto">
              Everything Egyptian students and early-career engineers need to
              know.
            </p>
          </div>

          <div className="mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq}
                className="bg-surface-card border border-outline-variant/40 rounded-md p-5 flex items-center justify-between cursor-pointer hover:border-outline-variant/60 transition-colors"
              >
                <span className="text-sm font-medium text-on-surface">
                  {faq}
                </span>
                <svg
                  className="w-5 h-5 text-outline shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container-low py-20 lg:py-28 border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary-deep mb-4">
            Ready to trade passive lectures for live production code?
          </h2>
          <p className="text-on-surface-variant mx-auto mb-8">
            Join thousands of Egyptian developers building high-leverage
            careers. Create your free developer account in 60 seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button variant="secondary" size="lg">
                Join Linkable for Free
              </Button>
            </Link>
            <Link href="/challenger">
              <Button variant="tertiary" size="lg">
                Browse Live Challenges
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
