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
          operated by two independent developers under the name
          &ldquo;ikidevs&rdquo;. This policy explains how we collect and use
          your information when you use the CLIMB application.
        </p>
        <p>
          By using CLIMB, you agree to the collection and use of information in
          accordance with this policy. We are committed to protecting your
          privacy and handling your data with care. We do not run advertising,
          we do not use third-party analytics or tracking SDKs, and we do not
          sell or share your data for marketing purposes.
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
          <li>
            <strong>Account information:</strong> email address and display
            name, provided during registration.
          </li>
          <li>
            <strong>Study content:</strong> study sessions (start time, end
            time, duration, breaks, meters climbed), mountains you create, and
            tasks you add within the app.
          </li>
          <li>
            <strong>Device information:</strong> app version, operating system
            version, device model, and device language — used to diagnose
            crashes and ensure compatibility.
          </li>
          <li>
            <strong>Push notification token:</strong> if you grant notification
            permission, a device-specific token issued by Firebase Cloud
            Messaging, used only to deliver notifications you have opted into
            (session-complete, badge earned, task overdue, daily reminder,
            streak-at-risk).
          </li>
          <li>
            <strong>Subscription data:</strong> if you purchase a CLIMB+
            Premium subscription, we receive subscription-state metadata from
            our payment processor (RevenueCat) — whether the subscription is
            active, the renewal date, the product identifier, and recent
            event types (purchase, renewal, cancellation). We do not receive
            or store payment-card information at any time. See Section 6 for
            third-party service details and Section 7 for what we do with
            this data.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <>
        <ul>
          <li>To provide, maintain, and improve the app</li>
          <li>To sync your data across your devices</li>
          <li>To send notifications you have opted into</li>
          <li>
            To respond to support requests and enforce our terms (e.g. handle
            account deletion requests)
          </li>
        </ul>
        <div className="mt-4 bg-indigo-500/10 border-l-4 border-indigo-500 rounded-lg px-4 py-3 text-[13px] text-white/50 leading-relaxed">
          We do not sell your data to any third party, and we do not share it
          with advertising networks, data brokers, or third-party analytics
          services. Your information is used solely to operate CLIMB for you.
        </div>
      </>
    ),
  },
  {
    title: "4. Legal Basis for Processing (EU / UK users)",
    body: (
      <>
        <p>
          If you are located in the European Economic Area or the United
          Kingdom, we process your personal data under the following legal
          bases of the GDPR / UK GDPR:
        </p>
        <ul>
          <li>
            <strong>Performance of a contract</strong> (Article 6(1)(b)) — to
            provide the CLIMB service you signed up for (account, study
            tracking, data sync).
          </li>
          <li>
            <strong>Your consent</strong> (Article 6(1)(a)) — for push
            notifications. You may withdraw consent at any time in your device
            settings.
          </li>
          <li>
            <strong>Legitimate interests</strong> (Article 6(1)(f)) — to
            secure the service, prevent abuse, and fix bugs. You may object to
            this processing at any time (see Section 8).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data Storage & Security",
    body: (
      <ul>
        <li>All data is stored in Google Firebase (Firestore and Realtime Database)</li>
        <li>Servers are located in Europe (europe-west1, Belgium)</li>
        <li>Data is encrypted in transit (TLS 1.2+) and at rest</li>
        <li>
          Passwords are never stored in plain text — authentication is handled
          by Firebase Auth, which stores hashed credentials
        </li>
        <li>
          Per-user access is enforced at the database level via Firestore and
          Realtime Database security rules — other users cannot read your data
        </li>
      </ul>
    ),
  },
  {
    title: "6. Third Party Services",
    body: (
      <>
        <p>CLIMB uses the following third-party services:</p>
        <ul>
          <li>
            <strong>Google Firebase</strong> — Authentication, Cloud Firestore,
            Realtime Database (for in-progress session sync), and Firebase
            Cloud Messaging (for push notifications).
          </li>
          <li>
            <strong>RevenueCat</strong> — payment processor and subscription
            management for CLIMB+ Premium. RevenueCat receives your purchase
            receipt from Apple or Google, validates it, and tells us which
            entitlements you currently hold. RevenueCat acts as a data
            processor on our behalf.
          </li>
          <li>
            <strong>Apple App Store</strong> (for iOS purchases) and{" "}
            <strong>Google Play Billing</strong> (for Android purchases) —
            handle payment, store your purchase receipt, and provide refund
            mechanisms. Payment-card details never reach us.
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
        <p className="mt-2">
          RevenueCat privacy policy:{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            revenuecat.com/privacy
          </a>
        </p>
        <p className="mt-2">
          We do not use any advertising SDKs, analytics SDKs (such as Google
          Analytics, Firebase Analytics, or AppsFlyer), or crash-reporting SDKs
          beyond what is listed above.
        </p>
      </>
    ),
  },
  {
    title: "7. Subscriptions and the Founder Program",
    body: (
      <>
        <p>
          CLIMB is free to download. CLIMB+ Premium is an optional
          subscription. If you purchase it, we store the following
          subscription-related fields on your CLIMB user record:
        </p>
        <ul>
          <li>
            Whether your CLIMB+ Premium subscription is currently active
          </li>
          <li>
            The current subscription period&rsquo;s expiration date (where
            applicable)
          </li>
          <li>Whether your subscription is set to auto-renew</li>
          <li>The product identifier of your active subscription</li>
          <li>
            The most recent subscription event type (purchase, renewal,
            cancellation, refund, billing-issue grace period) for support
            and reconciliation purposes
          </li>
        </ul>
        <p className="mt-3">
          We do <strong>not</strong> store your payment method, billing
          address, or transaction amount. Refund requests are handled
          directly by Apple or Google; we receive a refund event from
          RevenueCat solely to revoke the corresponding CLIMB+ entitlement
          on your user record.
        </p>
        <p className="mt-3">
          <strong>Founder program:</strong> the first 1,000 users to sign up
          for CLIMB receive a permanent founder number (a value between 1
          and 1,000) stored on their user record, and a lifetime CLIMB+
          Premium grant at no cost. Once you receive a founder number, that
          number is permanent and non-transferable. The total signup count
          is stored in a separate server-side counter that is not associated
          with any individual user account.
        </p>
        <p className="mt-3">
          <strong>Family Sharing:</strong> CLIMB+ subscriptions are not
          enabled for Apple Family Sharing or Google Play Family Library.
          We do not collect or process data about family members of
          subscribers.
        </p>
      </>
    ),
  },
  {
    title: "8. Data Retention & Deletion",
    body: (
      <ul>
        <li>
          We retain your account and study data for as long as your account is
          active
        </li>
        <li>
          You can request deletion at any time by emailing{" "}
          <a
            href="mailto:support@ikidevs.com?subject=CLIMB%20Account%20Deletion%20Request"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            support@ikidevs.com
          </a>{" "}
          from your registered email address
        </li>
        <li>
          Deletion requests are processed within 7 days; residual copies in
          encrypted backups are purged within 30 days
        </li>
        <li>
          Full instructions are on our{" "}
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
    title: "9. Your Rights",
    body: (
      <>
        <p>
          Subject to your jurisdiction, you have the following rights over
          your personal data:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — request a copy of the data we hold about
            you
          </li>
          <li>
            <strong>Rectification</strong> — correct inaccurate data (most
            fields can be edited directly in the app)
          </li>
          <li>
            <strong>Erasure</strong> — delete your account and associated data
            (see Section 8)
          </li>
          <li>
            <strong>Portability</strong> — receive your data in a
            machine-readable format
          </li>
          <li>
            <strong>Restriction / objection</strong> — limit or object to how
            we process your data
          </li>
          <li>
            <strong>Withdraw consent</strong> — revoke any consent you have
            given (e.g. push notifications)
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, email{" "}
          <a
            href="mailto:support@ikidevs.com"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            support@ikidevs.com
          </a>
          . EU / UK residents also have the right to lodge a complaint with
          their local data protection authority.
        </p>
        <p className="mt-3">
          <strong>California residents (CCPA / CPRA):</strong> you have the
          right to know what personal information we collect, to request
          deletion, and to opt out of the sale or sharing of personal
          information. We do not sell or share personal information as defined
          under California law.
        </p>
        <p className="mt-3">
          <strong>Turkish residents (KVKK):</strong> under Turkish Personal
          Data Protection Law No. 6698 (KVKK), you have the right to learn
          whether your personal data is processed, request information about
          the processing, have inaccurate data corrected, request deletion or
          destruction, object to the processing, and lodge a complaint with
          the Personal Data Protection Authority (Kişisel Verileri Koruma
          Kurumu). To exercise these rights, email{" "}
          <a
            href="mailto:support@ikidevs.com"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            support@ikidevs.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "10. Children's Privacy",
    body: (
      <ul>
        <li>CLIMB is not directed at children under the age of 13</li>
        <li>We do not knowingly collect data from children under 13</li>
        <li>
          If you believe a child has provided us with personal data, contact{" "}
          <a
            href="mailto:support@ikidevs.com"
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            support@ikidevs.com
          </a>{" "}
          and we will delete it promptly
        </li>
      </ul>
    ),
  },
  {
    title: "11. Changes to This Policy",
    body: (
      <ul>
        <li>We may update this privacy policy from time to time</li>
        <li>
          The &ldquo;Last updated&rdquo; date at the top of this page reflects
          the latest revision
        </li>
        <li>
          For material changes, we will notify you in-app before the changes
          take effect
        </li>
      </ul>
    ),
  },
  {
    title: "12. Data Controller & Contact",
    body: (
      <>
        <p>
          CLIMB is operated by two independent developers trading as
          &ldquo;ikidevs&rdquo;. We are joint data controllers for the personal
          data processed through the app under the GDPR / UK GDPR.
        </p>
        <p className="mt-3">
          For any privacy, data-protection, or account-deletion request, please
          contact us at:
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
          <li>
            Postal address: Nur Mah. Vefa Cad. C2 Blok No: 12 İç Kapı No: 5,
            Artuklu / Mardin, Turkey
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
