import { El_Messiri, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const el_messiri = El_Messiri({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Yahya's Portfolio",
  description: "Modern & Minimalist Portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${
          locale == "en" ? inter.className : el_messiri.className
        } dark`}
        dir={locale == "en" ? "ltr" : "rtl"}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
