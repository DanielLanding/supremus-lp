"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MarqueeCarousel } from "@/components/marquee-carousel"
import { WistiaVideo } from "@/components/wistia-video"
import { MobileNav } from "@/components/mobile-nav"
import { VimeoEmbed } from "@/components/vimeo-embed"
import { MentoriaModal } from "@/components/mentoria-modal"


const TESTIMONIALS = [
  {
    videoId: "tzu9xexwqc",
    name: "Rafael e Marelise (Sócios proprietários da Imobiliária Lajeado)",
    quote:
      '"Logo após adquirirmos 100% da sociedade da imobiliária, com a mentoria Supremus reestruturar tudo, formamos uma equipe totalmente nova, com pessoas que nunca tinham trabalhado no ramo imobiliário. O apoio que recebemos foi fundamental para reorganizar o time em tempo recorde e nos trazer agilidade, pois não podemos viver sem faturamento. Em 3 meses aumentamos 130% o nosso faturamento"',
  },
  {
    videoId: "5to2qn2ycj",
    name: "Maria de Fátima (Proprietária da Fada Imóveis)",
    quote:
      '"Nossa imobiliária faturava R$ 8 milhões por ano. Conheci o Altamir no Gigantes 2023, entrei para a mentoria e, naquele mesmo ano, recebemos a meta de R$ 60 milhões e vendemos R$ 69 milhões. Após renovar, em apenas 7 meses, já vendemos R$ 99 milhões. A metodologia dele causou um desenvolvimento estrondoso em mim, como gestora, e em todas as nossas corretoras."',
  },
]

const FOTO_SOURCES = [
  "/images/Img-supremus-cr-01.jpeg",
  "/images/Img-supremus-cr-02.jpeg",
  "/images/Img-supremus-cr-03.jpeg",
  "/images/Img-supremus-cr-04.jpeg",
]
const FOTOS_DOUBLED = [...FOTO_SOURCES, ...FOTO_SOURCES]

