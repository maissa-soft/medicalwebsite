import type { Metadata } from "next";
import { cookies } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider, Language } from "@/components/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portail Paramédical Algérie | Instituts & Cours",
  description: "Trouvez toutes les informations sur les instituts paramédicaux en Algérie, les moyennes BAC, les spécialités et accédez aux cours complets.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE");
  const locale = (localeCookie?.value as Language) || "fr";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE"/>
      </head>
      <body className="flex flex-col min-h-screen">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5603304619422783"
          crossOrigin="anonymous"
        />
        <LanguageProvider initialLanguage={locale}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}



