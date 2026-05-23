'use client'

import { Shield, FileText, AlertTriangle, Mail, Scale } from 'lucide-react'
import LegalEntityNotice from '@/components/LegalEntityNotice'

export default function UserTermsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Terms and Conditions</h1>
              <p className="text-sm text-gray-400 mt-1">Last updated: January 2025</p>
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
            By using RIVIO, you agree to these Terms and Conditions. These terms are legally binding and cannot be neglected. Please read them carefully.
          </p>
        </div>

        <section className="mb-12">
          <LegalEntityNotice variant="section" accent="emerald" />
        </section>

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
                By accessing, downloading, installing, or using the RIVIO mobile application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must immediately discontinue use of the application and delete it from your device.
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
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">3. Use of Service</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You agree to use RIVIO only for lawful purposes and in accordance with these Terms. The application is intended for personal, non-commercial use to access fitness facilities and services.
              </p>
              <p className="text-white font-semibold">Prohibited uses include:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Using the service for any illegal or unauthorized purpose</li>
                <li>Violating any applicable local, state, national, or international law</li>
                <li>Transmitting any content that is harmful, offensive, or violates others' rights</li>
                <li>Impersonating any person or entity or misrepresenting your identity</li>
                <li>Collecting or harvesting information about other users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">4. Account Security and Responsibility</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You are solely responsible for maintaining the confidentiality and security of your account credentials, including your phone number, email address, and OTP codes. You agree to:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Keep your login credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized access or suspicious activity</li>
                <li>Use strong, unique passwords and enable available security features</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p>
                <span className="font-semibold text-white">RIVIO is not liable for any loss or damage resulting from unauthorized access to your account due to your failure to maintain security.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">5. Payments and Transactions</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                All payments made through RIVIO are processed securely. You agree to:
              </p>
              <ul className="space-y-2 ml-6 list-disc mb-4">
                <li>Provide accurate payment information</li>
                <li>Maintain sufficient wallet balance for transactions</li>
                <li>Accept that all transactions are final unless otherwise stated</li>
                <li>Not attempt to reverse, chargeback, or dispute legitimate transactions</li>
              </ul>
              <p>
                <span className="font-semibold text-white">Fraudulent payment activities will result in immediate account termination and legal action.</span>
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
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">7. Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                To the maximum extent permitted by law, RIVIO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with your use of the application.
              </p>
              <p>
                Our total liability for any claims arising from your use of the application shall not exceed the amount you paid to us in the 12 months preceding the claim.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">8. Indemnification</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless RIVIO, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Your use or misuse of the application</li>
                <li>Your violation of these Terms and Conditions</li>
                <li>Your violation of any law or rights of a third party</li>
                <li>Any security breach or unauthorized access to your account</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">9. Termination</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We reserve the right to suspend or terminate your account immediately, without prior notice, if you violate these Terms and Conditions, engage in fraudulent activities, or compromise the security of the application.
              </p>
              <p>
                Upon termination, your right to use the application will cease immediately, and you may lose access to your account, data, and any unused wallet balance (subject to applicable laws).
              </p>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">10. Changes to Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Material changes will be communicated through the application or via email. Your continued use of the application after such modifications constitutes your acceptance of the updated terms.
              </p>
              <p>
                <span className="font-semibold text-white">If you do not agree to the modified terms, you must stop using the application immediately.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">11. Governing Law and Dispute Resolution</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or your use of the application shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
              <p>
                In the event of any legal proceedings, you agree to bear all associated costs, including but not limited to legal fees, court costs, and damages.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">12. Contact Information</h2>
            </div>
            <p className="text-gray-300 mb-6">
              For questions, concerns, or legal notices regarding these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-3">
              <p className="text-emerald-400 font-semibold">Legal: <a href="mailto:support@rivioapp.com" className="hover:text-emerald-300 underline">support@rivioapp.com</a></p>
              <p className="text-emerald-400 font-semibold">Support: <a href="mailto:support@rivioapp.com" className="hover:text-emerald-300 underline">support@rivioapp.com</a></p>
            </div>
          </div>
        </section>

        {/* Final Notice */}
        <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-3xl p-8 text-center backdrop-blur-sm">
          <div className="text-5xl mb-4">📄</div>
          <p className="text-gray-300 leading-relaxed text-lg">
            By using RIVIO, you acknowledge that you have read, understood, and agree to be bound by all the terms and conditions stated above. These terms are non-negotiable and legally enforceable.
          </p>
        </div>
      </div>
    </div>
  )
}
