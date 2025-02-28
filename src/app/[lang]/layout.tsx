import type { ReactNode } from "react";
import { TopBar } from "@/components/top-bar";
import { MainNav } from "@/components/main-nav";
import { CallBanner } from "@/components/call-banner";
import { Footer } from "@/components/footer";
import { LoadingProgress } from "@/components/loading-progress";
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';


export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = await getLocale()
  const messages = await getMessages();

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className={lang === "ar" ? "font-arabic" : "font-sans"}>
        <NextIntlClientProvider messages={messages}>
          <LoadingProgress />
          <header id="home">
            <TopBar />
            <MainNav />
          </header>
          <main>{children}</main>
          <CallBanner lang={lang} />
          <Footer lang={lang} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}