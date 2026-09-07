"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const universities = [
  "Cairo University",
  "German University in Cairo (GUC)",
  "American University in Cairo (AUC)",
  "British University in Egypt (BUE)",
  "Ain Shams University",
  "Helwan University",
  "Zewail City",
  "Other",
];

const tracks = [
  { id: "ideator", label: "Ideator", description: "Mentorship" },
  { id: "matcher", label: "Matcher", description: "Projects" },
  { id: "challenger", label: "Challenger", description: "Competitions" },
];

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex lg:flex-row flex-col">
      {/* Left Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-alabaster">
        <div>
          <Link href="/" className="inline-block mb-8">
            <span className="text-2xl font-display font-semibold text-primary-deep tracking-tight">
              Linkable
            </span>
          </Link>

          <h1 className="text-3xl font-display font-semibold text-primary-deep mb-2">
            Create your developer account
          </h1>
          <p className="text-on-surface-variant mb-8">
            Join 420+ Egyptian engineers building production systems
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="label-uppercase text-xs text-outline mb-1.5 block"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-3 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                placeholder="Ahmed Hassan"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="label-uppercase text-xs text-outline mb-1.5 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                placeholder="ahmed@university.edu.eg"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="label-uppercase text-xs text-outline mb-1.5 block"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 pr-11 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="label-uppercase text-xs text-outline mb-1.5 block"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full px-4 py-3 pr-11 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* University */}
            <div>
              <label
                htmlFor="university"
                className="label-uppercase text-xs text-outline mb-1.5 block"
              >
                University / Affiliation
              </label>
              <select
                id="university"
                className="w-full px-4 py-3 bg-surface-card border border-outline-variant/60 rounded-sm text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-deep focus:ring-offset-1 appearance-none"
              >
                <option value="">Select your university</option>
                {universities.map((uni) => (
                  <option key={uni} value={uni}>
                    {uni}
                  </option>
                ))}
              </select>
            </div>

            {/* Track Selection */}
            <div>
              <span className="label-uppercase text-xs text-outline mb-2 block">
                Track
              </span>
              <div className="grid grid-cols-3 gap-3">
                {tracks.map((track) => (
                  <label
                    key={track.id}
                    className="flex flex-col items-center gap-1 p-3 border border-outline-variant/60 rounded-sm bg-surface-card cursor-pointer hover:border-primary-deep/40 transition-colors has-[:checked]:border-primary-deep has-[:checked]:bg-primary-deep/5"
                  >
                    <input
                      type="radio"
                      name="track"
                      value={track.id}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium text-on-surface">
                      {track.label}
                    </span>
                    <span className="text-xs text-outline">
                      {track.description}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 w-4 h-4 rounded-sm border border-outline-variant/60 text-primary-deep focus:ring-primary-deep focus:ring-offset-0 accent-primary-deep"
              />
              <span className="text-sm text-on-surface-variant leading-snug">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-primary-deep underline underline-offset-2 hover:text-verdigris transition-colors"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-primary-deep underline underline-offset-2 hover:text-verdigris transition-colors"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <Button variant="primary" className="w-full">
              Create Account
            </Button>

            <p className="text-center text-sm text-on-surface-variant">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="text-primary-deep font-medium underline underline-offset-2 hover:text-verdigris transition-colors"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Branding Panel */}
      <div className="hidden lg:flex flex-1 bg-primary-deep items-center justify-center px-12 py-12">
        <div>
          <h2 className="text-4xl font-display font-semibold text-butter leading-tight mb-6">
            Stop Learning on Paper. Start Building for Real.
          </h2>
          <p className="text-butter/70 text-lg mb-10">
            Bridge the gap between university theory and production-grade
            software. Build verified portfolio projects, find mentors, and
            compete in real company bounties.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-butter mt-0.5 text-lg">✓</span>
              <span className="text-butter/80 text-sm leading-relaxed">
                1-on-1 mentorship with senior Egyptian engineers
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-butter mt-0.5 text-lg">✓</span>
              <span className="text-butter/80 text-sm leading-relaxed">
                Production project sandbox with verified credentials
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-butter mt-0.5 text-lg">✓</span>
              <span className="text-butter/80 text-sm leading-relaxed">
                Compete in real company bounties and earn XP
              </span>
            </li>
          </ul>

          <div className="border-t border-butter/15 pt-8 space-y-6">
            <div>
              <div className="text-xs label-uppercase text-butter/50 mb-2">
                Platform Stats
              </div>
              <p className="text-butter text-sm font-medium">
                420+ Engineers · 1,850+ Mentorship Hours · EGP 2.4M+ Earned
              </p>
            </div>
            <div>
              <div className="text-xs label-uppercase text-butter/50 mb-2">
                Social Proof
              </div>
              <p className="text-butter/70 text-sm">
                Trusted by graduates from Cairo Uni, GUC, AUC
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
