"use client";

import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SIDE - Signin Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-alabaster">
        <div className="space-y-8">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <span className="font-display text-2xl font-bold text-primary-deep">
              Linkable
            </span>
          </Link>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="font-display text-3xl font-bold text-primary-deep">
              Welcome back
            </h1>
            <p className="font-body text-sm text-neutral-600">
              Sign in to continue your engineering journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="label-uppercase block font-body text-xs font-semibold text-neutral-600"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-sm border border-outline-variant/60 bg-surface-card font-body text-sm text-primary-deep placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-deep/40 focus:border-primary-deep transition-colors"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="label-uppercase block font-body text-xs font-semibold text-neutral-600"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-sm border border-outline-variant/60 bg-surface-card font-body text-sm text-primary-deep placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-deep/40 focus:border-primary-deep transition-colors pr-12"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-primary-deep transition-colors"
                  aria-label="Toggle password visibility"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-outline-variant/60 text-primary-deep focus:ring-primary-deep/40"
                />
                <span className="font-body text-sm text-neutral-600">
                  Remember me
                </span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="font-body text-sm font-medium text-primary-deep hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-sm bg-primary-deep text-butter font-body text-sm font-semibold hover:bg-primary-deep/90 transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Signup link */}
          <p className="text-center font-body text-sm text-neutral-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="font-semibold text-primary-deep hover:underline"
            >
              Join free
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - Branding Panel */}
      <div className="hidden lg:flex flex-1 bg-primary-deep text-butter items-center justify-center px-12 py-16">
        <div className="space-y-10">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="font-display text-4xl font-bold leading-tight">
              Welcome back to Linkable
            </h2>
            <p className="font-body text-base text-butter/80">
              Continue building production-grade systems with verified Egyptian
              engineers.
            </p>
          </div>

          {/* Active Cohort Card */}
          <div className="rounded-md bg-butter/10 border border-butter/20 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="label-uppercase font-body text-xs font-semibold tracking-wider text-butter/90">
                Cairo Sprint 24.3 · Live Now
              </span>
            </div>

            <div className="space-y-2">
              <div className="font-body text-sm text-butter/70">Level 3</div>
              <div className="font-body text-sm font-semibold text-butter">
                1,240 XP
              </div>
            </div>

            <div className="border-t border-butter/20 pt-4">
              <p className="font-body text-sm text-butter/70">
                3 new mentor sessions available this week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
