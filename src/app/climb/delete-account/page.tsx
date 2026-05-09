import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account — CLIMB",
  description:
    "How to delete your CLIMB account and the data we will remove.",
};

export default function DeleteAccountPage() {
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
              Delete Account
            </span>
          </div>
          <p className="text-sm text-white/35 font-semibold tracking-wide">
            Remove your CLIMB account and data.
          </p>
        </header>

        {/* Main */}
        <main className="flex-1 mb-16">
          <h1 className="text-[32px] font-extrabold text-white tracking-tight mb-4">
            Delete Your Account
          </h1>
          <p className="text-[14px] text-white/50 leading-[1.8] mb-8">
            You can delete your CLIMB account and all associated data at any
            time. Deletion is permanent and cannot be undone.
          </p>

          {/* Email-based deletion */}
          <div className="bg-white/[0.04] border border-white/[0.09] rounded-2xl p-7 mb-10">
            <p className="text-[11px] font-bold tracking-wider uppercase text-indigo-400 mb-2">
              How to request deletion
            </p>
            <p className="text-[19px] font-bold text-white mb-3">
              Email us from your registered address
            </p>
            <p className="text-[14px] text-white/50 leading-[1.8] mb-5">
              Send an email from the address you registered with to{" "}
              <a
                href="mailto:support@ikidevs.com?subject=CLIMB%20Account%20Deletion%20Request"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                support@ikidevs.com
              </a>{" "}
              with the subject &ldquo;Account Deletion Request&rdquo;. We will
              process your request within 7 days and confirm by reply once your
              data has been removed.
            </p>
            <a
              href="mailto:support@ikidevs.com?subject=CLIMB%20Account%20Deletion%20Request&body=Please%20delete%20my%20CLIMB%20account%20and%20all%20associated%20data."
              className="flex items-center justify-center gap-2 w-full bg-indigo-500 hover:bg-indigo-400 active:scale-[0.98] text-white font-bold text-[15px] py-4 rounded-xl transition-all duration-150 no-underline"
            >
              ✉️&nbsp; Email deletion request
            </a>
          </div>

          {/* What gets deleted */}
          <h2 className="text-[22px] font-extrabold text-white tracking-tight mb-4">
            What will be deleted
          </h2>
          <div className="text-[14px] text-white/50 leading-[1.8] [&_ul]:list-none [&_ul]:p-0 [&_li]:relative [&_li]:pl-5 [&_li]:py-0.5 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.6em] [&_li]:before:w-[6px] [&_li]:before:h-[6px] [&_li]:before:bg-indigo-500 [&_li]:before:rounded-full">
            <ul>
              <li>Your account (email, display name, avatar)</li>
              <li>All mountains, study sessions, and camp/flag history</li>
              <li>All tasks you created</li>
              <li>All badges you earned</li>
              <li>Your daily activity logs and total meters climbed</li>
              <li>Your push notification token</li>
            </ul>
          </div>

          {/* Retention */}
          <h2 className="text-[22px] font-extrabold text-white tracking-tight mt-10 mb-4">
            Retention after deletion
          </h2>
          <p className="text-[14px] text-white/50 leading-[1.8]">
            Live data is removed within 7 days of your request. Residual copies
            in encrypted backups are purged within 30 days. After that period,
            none of your personal data remains on our systems.
          </p>

          {/* Note */}
          <div className="mt-10 bg-indigo-500/10 border-l-4 border-indigo-500 rounded-lg px-5 py-4 text-[13px] text-white/55 leading-relaxed">
            <strong className="text-white/75">Note:</strong> deleting the app
            from your device does not delete your account. You must email us as
            described above to remove your data.
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
            href="/climb/privacy/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors"
          >
            Privacy
          </Link>
          <span className="text-white/10">·</span>
          <Link
            href="/climb/terms/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors"
          >
            Terms
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
