import type { Metadata } from "next"
import { Montserrat, Dancing_Script, Poppins, Inter } from "next/font/google"
import Script from "next/script"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Supremus - Mentoria Imobiliária de Elite com Altemir Rocha | IBRACIV",
  description:
    "A mentoria executiva que organiza e eleva sua imobiliária imobiliária. Aprenda com Altemir Rocha a estratégia para vender mais de R$ 2 bilhões e escalar seu VGV.",
  keywords: [
    "mentoria imobiliária",
    "Altemir Rocha",
    "corretor de imóveis",
    "vendas de imóveis",
    "gestão de imobiliárias",
    "VGV imobiliário",
    "IBRACIV",
    "treinamento de corretores",
  ],
  authors: [{ name: "Altemir Rocha" }],
  openGraph: {
    title: "Supremus - Mentoria Imobiliária de Elite com Altemir Rocha",
    description: "Estruture sua imobiliária imobiliária com quem já vendeu mais de R$ 2 bilhões.",
    images: ["/images/Supremus_logo.png"],
  },
  icons: {
    icon: "/images/Logo_symbol_supremus.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable} ${dancingScript.variable} ${poppins.variable} ${montserrat.className}`}>
        <SmoothScroll />
        {children}

        {/* ─── Meta Pixels ─── */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2199546020184959');
            fbq('init', '563727482381234');
            fbq('init', '2411095466012755');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=2199546020184959&ev=PageView&noscript=1" alt="" />
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=563727482381234&ev=PageView&noscript=1" alt="" />
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=2411095466012755&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  )
}
