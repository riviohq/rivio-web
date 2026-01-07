'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Mail, MessageCircle } from 'lucide-react'

export default function UserHelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: 'Streaks & Stats',
      icon: '🔥',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      items: [
        {
          question: "How do Streaks Work?",
          answer: "Your streak represents the total number of days you've visited the gym while maintaining our 12-day-per-month rule.\n\nStreak Rules:\n• Visit at least 12 different days each month to maintain your streak\n• If you visit less than 12 days in any month, your streak resets to 0\n• Current month counts toward your streak even if under 12 days (since it's incomplete)\n• Only unique days count - multiple visits on the same day count as 1\n\nYour Total Streak accumulates all qualifying months together.\n\nExample: 31 days (May) + 30 days (June) + 28 days (July) = 89 day streak!\n\nBest Streak tracks your all-time longest streak achievement."
        },
        {
          question: "What's the Difference Between Different Streaks?",
          answer: "We track multiple types of streaks to give you complete fitness insights:\n\nTotal Streak: Your current active streak showing total days visited while meeting the 12-day rule. This is your main streak that appears on your profile.\n\nBest Streak: Your personal record - the longest streak you've ever achieved. This never decreases and serves as your motivation to beat your own record.\n\nQuarterly Streak: Total days visited in the current quarter (3 months). This is used specifically for rankings and leaderboard competition.\n\nMonthly Streak: Days visited in the current month. Helps you track if you'll meet the 12-day requirement.\n\nAll streaks update automatically after each check-in!"
        },
        {
          question: "Why is the 12-Day Requirement Important?",
          answer: "The 12-day rule ensures consistent fitness habits and prevents gaming the system.\n\nPurpose:\n• Promotes regular fitness routine (minimum 3 times per week)\n• Ensures fair competition in rankings\n• Rewards genuine fitness commitment\n• Prevents sporadic, inconsistent venue visits\n• Builds sustainable long-term habits\n\nBenefits for You:\n• Creates sustainable fitness habits\n• Leads to better health outcomes\n• Real progress toward fitness goals\n• Fair and honest ranking system\n• Keeps you accountable\n\nThink of it this way: visiting the gym 3 times a week equals approximately 12-13 days per month. This is the minimum frequency recommended by fitness experts for maintaining an active lifestyle."
        },
        {
          question: "What Happens if I Miss the 12-Day Goal?",
          answer: "Missing the 12-day goal results in a streak reset, but you can always rebuild!\n\nWhat Happens:\n• Your current streak resets to 0\n• Your best streak is preserved (never lost!)\n• Quarterly streak continues counting\n• You can start fresh next month\n• No penalties or restrictions\n\nRecovery Process:\n• Start visiting regularly again\n• Meet the 12-day rule each month\n• Your streak will rebuild from current month onwards\n• Previous best streak remains as motivation\n\nRemember: It's about building sustainable habits, not achieving perfection. Life happens, and we understand that. What matters is getting back on track and continuing your fitness journey!"
        },
        {
          question: "What Stats and Metrics Are Tracked?",
          answer: "We track comprehensive fitness metrics to help you stay motivated and monitor progress:\n\nKey Metrics:\n• Total Visits: Your lifetime venue visits across all venues\n• Total Streak: Current active streak days (maintaining 12-day rule)\n• Best Streak: Your personal record - longest streak ever achieved\n• Quarterly Streak: Days visited this quarter (used for ranking)\n• Current Month Visits: Days visited in current month\n• This Quarter Visits: Total visits in current quarter\n• Total Spent: Money invested in your fitness journey\n• Unique Gyms: Number of different venues you've visited\n• Monthly Visits Count: Track progress toward 12-day goal\n\nWhere to View:\nAll stats are visible on your profile page and update automatically after each check-in. No manual refresh needed!\n\nWhy It Matters:\nThese metrics help you track progress, stay motivated, compete with others, and see your fitness journey evolution over time."
        }
      ]
    },
    {
      category: 'Check-in',
      icon: '✅',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      items: [
        {
          question: "How Does Attendance/Check-in Work?",
          answer: "We offer two convenient ways to mark your gym attendance:\n\n1. QR Code Scan (Recommended):\n• Scan the gym's QR code displayed at the facility\n• Location verification ensures you're within 100 meters of the gym\n• Most secure and accurate method\n• Instant confirmation\n\n2. Self-Marked Attendance:\n• Manually mark attendance from anywhere\n• Useful when QR code is unavailable\n• Trust-based system\n• Flexibility for various situations\n\nCharges:\n• Without Pass: ₹40 per visit (day pass)\n• With Active Pass: ₹0 (unlimited visits)\n\nImportant: You can only check-in once per day per gym unless you have an active pass which allows unlimited re-entries."
        },
        {
          question: "Is Marking Attendance Mandatory?",
          answer: "Attendance is NOT mandatory, but it's highly beneficial for your fitness journey!\n\nWhy Mark Attendance:\n• Track your fitness progress over time\n• Build and maintain your streak\n• Compete on leaderboards with other users\n• Receive motivational milestones\n• Monitor your consistency\n• See your improvement statistics\n• Stay accountable to your goals\n\nWhat You Miss Without Attendance:\n• No streak building capability\n• No leaderboard ranking\n• No workout history tracking\n• No progress statistics\n• No achievement milestones\n\nYou're completely free to use the app as you wish, but marking attendance helps you stay motivated, accountable, and committed to your fitness goals!"
        },
        {
          question: "Can I Check-in Multiple Times in a Day?",
          answer: "This depends on whether you have an active pass:\n\nWithout Pass:\n• One check-in per day per gym\n• Each check-in charges ₹40 (day pass)\n• Cannot re-enter same gym on same day\n• Attempting duplicate check-in will show error\n\nWith Active Pass:\n• Unlimited check-ins per day\n• No additional charges\n• Re-entries are free\n• Perfect for multiple workout sessions\n\nImportant Note:\nOnly your FIRST check-in of the day counts toward your streak statistics. Additional re-entries update your check-in time but don't add to your daily count (since streaks count unique days, not total check-ins)."
        }
      ]
    },
    {
      category: 'Passes & Wallet',
      icon: '💳',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      items: [
        {
          question: "What are Gym Passes and How Do They Work?",
          answer: "Passes are subscription plans that give you unlimited access to a specific gym of your choice.\n\nPass Benefits:\n• Unlimited daily check-ins at your chosen gym\n• No per-visit charges (₹0 per visit)\n• Multiple re-entries allowed on the same day\n• Cost-effective for regular gym-goers\n• Freedom to workout multiple times daily\n\nPass Types Available:\n• Monthly Pass: 30 days of unlimited access\n• Quarterly Pass: 90 days of unlimited access\n• Annual Pass: 365 days of unlimited access\n\nPricing:\nPasses vary by gym and duration. Check the gym details page for specific pricing.\n\nImportant:\n• Passes are venue-specific (Pass for Gym A won't work at Gym B)\n• Passes auto-expire after their duration\n• You can purchase passes from the gym details screen\n• Active passes show in your profile"
        },
        {
          question: "How Do Payments and Wallet Work?",
          answer: "All payments in RIVIO are processed through your secure in-app wallet.\n\nWallet System:\n• Add money to wallet using multiple payment methods (UPI, Cards, Net Banking)\n• Instant balance updates\n• Secure encrypted transactions\n• Complete transaction history available\n• View balance anytime in your profile\n\nPayment Charges:\n• Day Pass: ₹40 per visit (without subscription)\n• Gym Passes: Varies by duration and gym\n• All charges auto-deducted from wallet on check-in\n\nTransaction History:\n• View all past transactions\n• See date, amount, and type of transaction\n• Download statements if needed\n\nImportant: Ensure sufficient wallet balance before check-in to avoid payment failures. Low balance will show a warning."
        },
        {
          question: "Can I Visit Multiple Different Gyms?",
          answer: "Yes! RIVIO gives you complete flexibility to visit any venue in our network.\n\nMulti-Gym Benefits:\n• Visit different venues based on your location\n• Try various fitness facilities and equipment\n• Find your preferred workout environment\n• Travel-friendly fitness routine\n• No restrictions on venue selection\n• Explore gyms near work, home, or travel destinations\n\nStreak Benefits:\nYour streaks work across ALL gyms in our network. Any venue visit counts toward your overall streak, regardless of which gym you choose!\n\nImportant Notes:\n• Passes are venue-specific: A pass purchased for Gym A will only work at Gym A, not at other gyms\n• Without a pass: Pay ₹40 per visit at any venue\n• You can have multiple active passes for different venues simultaneously"
        },
        {
          question: "What Payment Methods Are Supported?",
          answer: "We support multiple convenient and secure payment methods for wallet recharge:\n\nSupported Methods:\n• UPI (Google Pay, PhonePe, Paytm, BHIM, etc.)\n• Credit Cards (Visa, Mastercard, American Express)\n• Debit Cards (All major banks)\n• Net Banking (All major banks)\n• Digital Wallets (Paytm, PhonePe)\n\nPayment Process:\n1. Go to Wallet section\n2. Choose 'Add Money'\n3. Enter amount\n4. Select payment method\n5. Complete payment securely\n6. Instant balance update\n\nSecurity:\n• All transactions are encrypted\n• PCI-DSS compliant payment gateway\n• No card details stored on our servers\n• Secure transaction monitoring\n• Instant payment confirmation\n\nMinimum Recharge: ₹100\nMaximum Recharge: ₹50,000 per transaction"
        }
      ]
    },
    {
      category: 'Rankings',
      icon: '🏆',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      items: [
        {
          question: "How Does the Ranking System Work?",
          answer: "Rankings are calculated based on your quarterly performance and reset at the start of each quarter.\n\nRanking System:\n• Based on 'Quarterly Streak' - total unique days visited in current quarter\n• Higher quarterly streak = better rank position\n• Quarters: Q1 (Jan-Mar), Q2 (Apr-Jun), Q3 (Jul-Sep), Q4 (Oct-Dec)\n• Rankings reset every quarter for fresh competition\n• Real-time leaderboard updates\n\nRank Display:\n• #1 to #10: Shows exact rank number\n• #11+: Shows as Top 100, Top 500, Top 1K, Top 10K, etc.\n• Everyone starts equal each quarter\n\nExample Calculation:\nIf you visit 12 days in October, 12 days in November, and 12 days in December, your quarterly streak is 36 days, which determines your rank position.\n\nPro Tip: Consistency throughout the quarter is key. Starting early gives you an advantage!"
        },
        {
          question: "How Can I Improve My Ranking?",
          answer: "Climb the leaderboard by maximizing your quarterly streak! Here are proven strategies:\n\nEffective Strategies:\n• Visit gym consistently (aim for 15-20 days per month)\n• Never miss the 12-day minimum requirement\n• Check-in every single time you visit\n• Start early in the quarter for maximum days\n• Maintain consistency throughout all 3 months\n• Don't skip weeks - stay regular\n\nPro Tips:\n• Quarterly rankings reset every 3 months - everyone gets a fresh start!\n• Focus on total days visited, not consecutive days\n• Even 1 extra day per month makes a significant difference\n• Top rankers typically visit 20-25 days per month\n• Set monthly goals to stay on track\n• Check leaderboard regularly for motivation\n\nGoal Setting:\n• Minimum: 12 days/month = 36 days/quarter\n• Good: 15 days/month = 45 days/quarter\n• Excellent: 20 days/month = 60 days/quarter\n• Elite: 25 days/month = 75 days/quarter\n\nRemember: It's a marathon, not a sprint. Consistency beats intensity!"
        },
        {
          question: "When Do Rankings Reset?",
          answer: "Rankings reset at the start of each quarter to ensure fair competition and give everyone a fresh start.\n\nQuarter Schedule:\n• Q1: January 1 - March 31\n• Q2: April 1 - June 30\n• Q3: July 1 - September 30\n• Q4: October 1 - December 31\n\nWhat Happens at Reset:\n• Everyone's quarterly streak resets to 0\n• Leaderboard positions reset\n• Fresh competition begins\n• Equal opportunity for all users\n\nWhat Stays:\n• Your total streak (if maintaining 12-day rule)\n• Your best streak record\n• Total visits history\n• All other statistics\n\nWhy Quarterly?\nQuarterly resets keep competition exciting, give newcomers a chance to compete, and motivate consistent long-term fitness habits rather than short bursts."
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
      <div className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Help & Support</h1>
                <p className="text-sm text-gray-400">Find answers to common questions</p>
              </div>
            </div>
            <a
              href="mailto:support@rivio.com"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg"
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl mb-6 border border-emerald-500/30">
            <MessageCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How can we help you?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about RIVIO. Browse our frequently asked questions or contact our support team.
          </p>
        </div>

        {/* Contact Support Card - Mobile */}
        <div className="md:hidden mb-8">
          <a
            href="mailto:support@rivio.com"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg"
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
              <div className={`flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-10 border ${category.borderColor} backdrop-blur-sm`}>
                <div className={`text-4xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              {/* FAQ Cards */}
              <div className="grid gap-4">
                {category.items.map((faq, faqIndex) => {
                  const index = catIndex * 100 + faqIndex
                  const isOpen = openIndex === index
                  
                  return (
                    <div
                      key={faqIndex}
                      className={`bg-gray-900/80 backdrop-blur-sm rounded-xl border ${category.borderColor} overflow-hidden transition-all duration-300 hover:border-opacity-50 ${
                        isOpen ? 'border-opacity-70 shadow-xl' : 'shadow-lg'
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="font-semibold text-white text-lg flex-1 pr-4">
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-0 border-t border-gray-800">
                          <div className="pt-6 text-gray-300 leading-relaxed whitespace-pre-line">
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
        <div className="mt-16 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-2xl p-8 md:p-12 border border-emerald-500/20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a
              href="mailto:support@rivio.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg"
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
