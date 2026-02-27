'use client'

import { Shield, FileText, AlertTriangle, Mail, Scale, Building2 } from 'lucide-react'

export default function PartnerTermsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Terms and Conditions</h1>
              <p className="text-sm text-gray-400 mt-1">Last updated: January 2025 (Comprehensive Update)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Warning Notice */}
        <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-3xl p-8 mb-12 text-center backdrop-blur-sm">
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="text-2xl font-bold mb-3 text-white">Important Notice</h2>
          <p className="text-gray-300 leading-relaxed">
            By using RIVIO Partner App, you agree to these Terms and Conditions. These terms are legally binding and cannot be neglected. Please read them carefully.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                By accessing, downloading, installing, or using the RIVIO Partner mobile application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must immediately discontinue use of the application and delete it from your device.
              </p>
              <p>
                <span className="font-semibold text-white">These terms are mandatory and cannot be waived.</span> Your continued use of the application constitutes your acceptance of any modifications to these terms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">2. Security and Prohibited Activities</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Security is our top priority.</span> Any attempt to compromise, breach, or interfere with the security of the RIVIO application, its servers, databases, or infrastructure is strictly prohibited and will result in immediate legal action.
              </p>
              <p className="text-white font-semibold">You agree NOT to:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Attempt to hack, breach, or gain unauthorized access to our systems</li>
                <li>Reverse engineer, decompile, or disassemble the application</li>
                <li>Introduce viruses, malware, or any harmful code</li>
                <li>Interfere with or disrupt the app's functionality or security measures</li>
                <li>Attempt to manipulate payment systems, wallet balances, or transaction records</li>
                <li>Create fake accounts, duplicate accounts, or engage in fraudulent activities</li>
                <li>Use automated scripts, bots, or tools to interact with the application</li>
                <li>Share your account credentials or allow unauthorized access to your account</li>
              </ul>
              <p className="text-white font-semibold mt-4">Violation of these security terms will result in:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Immediate account suspension or termination</li>
                <li>Legal action and prosecution to the fullest extent of the law</li>
                <li>Reporting to relevant law enforcement authorities</li>
                <li>Pursuit of damages and recovery of costs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">3. Partner Responsibilities</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                As a partner using the RIVIO platform, you agree to:
              </p>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Business Information & Management:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Provide accurate, complete, and up-to-date business information</li>
                  <li>Maintain accurate pricing for day passes and all subscription passes (weekly, monthly, quarterly, semiannual, yearly)</li>
                  <li>Accurately list amenities (both free and paid) available at your facilities</li>
                  <li>Keep business hours, timings, and availability information current</li>
                  <li>Ensure business photos and descriptions accurately represent your facilities</li>
                  <li>Maintain the quality, safety, and cleanliness of all your facilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">QR Codes & Check-Ins:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Display QR codes prominently at reception or entrance for easy user access</li>
                  <li>Ensure QR codes are functional and accessible to users</li>
                  <li>Process check-ins accurately and validate user passes or payments</li>
                  <li>Do not share or duplicate QR codes across unauthorized locations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">User Engagement:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Respond to user reviews professionally, promptly, and constructively</li>
                  <li>Address user concerns and feedback in a timely manner</li>
                  <li>Maintain professional conduct in all user interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">4. Payments, Earnings, and Settlements</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                All payments and settlements are processed securely. You agree to:
              </p>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Earnings & Revenue:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Understand that earnings come from two sources: per-visit payments (credited instantly) and pass purchases (full payment upfront)</li>
                  <li>Accept that all earnings are tracked in real-time and displayed in your wallet</li>
                  <li>Acknowledge that earnings are calculated automatically based on user check-ins and pass purchases</li>
                  <li>Accept our commission structure as agreed upon during onboarding</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Payment Details & Tax Information:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Provide accurate bank account information (account holder name, account number, IFSC code, bank name)</li>
                  <li>Provide accurate PAN card number (mandatory for tax compliance)</li>
                  <li>Provide GSTIN if applicable to your business</li>
                  <li>Ensure all payment details match your official business records</li>
                  <li>Keep payment and tax information updated and notify us immediately of any changes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Settlements:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Understand that settlements are processed within 2-3 business days after approval</li>
                  <li>Accept that you can request settlements for any amount in your wallet (no minimum required)</li>
                  <li>Acknowledge that settlement requests are subject to verification and approval</li>
                  <li>Accept responsibility for ensuring bank account details are correct before requesting settlements</li>
                </ul>
              </div>
              <p className="mt-4">
                <span className="font-semibold text-white">Fraudulent payment activities, including manipulation of earnings or settlements, will result in immediate account termination, legal action, and reporting to relevant authorities.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">5. Account Security and Responsibility</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You are solely responsible for maintaining the confidentiality and security of your account credentials, including your phone number, email address, and OTP codes. You agree to:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Keep your login credentials (phone number, OTP codes) secure and confidential</li>
                <li>Never share your OTP codes or account access with anyone</li>
                <li>Notify us immediately of any unauthorized access or suspicious activity</li>
                <li>Use available security features and keep your device secure</li>
                <li>Log out from shared or public devices after use</li>
              </ul>
              <p>
                <span className="font-semibold text-white">RIVIO is not liable for any loss or damage resulting from unauthorized access to your account due to your failure to maintain security, including but not limited to financial losses, data breaches, or fraudulent transactions.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">6. Intellectual Property</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The RIVIO application, including its design, code, logos, trademarks, and content, is the exclusive property of RIVIO and is protected by copyright, trademark, and other intellectual property laws. Copyright registered © 2026 RIVIO.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of the application without explicit written permission. Unauthorized use of our intellectual property will result in legal action.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">7. Service Availability and Modifications</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                RIVIO reserves the right to:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Modify, suspend, or discontinue any feature or service at any time</li>
                <li>Update the application with new features, improvements, or changes</li>
                <li>Perform maintenance that may temporarily affect service availability</li>
                <li>Change pricing structures, commission rates, or settlement terms with prior notice</li>
                <li>Update terms and conditions, privacy policy, or other policies</li>
              </ul>
              <p>
                We will provide reasonable notice of significant changes that affect your use of the platform. Continued use after changes constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">8. Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                To the maximum extent permitted by law, RIVIO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data, information, or business records</li>
                <li>Service interruptions, downtime, or technical failures</li>
                <li>Delays in settlements or payment processing</li>
                <li>User disputes, complaints, or negative reviews</li>
              </ul>
              <p>
                Our total liability for any claims arising from your use of the application shall not exceed the amount you earned through the platform in the 12 months preceding the claim.
              </p>
              <p>
                <span className="font-semibold text-white">You acknowledge that RIVIO is a technology platform facilitating business management and payments, and we are not responsible for the quality of your facilities, user satisfaction, or business operations beyond the platform's functionality.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">9. Termination</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We reserve the right to suspend or terminate your account immediately, without prior notice, if you:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Violate these Terms and Conditions or our Privacy Policy</li>
                <li>Engage in fraudulent, illegal, or prohibited activities</li>
                <li>Compromise the security of the application or other users' accounts</li>
                <li>Provide false, inaccurate, or misleading information</li>
                <li>Fail to maintain quality standards or violate user trust</li>
                <li>Manipulate earnings, transactions, or payment systems</li>
              </ul>
              <p className="text-white font-semibold">Upon Termination:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Your right to use the application will cease immediately</li>
                <li>You will lose access to your account, dashboard, and all business listings</li>
                <li>All pending settlements will be processed subject to verification and applicable laws</li>
                <li>Your business listings will be removed from public view</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">10. Dispute Resolution</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                In case of disputes or disagreements:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Contact our support team first to resolve issues amicably</li>
                <li>Provide detailed information and documentation to support your claim</li>
                <li>Allow reasonable time (up to 30 days) for investigation and resolution</li>
                <li>Disputes regarding earnings or settlements must be reported within 30 days</li>
              </ul>
              <p>
                If disputes cannot be resolved through support, they will be subject to binding arbitration or the jurisdiction of courts as specified in our agreement, in accordance with applicable laws.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">11. Changes to Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We may update these Terms and Conditions from time to time. We will notify you of material changes by:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Posting the updated terms in the app with a new "Last updated" date</li>
                <li>Sending in-app notifications for significant changes</li>
                <li>Email notification for major policy changes</li>
              </ul>
              <p>
                Your continued use of the application after changes become effective constitutes acceptance of the updated Terms and Conditions. If you do not agree to the changes, you must discontinue use of the application.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">12. Contact Information</h2>
            </div>
            <p className="text-gray-300 mb-6">
              For questions, concerns, or legal notices regarding these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-3">
              <p className="text-amber-400 font-semibold">Legal Inquiries: <a href="mailto:support@rivioapp.com" className="hover:text-amber-300 underline">support@rivioapp.com</a></p>
              <p className="text-amber-400 font-semibold">General Support: <a href="mailto:support@rivioapp.com" className="hover:text-amber-300 underline">support@rivioapp.com</a></p>
              <p className="text-amber-400 font-semibold">Account Issues: <a href="mailto:support@rivioapp.com" className="hover:text-amber-300 underline">support@rivioapp.com</a></p>
            </div>
            <p className="text-gray-300 mt-6">
              We aim to respond to all inquiries within 5-7 business days. For urgent matters, please use the in-app support feature.
            </p>
          </div>
        </section>

        {/* Final Notice */}
        <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-3xl p-8 text-center backdrop-blur-sm">
          <div className="text-5xl mb-4">📄</div>
          <p className="text-gray-300 leading-relaxed text-lg">
            By using RIVIO Partner App, you acknowledge that you have read, understood, and agree to be bound by all the terms and conditions stated above. These terms are non-negotiable and legally enforceable.
          </p>
        </div>
      </div>
    </div>
  )
}
