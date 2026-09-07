import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-alabaster">
        {/* Profile Hero Card */}
        <section className="bg-primary-deep text-butter py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-primary/50 rounded-2xl p-8 backdrop-blur-sm border border-butter/10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-full bg-butter/20 border-4 border-butter flex items-center justify-center overflow-hidden">
                    <span className="font-display text-4xl font-bold text-butter">
                      AT
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="font-display text-3xl font-bold text-butter">
                      Ahmed Tarek
                    </h1>
                    <span className="bg-butter text-primary-deep text-xs font-bold px-2.5 py-1 rounded-full">
                      Verified Fellow
                    </span>
                  </div>
                  <p className="text-butter/70 text-lg mb-4">
                    Junior Fullstack Engineer & Senior Computer Science Student
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-goldenrod text-primary-deep text-sm font-bold px-3 py-1 rounded-full">
                      LVL 3
                    </span>
                    <span className="text-butter/60 text-sm">
                      Cairo University (Faculty of Computers & Artificial
                      Intelligence)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-butter text-primary-deep font-display font-bold px-5 py-2.5 rounded-xl hover:bg-butter/90 transition-colors">
                      Sync with LinkedIn
                    </button>
                    <button className="border border-butter/40 text-butter font-display font-bold px-5 py-2.5 rounded-xl hover:bg-butter/10 transition-colors">
                      View CV
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="mt-8 pt-6 border-t border-butter/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-butter/50">LinkedIn:</span>
                  <a
                    href="#"
                    className="text-butter underline underline-offset-2 hover:text-goldenrod transition-colors"
                  >
                    linkedin.com/in/ahmedtarek
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-butter/50">GitHub VCS:</span>
                  <span className="text-butter flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                    SYNCED
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-butter/50">Communication:</span>
                  <span className="text-butter">+20 181 234 5678</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-butter/50">Current Cohort:</span>
                  <span className="text-butter">Cairo Sprint 24.3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Cards Row */}
        <section className="max-w-6xl mx-auto px-6 -mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <p className="label-uppercase text-xs text-gray-500 mb-1">
                Engineering XP
              </p>
              <p className="font-display text-3xl font-bold text-primary-deep">
                1,240
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Level 3 · <span className="text-goldenrod font-semibold">268 XP</span> to L4
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <p className="label-uppercase text-xs text-gray-500 mb-1">
                Mentor Sessions
              </p>
              <p className="font-display text-3xl font-bold text-primary-deep">
                4
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Next: <span className="text-goldenrod font-semibold">Tomorrow 7:00 PM</span>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <p className="label-uppercase text-xs text-gray-500 mb-1">
                Partner Projects
              </p>
              <p className="font-display text-3xl font-bold text-primary-deep">
                2
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Paymob Certified & Swvl Core
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
              <p className="label-uppercase text-xs text-gray-500 mb-1">
                Challenges Solved
              </p>
              <p className="font-display text-3xl font-bold text-primary-deep">
                6
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Top 5% <span className="text-goldenrod font-semibold">Distributed Cohort</span>
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="max-w-6xl mx-auto px-6 mt-10">
          <div className="border-b border-gray-200">
            <nav className="flex gap-0 overflow-x-auto">
              <button className="px-5 py-3 text-sm font-display font-semibold border-b-2 border-goldenrod text-primary-deep whitespace-nowrap">
                My Sessions
              </button>
              <button className="px-5 py-3 text-sm font-display font-medium border-b-2 border-transparent text-gray-500 hover:text-primary-deep whitespace-nowrap transition-colors">
                Completed Projects & Badges
              </button>
              <button className="px-5 py-3 text-sm font-display font-medium border-b-2 border-transparent text-gray-500 hover:text-primary-deep whitespace-nowrap transition-colors">
                Challenge History & Score
              </button>
              <button className="px-5 py-3 text-sm font-display font-medium border-b-2 border-transparent text-gray-500 hover:text-primary-deep whitespace-nowrap transition-colors">
                CV & LinkedIn Sync
              </button>
            </nav>
          </div>
        </section>

        {/* Upcoming Live Advisory */}
        <section className="max-w-6xl mx-auto px-6 mt-8">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="label-uppercase bg-goldenrod/10 text-goldenrod text-xs font-bold px-3 py-1 rounded-full">
                  Upcoming Live Advisory
                </span>
                <span className="text-xs text-gray-500">Session ID #4092</span>
                <span className="text-xs text-gray-500">Tomorrow 7:00 PM (EET)</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-deep flex items-center justify-center shrink-0">
                    <span className="font-display text-lg font-bold text-butter">
                      KM
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-primary-deep text-lg">
                      Eng. Kareem Mansour
                    </h3>
                    <p className="text-sm text-gray-500">
                      Principal Architect @ Paymob
                    </p>
                    <p className="text-sm text-gray-500">
                      Linkable Fellow Mentor
                    </p>
                  </div>
                </div>

                <div className="flex-1 border-l border-gray-200 pl-6">
                  <p className="label-uppercase text-xs text-gray-500 mb-2">
                    Focus
                  </p>
                  <h4 className="font-display font-semibold text-primary-deep text-lg">
                    High-Throughput Event Queue Ingestion & Redis Cache
                    Invalidation
                  </h4>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button className="bg-goldenrod text-primary-deep font-display font-bold px-6 py-2.5 rounded-xl hover:bg-goldenrod/90 transition-colors">
                  Join Google Meet
                </button>
                <button className="border border-gray-300 text-gray-700 font-display font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                  Reschedule Session
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Archived Sessions */}
        <section className="max-w-6xl mx-auto px-6 mt-8 mb-16">
          <h2 className="font-display text-xl font-bold text-primary-deep mb-6">
            Archived Sessions & Code Reviews
          </h2>

          <div className="space-y-4">
            {/* Session 1 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="label-uppercase bg-primary-deep/10 text-primary-deep text-xs font-bold px-3 py-1 rounded-full">
                      Completed Session
                    </span>
                    <span className="text-xs text-gray-500">
                      Recorded Dec 18, 2024
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-primary-deep text-lg">
                    Microservices Boundaries & gRPC RPC Specs
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Mentor: <span className="text-primary-deep font-medium">Dr. Salma El-Gazzar</span>
                  </p>
                </div>
                <span className="label-uppercase bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full self-start whitespace-nowrap">
                  Grade: Outstanding
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="label-uppercase text-xs text-gray-500 mb-2">
                  Mentor Notes
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Ahmed demonstrated strong understanding of protobuf schema
                  definitions and gRPC service contract design. His approach to
                  defining message types for inter-service communication showed
                  maturity in distributed systems thinking. Recommended exploring
                  server streaming for real-time event propagation in
                  microservices architecture.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-deep/5 text-primary-deep text-xs font-medium px-3 py-1 rounded-full">
                  gRPC/Protobuf
                </span>
                <span className="bg-primary-deep/5 text-primary-deep text-xs font-medium px-3 py-1 rounded-full">
                  PostgreSQL
                </span>
                <span className="bg-primary-deep/5 text-primary-deep text-xs font-medium px-3 py-1 rounded-full">
                  Distributed Locks
                </span>
              </div>
            </div>

            {/* Session 2 */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="label-uppercase bg-primary-deep/10 text-primary-deep text-xs font-bold px-3 py-1 rounded-full">
                      Completed Session
                    </span>
                    <span className="text-xs text-gray-500">
                      Recorded Nov 28, 2024
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-primary-deep text-lg">
                    Database Indexing, B-Trees & Query Optimization
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Mentor: <span className="text-primary-deep font-medium">Eng. Tamer Shawky</span>
                  </p>
                </div>
                <span className="label-uppercase bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full self-start whitespace-nowrap">
                  Grade: Verified Pass
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="label-uppercase text-xs text-gray-500 mb-2">
                  Mentor Notes
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Ahmed showed solid grasp of B-tree index structures and their
                  impact on query performance. His EXPLAIN ANALYZE breakdown was
                  thorough, identifying a sequential scan issue on a large table
                  and correctly proposing a composite index strategy. Great
                  progress on understanding PostgreSQL query planner behavior.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-deep/5 text-primary-deep text-xs font-medium px-3 py-1 rounded-full">
                  PostgreSQL
                </span>
                <span className="bg-primary-deep/5 text-primary-deep text-xs font-medium px-3 py-1 rounded-full">
                  B-Trees
                </span>
                <span className="bg-primary-deep/5 text-primary-deep text-xs font-medium px-3 py-1 rounded-full">
                  Query Optimization
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
