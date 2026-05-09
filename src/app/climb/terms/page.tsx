import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — CLIMB",
  description:
    "Terms of Use for the CLIMB study tracker app and CLIMB+ Premium subscription, by ikidevs.",
};

const sections = [
  {
    title: "1. Acceptance of these Terms",
    body: (
      <>
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and
          use of the CLIMB mobile application (&ldquo;CLIMB&rdquo;,
          &ldquo;the App&rdquo;) provided by two independent developers
          trading as &ldquo;ikidevs&rdquo; (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;). By downloading, installing, or using CLIMB you
          agree to be bound by these Terms.
        </p>
        <p>
          If you do not agree with any part of these Terms, do not install or
          use CLIMB.
        </p>
      </>
    ),
  },
  {
    title: "2. Eligibility",
    body: (
      <p>
        You must be at least 13 years old to use CLIMB. If you are under the
        age of majority in your jurisdiction, you must have permission from a
        parent or legal guardian. CLIMB is not directed at children under 13;
        see our{" "}
        <Link
          href="/climb/privacy/"
          className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
        >
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
    ),
  },
  {
    title: "3. Your Account",
    body: (
      <ul>
        <li>
          You are responsible for the credentials of any account you create
          or sign into via CLIMB (email/password, Apple ID, or Google Account)
        </li>
        <li>
          You agree to provide accurate information and to keep it up to date
        </li>
        <li>
          You are responsible for all activity that occurs under your account
        </li>
        <li>
          We are not liable for any loss or damage arising from your failure
          to keep your credentials secure
        </li>
      </ul>
    ),
  },
  {
    title: "4. CLIMB+ Premium subscription",
    body: (
      <>
        <p>
          CLIMB is free to download and includes core climbing, study
          tracking, and mountain history features. CLIMB+ Premium
          (&ldquo;Premium&rdquo;) unlocks additional features including
          unlimited active mountains and the full climb archive.
        </p>
        <p className="mt-3">
          <strong>4.1 Pricing and billing.</strong> Premium is offered as the
          following auto-renewing subscriptions:
        </p>
        <ul>
          <li>
            <strong>CLIMB+ Monthly</strong> — $4.99 USD per month, or local
            equivalent
          </li>
          <li>
            <strong>CLIMB+ Annual</strong> — $34.99 USD per year, or local
            equivalent, with a 3-day free trial for new subscribers
          </li>
        </ul>
        <p className="mt-3">
          Prices in your local currency are shown on the in-app purchase
          screen before you confirm any transaction. Payment is processed by
          Apple (App Store) or Google (Play Store), not by us.
        </p>
        <p className="mt-3">
          <strong>4.2 Auto-renewal.</strong> Subscriptions automatically renew
          at the end of each billing period unless cancelled at least 24
          hours before the period ends. Your payment method will be charged
          for the renewal within 24 hours before the end of the current
          period at the price shown at purchase.
        </p>
        <p className="mt-3">
          <strong>4.3 Free trial.</strong> The 3-day free trial on the Annual
          plan is available only to users who have not previously subscribed
          to CLIMB+. If you do not cancel before the trial ends, you will be
          charged the full Annual price. You may cancel any time during the
          trial in your Apple ID or Google Play subscription settings.
        </p>
        <p className="mt-3">
          <strong>4.4 Cancellation.</strong> You may cancel your subscription
          at any time through your Apple ID subscription settings (iOS) or
          your Google Play subscription settings (Android). Cancellation
          takes effect at the end of the current billing period; you retain
          access to Premium features until then.
        </p>
        <p className="mt-3">
          <strong>4.5 Refunds.</strong> Refunds are handled by Apple and
          Google according to their respective policies. We do not directly
          process refunds for App Store or Play Store purchases. To request a
          refund:
        </p>
        <ul>
          <li>
            iOS:{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              reportaproblem.apple.com
            </a>
          </li>
          <li>
            Android:{" "}
            <a
              href="https://play.google.com/store/account/orderhistory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              play.google.com/store/account/orderhistory
            </a>
          </li>
        </ul>
        <p className="mt-3">
          <strong>4.6 Founder program.</strong> The first 1,000 users to sign
          up for CLIMB receive a permanent founder number and a lifetime
          CLIMB+ Premium grant at no cost. This is a promotional grant; once
          all 1,000 founder slots are filled, no further lifetime grants are
          issued. Founder status is non-transferable and tied to your
          original account.
        </p>
        <p className="mt-3">
          <strong>4.7 Family Sharing.</strong> CLIMB+ subscriptions are not
          enabled for Apple Family Sharing or Google Play Family Library.
          Each subscription is tied to the purchasing user.
        </p>
      </>
    ),
  },
  {
    title: "5. User Content",
    body: (
      <>
        <p>
          You retain ownership of any content you create within CLIMB
          (mountain names, task titles, descriptions, etc.). By using CLIMB
          you grant us a limited, non-exclusive, royalty-free license to
          store, process, and display this content as necessary to operate
          the service for you.
        </p>
        <p className="mt-3">
          You agree not to upload content that is unlawful, infringing,
          harmful, abusive, or that violates any third party&rsquo;s rights.
        </p>
      </>
    ),
  },
  {
    title: "6. Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Reverse engineer, decompile, or attempt to extract the source
            code of CLIMB, except to the extent permitted by applicable law
          </li>
          <li>Use CLIMB to violate any applicable law or regulation</li>
          <li>
            Attempt to interfere with the operation of CLIMB or its
            underlying infrastructure
          </li>
          <li>
            Resell, redistribute, sublicense, or otherwise commercialize
            access to CLIMB+ Premium
          </li>
          <li>
            Use the App in any way that could damage, disable, overburden,
            or impair our services or interfere with other users&rsquo; use
            of CLIMB
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Termination",
    body: (
      <ul>
        <li>
          We may suspend or terminate your access to CLIMB if you breach
          these Terms or use the App in a way that harms other users or our
          service
        </li>
        <li>
          You may stop using CLIMB at any time; uninstalling the App or
          deleting your account terminates your right to use the App
        </li>
        <li>
          Active subscriptions follow the cancellation terms in Section 4.4 —
          deleting your account does not automatically cancel an active
          App Store or Play Store subscription. You must cancel through your
          store account settings
        </li>
        <li>
          Account deletion instructions are on our{" "}
          <Link
            href="/climb/delete-account/"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            Delete Account
          </Link>{" "}
          page
        </li>
      </ul>
    ),
  },
  {
    title: "8. Disclaimers",
    body: (
      <p>
        CLIMB IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
        WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
        LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT CLIMB
        WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT YOUR DATA WILL ALWAYS BE
        AVAILABLE WITHOUT INTERRUPTION. NOTHING IN THESE TERMS LIMITS ANY
        STATUTORY RIGHTS YOU MAY HAVE AS A CONSUMER UNDER YOUR LOCAL LAW.
      </p>
    ),
  },
  {
    title: "9. Limitation of Liability",
    body: (
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IKIDEVS SHALL NOT BE LIABLE
        FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
        DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF CLIMB, EVEN IF WE
        HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE
        LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO CLIMB SHALL NOT
        EXCEED THE AMOUNT YOU PAID FOR CLIMB+ PREMIUM IN THE TWELVE MONTHS
        PRECEDING THE EVENT GIVING RISE TO THE CLAIM. NOTHING IN THESE TERMS
        LIMITS LIABILITY THAT CANNOT BE LIMITED UNDER APPLICABLE LAW.
      </p>
    ),
  },
  {
    title: "10. Privacy",
    body: (
      <p>
        Our collection and use of your information is described in our{" "}
        <Link
          href="/climb/privacy/"
          className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
        >
          Privacy Policy
        </Link>
        . By using CLIMB, you consent to the data practices described there.
      </p>
    ),
  },
  {
    title: "11. Changes to these Terms",
    body: (
      <ul>
        <li>We may update these Terms from time to time</li>
        <li>
          The &ldquo;Last updated&rdquo; date at the top of this page reflects
          the latest revision
        </li>
        <li>
          For material changes that affect your subscription, we will notify
          you in-app or via email before the changes take effect
        </li>
        <li>
          Your continued use of CLIMB after changes take effect constitutes
          acceptance of the updated Terms
        </li>
      </ul>
    ),
  },
  {
    title: "12. Governing Law and Jurisdiction",
    body: (
      <p>
        These Terms are governed by the laws of the Republic of Türkiye,
        without regard to conflict of law principles. Any dispute arising
        under these Terms that is not resolved through Apple&rsquo;s or
        Google&rsquo;s store-level dispute mechanisms shall be subject to the
        jurisdiction of the courts of Mardin, Türkiye. If you are a consumer
        resident in the European Union, you retain the protections of the
        mandatory consumer-protection laws of your country of residence.
      </p>
    ),
  },
  {
    title: "13. Contact",
    body: (
      <>
        <p>For questions about these Terms or CLIMB+ Premium, contact us at:</p>
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
          <li>
            Postal address: Nur Mah. Vefa Cad. C2 Blok No: 12 İç Kapı No: 5,
            Artuklu / Mardin, Türkiye
          </li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
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
              Terms of Use
            </span>
          </div>
          <p className="text-sm text-white/35 font-semibold tracking-wide">
            Study smarter. Climb higher.
          </p>
        </header>

        {/* Main */}
        <main className="flex-1">
          <h1 className="text-[32px] font-extrabold text-white tracking-tight mb-2">
            Terms of Use
          </h1>
          <p className="text-[13px] text-white/30 mb-10">
            Last updated: May 9, 2026
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
            href="/climb/privacy/"
            className="text-[11px] font-semibold tracking-wider uppercase text-white/25 hover:text-white/55 transition-colors"
          >
            Privacy
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
