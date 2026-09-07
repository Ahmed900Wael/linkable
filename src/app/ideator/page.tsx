import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const mentors = [
  {
    name: "Eng. Kareem Mansour",
    title: "Staff Engineer @ Instabug · ex-GUC/A",
    rating: 4.98,
    sessions: 84,
    rate: "450",
    tags: ["Backend Architecture", "Graduation Project Defense Prep", "Microservices in Go"],
    groupSession: {
      title: "Cairo AI Graduation Circle",
      spots: "4 / 6 spots filled",
      price: "150 EGP / person",
    },
  },
  {
    name: "Salma El-Sayed",
    title: "Senior Flutter Lead @ Swvl · ex-Ain Shams",
    rating: 4.95,
    sessions: 62,
    rate: "400",
    tags: ["Clean Mobile Architecture", "Payment Gateway Integration", "State Management (Bloc/Riverpod)"],
    groupSession: null,
    nextSlot: "Tomorrow",
  },
  {
    name: "Dr. Tarek Radwan",
    title: "Adjunct Lecturer & AI Researcher @ AUC",
    rating: 5.0,
    sessions: 110,
    rate: "650",
    tags: ["Computer Vision", "Graduation Thesis Writing", "PyTorch Production Deployments"],
    groupSession: {
      title: "NLP Graduation Projects Clinic",
      spots: "Only 2 spots left",
      price: "200 EGP / person",
    },
  },
  {
    name: "Mostafa Nabil",
    title: "Principal Cloud Architect · AWS Builder/Egypt",
    rating: 4.92,
    sessions: 67,
    rate: "500",
    tags: ["Docker & Containers", "Kubernetes Production", "Cost-Effective Cloud (Egypt Focus)"],
    groupSession: null,
    nextSlot: "Weekends Open",
  },
];

const trendingTopics = [
  "Graduation Defense Prep",
  "Fawry / Paymob Integration",
  "PyTorch to ONNX",
  "Go Microservices",
  "Clean Flutter Bloc",
];

const stats = [
  { value: "1,840+", label: "GRADUATION PROJECTS GUIDED" },
  { value: "99.4%", label: "EXCELLENT / A- DEFENSE RATING" },
  { value: "38", label: "COMPANIES HIRING DIRECTLY FROM COHORTS" },
  { value: "4.97 / 5.0", label: "OVERALL STUDENT SATISFACTION" },
];

