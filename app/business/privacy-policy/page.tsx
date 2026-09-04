'use client'

import { Shield, Lock, Eye, Mail, FileText, Building2 } from 'lucide-react'
import LegalEntityNotice from '@/components/LegalEntityNotice'

export default function PartnerPrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="text-sm text-gray-400 mt-1">Last updated: January 2025 (Comprehensive Update)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl mb-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            At RIVIO, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains what information we collect, why we collect it, how we use it, and how we keep it safe.
          </p>
        </div>

        <section className="mb-12">
          <LegalEntityNotice variant="section" accent="amber" />
        </section>

        {/* Section 1 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">1. Information We Collect</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We collect information that you provide directly to us and information that is automatically collected when you use our partner app:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Account & Profile Information:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Full name, phone number (mandatory), and email address (optional)</li>
                  <li>Profile picture (if uploaded)</li>
                  <li>Theme preferences (light, dark, or system default)</li>
                  <li>Notification preferences and settings</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Business Information:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Business name, description, and category (gym, yoga, pool, sports, etc.)</li>
                  <li>Multiple business locations with addresses, coordinates, and landmarks</li>
                  <li>Business contact details (reception numbers, email)</li>
                  <li>Operating hours, timings, and availability</li>
                  <li>Pricing for day passes, weekly, monthly, quarterly, semiannual, and yearly passes</li>
                  <li>Custom pass configurations and pricing</li>
                  <li>Amenities offered (free and paid amenities)</li>
                  <li>Business photos and images</li>
                  <li>Pass groups configuration (grouping multiple locations together)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Financial & Payment Information:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Bank account details (account holder name, account number, IFSC code, bank name)</li>
                  <li>PAN card number (required for tax purposes)</li>
                  <li>GSTIN (if applicable for tax purposes)</li>
                  <li>Wallet balance and transaction history</li>
                  <li>Earnings from per-visit payments and pass purchases</li>
                  <li>Settlement requests and bank transfer records</li>
                  <li>Monthly statements and financial reports</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Usage & Operational Information:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>QR codes generated for each business location</li>
                  <li>User check-ins and attendance records</li>
                  <li>Active and expired passes purchased by users</li>
                  <li>Real-time earnings and visit analytics</li>
                  <li>Reviews and ratings received from users</li>
                  <li>Business management activities and changes</li>
                  <li>App usage patterns and feature interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">2. Location Information</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Why we need it:</span> We use your business location to help users discover your facility. This allows us to show your business to nearby users and provide accurate directions.
              </p>
              <p>
                <span className="font-semibold text-white">How we use it:</span> Your location data is used solely for business discovery and is never shared with unauthorized third parties. You can update your business location at any time.
              </p>
              <p>
                <span className="font-semibold text-white">Security:</span> All location data is encrypted and stored securely. We do not track your location continuously. Only the registered business location is stored.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">3. How We Use Your Information</h2>
            </div>
            <p className="text-gray-300 mb-4">We use your information to:</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Service Delivery:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Provide and improve our partner management platform</li>
                  <li>Generate unique QR codes for each business location</li>
                  <li>Enable user check-ins and validate passes</li>
                  <li>Manage pass groups and cross-location access</li>
                  <li>Display your business listings to potential users</li>
                  <li>Process and track user visits and attendance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Financial Operations:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Process per-visit payments and pass purchases</li>
                  <li>Manage your wallet balance and transactions</li>
                  <li>Track real-time earnings from all revenue sources</li>
                  <li>Generate monthly statements and financial reports</li>
                  <li>Process settlements to your bank account</li>
                  <li>Comply with tax regulations using PAN and GSTIN</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Business Management:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Enable management of multiple business locations</li>
                  <li>Provide real-time analytics and insights</li>
                  <li>Track performance across all locations</li>
                  <li>Manage reviews and ratings</li>
                  <li>Support business operations and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">4. Data Security</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="font-semibold text-white">100% Safe and Secure:</span> We take your privacy and security seriously. All your data is protected with industry-standard encryption and security measures.
            </p>
            <p className="text-gray-300 mb-4">Our security measures include:</p>
            <ul className="space-y-2 text-gray-300 ml-6 list-disc">
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure payment processing with PCI DSS compliance</li>
              <li>Regular security audits and updates</li>
              <li>Secure authentication using OTP</li>
              <li>No storage of sensitive payment information on your device</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">5. Information Sharing</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We only share information:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Public Business Information:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Business name, location, category, and description</li>
                  <li>Pricing for day passes and subscription passes</li>
                  <li>Amenities, operating hours, and contact numbers</li>
                  <li>Business photos and images</li>
                  <li>Reviews and ratings (displayed publicly)</li>
                  <li>QR codes for check-in purposes</li>
                </ul>
              </div>
              <p className="text-gray-300 leading-relaxed">
                This information is displayed publicly to help users discover and make informed decisions about visiting your facility.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Private Information:</span> Your personal contact details (email, phone), bank account information, PAN, GSTIN, wallet balance, earnings, and financial statements are never shared publicly and are only used for service delivery and legal compliance.
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
              <h2 className="text-2xl md:text-3xl font-bold text-white">6. Your Rights</h2>
            </div>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Data Access & Control:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Access and review all your business and account information</li>
                  <li>Update your profile, business details, and settings anytime</li>
                  <li>Modify pricing, amenities, and business information</li>
                  <li>Add, edit, or remove business locations</li>
                  <li>Create, modify, or remove pass groups</li>
                  <li>Update payment details and bank account information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Financial Rights:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Request settlements of your wallet balance anytime</li>
                  <li>Access detailed transaction history and statements</li>
                  <li>Review all earnings and payment records</li>
                  <li>Dispute transactions or request refunds (subject to terms)</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300 mt-6 leading-relaxed">
              To exercise any of these rights, please contact us at <span className="font-semibold text-amber-400">help-desk@rivioapp.com</span> or through the app's support section.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">7. Security and Legal Protection</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Protecting Your Data:</span> We are committed to maintaining the highest standards of security for your personal information. Our platform employs advanced security measures, encryption technologies, and regular security audits to protect your data from unauthorized access, breaches, or misuse.
              </p>
              <p>
                <span className="font-semibold text-white">Prohibited Activities:</span> Any attempt to compromise, breach, or interfere with the security of the RIVIO application, its servers, databases, or infrastructure is strictly prohibited. This includes, but is not limited to:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Attempting to gain unauthorized access to our systems or partner accounts</li>
                <li>Reverse engineering, decompiling, or attempting to extract source code</li>
                <li>Introducing malicious software, viruses, or harmful code</li>
                <li>Interfering with or disrupting the app's security measures or functionality</li>
                <li>Attempting to manipulate payment systems, wallet balances, or transaction records</li>
                <li>Engaging in any form of hacking, data mining, or unauthorized data extraction</li>
              </ul>
              <p>
                <span className="font-semibold text-white">Legal Actions:</span> We take security violations seriously. Any unauthorized access attempts, security breaches, or interference with our systems will be investigated thoroughly. We reserve the right to take appropriate legal action, including but not limited to:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Immediate account suspension or termination</li>
                <li>Reporting incidents to relevant law enforcement authorities</li>
                <li>Pursuing civil and criminal legal remedies</li>
                <li>Seeking damages and recovery of costs associated with security incidents</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">8. Data Retention</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 list-disc">
              <li><span className="font-semibold text-white">Active Account:</span> Data is retained while your account is active and for 30 days after account closure</li>
              <li><span className="font-semibold text-white">Financial Records:</span> Transaction history, earnings, and settlement records are retained for 7 years as required by tax and financial regulations</li>
              <li><span className="font-semibold text-white">Business Listings:</span> Public business information is retained until you delete the listing or close your account</li>
              <li><span className="font-semibold text-white">Legal Requirements:</span> Some data may be retained longer if required by law or for legal proceedings</li>
            </ul>
            <p className="text-gray-300 mt-6 leading-relaxed">
              After the retention period, we securely delete or anonymize your data in accordance with our data retention policies.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">9. Changes to This Privacy Policy</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 list-disc mb-6">
              <li>Posting the updated policy in the app with a new "Last updated" date</li>
              <li>Sending you a notification through the app</li>
              <li>Email notification for significant changes</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Your continued use of the app after changes become effective constitutes acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">10. Contact Us</h2>
            </div>
            <p className="text-gray-300 mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-3">
              <p className="text-amber-400 font-semibold">Privacy Inquiries: <a href="mailto:help-desk@rivioapp.com" className="hover:text-amber-300 underline">help-desk@rivioapp.com</a></p>
              <p className="text-amber-400 font-semibold">General Support: <a href="mailto:support@rivioapp.com" className="hover:text-amber-300 underline">support@rivioapp.com</a></p>
              <p className="text-amber-400 font-semibold">Data Requests: <a href="mailto:help-desk@rivioapp.com" className="hover:text-amber-300 underline">help-desk@rivioapp.com</a></p>
            </div>
            <p className="text-gray-300 mt-6">
              We aim to respond to all privacy-related inquiries within 30 days. For urgent matters, please use the in-app support feature.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
