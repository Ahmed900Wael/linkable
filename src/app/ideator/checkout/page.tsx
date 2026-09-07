import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const steps = [
  { number: "01", label: "Select Slot", status: "completed" },
  { number: "02", label: "Student Context", status: "active" },
  { number: "03", label: "Egyptian Rails Checkout", status: "pending" },
];

const paymentMethods = [
  { id: "wallets", label: "Wallets", active: true },
  { id: "instapay", label: "InstaPay", active: false },
  { id: "fawry", label: "Fawry", active: false },
  { id: "cards", label: "Cards", active: false },
];

const walletOptions = [
  { name: "Vodafone Cash", icon: "📱" },
  { name: "Orange Cash", icon: "📱" },
  { name: "Etisalat Cash", icon: "📱" },
  { name: "WE Pay", icon: "📱" },
];

export default function MentorshipCheckoutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="bg-primary-deep py-10 lg:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-butter/20 text-butter border border-butter/30">
                  VERIFIED MENTOR SESSION
                </Badge>
                <span className="text-xs font-mono text-butter/60">ID: LNK-EGY-9241</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-semibold text-butter leading-tight tracking-tight mb-3">
                Mentorship Checkout & Schedule
              </h1>
              <p className="text-base text-butter/70 max-w-xl">
                Engineering architectural assessment with live peer coding diagnostic.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Card variant="inverse" padding="md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full bg-butter/20 flex items-center justify-center text-butter font-bold text-sm">
                    KM
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-semibold text-butter">Eng. Kareem Mansour</h3>
                      <span className="text-[10px] px-1.5 py-0.5 bg-verdigris/20 text-verdigris rounded-sm font-semibold">
                        ✓ VERIFIED
                      </span>
                    </div>
                    <p className="text-xs text-butter/60">Principal Staff Engineer at Instabug · Ex-Valeo</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-butter/70">
                  <span>★ 4.98 (114 Sessions)</span>
                  <span>·</span>
                  <span>Cairo (EET / UTC+3)</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step Indicator */}
      <section className="bg-surface-container-low py-4 border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      step.status === "completed"
                        ? "bg-verdigris text-white"
                        : step.status === "active"
                          ? "bg-primary-deep text-butter"
                          : "bg-outline-variant/40 text-on-surface-variant"
                    }`}
                  >
                    {step.status === "completed" ? "✓" : step.number}
                  </div>
                  <span
                    className={`text-xs font-semibold hidden sm:inline ${
                      step.status === "active" ? "text-primary-deep" : "text-on-surface-variant"
                    }`}
                  >
                    STEP {step.number} — {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-0.5 mx-2 ${
                      step.status === "completed" ? "bg-verdigris" : "bg-outline-variant/40"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-alabaster py-10 lg:py-14">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column (2/3) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Session Format */}
              <Card padding="lg">
                <p className="label-uppercase text-outline mb-2">SESSION FORMAT</p>
                <h2 className="text-xl font-display font-semibold text-primary-deep mb-3">
                  1-on-1 Architecture Diagnostic &amp; Code Review
                </h2>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs label-uppercase text-outline">Duration</span>
                    <span className="text-sm font-semibold text-primary-deep px-2 py-0.5 bg-surface-container-low rounded-sm">
                      60 Mins
                    </span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  A deep inspection of your module boundaries, caching bottlenecks, database
                  N+1 queries, and production-readiness of your current codebase. Includes
                  actionable architectural recommendations tailored for the Egyptian engineering market.
                </p>
              </Card>

              {/* Confirmed Time Slot */}
              <Card padding="lg">
                <p className="label-uppercase text-verdigris mb-2">◉ CONFIRMED TIME SLOT</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-display font-semibold text-primary-deep">
                      Wednesday, 15 October 2025
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      07:00 PM — 08:00 PM (Cairo Time · EET)
                    </p>
                  </div>
                  <Button variant="tertiary" size="sm">
                    Change Slot
                  </Button>
                </div>
              </Card>

              {/* Instant Automation */}
              <Card variant="subtle" padding="md">
                <div className="flex items-start gap-3">
                  <span className="text-verdigris text-lg">⚡</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-primary-deep mb-1">
                      Instant Automation
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      A Google Meet invitation will be automatically sent to your registered
                      email address and WhatsApp upon successful payment confirmation.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Student Dossier & Context Form */}
              <Card padding="lg">
                <div className="flex items-center gap-2 mb-1">
                  <p className="label-uppercase text-outline flex-1 min-w-0">STUDENT DOSSIER &amp; CONTEXT</p>
                  <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-sm font-bold">
                    REQUIRED
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mb-6">
                  This information helps the mentor prepare a focused diagnostic session.
                </p>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-uppercase text-on-surface mb-1.5 block text-xs">
                        Full Legal Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ahmed Mohamed Hassan"
                        className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                      />
                    </div>
                    <div>
                      <label className="label-uppercase text-on-surface mb-1.5 block text-xs">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+20 1XX XXX XXXX"
                        className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-uppercase text-on-surface mb-1.5 block text-xs">
                        University &amp; Faculty
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Cairo University - Faculty of Engineering"
                        className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                      />
                    </div>
                    <div>
                      <label className="label-uppercase text-on-surface mb-1.5 block text-xs">
                        Academic / Experience Level
                      </label>
                      <select className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1">
                        <option value="">Select your level</option>
                        <option value="3rd-year">3rd Year Student</option>
                        <option value="4th-year">4th Year / Graduation Project</option>
                        <option value="junior">Junior Engineer (0–2 yrs)</option>
                        <option value="mid">Mid-Level Engineer (2–5 yrs)</option>
                        <option value="senior">Senior Engineer (5+ yrs)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label-uppercase text-on-surface mb-1.5 block text-xs">
                      GitHub Repo URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://github.com/username/repository"
                      className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                    />
                  </div>

                  <div>
                    <label className="label-uppercase text-on-surface mb-1.5 block text-xs">
                      Key Bottlenecks / What You Need Help With
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe the specific architectural challenges, performance issues, or code review areas you want to focus on during the session..."
                      className="w-full px-4 py-2.5 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1 resize-none"
                    />
                  </div>
                </div>
              </Card>

              {/* Satisfaction Guarantee */}
              <Card padding="md" className="bg-emerald-50 border-emerald-200">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-lg">🛡️</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-emerald-800 mb-1">
                      100% Cairo Engineer Satisfaction Guarantee
                    </p>
                    <p className="text-xs text-emerald-700">
                      If the mentor cannot provide actionable architectural value within the first
                      15 minutes, you are entitled to a full refund via your original payment method.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column (1/3) */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card padding="lg">
                <div className="flex items-center justify-between mb-6">
                  <p className="label-uppercase text-on-surface">ORDER SUMMARY</p>
                  <span className="text-[10px] px-2 py-0.5 bg-primary-deep/10 text-primary-deep rounded-sm font-bold font-mono">
                    EGP Currency
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-primary-deep">
                        Eng. Kareem Mansour
                      </p>
                      <p className="text-xs text-on-surface-variant">60 Min 1:1</p>
                    </div>
                    <span className="text-sm font-semibold text-primary-deep">
                      450.00 EGP
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-on-surface-variant flex-1 min-w-0">
                      Linkable Engineering Platform Fee
                    </p>
                    <span className="text-sm text-on-surface-variant line-through">
                      50.00 EGP
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-verdigris font-medium flex-1 min-w-0">
                      Egyptian Student Subsidy
                    </p>
                    <span className="text-sm font-semibold text-verdigris">
                      -50.00 EGP
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-on-surface-variant flex-1 min-w-0">
                      Instant Meeting Infrastructure
                    </p>
                    <span className="text-xs font-semibold text-verdigris bg-verdigris/10 px-2 py-0.5 rounded-sm">
                      FREE
                    </span>
                  </div>
                </div>

                <div className="border-t border-outline-variant/40 pt-4 mb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-primary-deep">
                      Total Payable
                    </span>
                    <span className="text-2xl font-display font-bold text-primary-deep">
                      450 <span className="text-sm font-normal text-on-surface-variant">EGP</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant mt-1 text-right">
                    Tax Included (VAT 14% Covered)
                  </p>
                </div>
              </Card>

              {/* Payment Method */}
              <Card padding="lg">
                <p className="label-uppercase text-on-surface mb-4">PAYMENT METHOD</p>

                <div className="grid grid-cols-4 gap-1.5 mb-5">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      className={`px-2 py-2 text-xs font-semibold rounded-sm border transition-colors ${
                        method.active
                          ? "bg-primary-deep text-butter border-primary-deep"
                          : "bg-surface-card text-on-surface-variant border-outline-variant/40 hover:bg-surface-container-low"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-semibold text-on-surface mb-3">
                    Egyptian Mobile Wallets
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {walletOptions.map((wallet) => (
                      <button
                        key={wallet.name}
                        className="flex items-center gap-2 px-3 py-2.5 bg-surface-card border border-outline-variant/40 rounded-sm text-xs font-medium text-on-surface hover:border-primary-deep/40 transition-colors"
                      >
                        <span>{wallet.icon}</span>
                        {wallet.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-surface-container-low rounded-sm p-4 mb-5">
                  <p className="text-xs font-semibold text-on-surface mb-2">
                    Transfer Instructions
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-butter bg-primary-deep w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <p className="text-xs text-on-surface-variant flex-1 min-w-0">
                        Transfer <span className="font-semibold text-primary-deep">450.00 EGP</span> to the designated wallet
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-butter bg-primary-deep w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <p className="text-xs text-on-surface-variant flex-1 min-w-0">
                        Enter your sender wallet number below to confirm
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="primary" className="w-full mb-3">
                  Confirm &amp; Pay 450 EGP
                </Button>

                <p className="text-[10px] text-outline text-center mb-5">
                  🔒 SSL Secured · 256-bit Encryption
                </p>

                <div className="bg-surface-container-low rounded-sm p-4 text-center">
                  <p className="text-xs text-on-surface-variant">
                    <span className="font-semibold text-primary-deep">40+ Egyptian engineers</span>{" "}
                    scheduled architecture sprints this week
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
