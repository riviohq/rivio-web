'use client'

import { Shield, Lock, Eye, Mail, FileText } from 'lucide-react'

export default function UserPrivacyPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="text-sm text-gray-400 mt-1">Last updated: January 2025</p>
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
              We collect information that you provide directly to us and information that is automatically collected when you use our app:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Personal Information:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Name, email address, and phone number</li>
                  <li>Profile photo and cover image (optional)</li>
                  <li>Fitness goals and preferences</li>
                  <li>Payment and wallet information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-3">Usage Information:</h3>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Gym check-ins and attendance records</li>
                  <li>Workout history and fitness streaks</li>
                  <li>Reviews and ratings you submit</li>
                  <li>Favorite venues and saved locations</li>
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
                <span className="font-semibold text-white">Why we need it:</span> We use your location to help you discover nearby venues and fitness facilities. This allows us to show you gyms within your preferred distance and provide accurate directions.
              </p>
              <p>
                <span className="font-semibold text-white">How we use it:</span> Your location data is used solely for gym discovery and is never shared with third parties. You can choose to use a manual location selection instead of sharing your precise location.
              </p>
              <p>
                <span className="font-semibold text-white">Security:</span> All location data is encrypted and stored securely. We do not track your location continuously—only when you actively search for gyms or use location-based features.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">3. Camera Access</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Why we need it:</span> We request camera access to enable QR code scanning for gym check-ins. This allows you to quickly and securely check in to gyms using the partner app's QR code scanner.
              </p>
              <p>
                <span className="font-semibold text-white">How we use it:</span> Camera access is used exclusively for QR code scanning during check-in. We do not store, record, or transmit any images or video from your camera. The camera is only active when you explicitly open the QR scanner.
              </p>
              <p>
                <span className="font-semibold text-white">Security:</span> Camera permissions are requested only when needed. You can deny camera access and use manual check-in instead. All QR code data is processed securely and never stored on your device.
              </p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-white">4. How We Use Your Information</h2>
            </div>
            <p className="text-gray-300 mb-4">We use your information to:</p>
            <ul className="space-y-2 text-gray-300 ml-6 list-disc">
              <li>Provide and improve our services</li>
              <li>Process payments and manage your wallet</li>
              <li>Track your fitness progress and streaks</li>
              <li>Show you relevant gyms and recommendations</li>
              <li>Send you important updates and notifications</li>
              <li>Respond to your support requests</li>
              <li>Maintain leaderboards and achievements</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">5. Data Security</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <span className="font-semibold text-white">100% Safe and Secure:</span> We take your privacy and security seriously. All your data is protected with industry-standard encryption and security measures.
            </p>
            <p className="text-gray-300 mb-4">Our security measures include:</p>
            <ul className="space-y-2 text-gray-300 ml-6 list-disc">
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure payment processing with PCI DSS compliance</li>
              <li>Regular security audits and updates</li>
              <li>Secure authentication using OTP and passwordless login</li>
              <li>No storage of sensitive payment information on your device</li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">6. Information Sharing</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We only share information:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6 list-disc mb-6">
              <li>With gym partners for check-in and attendance purposes</li>
              <li>With payment processors to complete transactions</li>
              <li>When required by law or to protect our rights</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Your reviews and ratings are displayed publicly (with your username) to help other users make informed decisions.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">7. Your Rights</h2>
            </div>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="space-y-2 text-gray-300 ml-6 list-disc">
              <li>Access and update your personal information</li>
              <li>Delete your account and all associated data</li>
              <li>Opt out of non-essential notifications</li>
              <li>Request a copy of your data</li>
              <li>Revoke location or camera permissions at any time</li>
            </ul>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">8. Security and Legal Protection</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">Protecting Your Data:</span> We are committed to maintaining the highest standards of security for your personal information. Our platform employs advanced security measures, encryption technologies, and regular security audits to protect your data from unauthorized access, breaches, or misuse.
              </p>
              <p>
                <span className="font-semibold text-white">Prohibited Activities:</span> Any attempt to compromise, breach, or interfere with the security of the RIVIO application, its servers, databases, or infrastructure is strictly prohibited. This includes, but is not limited to:
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Attempting to gain unauthorized access to our systems or user accounts</li>
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

        {/* Section 9 */}
        <section className="mb-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">9. Contact Us</h2>
            </div>
            <p className="text-gray-300 mb-6">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-3">
              <p className="text-emerald-400 font-semibold">Email: <a href="mailto:privacy@rivio.com" className="hover:text-emerald-300 underline">privacy@rivio.com</a></p>
              <p className="text-emerald-400 font-semibold">Support: <a href="mailto:support@rivio.com" className="hover:text-emerald-300 underline">support@rivio.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