export default function IdeatorPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">LINKABLE IDEATOR ENGINE · COHORT 2025</Badge>
          </div>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-semibold text-primary-deep leading-tight tracking-tight mb-4">
                Ideator: 1-on-1 Guidance & Graduation Project Circles
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Connect with senior Egyptian software engineers, CTOs, and vetted academic
                TAs to guide your graduation projects and startup ideas from
                proof-of-concept to production defense.
              </p>
            </div>
            <div className="hidden lg:block">
              <Card variant="inverse" padding="md">
                <p className="text-xs label-uppercase text-butter/70 mb-1">
                  CAIRO UNIVERSITY NETWORK
                </p>
                <p className="text-2xl font-display font-semibold text-butter">
                  142 Mentors Active
                </p>
              </Card>
            </div>
          </div>

          {/* Mode tabs */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <span className="px-4 py-2 bg-primary-deep text-butter text-sm font-semibold rounded-sm">
              ☕ Individual 1-on-1 Mentorship
            </span>
            <span className="px-4 py-2 bg-surface-container text-on-surface-variant text-sm font-medium rounded-sm border border-outline-variant/40">
              👥 Affordable Study Group Circles · <span className="font-semibold">Split Cost</span>
            </span>
            <span className="px-4 py-2 text-sm text-on-surface-variant">
              ◎ Egypt National Payments: InstaPay & Vodafone Cash instantly matched
            </span>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-surface-container-low py-8 border-y border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="col-span-2">
              <label className="label-lg-uppercase text-on-surface mb-2 block">
                SEARCH MENTOR OR TOPIC
              </label>
              <input
                type="text"
                placeholder="e.g. Microservices, Clean Architecture, Thesis"
                className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
              />
            </div>
            <div>
              <label className="label-lg-uppercase text-on-surface mb-2 block">
                SPECIALIZED DOMAIN
              </label>
              <select className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1">
                <option>All Disciplines (Fullstack, AI, Mob)</option>
              </select>
            </div>
            <div>
              <label className="label-lg-uppercase text-on-surface mb-2 block">
                UNIVERSITY AFFILIATION
              </label>
              <select className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1">
                <option>Any University (GUC, AUC, Cairo)</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs label-uppercase text-outline">TRENDING TOPICS:</span>
            {trendingTopics.map((topic) => (
              <span
                key={topic}
                className="px-2.5 py-1 text-xs font-medium bg-surface-container text-on-surface-variant rounded-sm border border-outline-variant/40 cursor-pointer hover:bg-surface-container-high transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Cards */}
      <section className="bg-alabaster py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.name} padding="lg" className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm shrink-0">
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-display font-semibold text-primary-deep">
                        {mentor.name}
                      </h3>
                      <p className="text-xs text-on-surface-variant">{mentor.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-semibold text-amber-600">
                          ★ {mentor.rating}
                        </span>
                        <span className="text-xs text-outline">
                          ({mentor.sessions} verified sessions)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs label-uppercase text-outline">1-ON-1 RATE</p>
                    <p className="text-lg font-display font-semibold text-primary-deep">
                      {mentor.rate} <span className="text-sm font-normal text-on-surface-variant">EGP / hr</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-surface-container-low text-on-surface-variant rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {mentor.groupSession && (
                  <div className="bg-surface-container-low border border-outline-variant/30 rounded-sm p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs label-uppercase text-verdigris mb-1">
                          ◉ AVAILABLE GROUP CIRCLE
                        </p>
                        <p className="text-sm font-semibold text-primary-deep">
                          {mentor.groupSession.title}
                        </p>
                        <p className="text-xs text-on-surface-variant mt-1">
                          {mentor.groupSession.spots} · {mentor.groupSession.price}
                        </p>
                      </div>
                      <Button variant="tertiary" size="sm">
                        Join Circle
                      </Button>
                    </div>
                  </div>
                )}

                {mentor.nextSlot && !mentor.groupSession && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-4 mb-4">
                    <p className="text-xs label-uppercase text-verdigris mb-1">
                      ◉ HIGH DEMAND FOR GRADUATION PREP
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Specialist in Egyptian FinTech integrations (Fawry, Paymob, Vodafone Cash APIs).
                    </p>
                    <p className="text-xs font-semibold text-primary-deep mt-1">
                      Next slot: {mentor.nextSlot}
                    </p>
                  </div>
                )}

                <div className="flex gap-2 mt-auto">
                  <Link href={`/ideator/checkout?mentor=${mentor.name}`} className="flex-1">
                    <Button variant="primary" className="w-full">
                      ☕ Book Session ({mentor.rate} EGP)
                    </Button>
                  </Link>
                  <Button variant="tertiary" size="md">
                    💬
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Group CTA */}
      <section className="bg-primary-deep py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-butter/20 text-butter border border-butter/30">
                Graduation Project Team Special
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-display font-semibold text-butter mb-4 leading-tight">
                Create a private study group under any mentor and split the session cost between up to 5 teammates!
              </h2>
              <p className="text-butter/70 mb-6">
                Don&apos;t let graduation defense anxiety hold your team back. Bring your entire
                software graduation cohort to a shared screen, submit your GitHub repositories,
                and get line-by-line architectural code reviews for as low as 90 EGP per engineer.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-butter/70">
                <span>✓ Automated Split Payments</span>
                <span>✓ Shared Session Recordings</span>
                <span>✓ Mentor Project Endorsement</span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Button variant="secondary" size="lg">
                👥 Create Team Study Circle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-container-low py-16 border-t border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-display font-semibold text-primary-deep mb-2">
                  {stat.value}
                </div>
                <div className="label-uppercase text-outline">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
