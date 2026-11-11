// GA4 Analytics helper function
import { GAEventName, GAEventParams } from '@/types/magnet';
import { DESTINATIONS } from '@/config/destinations';

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: GAEventName, params: GAEventParams = {}) {
  if (typeof window === 'undefined') return;

  // Clean params
  const cleanParams: Record<string, unknown> = {
    ...params,
  };

  // If gtag is initialized and GA measurement ID is present
  if (typeof window.gtag === 'function' && DESTINATIONS.gaMeasurementId) {
    window.gtag('event', name, cleanParams);
  } else {
    // In dev mode or when GA measurement ID is held, log to console for debugging and testing verification
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[GA4 Event: ${name}]`, cleanParams);
    }
  }
}
