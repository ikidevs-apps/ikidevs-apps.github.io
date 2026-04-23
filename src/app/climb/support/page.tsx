import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — CLIMB",
  description: "Get help with the CLIMB study tracker app.",
};

const faqs = [
  {
    q: "How do I start a study session?",
    a: "Tap the CLIMB! button on the home screen, select Standard or Climbfinity mode, set your goal and tap Start. Your climber will begin ascending the mountain as you study.",
  },
  {
    q: "What is the difference between Standard and Climbfinity?",
    a: "Standard mode has a fixed goal — you set a study duration and climb toward the peak. Climbfinity is an endless mountain where your total climbed meters accumulate forever with no peak to reach.",
  },
  {
    q: "How are meters calculated?",
    a: "Every minute of active studying earns you 1 meter of climbing progress toward your goal.",
  },
  {
    q: "What happens when I take a break?",
    a: "Your climber camps at the current position on the mountain. A flag is left at that spot when you resume climbing so you can see where you rested.",
  },
  {
    q: "Can I track tasks alongside my sessions?",
    a: "Yes — tap the Tasks button on the home screen to create tasks and optionally link them to a mountain.",
  },
  {
    q: "How do I change my display name or units?",
    a: "Go to Profile → Profile Settings to update your display name and switch between meters and feet.",
  },
  {
    q: "How do I reset my password?",
    a: "Go to Profile → Profile Settings → Change Password. A reset link will be sent to your registered email.",
  },
  {
    q: "How do I delete my account?",
    a: (
      <>
        Email us at{" "}
        <a
          href="mailto:support@ikidevs.com?subject=CLIMB%20Account%20Deletion%20Request"
          className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
        >
          support@ikidevs.com
        </a>{" "}
        from your registered email address with the subject &ldquo;Account
        Deletion Request&rdquo;. We will permanently delete your account and
        all associated data within 7 days. Full details are on our{" "}
        <Link
          href="/climb/delete-account/"
          className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
        >
          Delete Account
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    q: "Is my data private?",
    a: (
      <>
        Yes. We never sell your data. All data is stored securely on Google
        Firebase servers in Europe. See our{" "}
        <Link
          href="/climb/privacy/"
          className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
        >
          Privacy Policy
        </Link>{" "}
        for full details.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white font-nunito">
      <div className="max-w-[680px] mx-auto px-6 flex flex-col min-h-screen">

        {/* Header */}
        <header className="pt-10 pb-8 border-b border-white/[0.07] mb-10">
          <div className="flex items-center gap-3 mb-1.5">
            <Link
              href="/"
              className="text-[20px] font-extrabold text-indigo-400 hover:text-indigo-300 transition-colors no-underline"
            >
              ⛰️ CLIMB
            </Link>
            <span className="text-white/20 text-lg">›</span>
            <span className="text-[20px] font-bold text-white">Support</span>
          </div>
          <p className="text-sm text-white/35 font-semibold tracking-wide">
            Study smarter. Climb higher.
          </p>
        </header>

        {/* Main */}
        <main className="flex-1">
          <h1 className="text-[32px] font-extrabold text-white tracking-tight mb-8">
            Support
          </h1>

          {/* Contact card */}
          <div className="bg-white/[0.04] border border-white/[0.09] rounded-2xl p-7 mb-10">
            <p className="text-[19px] font-bold text-white mb-2">
              We&apos;re here to help you reach the summit.
            </p>
            <p className="text-[15px] text-white/50 leading-relaxed mb-6">
              Reach out to us at support@ikidevs.com — we typically respond
              within 24 hours.
            </p>
            <a
              href="mailto:support@ikidevs.com"
              className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-400 active:scale-[0.98] text-white font-bold text-[15px] py-4 rounded-xl transition-all duration-150 no-underline"
            >
              ✉️&nbsp; Email support@ikidevs.com
            </a>
          </div>

          {/* FAQ */}
          <h2 className="text-[22px] font-extrabold text-white tracking-tight mb-5">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-3 mb-16">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-5"
              >
                <p className="text-[14px] font-bold text-white mb-3 leading-snug">
                  {item.q}
                </p>
                <div className="h-px bg-white/[0.07] mb-3" />
                <p className="text-[13px] text-white/45 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <div className="h-px bg-white/[0.06] mb-0" />
        <footer className="flex justify-center items-center gap-5 py-6">
          <Link
            href="/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors"
          >
            Home
          </Link>
          <span className="text-white/10">·</span>
          <Link
            href="/climb/privacy/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-white/10">·</span>
          <span className="text-[11px] text-white/20">© 2026 ikidevs</span>
        </footer>

      </div>
    </div>
  );
}
