import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | TrackMySpend",
  description: "TrackMySpend Terms of Service - Read our terms and conditions for using our expense tracking application.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="py-12 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-slate-600">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using TrackMySpend ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access or use the Service. These Terms apply to all users, including visitors, registered users, and others who access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                2. Description of Service
              </h2>
              <p>
                TrackMySpend is a mobile application that helps users track expenses, manage budgets, and gain insights into their spending habits. The Service includes features such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Expense tracking and categorization</li>
                <li>Budget creation and monitoring</li>
                <li>Financial insights and analytics</li>
                <li>Data synchronization across devices</li>
                <li>Email newsletters and product updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                3. User Accounts and Registration
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                3.1 Account Creation
              </h3>
              <p>
                To use certain features of the Service, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information to keep it accurate</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                3.2 Account Eligibility
              </h3>
              <p>
                You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                4. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to the Service or related systems</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                <li>Use automated systems (bots, scrapers) to access the Service without permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Collect or harvest information about other users without their consent</li>
                <li>Use the Service to send spam, unsolicited messages, or bulk communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                5. Email Communications and Newsletter
              </h2>
              <p>
                By creating an account or subscribing to our newsletter, you consent to receive email communications from us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transactional emails (account updates, security alerts, password resets)</li>
                <li>Newsletters and product updates</li>
                <li>Marketing and promotional communications</li>
                <li>Service-related announcements</li>
              </ul>
              <p className="mt-4">
                <strong>Opt-Out:</strong> You may unsubscribe from marketing emails at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clicking the "Unsubscribe" link in any marketing email</li>
                <li>Adjusting your email preferences in your account settings</li>
                <li>Contacting us directly to request removal from our mailing list</li>
              </ul>
              <p className="mt-4">
                We use a trusted email service provider to deliver emails. By subscribing, you acknowledge that your email address will be processed in accordance with our Privacy Policy. Transactional emails necessary for service operation may still be sent even if you opt out of marketing communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                6. User Content and Data
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                6.1 Ownership
              </h3>
              <p>
                You retain ownership of all data and content you input into the Service ("User Content"). By using the Service, you grant us a limited, non-exclusive, worldwide, royalty-free license to use, store, and process your User Content solely for the purpose of providing and improving the Service.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                6.2 Data Security
              </h3>
              <p>
                We implement security measures to protect your data, but you are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>Ensuring the accuracy of data you input</li>
                <li>Backing up important data independently</li>
                <li>Notifying us immediately of any security breaches</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                The Service, including its original content, features, functionality, design, logos, and trademarks, is owned by TrackMySpend and protected by international copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, modify, or create derivative works of the Service</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Use our trademarks or logos without written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                8. Payment and Subscription Terms
              </h2>
              <p>
                If the Service offers paid features or subscriptions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment will be charged to your chosen payment method</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>You may cancel your subscription at any time through your account settings</li>
                <li>Refunds are subject to our refund policy</li>
                <li>We reserve the right to change pricing with notice to existing subscribers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                9. Service Availability and Modifications
              </h2>
              <p>
                We strive to maintain the Service's availability but do not guarantee uninterrupted access. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify, suspend, or discontinue any part of the Service at any time</li>
                <li>Perform maintenance that may temporarily interrupt service</li>
                <li>Update features, remove features, or change functionality</li>
                <li>Impose limits on usage or storage</li>
              </ul>
              <p className="mt-4">
                We will provide reasonable notice of significant changes when possible, but are not obligated to do so for all modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                10. Disclaimer of Warranties
              </h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of information</li>
              </ul>
              <p className="mt-4">
                We do not guarantee that the Service will meet your requirements or that any errors will be corrected. You use the Service at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                11. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRACKMYSPEND SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loss of profits, data, or business opportunities</li>
                <li>Financial losses resulting from use of the Service</li>
                <li>Service interruptions or failures</li>
                <li>Errors or omissions in content</li>
              </ul>
              <p className="mt-4">
                Our total liability for any claims arising from or related to the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or $100, whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                12. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless TrackMySpend and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your User Content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                13. Termination
              </h2>
              <p>We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>Requests by law enforcement or government agencies</li>
              </ul>
              <p className="mt-4">
                You may terminate your account at any time by deleting it through the app settings. Upon termination, your right to use the Service will immediately cease, and we may delete your account and data in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                14. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or the Service shall be resolved through:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Good faith negotiation between the parties</li>
                <li>Binding arbitration if negotiation fails (where applicable by law)</li>
                <li>Courts of competent jurisdiction as a last resort</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                15. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated Terms on this page</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications for significant changes (where applicable)</li>
              </ul>
              <p className="mt-4">
                Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Service and delete your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                16. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                17. Entire Agreement
              </h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and TrackMySpend regarding the Service and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                18. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="font-semibold text-slate-900">TrackMySpend</p>
                <p className="mt-2">
                  For questions about these Terms, please visit our app's support section or contact us through the app.
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

