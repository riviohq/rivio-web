'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Mail, MessageCircle, Building2, Rocket, DollarSign, Ticket, BarChart3, Settings } from 'lucide-react'

export default function PartnerHelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: 'Getting Started',
      icon: Rocket,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/20',
      items: [
        {
          question: "How do I register my business on RIVIO Partner?",
          answer: "Registering your business is simple:\n\n1. Download the RIVIO Partner app\n2. Sign up with your phone number\n3. Verify with OTP\n4. Complete your business profile:\n   • Business name and description\n   • Category (gym, yoga, pool, sports, etc.)\n   • Location details and address\n   • Operating hours\n   • Pricing for day passes and subscription passes\n   • Amenities (free and paid)\n\nOnce your profile is complete, you'll receive your unique QR code for each location. Display it at your reception for users to scan and check in!"
        },
        {
          question: "How do I get my QR code?",
          answer: "Your QR code is automatically generated when you add a business location:\n\n1. Go to Locations in the app\n2. Add a new location or select an existing one\n3. Each location gets its own unique QR code\n4. Download or print the QR code\n5. Display it prominently at your reception or entrance\n\nImportant:\n• Each location has a unique QR code\n• QR codes are location-specific\n• Users scan the QR code to check in\n• Keep your QR code visible and accessible to users"
        },
        {
          question: "Can I manage multiple locations?",
          answer: "Yes! RIVIO Partner supports unlimited locations:\n\nBenefits:\n• Manage all locations from one dashboard\n• Each location has its own QR code\n• Track earnings and visits per location\n• Individual analytics for each location\n• Create pass groups across locations\n\nHow to Add:\n1. Go to Locations in the app\n2. Tap 'Add New Location'\n3. Enter location details (address, coordinates, landmarks)\n4. Set location-specific pricing and hours\n5. Get your unique QR code for that location\n\nYou can manage all locations, view combined or individual analytics, and settle earnings from all locations together."
        }
      ]
    },
    {
      category: 'Earnings & Payments',
      icon: DollarSign,
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/20',
      items: [
        {
          question: "How do I earn money on RIVIO?",
          answer: "You earn from two main sources:\n\n1. Per-Visit Payments (Day Passes):\n   • Users pay per visit based on your set day pass pricing\n   • Earnings credited instantly to your wallet\n   • No waiting period\n   • Real-time tracking\n\n2. Pass Purchases:\n   • Users buy weekly, monthly, quarterly, semiannual, or yearly passes\n   • Full payment received upfront\n   • Passes give users unlimited access to your facility\n   • Auto-attendance marked daily for pass holders\n\nAll earnings are tracked in real-time in your wallet. You can view detailed earnings reports, transaction history, and request settlements anytime."
        },
        {
          question: "How do I set up payment details for settlements?",
          answer: "Setting up payment details is a one-time process:\n\nRequired Information:\n• Bank account holder name\n• Account number\n• IFSC code\n• Bank name\n• PAN card number (mandatory for tax compliance)\n• GSTIN (if applicable)\n\nSteps:\n1. Go to Settings in the app\n2. Navigate to Payment Details\n3. Enter all required information\n4. Verify and save\n\nImportant:\n• Ensure all details match your official business records\n• Keep payment information updated\n• Notify us immediately of any changes\n• Settlements are processed within 2-3 business days after approval"
        },
        {
          question: "How do I request a settlement?",
          answer: "Requesting a settlement is easy:\n\nProcess:\n1. Go to Wallet section in the app\n2. Check your current wallet balance\n3. Tap 'Request Settlement'\n4. Enter the amount you want to settle (no minimum required)\n5. Confirm your bank account details\n6. Submit the request\n\nSettlement Timeline:\n• Request submitted for approval\n• Verification process (usually same day)\n• Bank transfer initiated\n• Funds credited to your account in 2-3 business days\n\nImportant:\n• Ensure bank details are correct before requesting\n• You can request settlements for any amount\n• Multiple settlement requests can be made\n• Track settlement status in the app"
        },
        {
          question: "What is the commission structure?",
          answer: "RIVIO charges a commission on transactions to maintain and improve the platform:\n\nCommission Details:\n• Commission rate is agreed upon during onboarding\n• Applied to both per-visit payments and pass purchases\n• Transparent pricing - you see net earnings after commission\n• Commission covers:\n  - Platform maintenance and updates\n  - Payment processing\n  - Customer support\n  - Marketing and user acquisition\n  - Technology infrastructure\n\nEarnings Display:\n• Your wallet shows net earnings (after commission)\n• Detailed breakdown available in statements\n• Monthly statements show all transactions and commissions\n\nFor specific commission rates, please contact our partnership team during onboarding or reach out to help-desk@rivioapp.com"
        }
      ]
    },
    {
      category: 'Pass Management',
      icon: Ticket,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/20',
      items: [
        {
          question: "How do I create and manage passes?",
          answer: "Creating passes is simple:\n\nPass Types:\n• Weekly Pass (7 days)\n• Monthly Pass (30 days)\n• Quarterly Pass (90 days)\n• Semiannual Pass (180 days)\n• Yearly Pass (365 days)\n\nHow to Create:\n1. Go to Passes section in the app\n2. Tap 'Create New Pass'\n3. Select pass duration\n4. Set pricing for each duration\n5. Configure auto-attendance settings\n6. Save and publish\n\nPass Features:\n• Users get unlimited check-ins with active pass\n• Auto-attendance marked daily\n• Free amenities included\n• Paid amenities can be added during visits\n• Pass validity clearly displayed\n\nYou can edit pricing, pause passes, or create special offers anytime."
        },
        {
          question: "What are Pass Groups?",
          answer: "Pass Groups allow users to use passes across multiple locations:\n\nBenefits:\n• Group multiple locations together\n• Users can visit any location in the group with one pass\n• Great for businesses with multiple branches\n• Increases pass value for users\n• Attracts more customers\n\nHow to Create:\n1. Go to Pass Groups section\n2. Tap 'Create New Group'\n3. Select locations to include\n4. Name your group\n5. Set group pricing (can differ from individual location pricing)\n6. Save and activate\n\nImportant:\n• All locations in a group should meet similar quality standards\n• Pass groups are optional\n• You can create multiple groups\n• Users see group passes as a separate option"
        },
        {
          question: "How does auto-attendance work with passes?",
          answer: "Auto-attendance is a feature that automatically marks attendance for pass holders:\n\nHow It Works:\n• When a user has an active pass, attendance is marked automatically\n• No need for daily QR code scans (though users can still scan)\n• Attendance is marked once per day\n• Works for the entire pass validity period\n\nBenefits:\n• Convenient for regular users\n• Reduces friction in the check-in process\n• Users can still manually check in if needed\n• Attendance records maintained automatically\n\nSettings:\n• You can enable/disable auto-attendance per pass type\n• Configure in pass settings\n• Auto-attendance applies to all active pass holders\n• Users see their attendance status in the app"
        }
      ]
    },
    {
      category: 'Business Management',
      icon: BarChart3,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/20',
      items: [
        {
          question: "How do I update my business information?",
          answer: "Updating business information is easy:\n\nWhat You Can Update:\n• Business name and description\n• Operating hours and timings\n• Pricing for day passes and subscription passes\n• Amenities (add, remove, or modify)\n• Business photos and images\n• Contact details (reception numbers, email)\n• Location details and addresses\n\nHow to Update:\n1. Go to Business Profile section\n2. Select the information you want to update\n3. Make your changes\n4. Save changes\n\nImportant:\n• Changes reflect immediately in user app\n• Keep information accurate and up-to-date\n• Update pricing changes promptly\n• Notify users of major changes if needed\n• Regular updates improve user trust and engagement"
        },
        {
          question: "How do I manage reviews and ratings?",
          answer: "Managing reviews helps build trust and attract more customers:\n\nReview Features:\n• Users can rate and review your facility\n• Reviews are displayed publicly\n• You can respond to reviews\n• Track your average rating\n• See review trends over time\n\nHow to Respond:\n1. Go to Reviews section in the app\n2. View all reviews and ratings\n3. Tap on a review to respond\n4. Write a professional response\n5. Submit your response\n\nBest Practices:\n• Respond to all reviews (positive and negative)\n• Be professional and courteous\n• Address concerns constructively\n• Thank users for positive feedback\n• Use negative reviews as improvement opportunities\n• Quick responses show you care about customer experience"
        },
        {
          question: "What analytics and insights are available?",
          answer: "RIVIO Partner provides comprehensive analytics:\n\nAvailable Metrics:\n• Total visits per day, week, month\n• Earnings breakdown (per-visit vs passes)\n• Active passes count\n• User check-in patterns\n• Peak hours and days\n• Revenue trends\n• Location-wise performance (for multiple locations)\n• Review and rating trends\n\nHow to Access:\n1. Go to Dashboard in the app\n2. View real-time metrics\n3. Switch between different time periods\n4. Filter by location (if multiple)\n5. Export reports if needed\n\nBenefits:\n• Make data-driven decisions\n• Optimize pricing based on demand\n• Identify peak hours\n• Track business growth\n• Understand customer behavior\n• Plan marketing strategies"
        }
      ]
    },
    {
      category: 'Technical Support',
      icon: Settings,
      color: 'from-gray-500/20 to-slate-500/20',
      borderColor: 'border-gray-500/20',
      items: [
        {
          question: "What should I do if my QR code is not working?",
          answer: "If your QR code is not working, try these steps:\n\nTroubleshooting:\n1. Ensure QR code is clearly visible and not damaged\n2. Check if location is correctly set up in the app\n3. Verify QR code is for the correct location\n4. Ensure good lighting when users scan\n5. Print QR code in high quality (minimum 2x2 inches)\n6. Keep QR code clean and unobstructed\n\nIf Issues Persist:\n• Generate a new QR code from the app\n• Download and print a fresh copy\n• Contact support if problem continues\n• Check app for any location updates needed\n\nPrevention:\n• Print QR code on durable material\n• Keep backup QR codes\n• Display multiple QR codes if needed\n• Regularly check QR code visibility"
        },
        {
          question: "How do I handle payment or settlement issues?",
          answer: "If you encounter payment or settlement issues:\n\nCommon Issues:\n• Delayed settlements\n• Incorrect earnings\n• Bank transfer failures\n• Missing transactions\n\nSteps to Resolve:\n1. Check your transaction history in the app\n2. Verify bank account details are correct\n3. Check settlement status\n4. Review earnings breakdown\n5. Contact support with:\n   - Transaction ID\n   - Date and amount\n   - Screenshots if available\n   - Bank account details (last 4 digits)\n\nSupport Response:\n• We investigate within 24-48 hours\n• Provide detailed explanation\n• Resolve issues promptly\n• Process corrections if needed\n\nPrevention:\n• Keep bank details updated\n• Verify information before settlement requests\n• Monitor transactions regularly\n• Report discrepancies within 30 days"
        },
        {
          question: "What if I need to temporarily close my business?",
          answer: "If you need to temporarily close your business:\n\nOptions:\n1. Update Operating Hours:\n   • Set hours to 'Closed' in the app\n   • Users won't see your facility during closed hours\n   • Easy to reopen when ready\n\n2. Pause Business:\n   • Temporarily hide your listing\n   • Users won't be able to check in\n   • All data and settings preserved\n   • Reactivate anytime\n\n3. Close Specific Location:\n   • If multiple locations, close individual ones\n   • Other locations remain active\n   • Location data preserved\n\nHow to Do It:\n1. Go to Business Settings\n2. Select 'Operating Hours' or 'Business Status'\n3. Update status or hours\n4. Save changes\n\nImportant:\n• Notify active pass holders if closing for extended period\n• Consider refund policies for pass holders\n• Update users through app notifications if possible\n• Contact support for assistance with closures"
        }
      ]
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black/60 backdrop-blur-sm border-b border-gray-800/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/20">
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-100">Partner Help & Support</h1>
                <p className="text-sm text-gray-500">Find answers for business owners</p>
              </div>
            </div>
            <a
              href="mailto:help-desk@rivioapp.com"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-amber-500/20 rounded-lg text-amber-300 font-medium hover:bg-amber-500/30 transition-all border border-amber-500/20"
            >
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/10 rounded-2xl mb-6 border border-amber-500/20">
            <MessageCircle className="w-10 h-10 text-amber-400/70" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            How can we help your business?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about managing your business on RIVIO Partner. Browse our frequently asked questions or contact our support team.
          </p>
        </div>

        {/* Contact Support Card - Mobile */}
        <div className="md:hidden mb-8">
          <a
            href="mailto:help-desk@rivioapp.com"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-amber-500/20 rounded-xl text-amber-300 font-medium hover:bg-amber-500/30 transition-all border border-amber-500/20"
          >
            <Mail className="w-5 h-5" />
            Contact Support
          </a>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              {/* Category Header */}
              <div className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r ${category.color} border ${category.borderColor} backdrop-blur-sm`}>
                <div className="w-10 h-10 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-200">{category.category}</h3>
              </div>

              {/* FAQ Cards */}
              <div className="grid gap-4">
                {category.items.map((faq, faqIndex) => {
                  const index = catIndex * 100 + faqIndex
                  const isOpen = openIndex === index
                  
                  return (
                    <div
                      key={faqIndex}
                      className={`bg-gray-900/40 backdrop-blur-sm rounded-xl border ${category.borderColor} overflow-hidden transition-all duration-300 hover:border-opacity-40 ${
                        isOpen ? 'border-opacity-50' : ''
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-800/30 transition-colors"
                      >
                        <span className="font-semibold text-gray-200 text-lg flex-1 pr-4">
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-0 border-t border-gray-800/50">
                          <div className="pt-6 text-gray-400 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-amber-500/5 rounded-2xl p-8 md:p-12 border border-amber-500/10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
              <Mail className="w-8 h-8 text-amber-400/70" />
            </div>
            <h3 className="text-2xl font-bold text-gray-100 mb-3">Still have questions?</h3>
            <p className="text-gray-500 mb-6">
              Can't find the answer you're looking for? Our support team is here to help your business succeed.
            </p>
            <a
              href="mailto:help-desk@rivioapp.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500/20 rounded-xl text-amber-300 font-medium hover:bg-amber-500/30 transition-all border border-amber-500/20"
            >
              <Mail className="w-5 h-5" />
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
