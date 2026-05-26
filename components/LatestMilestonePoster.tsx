import Image from "next/image";
import { AppleMark, PlayMark } from "@/components/StoreMarks";

const RIVIO_APP_ICON = "/logos/rivio-app-icon.png";

/** Fixed-height Latest card cover — designed for h-48 / md:h-52 only. */
export default function LatestMilestonePoster() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-white via-[#f5f5f7] to-[#eefbf4]">
      <div
        className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-2xl md:h-48 md:w-48"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-24 w-24 rounded-full bg-emerald-300/10 blur-2xl"
        aria-hidden
      />

      <span className="absolute right-3 top-2.5 z-20 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-700 ring-1 ring-emerald-200/80 md:right-4 md:top-3 md:px-2.5 md:text-[10px]">
        Milestone
      </span>

      <div className="relative z-10 flex h-full items-center gap-2 px-3 sm:gap-3 sm:px-4 md:gap-5 md:px-5">
        <Image
          src={RIVIO_APP_ICON}
          alt="RIVIO"
          width={56}
          height={56}
          className="h-10 w-10 shrink-0 rounded-[10px] shadow-sm ring-1 ring-black/[0.06] sm:h-11 sm:w-11 md:h-12 md:w-12 md:rounded-xl"
          priority
        />

        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5 md:gap-3">
          <p className="shrink-0 text-[2rem] font-semibold leading-none tracking-[-0.04em] text-emerald-600 sm:text-[2.25rem] md:text-5xl">
            10
          </p>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold leading-tight text-[#1d1d1f] sm:text-xs md:text-sm">
              Partner venues live in India
            </p>
            <p className="mt-0.5 text-[9px] leading-snug text-[#86868b] sm:text-[10px] md:text-[11px]">
              Stable production · App Store &amp; Google Play
            </p>
            <p className="mt-1 hidden text-[9px] font-medium text-emerald-700 sm:block md:text-[10px]">
              Pay-per-day fitness · India
            </p>
          </div>
        </div>

        <div className="hidden shrink-0 items-end gap-2 sm:flex md:gap-3">
          <div className="relative h-[132px] w-[62px] shrink-0 rounded-[12px] border-[2.5px] border-[#1d1d1f] bg-[#1d1d1f] p-[2px] shadow-md md:h-[148px] md:w-[70px] md:rounded-[14px]">
            <div className="flex h-full flex-col overflow-hidden rounded-[9px] bg-white md:rounded-[11px]">
              <div className="bg-emerald-500 px-1.5 py-1 md:px-2 md:py-1.5">
                <p className="text-[5px] font-semibold text-white md:text-[6px]">
                  Find spaces.
                </p>
                <p className="text-[5px] font-semibold text-emerald-100 md:text-[6px]">
                  Pay for the day.
                </p>
              </div>
              <div className="space-y-1 p-1 md:p-1.5">
                <div className="h-1.5 rounded-full bg-[#f5f5f7] md:h-2" />
                <div className="flex gap-0.5">
                  {["Gym", "Yoga", "Studio"].map((label) => (
                    <span
                      key={label}
                      className="rounded-full bg-emerald-50 px-1 py-0.5 text-[4px] font-medium text-emerald-700 md:text-[5px]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="rounded-md bg-[#f5f5f7] p-1">
                  <div className="h-1 w-8 rounded bg-emerald-400/80 md:w-10" />
                  <div className="mt-0.5 h-0.5 w-6 rounded bg-black/10" />
                </div>
                <div className="rounded-md bg-[#f5f5f7] p-1">
                  <div className="h-1 w-7 rounded bg-emerald-400/60 md:w-9" />
                  <div className="mt-0.5 h-0.5 w-5 rounded bg-black/10" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-1 pb-0.5">
            <div className="flex items-center gap-1 rounded-md bg-[#1d1d1f] px-1.5 py-0.5 text-white md:px-2 md:py-1">
              <AppleMark className="h-2.5 w-2.5 md:h-3 md:w-3" />
              <span className="text-[6px] font-semibold leading-none md:text-[7px]">
                App Store
              </span>
            </div>
            <div className="flex items-center gap-1 rounded-md bg-[#1d1d1f] px-1.5 py-0.5 text-white md:px-2 md:py-1">
              <PlayMark className="h-2.5 w-2.5 md:h-3 md:w-3" />
              <span className="text-[6px] font-semibold leading-none md:text-[7px]">
                Google Play
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