export default function SupremusPage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [isMouseDown, setIsMouseDown] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const speed = 0.3
    let pos = 0

    const tick = () => {
      if (!isDragging.current && el) {
        pos += speed
        const half = el.scrollWidth / 2
        if (pos >= half) pos -= half
        el.scrollLeft = pos
      } else {
        pos = el.scrollLeft
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    isDragging.current = true
    setIsMouseDown(true)
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
    startX.current = pageX - (scrollRef.current?.offsetLeft || 0)
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0
  }

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false
    setIsMouseDown(false)
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
    const x = pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX.current) * 1.5
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk
    }
  }
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* ─── MOBILE MENU (fora da navbar para evitar stacking context) ─── */}
      <MobileNav />

      {/* ─── NAVBAR ─── */}
      <header className="navbar fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 lg:h-16 flex items-center justify-between lg:justify-center gap-8 lg:gap-12">
          <a href="#hero" className="shrink-0 flex items-center">
            <img
              src="/images/Logo-supremos-vertical.png"
              alt="SUPREMUS"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {[
              ["#hero", "Início"],
              ["#sobre", "Sobre a Mentoria"],
              ["#depoimentos", "Depoimentos"],
              ["#experiencia", "Altemir Rocha"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="navbar-link">
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section
          id="hero"
          className="hero-bg relative flex flex-col pt-16 md:pt-20 pb-24 overflow-x-hidden"
          style={{ minHeight: "100vh" }}
        >
          {/* Suavização apenas na base para a divisão de seções */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1a10] pointer-events-none z-0" />
          {/* Mobile: gradiente extra reforçado para deixar o verde mais escuro e legível */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/60 via-[#0a1a10]/40 to-[#0a1a10]/95 pointer-events-none z-0 md:hidden" />

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 py-8 md:py-12 relative z-10">
            <div className="bg-[#05070a]/40 md:bg-[#05070a]/15 backdrop-blur-[12px] md:backdrop-blur-[10px] backdrop-saturate-[120%] border border-white/10 rounded-2xl flex flex-col items-center relative z-10 mx-auto px-4 py-16 md:px-10 md:py-5 w-full max-w-[780px] shadow-lg">
              <img
                src="/images/Supremus_logo.png"
                alt="Supremus do Mercado Imobiliário"
                className="w-28 md:w-[15rem] mb-2 md:mb-3"
              />
              <div className="flex items-center gap-2 md:gap-3 text-[11px] md:text-[14px] text-white/90 mb-2 md:mb-3 font-medium">
                <span className="tracking-wide uppercase">Mentoria Executiva - Com Altemir Rocha</span>
              </div>
              <h1 className="text-[16px] md:text-[23px] lg:text-[27px] font-black uppercase leading-[1.35] md:leading-[1.4] text-white text-center w-full mb-2 md:mb-3">
                ESTRUTURE SUA OPERAÇÃO COM QUEM JÁ VENDEU MAIS DE{" "}
                <span className="text-[#f4c264]">
                  R$ 2 BILHÕES
                </span>{" "}
                EM IMÓVEIS
              </h1>
              <p className="text-white/70 text-[12px] md:text-[14px] text-center w-full mb-3 md:mb-4 leading-relaxed">
                12 MESES COM ALTEMIR ROCHA DENTRO DA SUA OPERAÇÃO. MENOS TEORIA. MAIS DIREÇÃO, AJUSTE E CRESCIMENTO REAL.
              </p>
              <MentoriaModal />
            </div>
            <img
              src="/images/ibraciv_logo.png"
              alt="IBRACIV"
              className="h-8 md:h-11 mt-6 md:mt-8 brightness-0 invert opacity-80 relative z-20"
            />
          </div>

        </section>

        {/* ─── CARROSSEL DE PARTICIPANTES ─── */}
        <div className="relative z-10 -mt-[90px] md:-mt-[110px] bg-transparent">
          <MarqueeCarousel />
        </div>

        {/* ─── SOBRE — O Que é o Supremus ─── */}
        <section id="sobre" className="sobre-section py-16 md:py-32 relative z-10 -mt-[2px]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
          <div className="w-full px-16 md:px-28">
            {/* Scroll icon */}
            <div className="flex justify-center mb-10">
              <div className="scroll-icon text-gray-400">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="9" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 18v4M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="sobre-label uppercase mb-4 text-[10px] md:text-sm">
              O QUE É O SUPREMUS DO MERCADO IMOBILIÁRIO?
            </p>

            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
              {/* Left — heading */}
              <div className="md:w-1/2 shrink-0">
                <h2 className="sobre-heading font-black leading-tight text-[13px] md:text-[21px]">
                  A mentoria executiva que organiza, estrutura e eleva sua imobiliária ao nível de uma máquina de vendas com autoridade, processos e equipe de alta performance
                </h2>
              </div>

              {/* Right — paragraphs */}
              <div className="flex-1">
                <p className="sobre-lead text-[12px] md:text-[13px] mb-2 leading-relaxed font-semibold">
                  Na Supremus, o Altemir Rocha entra diretamente na sua operação e começa a mexer no que realmente impacta o seu faturamento.
                </p>
                <p className="sobre-lead text-[12px] md:text-[13px] mb-2 leading-relaxed font-semibold">
                  Já na primeira reunião, você sai com ajustes práticos e decisões que começam a refletir no resultado.
                </p>
                <p className="sobre-lead text-[12px] md:text-[13px] mb-2 leading-relaxed font-semibold">
                  Ao longo dos 12 meses, sua operação é organizada, estruturada e direcionada para crescer com consistência.
                </p>
                <p className="sobre-lead text-[12px] md:text-[13px] mb-2 leading-relaxed font-semibold">
                  Sem teoria de guru.<br />
                  Sem tentativa.
                </p>
                <p className="sobre-lead text-[12px] md:text-[13px] leading-relaxed font-semibold">
                  É método que funciona, treinamento aplicado e acompanhamento próximo.
                </p>
              </div>
            </div>
          </div>

          {/* Carrossel de fotos arrastável sem cortes verticais */}
          <div
            ref={scrollRef}
            className={`mt-24 md:mt-32 sobre-fotos-carousel scrollbar-hide ${isMouseDown ? 'active' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseLeaveOrUp}
            onTouchMove={handleMouseMove}
          >
            {FOTOS_DOUBLED.map((src, i) => (
              <div key={i} className="sobre-foto-carousel-item">
                <img
                  src={src}
                  alt={`Participantes do evento ${(i % FOTO_SOURCES.length) + 1}`}
                  className="sobre-foto-full-img"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="cta-diferenciado pt-6 md:pt-8 pb-32 md:pb-[170px] relative z-10 px-6 -mt-[2px]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 text-center md:text-left">
            <p className="text-gray-600 text-sm md:text-xl italic leading-relaxed max-w-[500px]">
              "Chegou o seu momento de ser supremus no mercado imobiliário"
            </p>
            <a
              href="#hero"
              className="gold-metallic-btn rounded-xl font-bold block w-full md:w-auto text-center py-3 px-6 md:py-3.5 md:px-7 text-[12px] md:text-[14px] tracking-wide cursor-pointer flex-shrink-0 shadow-lg"
              style={{ background: "linear-gradient(135deg, #b8860b 0%, #d4a843 15%, #f5d680 35%, #ffe8a0 50%, #f5d680 65%, #d4a843 85%, #b8860b 100%)", backgroundSize: "200% 200%", color: "#1a0f00" }}
            >
              QUERO A MENTORIA SUPREMUS
            </a>
          </div>
        </section>

        {/* ─── EDIÇÃO 2026 — Vídeo com gradiente azul ─── */}
        <section id="edicao" className="edicao-section pt-24 md:pt-[290px] overflow-hidden relative flex flex-col justify-center z-20 -mt-12 md:-mt-[120px] min-h-0 md:min-h-screen">
          {/* WAVE (Inside top - White to Green transition) */}
          <div className="hidden md:block absolute left-0 right-0 w-full pointer-events-none z-20" style={{ top: "-1px", transform: "scaleY(-1)" }}>
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block h-[60px] md:h-[130px]">
              <path
                d="M0,40 C600,150 900,0 1440,60 L1440,150 L0,150 Z"
                fill="#f5f5f7"
              />
            </svg>
          </div>

          {/* Blurred Background Image + Overlay Azul */}
          <div className="absolute inset-0 z-0 pointer-events-none -mt-10">
            <img
              src="/images/about-1.webp"
              alt="Fundo Edição"
              className="w-full h-full object-cover blur-[50px] md:blur-[70px] scale-110 opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#0a1a10] mix-blend-color opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a10]/85 via-[#0a1a10]/60 to-[#12301a]/90" />
          </div>

          {/* Luzes desfocadas adicionais */}
          <div className="absolute top-[10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1a8a4a]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-[10%] -right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

          {/* Texts (Reduzidos para caber perfeitamente com o vídeo na tela) */}
          <div className="max-w-[1400px] w-full mx-auto text-center flex flex-col items-center relative z-10 px-6 mb-4 md:mb-6 shrink-0" style={{ transform: "translateY(0)" }}>
            <img src="/images/Supremus_logo.png" alt="Supremus" className="h-12 md:h-20 lg:h-24 w-auto object-contain mb-1" />
            <p className="text-white/70 text-[11px] md:text-sm uppercase tracking-wider font-semibold max-w-2xl mx-auto px-4">
              O ponto onde sua operação começa a crescer de verdade
            </p>
          </div>

          {/* Vídeo Vimeo */}
          <div className="w-full max-w-[1180px] mx-auto px-3 md:px-10 flex md:flex-1 flex-col justify-end relative z-10 pb-4 md:pb-0 overflow-hidden">
            <VimeoEmbed
              videoUrl="https://player.vimeo.com/video/1183200112?h=55fe243ca9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
              title="VÍDEO VENDA - MENTORIA SUPREMUS"
            />
          </div>
        </section>

        {/* ─── RESULTADOS + DEPOIMENTOS ─── */}
        <section id="depoimentos" className="relative pt-24 md:pt-32 pb-64 md:pb-52 px-6 overflow-hidden bg-[#f5f5f7]">
          <div className="max-w-[1200px] mx-auto relative z-10">
            {/* Header: título + texto lado a lado */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-14">
              <div className="md:w-1/2">
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-5 text-gray-800">
                  RESULTADO NÃO SE PROMETE. SE CONSTRÓI.
                </p>
                <h2 className="text-[1.75rem] md:text-[2.5rem] font-black text-gray-900 leading-[1.15]">
                  Os resultados dos nossos mentorados são consistentes.
                </h2>
              </div>
              <div className="md:w-1/2 md:pt-8">
                <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-4">
                  Somando o faturamento das operações acompanhadas ao longo da trajetória, já ultrapassamos a marca de
                  <strong className="text-gray-800"> + R$ 1 Bilhão em vendas</strong> no mercado imobiliário.
                </p>
                <p className="text-gray-500 text-[15px] md:text-base leading-relaxed">
                  Crescimento construído com direção, método e aplicação real dentro do negócio.<br />
                  Conheça a Supremus.
                </p>
              </div>
            </div>

            {/* 4 vídeos grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {TESTIMONIALS.map((t) => (
                <div key={t.name}>
                  <div className="rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                    <WistiaVideo videoId={t.videoId} aspectRatio="16 / 9" className="rounded-none" />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-gray-900 font-bold text-[15px] md:text-base leading-snug">{t.name}</h3>
                    <p className="text-gray-400 text-[13px] mt-2.5 leading-relaxed italic">{t.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIência ALTO PADRÃO ─── */}
        <section id="experiencia" className="experiencia-section flex items-center pt-[160px] md:pt-[200px] pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden z-20 min-h-screen" style={{ marginTop: "-160px" }}>
          {/* Blurred Background Image + Overlay Azul */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/about-1.webp"
              alt="Experiência Contexto"
              className="w-full h-full object-cover blur-[80px] md:blur-[40px] scale-125 opacity-80"
              loading="lazy"
            />
            {/* Color Overlays para tingir de azul e escurecer */}
            <div className="absolute inset-0 bg-[#0a1a10] mix-blend-color opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a10]/90 via-[#0a1a10]/70 to-[#12301a]/90" />
          </div>

          {/* WAVE (Inside - White to Green transition) */}
          <div className="hidden md:block absolute left-0 right-0 w-full pointer-events-none z-10" style={{ top: "-1px", transform: "scaleY(-1)" }}>
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: "auto" }}>
              <path
                d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
                fill="#f5f5f7"
              />
            </svg>
          </div>

          {/* Luzes desfocadas */}
          <div className="absolute top-[-5%] -right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1a8a4a]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

          <div className="max-w-[1300px] w-full mx-auto relative z-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
              {/* Left — images (Overlapping layout - Centralizado à esquerda) */}
              <div className="md:w-1/2 relative min-h-[680px] md:min-h-[750px] w-full flex-shrink-0">
                {/* Back Image (Room) - Portrait e movida para o topo */}
                <div className="absolute top-[2%] md:top-[8%] left-[5%] md:left-[10%] w-[58%] md:w-[46%] aspect-[3/4] shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-0">
                  <img
                    src="/images/vertical-alinhamento.jpeg"
                    alt="Sala mentoria supremus"
                    className="w-full h-full object-cover rounded-lg md:rounded-none"
                    loading="lazy"
                  />
                </div>

                {/* Front Image (Yacht) - Mais para baixo para criar o degrau */}
                <div className="absolute top-[45%] md:top-[58%] left-[12%] md:left-[22%] w-[78%] md:w-[68%] aspect-[16/10] shadow-[0_25px_50px_rgba(0,0,0,0.6)] z-10">
                  {/* Container de Recorte: Mantém o tamanho original e o zoom clipado */}
                  <div className="w-full h-full overflow-hidden rounded-lg md:rounded-none relative">
                    <img
                      src="/images/bolsa-supremus-alto-nivel.jpg"
                      alt="Experiência supremus"
                      className="w-full h-full object-cover"
                      style={{ transform: "scale(1.15)", objectPosition: "center 70%" }}
                      loading="lazy"
                    />
                  </div>

                  {/* Golden Seal - Posicionado exatamente no canto superior esquerdo (fora do overflow-hidden) */}
                  <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-20">
                    <img
                      src="/images/supremus-marca.png"
                      alt="Selo Experiência Supremus"
                      className="w-20 h-20 md:w-36 md:h-36 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <p className="text-[10px] md:text-sm font-bold tracking-[0.25em] uppercase mb-4 text-white/60">
                  MENTORIA EXECUTIVA, APLICADA NA PRÁTICA
                </p>
                <h2 className="text-[26px] md:text-5xl lg:text-[4rem] font-black uppercase mb-6 md:mb-8 leading-tight gold-shiny">
                  ALINHAMENTO, DIREÇÃO E CRESCIMENTO<br />
                </h2>
                <p className="text-white/85 text-lg md:text-[1.1rem] leading-relaxed mb-8">
                  Na Supremus, a atuação é direta.
                  Eu acompanho sua operação, participo das decisões
                  e ajudo você a estruturar um negócio que cresce com consistência. Menos tentativa, Mais direção
                </p>
                <div className="flex items-start gap-5 mb-6">
                  <img
                    src="/images/design-2-1.webp"
                    alt="Altemir Rocha - Mentor de vendas imobiliárias e fundador do IBRACIV"
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-white/70 text-sm md:text-[15px] leading-relaxed">
                      “Existe um próximo nível para a sua operação… e nós vamos construir isso juntos”
                    </p>
                  </div>
                </div>
                <p className="text-3xl italic font-bold" style={{ color: "#D4A843", fontFamily: "var(--font-dancing), cursive, serif" }}>
                  Altemir Rocha
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* ─── GOLDEN MARQUEE (top) ─── */}
        <div className="golden-marquee">
          <div className="golden-marquee-track">
            {Array.from({ length: 16 }).flatMap((_, i) => [
              <span key={`top-a-${i}`} className="golden-marquee-item">
                APLICAÇÃO PARA A SUPREMUS ✦
              </span>,
              <span key={`top-b-${i}`} className="golden-marquee-item">
                ACESSO MEDIANTE APROVAÇÃO ✦
              </span>,
            ])}
          </div>
        </div>

        {/* ─── CTA MENTORIA ─── */}
        <section id="ingressos" className="relative w-full bg-[#f5f5f7] flex flex-col items-center pt-16 md:pt-24 pb-16 md:pb-20 px-4 md:px-6">
          {/* Imagem de fundo */}
          <div className="w-full max-w-[1400px] mx-auto h-[45vh] md:h-[55vh] z-0 overflow-hidden relative">
            <img
              src="/images/experiencia-dsc.webp"
              alt="Plateia do evento"
              className="w-full h-full object-cover origin-center"
              loading="lazy"
            />
          </div>

          {/* Card flutuante */}
          <div className="relative z-10 flex w-full max-w-[800px] mx-auto justify-center mt-[-8vh] md:mt-[-20vh]">
            <div className="bg-white rounded-3xl p-6 md:p-14 text-center w-full shadow-[0_15px_60px_rgba(0,0,0,0.12)] flex flex-col items-center">
              <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 text-gray-500">
                PROCESSO DE APLICAÇÃO
              </p>
              <h2 className="text-3xl md:text-[2.6rem] font-black text-gray-900 mb-6 tracking-tight leading-tight">
                Entre para a Mentoria Supremus
              </h2>
              <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-4 max-w-lg mx-auto font-medium">
                A Supremus é um programa para operações que já estão em movimento e precisam de direção para crescer com estrutura, consistência e escala.
              </p>
              <p className="text-gray-400 text-[15px] md:text-base leading-relaxed mb-10 max-w-lg mx-auto font-medium">
                O acesso acontece mediante aplicação e análise de perfil.
              </p>

              <div className="shiny-cta-wrapper w-full max-w-[420px] mx-auto">
                <MentoriaModal />
              </div>
            </div>
          </div>
        </section>

        {/* ─── MENTOR — ALTEMIR ROCHA ─── */}
        <section className="relative overflow-hidden bg-[#050505] min-h-[80vh]">
          {/* Luzes desfocadas no background preto */}
          <div className="absolute top-[15%] right-[5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#D4A843]/8 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] right-[30%] w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#1a8a4a]/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0" />
          <div className="absolute top-[60%] right-[10%] w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-[#D4A843]/6 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />

          <div className="flex flex-col md:flex-row items-stretch min-h-0 md:min-h-[80vh]">
            {/* Photo — flush left, sem padding, sem arredondamento */}
            <div className="md:w-[45%] lg:w-[42%] shrink-0 relative">
              <img
                src="/altemirDono"
                alt="Altemir Rocha"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "350px" }}
                loading="lazy"
              />
              {/* Gradiente sutil na borda direita da foto para fundir com o preto */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-[#050505] to-transparent" />
            </div>

            {/* Bio — lado direito */}
            <div className="md:w-[55%] lg:w-[58%] flex flex-col justify-center px-6 md:px-14 lg:px-20 py-10 md:py-20 relative z-10">
              <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 text-white/40">
                QUEM É SEU MENTOR
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-[2.8rem] font-black mb-3 leading-tight gold-shiny">
                Altemir Rocha
              </h2>
              <p className="text-white/60 text-base md:text-lg italic mb-8">
                O que ele ensina, ele já fez.
              </p>
              <div className="space-y-5 text-white/75 text-[15px] md:text-base leading-relaxed">
                <p>
                  Altemir Rocha construiu sua autoridade no mercado imobiliário aplicando, no campo, tudo aquilo que hoje direciona dentro da Supremus. Foi assim que ultrapassou{" "}
                  <strong className="text-white">R$ 2 bilhões em vendas</strong> ao longo da sua trajetória.
                </p>
                <p>
                  Já treinou mais de <strong className="text-white">20 mil corretores em todo o Brasil</strong> e impactou{" "}
                  <strong className="text-white">mais de 55 mil pessoas</strong> em grandes palcos, tornando-se um dos nomes mais respeitados e ovacionados do mercado imobiliário.
                </p>
                <p>
                  É reconhecido pelos próprios alunos como um dos principais responsáveis pela formação de corretores e imobiliárias de alta performance no país, com uma metodologia aplicada que transforma operações comuns em negócios estruturados, produtivos e lucrativos.
                </p>
                <p>
                  São mais de <strong className="text-white">5.000 alunos</strong> e diversos cases com resultados expressivos, incluindo operações que, em pouco tempo, ultrapassaram{" "}
                  <strong className="text-white">R$ 149 milhões em vendas</strong>.
                </p>
                <p>
                  Também é fundador do{" "}
                  <strong className="text-white">IBRACIV, Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores</strong>, criado com o propósito de elevar o nível do mercado através de conhecimento aplicado, prática e direcionamento real de negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── IBRACIV SECTION ─── */}
        <section className="ibraciv-section py-16 md:py-24 px-6 border-t border-black/5">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center italic mb-12">
              Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores –
              Uma escola completa e pronta para lhe ensinar, na prática, o que fazer para ter
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
        <p className="text-white/30 text-sm">
          ©Copyright 2026 | Todos os direitos reservados
        </p>
      </footer>
    </div>
  )
}
