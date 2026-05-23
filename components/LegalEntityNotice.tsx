import { LEGAL_ENTITY, LEGAL_ENTITY_FOOTER_LINE, LEGAL_ENTITY_OPERATOR_PARAGRAPH } from '@/lib/legalEntity'

type LegalEntityNoticeProps = {
  variant?: 'footer' | 'section'
  accent?: 'emerald' | 'amber'
}

export default function LegalEntityNotice({
  variant = 'section',
  accent = 'emerald',
}: LegalEntityNoticeProps) {
  const border = accent === 'amber' ? 'border-amber-500/30' : 'border-emerald-500/30'
  const title = accent === 'amber' ? 'text-amber-400' : 'text-emerald-400'

  if (variant === 'footer') {
    return (
      <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-400 leading-relaxed max-w-2xl">
        <p className="text-gray-300 font-medium mb-1">Legal entity (operator)</p>
        <p>{LEGAL_ENTITY_FOOTER_LINE}</p>
        <p className="mt-1">
          Registered office: {LEGAL_ENTITY.registeredOffice}. Website:{' '}
          <a href={LEGAL_ENTITY.website} className={`${title} hover:underline`}>
            rivioapp.com
          </a>
        </p>
        <p className="mt-1">
          Contact:{' '}
          <a href={`mailto:${LEGAL_ENTITY.hiEmail}`} className="hover:text-gray-300">
            {LEGAL_ENTITY.hiEmail}
          </a>
          {' · '}
          <a href={`mailto:${LEGAL_ENTITY.supportEmail}`} className="hover:text-gray-300">
            {LEGAL_ENTITY.supportEmail}
          </a>
        </p>
      </div>
    )
  }

  return (
    <section
      className={`rounded-2xl md:rounded-3xl p-4 md:p-8 border ${border} bg-gray-900/80 backdrop-blur-sm`}
      aria-labelledby="legal-entity-heading"
    >
      <h2 id="legal-entity-heading" className={`text-lg md:text-2xl font-bold text-white mb-3 md:mb-4`}>
        Legal entity &amp; operator
      </h2>
      <div className="space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
        <p>{LEGAL_ENTITY_OPERATOR_PARAGRAPH}</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="text-white font-medium">Legal name:</span> {LEGAL_ENTITY.legalName}
          </li>
          <li>
            <span className="text-white font-medium">Brand / app name:</span> {LEGAL_ENTITY.brandName}
          </li>
          <li>
            <span className="text-white font-medium">GSTIN:</span> {LEGAL_ENTITY.gstin}
          </li>
          <li>
            <span className="text-white font-medium">Website:</span>{' '}
            <a href={LEGAL_ENTITY.website} className={`${title} hover:underline`}>
              {LEGAL_ENTITY.website}
            </a>
          </li>
          <li>
            <span className="text-white font-medium">Registered office:</span>{' '}
            {LEGAL_ENTITY.registeredOffice}
          </li>
        </ul>
        <p className="text-gray-400 text-sm">
          This information is published for regulatory verification, partner onboarding, and customer
          transparency.
        </p>
      </div>
    </section>
  )
}
