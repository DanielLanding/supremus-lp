"use client"

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ─── HERO ─── */}
      <section
        className="hero-bg relative flex flex-col pt-16 md:pt-20 pb-24 overflow-x-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Gradientes — idênticos à home */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1a10] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a10]/60 via-[#0a1a10]/40 to-[#0a1a10]/95 pointer-events-none z-0 md:hidden" />

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 py-8 md:py-12 relative z-10">

          {/* Card — idêntico ao da home */}
          <div className="bg-[#05070a]/40 md:bg-[#05070a]/15 backdrop-blur-[12px] md:backdrop-blur-[10px] backdrop-saturate-[120%] border border-white/10 rounded-2xl flex flex-col items-center relative z-10 mx-auto px-4 py-10 md:px-10 md:py-8 w-full max-w-[780px] shadow-lg">

            {/* Logo Supremus */}
            <img
              src="/images/Supremus_logo.png"
              alt="Supremus do Mercado Imobiliário"
              className="w-28 md:w-[15rem] mb-6 md:mb-7"
            />

            {/* Ícone de sucesso */}
            <div className="w-14 h-14 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/30 flex items-center justify-center mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Título */}
            <h1 className="text-[22px] md:text-[34px] font-black text-white leading-tight mb-4">
              Muito obrigado
              <br />
              <span style={{ color: "#D4A843" }}>pela sua aplicação!</span>
            </h1>

            {/* Descrição principal */}
            <p className="text-white/65 text-[13px] md:text-[15px] leading-relaxed mb-2 max-w-lg">
              Suas respostas foram recebidas com sucesso. Nossa equipe está analisando cada perfil com atenção.
            </p>

            {/* Descrição secundária */}
            <p className="text-white/45 text-[12px] md:text-[13px] leading-relaxed max-w-md">
              Caso seu perfil esteja alinhado com o que buscamos para a Supremus, entraremos em contato pelo WhatsApp informado para as próximas etapas. Fique atento.
            </p>

            {/* Divisor */}
            <div className="mt-7 mb-6 w-16 h-px" style={{ background: "rgba(212, 168, 67, 0.3)" }} />

            {/* Logo IBRACIV */}
            <img
              src="/images/ibraciv_logo.png"
              alt="IBRACIV"
              className="h-7 md:h-9 brightness-0 invert opacity-50"
            />
          </div>

        </div>
      </section>

      {/* ─── IBRACIV SECTION ─── */}
      <section className="ibraciv-section py-16 md:py-24 px-6 border-t border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center italic mb-12">
            Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores –
            Uma escola completa e pronta para lhe ensinar, na prática, o que fazer para ter
            sucesso em todas as áreas da sua vida no mercado imobiliário, transformar pessoas,
            elevar o nível da profissão e levar prosperidade a todos que tem paixão por vencer.
          </p>
          <img
            src="/images/ibraciv_logo_silver.png"
            alt="IBRACIV"
            className="h-6 md:h-10 opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer py-8 px-6 text-center">
        <p className="text-white/30 text-sm">
          ©Copyright 2026 | Todos os direitos reservados
        </p>
      </footer>

    </div>
  )
}
