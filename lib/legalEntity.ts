/** Published on rivioapp.com for DLT / regulatory verification (GODARAXPRESS ↔ RIVIO). */
export const LEGAL_ENTITY = {
  legalName: 'M/s GODARAXPRESS',
  brandName: 'RIVIO',
  gstin: '06CVEPA9441A1Z3',
  website: 'https://rivioapp.com',
  /** GST state code 06 = Haryana */
  registeredOffice: 'Haryana, India',
  supportEmail: 'support@rivioapp.com',
  hiEmail: 'hi@rivioapp.com',
} as const

export const LEGAL_ENTITY_FOOTER_LINE = `${LEGAL_ENTITY.brandName} is operated by ${LEGAL_ENTITY.legalName} (GSTIN: ${LEGAL_ENTITY.gstin}).`

export const LEGAL_ENTITY_OPERATOR_PARAGRAPH = `${LEGAL_ENTITY.brandName} mobile applications and ${LEGAL_ENTITY.website} are operated by ${LEGAL_ENTITY.legalName}, GSTIN ${LEGAL_ENTITY.gstin}, with registered office in ${LEGAL_ENTITY.registeredOffice}.`
