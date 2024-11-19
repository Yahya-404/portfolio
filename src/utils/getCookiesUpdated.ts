"use server";

import { cookies } from "next/headers";

export async function changeLang(lang: string, locale: string) {
  if (lang == locale) {
    return; // إذا كانت اللغة المطلوبة هي نفسها اللغة الحالية، فلا حاجة لتغييرها
  }

  const currentDate = new Date(); // الحصول على التاريخ الحالي
  const expireDate = new Date(currentDate); // إنشاء تاريخ انتهاء جديد
  expireDate.setFullYear(currentDate.getFullYear() + 1); // تعيين تاريخ انتهاء الصلاحية لسنة واحدة من الآن

  // تعيين الـ cookie مع تاريخ انتهاء الصلاحية
  const cookieJar = await cookies();
  cookieJar.set("locale", lang, {
    expires: expireDate,
  });
}
