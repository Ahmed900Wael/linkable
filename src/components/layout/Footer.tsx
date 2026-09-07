import Link from "next/link";

const programs = [
  { label: "Ideator Mentorship", href: "/ideator" },
  { label: "Matcher Project Hub", href: "/matcher" },
  { label: "Challenger Sprints", href: "/challenger" },
  { label: "Tuition & Aid", href: "/pricing" },
];

const partners = [
  "Instabug",
  "Fawry",
  "Swvl",
  "Valeo Egypt",
  "Paymob",
];

const paymentMethods = [
  "Vodafone Cash",
  "InstaPay",
  "Fawry Pay",
  "Visa / Mastercard",
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary-deep flex items-center justify-center">
                <span className="text-butter text-xs font-bold font-mono">L</span>
              </div>
              <span className="text-xl font-display font-semibold text-primary-deep tracking-tight">
                Linkable
              </span>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Cairo HQ: Greek Campus, Downtown Cairo, Egypt.
              <br />
              Connecting ambitious Egyptian developers with verified industry engineering cohorts.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="label-lg-uppercase text-on-surface mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-surface-variant hover:text-primary-deep transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hiring Partners */}
          <div>
            <h4 className="label-lg-uppercase text-on-surface mb-4">
              Egypt Hiring Partners
            </h4>
            <ul className="space-y-2.5">
              {partners.map((partner) => (
                <li key={partner}>
                  <span className="text-sm text-on-surface-variant">{partner}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="label-lg-uppercase text-on-surface mb-4">
              Supported Local Payments
            </h4>
            <p className="text-xs text-on-surface-variant mb-3">
              Instant onboarding via Egyptian national payment rails.
            </p>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-2.5 py-1 text-xs font-medium bg-surface-container text-on-surface-variant rounded-sm border border-outline-variant/40"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-outline flex-1 min-w-0">
            © 2025 Linkable Technologies Ltd. Built for Egypt&apos;s future software leaders.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-outline hover:text-on-surface transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-outline hover:text-on-surface transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-xs text-outline hover:text-on-surface transition-colors"
            >
              Cairo Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
