import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'jacques-luxury-website-60zfelgk',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_mmTlJrbeY7EFamk-Q_HCSl9C7_Gq8px3',
  authRequired: false,
  auth: { mode: 'managed' },
})
