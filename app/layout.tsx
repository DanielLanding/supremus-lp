import type { Metadata } from "next"
import { Montserrat, Dancing_Script } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Supremus - Mentoria Imobiliária de Elite com Altemir Rocha | IBRACIV",
  description:
    "A mentoria executiva que organiza e eleva sua operação imobiliária. Aprenda com Altemir Rocha a estratégia para vender mais de R$ 2 bilhões e escalar seu VGV.",
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
    description: "Estruture sua operação imobiliária com quem já vendeu mais de R$ 2 bilhões.",
    images: ["/images/Supremus_logo.png"],
  },
  icons: {
    icon: "/images/Logo_symbol_supremus.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${dancingScript.variable} ${montserrat.className}`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
