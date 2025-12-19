import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | TrackMySpend",
  description: "TrackMySpend Privacy Policy - Learn how we protect and handle your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-slate-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to TrackMySpend ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email address, password)</li>
                <li>Financial transaction data you choose to input</li>
                <li>Budget and spending categories you create</li>
                <li>Preferences and settings</li>
                <li>Customer support communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>Usage data (features accessed, time spent, interaction patterns)</li>
                <li>Log data (IP address, access times, error logs)</li>
                <li>Location data (if you grant permission)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and manage your account</li>
                <li>Send you important updates, security alerts, and administrative messages</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent, which you can withdraw at any time)</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                4. Email Communications
              </h2>
              <p>
                When you subscribe to our newsletter or provide your email address:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your email address is stored securely and processed through our email service provider</li>
                <li>We send you newsletters, product updates, and promotional content (with your consent)</li>
                <li>You can unsubscribe at any time using the link provided in every email</li>
                <li>We comply with anti-spam regulations and email best practices</li>
                <li>We do not share your email address with third parties for their marketing purposes</li>
              </ul>
              <p className="mt-4">
                <strong>Unsubscribing:</strong> You can opt-out of marketing emails at any time by clicking the "Unsubscribe" link in any email or by contacting us directly. Transactional emails (account updates, security alerts) may still be sent as they are necessary for service operation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption for sensitive financial data</li>
                <li>Secure data transmission using SSL/TLS protocols</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure cloud storage infrastructure</li>
                <li>Biometric authentication options where available</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                6. Data Sharing and Disclosure
              </h2>
              <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our services, subject to confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                7. Your Rights and Choices
              </h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Restrict Processing:</strong> Request limitation of how we process your data</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                8. Children's Privacy
              </h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately, and we will take steps to delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                9. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to these countries. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                10. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                12. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-900">TrackMySpend</p>
                <p className="mt-2">
                  For privacy-related inquiries, please visit our app's support section or contact us through the app.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <a
              href="/"
              className="text-brand-700 hover:text-brand-800 font-medium transition"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

