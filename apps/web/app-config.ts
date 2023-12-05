import getConfig from "next/config";

function getDefaultConfig() {
  return {
    publicRuntimeConfig: process.env,
    serverRuntimeConfig: process.env,
  };
}

const { publicRuntimeConfig } = typeof window !== "undefined" ? getConfig() : getDefaultConfig();

const {
  NEXT_PUBLIC_WEBAPP_URL,
  NEXT_PUBLIC_WEBSITE_URL,
  NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_SUPPORT_MAIL_ADDRESS,
  NEXT_PUBLIC_COMPANY_NAME,
  NEXT_PUBLIC_SENDER_ID,
  NEXT_PUBLIC_SENDGRID_SENDER_NAME,
  NEXT_PUBLIC_IS_E2E,
  NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_PRICE_MONTHLY,
  NEXT_PUBLIC_SENTRY_DSN,
  NEXT_PUBLIC_DEBUG,
  NEXT_PUBLIC_DISABLE_SIGNUP,
  NEXT_PUBLIC_HOSTED_CAL_FEATURES,
  NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
  NEXT_PUBLIC_CALCOM_VERSION,
  NEXT_PUBLIC_VERCEL_URL,
  NEXT_PUBLIC_EMBED_LIB_URL,
  NEXT_PUBLIC_MINUTES_TO_BOOK,
  NEXT_PUBLIC_AVAILABILITY_SCHEDULE_INTERVAL,
  NEXT_PUBLIC_FRESHCHAT_HOST,
  NEXT_PUBLIC_FRESHCHAT_TOKEN,
  NEXT_PUBLIC_HELPSCOUT_KEY,
  NEXT_PUBLIC_INTERCOM_APP_ID,
  NEXT_PUBLIC_ZENDESK_KEY,
  NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_PRODUCT_ID,
  NEXT_PUBLIC_STRIPE_TEAM_MONTHLY_PRICE_ID,
  NEXT_PUBLIC_TEAM_IMPERSONATION,
} = publicRuntimeConfig;

export const AppConfig = {
  env: {
    NEXT_PUBLIC_WEBAPP_URL,
    NEXT_PUBLIC_WEBSITE_URL,
    NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_SUPPORT_MAIL_ADDRESS,
    NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_SENDER_ID,
    NEXT_PUBLIC_SENDGRID_SENDER_NAME,
    NEXT_PUBLIC_IS_E2E,
    NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_PRICE_MONTHLY,
    NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_DEBUG,
    NEXT_PUBLIC_DISABLE_SIGNUP,
    NEXT_PUBLIC_HOSTED_CAL_FEATURES,
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    NEXT_PUBLIC_CALCOM_VERSION,
    NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_EMBED_LIB_URL,
    NEXT_PUBLIC_MINUTES_TO_BOOK,
    NEXT_PUBLIC_AVAILABILITY_SCHEDULE_INTERVAL,
    NEXT_PUBLIC_FRESHCHAT_HOST,
    NEXT_PUBLIC_FRESHCHAT_TOKEN,
    NEXT_PUBLIC_HELPSCOUT_KEY,
    NEXT_PUBLIC_INTERCOM_APP_ID,
    NEXT_PUBLIC_ZENDESK_KEY,
    NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_PRODUCT_ID,
    NEXT_PUBLIC_STRIPE_TEAM_MONTHLY_PRICE_ID,
    NEXT_PUBLIC_TEAM_IMPERSONATION,
  },
};
