"use client"

import Link from "next/link"
import { VimeoEmbed } from "@/components/vimeo-embed"

export default function AplicacaoPage() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <main>
        {/* ─── SEÇÃO PRINCIPAL ─── */}
        <section className="edicao-section relative flex flex-col items-center justify-center overflow-hidden min-h-screen pt-14 md:pt-16 pb-0">

          {/* Blurred background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/about-1.webp"
              alt=""
              className="w-full h-full object-cover blur-[50px] md:blur-[70px] scale-110 opacity-70"
            />
            <div className="absolute inset-0 bg-[#0a1a10] mix-blend-color opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a10]/85 via-[#0a1a10]/60 to-[#12301a]/90" />
          </div>

          {/* Ambient glows */}
          <div className="absolute top-[10%] -left-[10%] w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-[#1a8a4a]/20 rounded-full blur-[90px] md:blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-[10%] -right-[10%] w-[280px] md:w-[600px] h-[280px] md:h-[600px] bg-[#D4A843]/15 rounded-full blur-[90px] md:blur-[150px] pointer-events-none z-0" />

          {/* ── Faixa dourada no topo (mobile only) ── */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent pointer-events-none z-20 md:hidden" />

          {/* ─── HEADER ─── */}
          <div className="max-w-[1400px] w-full mx-auto text-center flex flex-col items-center relative z-10 px-5 md:px-6 mb-5 md:mb-8 shrink-0">

            {/* Badge — mobile only */}
            <div className="md:hidden flex items-center gap-2 mb-5">
              <div className="w-1 h-1 rounded-full bg-[#D4A843]" />
              <span className="text-[#D4A843]/75 text-[9px] font-bold tracking-[0.28em] uppercase">
                Mentoria Executiva · Altemir Rocha
              </span>
              <div className="w-1 h-1 rounded-full bg-[#D4A843]" />
            </div>

            {/* Logo */}
            <img
              src="/images/Supremus_logo.png"
              alt="Supremus"
              className="h-14 md:h-20 lg:h-24 w-auto object-contain mb-4 md:mb-3"
              style={{ filter: "drop-shadow(0 0 24px rgba(212,168,67,0.18))" }}
            />

            {/* Divisória dourada — mobile only */}
            <div className="md:hidden flex items-center gap-2.5 mb-4 w-full max-w-[200px]">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4A843]/45" />
              <div className="w-[5px] h-[5px] rounded-full bg-[#D4A843]/55 shrink-0" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4A843]/45" />
            </div>

            {/* Subtitle */}
            <p className="text-white/70 text-[11px] md:text-sm uppercase tracking-wider font-semibold max-w-2xl mx-auto px-2">
              O ponto onde sua operação começa a crescer de verdade
            </p>

            {/* Stats pills — mobile only */}
            <div className="md:hidden flex items-stretch justify-center gap-2 mt-5 w-full">
              {[
                { value: "R$ 2B+", label: "em vendas" },
                { value: "20 mil", label: "corretores" },
                { value: "12 meses", label: "de mentoria" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center px-3 py-2.5 rounded-lg flex-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="text-white font-black text-[13px] leading-none">{value}</span>
                  <span className="text-white/30 text-[9px] mt-1 tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── VÍDEO ─── */}
          <div className="w-full max-w-[1180px] mx-auto px-3 md:px-10 relative z-10 overflow-hidden">
            <VimeoEmbed
              videoUrl="https://player.vimeo.com/video/1183200112?h=55fe243ca9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              title="VÍDEO VENDA - MENTORIA SUPREMUS"
            />
          </div>

          {/* ─── CTA ─── */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-[480px] mx-auto px-5 md:px-6 pt-8 md:pt-10 pb-14 md:pb-20 gap-4">

            {/* Mini-quote — mobile only */}
            <div
              className="md:hidden w-full rounded-xl px-4 py-3.5 flex items-start gap-2.5"
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                className="text-[#D4A843]/40 text-2xl leading-none mt-[-2px] shrink-0"
                style={{ fontFamily: "Georgia, serif" }}
              >
                "
              </span>
              <p className="text-white/45 text-[11px] italic leading-relaxed">
                Chegou o seu momento de ter os ganhos que o mercado pode te dar
              </p>
            </div>

            {/* Label acima do botão — mobile only */}
            <p className="md:hidden text-white/25 text-[9px] font-bold uppercase tracking-[0.22em]">
              Acesso mediante aprovação
            </p>

            {/* Botão */}
            <div className="shiny-cta-wrapper w-full">
              <Link
                href="/formulario"
                className="gold-metallic-btn rounded-xl font-bold block w-full text-center py-4 px-8 text-[14px] md:text-[17px] tracking-wide"
                style={{
                  background:
                    "linear-gradient(135deg, #b8860b 0%, #d4a843 15%, #f5d680 35%, #ffe8a0 50%, #f5d680 65%, #d4a843 85%, #b8860b 100%)",
                  backgroundSize: "200% 200%",
                  color: "#1a0f00",
                }}
              >
                PREENCHA A APLICAÇÃO SUPREMUS
              </Link>
            </div>

            {/* IBRACIV badge — mobile only */}
            <div className="md:hidden flex items-center justify-center gap-2 pt-1 opacity-30">
              <img src="/images/ibraciv_logo.png" alt="IBRACIV" className="h-5" />
            </div>
          </div>
        </section>

        {/* ─── IBRACIV ─── */}
        <section className="ibraciv-section py-16 md:py-24 px-6 border-t border-black/5">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center italic mb-12">
              Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores
              – Uma escola completa e pronta para lhe ensinar, na prática, o que fazer para ter
              sucesso em todas as áreas da sua vida no mercado imobiliário, com o propósito de
              transformar pessoas, elevar o nível da profissão e levar prosperidade a todos que
              tem paixão por vencer.
            </p>
            <img
              src="/images/ibraciv_logo_silver.png"
              alt="IBRACIV"
              className="h-6 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer py-8 px-6 text-center">
        <p className="text-white/30 text-sm">©Copyright 2026 | Todos os direitos reservados</p>
      </footer>
    </div>
  )
}
