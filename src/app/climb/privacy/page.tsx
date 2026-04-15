import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — CLIMB",
  description: "Privacy policy for the CLIMB study tracker app by ikidevs.",
};

const sections = [
  {
    title: "1. Introduction",
    body: (
      <>
        <p>
          CLIMB (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a study tracking app
          developed by ikidevs. This policy explains how we collect and use your
          information when you use the CLIMB application.
        </p>
        <p>
          By using CLIMB, you agree to the collection and use of information in
          accordance with this policy. We are committed to protecting your
          privacy and handling your data with care.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p>We collect the following types of information:</p>
        <ul>
          <li>Email address and display name via account registration</li>
          <li>Study session data (duration, progress, meters climbed)</li>
          <li>Task information you create within the app</li>
          <li>Device information necessary for app functionality</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <>
        <ul>
          <li>To provide, maintain and improve the app</li>
          <li>To sync your data across devices</li>
          <li>To send notifications you have requested</li>
        </ul>
        <div className="mt-4 bg-indigo-500/10 border-l-4 border-indigo-500 rounded-lg px-4 py-3 text-[13px] text-white/50 leading-relaxed">
          We do not sell your data to any third party. Your information is used
          solely to operate and improve the CLIMB experience for you.
        </div>
      </>
    ),
  },
  {
    title: "4. Data Storage & Security",
    body: (
      <ul>
        <li>All data stored securely via Google Firebase</li>
        <li>Servers located in Europe (europe-west1, Belgium)</li>
        <li>Data is encrypted in transit and at rest</li>
        <li>We follow industry standard security practices</li>
      </ul>
    ),
  },
  {
    title: "5. Third Party Services",
    body: (
      <>
        <p>CLIMB uses the following third-party services:</p>
        <ul>
          <li>
            Google Firebase (Authentication, Firestore Database, Cloud
            Messaging)
          </li>
        </ul>
        <p className="mt-2">
          Firebase privacy policy:{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            firebase.google.com/support/privacy
          </a>
        </p>
      </>
    ),
  },
  {
    title: "6. Data Deletion",
    body: (
      <ul>
        <li>You can delete your account from within the app</li>
        <li>All associated data will be permanently deleted</li>
        <li>
          You may also contact{" "}
          <a
            href="mailto:support@ikidevs.com"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            support@ikidevs.com
          </a>{" "}
          to request deletion
        </li>
        <li>We will process deletion requests within 7 days</li>
      </ul>
    ),
  },
  {
    title: "7. Children's Privacy",
    body: (
      <ul>
        <li>CLIMB is not directed at children under the age of 13</li>
        <li>We do not knowingly collect data from children under 13</li>
        <li>
          If you believe we have collected such data, contact us immediately
        </li>
      </ul>
    ),
  },
  {
    title: "8. Changes to This Policy",
    body: (
      <ul>
        <li>We may update this privacy policy from time to time</li>
        <li>
          Continued use of the app after changes constitutes acceptance of the
          new policy
        </li>
        <li>
          Significant changes will be communicated via in-app notification
        </li>
      </ul>
    ),
  },
  {
    title: "9. Contact Us",
    body: (
      <>
        <p>
          If you have any questions about this privacy policy, please reach out:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:support@ikidevs.com"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              support@ikidevs.com
            </a>
          </li>
          <li>
            Website:{" "}
            <a
              href="https://ikidevs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              ikidevs.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
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
            <span className="text-[20px] font-bold text-white">
              Privacy Policy
            </span>
          </div>
          <p className="text-sm text-white/35 font-semibold tracking-wide">
            Study smarter. Climb higher.
          </p>
        </header>

        {/* Main */}
        <main className="flex-1">
          <h1 className="text-[32px] font-extrabold text-white tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-[13px] text-white/30 mb-10">
            Last updated: April 2026
          </p>

          <div className="flex flex-col gap-9 mb-16">
            {sections.map((sec, i) => (
              <div key={i}>
                <h2 className="text-[17px] font-bold text-indigo-400 mb-3 pb-2 border-b border-white/[0.07]">
                  {sec.title}
                </h2>
                <div className="text-[14px] text-white/50 leading-[1.8] space-y-2 [&_ul]:list-none [&_ul]:p-0 [&_li]:relative [&_li]:pl-5 [&_li]:py-0.5 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.6em] [&_li]:before:w-[6px] [&_li]:before:h-[6px] [&_li]:before:bg-indigo-500 [&_li]:before:rounded-full">
                  {sec.body}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <div className="h-px bg-white/[0.06]" />
        <footer className="flex justify-center items-center gap-5 py-6">
          <Link
            href="/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors"
          >
            Home
          </Link>
          <span className="text-white/10">·</span>
          <Link
            href="/climb/support/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors"
          >
            Support
          </Link>
          <span className="text-white/10">·</span>
          <span className="text-[11px] text-white/20">© 2026 ikidevs</span>
        </footer>

      </div>
    </div>
  );
}
