/**
 * Google Analytics 4 (GA4) & Microsoft Clarity Integration Utility
 *
 * Privacy-friendly, dual-analytics tracking for React portfolios.
 * - Free Standard Google Analytics 4 (Measurement ID: G-XXXXXXXXXX)
 * - Free Microsoft Clarity (Project ID: XXXXXXXXXX)
 *
 * Dashboards remain 100% private through authenticated Google Analytics and
 * Microsoft Clarity accounts. Zero visitor-facing statistics or counters.
 * No PII (personally identifiable information, passwords, or emails) is collected.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export const ANALYTICS_EVENTS = {
  // Navigation & Page Structure
  NAV_CLICK: 'navigation_click',
  SECTION_VIEW: 'section_view',
  BACK_TO_TOP: 'back_to_top',

  // Profile & Social Links
  GITHUB_CLICK: 'github_profile_click',
  LINKEDIN_CLICK: 'linkedin_profile_click',
  WHATSAPP_CLICK: 'whatsapp_click',
  EMAIL_CLICK: 'contact_email_click',
  NAUKRI_CLICK: 'naukri_click',
  COPY_EMAIL: 'contact_copy_email',
  COPY_PHONE: 'contact_copy_phone',

  // Resume Downloads & Views
  RESUME_DOWNLOAD: 'resume_download',
  RESUME_VIEW: 'resume_view',

  // Contact Form
  CONTACT_SUBMIT: 'contact_form_submit',

  // Projects & Case Studies
  PROJECT_VIEW: 'project_card_click',
  PROJECT_GITHUB_CLICK: 'project_github_click',
  PROJECT_DEMO_CLICK: 'project_live_demo_click',
  PROJECT_TAB_FILTER: 'project_tab_filter',

  // Skills Filtering
  SKILL_CATEGORY_FILTER: 'skill_category_filter',

  // AI Portfolio Guide Interactions
  AI_GUIDE_OPEN: 'ai_guide_open',
  AI_GUIDE_ACTION: 'ai_guide_action',
  AI_GUIDE_PROMPT: 'ai_guide_prompt',
} as const;

export type AnalyticsEventName = typeof ANALYTICS_EVENTS[keyof typeof ANALYTICS_EVENTS] | string;

let isGAInitialized = false;
let isClarityInitialized = false;
let lastTrackedPath = '';

/**
 * Initializes Google Analytics 4 (gtag.js) asynchronously.
 */
function initGoogleAnalytics(measurementId: string): void {
  if (isGAInitialized || typeof window === 'undefined') return;

  const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (existingScript) {
    isGAInitialized = true;
    return;
  }

  try {
    // Setup dataLayer and gtag stub
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: false, // Page views are tracked manually to support SPA anchor navigation
    });

    // Inject Google tag script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.onerror = () => {
      if (import.meta.env.DEV) {
        console.warn('[GA4] Failed to load Google Analytics tag (likely blocked by ad-blocker).');
      }
    };

    document.head.appendChild(script);
    isGAInitialized = true;

    if (import.meta.env.DEV) {
      console.info(`[GA4] Google Analytics 4 initialized with Measurement ID: ${measurementId}`);
    }

    // Record initial pageview
    trackPageView(window.location.pathname + window.location.hash, document.title);
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[GA4] Initialization error:', err);
    }
  }
}

/**
 * Initializes Microsoft Clarity tracking script asynchronously.
 */
function initMicrosoftClarity(projectId: string): void {
  if (isClarityInitialized || typeof window === 'undefined') return;

  const existingScript = document.querySelector(`script[src*="clarity.ms/tag"]`);
  if (existingScript) {
    isClarityInitialized = true;
    return;
  }

  try {
    /* Microsoft Clarity official asynchronous loader */
    (function (c: any, l: Document, a: string, r: string, i: string) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(i);
      t.onerror = () => {
        if (import.meta.env.DEV) {
          console.warn('[Microsoft Clarity] Script failed to load (possibly blocked by ad-blocker).');
        }
      };
      const y = l.getElementsByTagName(r)[0];
      if (y && y.parentNode) {
        y.parentNode.insertBefore(t, y);
      } else {
        document.head.appendChild(t);
      }
    })(window, document, 'clarity', 'script', projectId);

    isClarityInitialized = true;

    if (import.meta.env.DEV) {
      console.info(`[Microsoft Clarity] Initialized with Project ID: ${projectId}`);
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn('[Microsoft Clarity] Initialization error:', err);
    }
  }
}

/**
 * Initializes both GA4 and Microsoft Clarity if configured.
 * Does not block page load and never throws.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim();

  if (gaMeasurementId) {
    initGoogleAnalytics(gaMeasurementId);
  }

  if (clarityProjectId) {
    initMicrosoftClarity(clarityProjectId);
  }

  if (!gaMeasurementId && !clarityProjectId && import.meta.env.DEV) {
    console.info(
      '[Analytics] Running in local dev mode without VITE_GA_MEASUREMENT_ID or VITE_CLARITY_PROJECT_ID. Events will be logged to console.'
    );
  }
}

/**
 * Safely tracks a page view across GA4 and Clarity without duplicate emissions.
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return;
  if (pagePath && pagePath === lastTrackedPath) return;

  lastTrackedPath = pagePath;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle || document.title,
        page_location: window.location.href,
      });
    }

    if (typeof window.clarity === 'function') {
      window.clarity('set', 'page_path', pagePath);
    }

    if (import.meta.env.DEV) {
      console.log(
        `%c[Page View]%c ${pagePath}`,
        'color: #10b981; font-weight: bold;',
        'color: inherit;',
        pageTitle ? `(${pageTitle})` : ''
      );
    }
  } catch {
    // Fail silently to never degrade user experience
  }
}

/**
 * Safely tracks custom analytics events across GA4 and Microsoft Clarity.
 * Does not record passwords, messages, emails, or personal visitor data.
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  eventData?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;

  try {
    // 1. Send to Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventData);
    }

    // 2. Send custom event to Microsoft Clarity
    if (typeof window.clarity === 'function') {
      window.clarity('event', eventName);
    }

    // 3. In development mode, log clean visual output for verification
    if (import.meta.env.DEV) {
      console.log(
        `%c[GA4 & Clarity Event]%c ${eventName}`,
        'color: #38bdf8; font-weight: bold;',
        'color: inherit;',
        eventData || ''
      );
    }
  } catch {
    // Fail silently to never break visitor experience
  }
}

// Track section scroll transitions with deduplication
let lastTrackedSection = '';
export function trackSectionTransition(sectionId: string): void {
  if (sectionId && sectionId !== lastTrackedSection) {
    lastTrackedSection = sectionId;
    trackEvent(ANALYTICS_EVENTS.SECTION_VIEW, { section: sectionId });

    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      window.clarity('set', 'active_section', sectionId);
    }

    // Update virtual pageview for anchor navigation
    trackPageView(`/#${sectionId}`, `Lakshit Sharma | ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`);
  }
}
