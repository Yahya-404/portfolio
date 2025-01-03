import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  "./src/config/i18n/request.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
