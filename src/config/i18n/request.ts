import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieJar = await cookies();
  const locale = cookieJar.get("locale")?.value || "en"; // قراءة قيمة الـ cookie locale أو تعيين القيمة الافتراضية إلى "en"

  return {
    locale,
    messages: (await import(`/src/locale/${locale}.json`)).default, // استيراد الرسائل المرتبطة باللغة المحددة
  };
});
