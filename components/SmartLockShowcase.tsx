'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock, DoorOpen, Wifi } from 'lucide-react'

const shots = [
  {
    src: '/assets/smart-lock/partner-setup.png',
    alt: 'Rivio Partner Door Lock Setup',
    label: 'Partner setup',
  },
  {
    src: '/assets/smart-lock/partner-manage.png',
    alt: 'Rivio Partner manage lock and activity',
    label: 'Manage & activity',
  },
  {
    src: '/assets/smart-lock/member-unlock.png',
    alt: 'Member Unlock on studio page',
    label: 'Member Unlock',
  },
  {
    src: '/assets/smart-lock/member-unlock-2.png',
    alt: 'Member ready to unlock near the door',
    label: 'At the door',
  },
]

export default function SmartLockShowcase() {
  return (
    <section className="bg-[#f5f5f7] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
            <Lock className="h-4 w-4" />
            New · Smart door lock
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#1d1d1f] md:text-4xl">
            Buy a pass. Unlock the door.
          </h2>
          <p className="mt-3 text-lg text-[#86868b]">
            Fitness businesses connect TTLock or an unlock link in Rivio Partner. Members with a pass
            tap Unlock on the studio page — no extra app, no desk wait.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <Wifi className="h-4 w-4 text-emerald-600" /> TTLock + gateway
            </span>
            <span className="inline-flex items-center gap-1.5">
              <DoorOpen className="h-4 w-4 text-emerald-600" /> Member Unlock
            </span>
          </div>
          <Link
            href="/help/smart-door-lock/"
            className="mt-6 inline-flex rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            How to set up smart door lock
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-lg shadow-black/5"
            >
              <div className="relative aspect-[9/19.5] bg-black">
                <Image src={s.src} alt={s.alt} fill className="object-cover object-top" sizes="280px" />
              </div>
              <figcaption className="px-3 py-2.5 text-center text-xs font-semibold text-gray-700 md:text-sm">
                {s.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
