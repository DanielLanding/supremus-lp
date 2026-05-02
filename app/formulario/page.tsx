"use client"

import { useState, useCallback } from "react"
import Link from "next/link"

/* ─────────────────────────── Types ─────────────────────────── */

type FlowType = "imobiliaria" | "corretor" | "investidor" | null

type FormData = {
  nome: string
  email: string
  whatsapp: string
  momento: string
  q3: string
  q4: string
  q5: string
  q6: string
}

type StepDef = {
  title: string
  subtitle: string
  options: string[]
  field: keyof FormData
}

/* ─────────────────────────── Flow definitions ─────────────────────────── */

const MOMENTO_OPTIONS = [
  "Dono de imobiliária em crescimento",
  "Dono de imobiliária buscando escalar",
  "Corretor que quer abrir uma imobiliária",
  "Corretor já estruturando sua própria imobiliária",
  "Investidor entrando no mercado imobiliário",
]

function getFlow(momento: string): FlowType {
  if (momento === MOMENTO_OPTIONS[0] || momento === MOMENTO_OPTIONS[1]) return "imobiliaria"
  if (momento === MOMENTO_OPTIONS[2] || momento === MOMENTO_OPTIONS[3]) return "corretor"
  if (momento === MOMENTO_OPTIONS[4]) return "investidor"
  return null
}

const FLOW_STEPS: Record<Exclude<FlowType, null>, StepDef[]> = {
  imobiliaria: [
    {
      title: "Qual é o principal desafio da sua imobiliária?",
      subtitle: "Escolha o ponto que mais limita o crescimento da sua imobiliária hoje.",
      field: "q3",
      options: [
        "Falta de previsibilidade no faturamento",
        "Dificuldade em formar e manter equipe produtiva",
        "imobiliária desorganizada (processos, gestão e acompanhamento)",
        "Baixa conversão e geração de clientes",
        "Estou vendendo bem, mas travado para escalar",
      ],
    },
    {
      title: "Qual foi o volume gerado em comissões nos últimos 3 meses? (VGC)",
      subtitle: "Considere o valor líquido da imobiliária, já descontando as comissões dos corretores.",
      field: "q4",
      options: [
        "Até R$30 mil",
        "Entre R$50 mil e R$80 mil",
        "Entre R$80 mil e R$200 mil",
        "Entre R$200 mil e R$500 mil",
        "Acima de R$500 mil",
      ],
    },
    {
      title: "Qual é o tamanho da sua equipe comercial?",
      subtitle: "Considere os corretores ativos na sua imobiliária hoje.",
      field: "q5",
      options: [
        "Não tenho equipe (atuo sozinho)",
        "Entre 1 e 5 corretores",
        "Entre 5 e 10 corretores",
        "Entre 10 e 20 corretores",
        "Mais de 20 corretores",
      ],
    },
  ],
  corretor: [
    {
      title: "O que está te levando a querer abrir sua própria imobiliária?",
      subtitle: "Escolha o que mais representa seu momento hoje.",
      field: "q3",
      options: [
        "Não quero mais depender de outras imobiliárias",
        "Sinto que posso crescer mais e ganhar mais do que ganho hoje",
        "Quero construir algo meu dentro do mercado imobiliário",
        "Já estou me organizando para abrir minha própria imobiliária",
        "Já comecei a estruturar minha própria imobiliária",
      ],
    },
    {
      title: "Nos últimos 3 meses, quanto você gerou em comissões? (VGC)",
      subtitle: "Considere o valor total das suas comissões no período. As informações são confidenciais.",
      field: "q4",
      options: [
        "Até R$20 mil",
        "Entre R$20 mil e R$50 mil",
        "Entre R$50 mil e R$100 mil",
        "Entre R$100 mil e R$200 mil",
        "Acima de R$200 mil",
      ],
    },
    {
      title: "Como você pretende iniciar sua imobiliária?",
      subtitle: "Considere o que você já tem definido hoje.",
      field: "q5",
      options: [
        "Vou começar sozinho",
        "Pretendo iniciar com 1 a 2 corretores",
        "Já estou estruturando uma equipe (até 5 corretores)",
        "Já tenho uma pequena equipe formada",
      ],
    },
  ],
  investidor: [
    {
      title: "O que está te levando a entrar no mercado imobiliário?",
      subtitle: "Escolha o que mais representa seu momento hoje.",
      field: "q3",
      options: [
        "Vejo o mercado imobiliário como uma boa oportunidade",
        "Quero diversificar meus investimentos",
        "Quero construir uma nova fonte de renda nesse mercado",
        "Já venho estudando como entrar nesse segmento",
        "Já estou me organizando para iniciar uma imobiliária",
      ],
    },
    {
      title: "Qual o capital disponível para investir na imobiliária?",
      subtitle: "Considere o valor que pretende investir inicialmente.",
      field: "q4",
      options: [
        "Até R$30 mil",
        "Entre R$50 mil e R$80 mil",
        "Entre R$80 mil e R$200 mil",
        "Entre R$200 mil e R$500 mil",
        "Acima de R$500 mil",
      ],
    },
    {
      title: "Como você pretende estruturar sua imobiliária imobiliária?",
      subtitle: "Considere o nível de estrutura que você imagina para iniciar.",
      field: "q5",
      options: [
        "Pretendo começar de forma enxuta, operando sem escritório",
        "Quero iniciar com estrutura simples e baixo custo",
        "Pretendo montar uma imobiliária com equipe e estrutura básica",
        "Quero montar uma imobiliária estruturada com escritório físico",
        "Quero construir uma imobiliária completa, com estrutura profissional desde o início",
      ],
    },
  ],
}

const LIDERANCA_STEP: StepDef = {
  title: "Você possui liderança estruturada?",
  subtitle: "Gerente ou coordenador responsável pela equipe.",
  field: "q6",
  options: [
    "Não, eu mesmo gerencio toda a imobiliária",
    "Sim, tenho um gerente ou coordenador responsável pela equipe",
  ],
}

const EQUIPE_ACIMA_5 = [
  "Entre 5 e 10 corretores",
  "Entre 10 e 20 corretores",
  "Mais de 20 corretores",
]

const SUPREMUS_50_TRUE: Partial<Record<Exclude<FlowType, null>, string[]>> = {
  imobiliaria: ["Entre R$50 mil e R$80 mil", "Entre R$80 mil e R$200 mil", "Entre R$200 mil e R$500 mil", "Acima de R$500 mil"],
  corretor: ["Entre R$50 mil e R$100 mil", "Entre R$100 mil e R$200 mil", "Acima de R$200 mil"],
  investidor: ["Entre R$50 mil e R$80 mil", "Entre R$80 mil e R$200 mil", "Entre R$200 mil e R$500 mil", "Acima de R$500 mil"],
}

/* ─────────────────────────── Helpers ─────────────────────────── */

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function getSteps(flow: FlowType, form: FormData): StepDef[] {
  if (!flow) return []
  const steps = [...FLOW_STEPS[flow]]
  if (flow === "imobiliaria" && EQUIPE_ACIMA_5.includes(form.q5)) {
    steps.push(LIDERANCA_STEP)
  }
  return steps
}

function getTotalSteps(flow: FlowType, form: FormData) {
  return 2 + getSteps(flow, form).length
}

/* ─────────────────────────── OptionList ─────────────────────────── */

function OptionList({
  options,
  selected,
  error,
  onSelect,
}: {
  options: string[]
  selected: string
  error?: string
  onSelect: (val: string) => void
}) {
  return (
    <div className="flex flex-col gap-2.5 md:gap-3">
      {error && <p className="text-red-400 text-[13px] font-medium -mt-1 mb-1">{error}</p>}
      {options.map((opcao, i) => {
        const isSelected = selected === opcao
        return (
          <button
            key={opcao}
            onClick={() => onSelect(opcao)}
            className={`w-full flex items-start text-left px-5 py-4 rounded-xl border text-[13px] md:text-[14px] font-medium transition-all duration-200 group ${
              isSelected
                ? "bg-[#D4A843]/10 border-[#D4A843] text-white shadow-[0_0_0_1px_rgba(212,168,67,0.2)]"
                : "bg-white/[0.03] border-white/8 text-white/55 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/80"
            }`}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div
              className={`mt-0.5 inline-flex w-[18px] h-[18px] rounded-full border mr-3.5 items-center justify-center shrink-0 transition-all duration-200 ${
                isSelected
                  ? "border-[#D4A843] bg-[#D4A843] shadow-[0_0_10px_rgba(212,168,67,0.4)]"
                  : "border-white/20 group-hover:border-white/35"
              }`}
            >
              {isSelected && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="leading-relaxed">{opcao}</span>
          </button>
        )
      })}
    </div>
  )
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function FormularioPage() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<FormData>({
    nome: "", email: "", whatsapp: "", momento: "",
    q3: "", q4: "", q5: "", q6: "",
  })
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({})

  const flow = getFlow(form.momento)
  const flowSteps = getSteps(flow, form)
  const totalSteps = getTotalSteps(flow, form)
  const currentFlowStep = step >= 3 ? flowSteps[step - 3] : null

  function validateStep1() {
    const e: Record<string, string> = {}
    if (!form.nome.trim()) e.nome = "Informe seu nome"
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Informe um e-mail válido"
    if (form.whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "Informe um WhatsApp válido"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function validateSelection(field: string) {
    if (!(form as any)[field]) {
      setErrors({ [field]: "Selecione uma opção para continuar" })
      return false
    }
    setErrors({})
    return true
  }

  async function submitForm() {
    const dto: Record<string, string> = {
      name: form.nome,
      email: form.email,
      phone: form.whatsapp,
      momento_atual: form.momento,
    }

    if (flow === "imobiliaria") {
      dto.principal_desafio = form.q3
      dto.vgc_3_meses = form.q4
      dto.tamanho_equipe = form.q5
      if (form.q6) dto.lideranca_estruturada = form.q6
    } else if (flow === "corretor") {
      dto.motivacao = form.q3
      dto.vgc_3_meses = form.q4
      dto.inicio_operacao = form.q5
    } else if (flow === "investidor") {
      dto.motivacao = form.q3
      dto.capital_disponivel = form.q4
      dto.estrutura_operacao = form.q5
    }

    dto.supremus_50 = String(
      flow !== null && (SUPREMUS_50_TRUE[flow]?.includes(form.q4) ?? false)
    )

    const WEBHOOKS: Record<Exclude<FlowType, null>, { legacy: string; supremus50k: string }> = {
      imobiliaria: {
        legacy: "https://webhook.sellflux.app/v2/webhook/custom/acdf82941b43b2655865954d15764b61",
        supremus50k: "https://webhook.sellflux.app/v2/webhook/custom/0c36005f3a18978f355dcbec05562862",
      },
      corretor: {
        legacy: "https://webhook.sellflux.app/v2/webhook/custom/2d2fccc0b0dcbaa289780489a678065e",
        supremus50k: "https://webhook.sellflux.app/v2/webhook/custom/acf567b71926de1717a5575303627df2",
      },
      investidor: {
        legacy: "https://webhook.sellflux.app/v2/webhook/custom/0b0d4cb8f5d17ee4500196921349de8c",
        supremus50k: "https://webhook.sellflux.app/v2/webhook/custom/b4a7dc2e09540a0b3c74dc03a4ca98e0",
      },
    }

    if (!flow) return

    const webhookGroup = dto.supremus_50 === "true" ? "supremus50k" : "legacy"

    const LEADNOSE_QUESTION_LABELS: Record<Exclude<FlowType, null>, { q3: string; q4: string; q5: string; q6?: string }> = {
      imobiliaria: { q3: "Principal Desafio", q4: "VGC 3 Meses", q5: "Tamanho da Equipe", q6: "Liderança Estruturada" },
      corretor: { q3: "Motivação", q4: "VGC 3 Meses", q5: "Início da imobiliária" },
      investidor: { q3: "Motivação", q4: "Capital Disponível", q5: "Estrutura da imobiliária" },
    }

    const labels = LEADNOSE_QUESTION_LABELS[flow]
    const descParts: string[] = [
      `Momento Atual Resposta: ${form.momento}`,
      `${labels.q3} Resposta: ${form.q3}`,
      `${labels.q4} Resposta: ${form.q4}`,
      `${labels.q5} Resposta: ${form.q5}`,
    ]
    if (form.q6 && labels.q6) descParts.push(`${labels.q6} Resposta: ${form.q6}`)

    const leadnosePayload = {
      name: form.nome,
      phone: form.whatsapp,
      email: form.email,
      tag: "supremus",
      description: descParts.join(", "),
      qualificado: dto.supremus_50 === "true",
    }

    await Promise.allSettled([
      fetch(WEBHOOKS[flow][webhookGroup], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      }).catch((error) => console.error("[mentoria] erro ao enviar webhook:", error)),
      fetch("https://bot-api.leadnose.com/leadsdaniel/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadnosePayload),
      }).catch((error) => console.error("[mentoria] erro ao enviar leadnose:", error)),
    ])
  }

  async function handleNext() {
    if (step === 1) {
      if (!validateStep1()) return
      setStep(2)
      return
    }
    if (step === 2) {
      if (!validateSelection("momento")) return
      setForm(f => ({ ...f, q3: "", q4: "", q5: "", q6: "" }))
      setStep(3)
      return
    }
    const flowIndex = step - 3
    const currentStep = flowSteps[flowIndex]
    if (!currentStep) return
    if (!validateSelection(currentStep.field)) return
    const isLastFlowStep = flowIndex === flowSteps.length - 1
    if (isLastFlowStep) {
      if (flow === "imobiliaria" && currentStep.field === "q5" && EQUIPE_ACIMA_5.includes(form.q5)) {
        setStep(step + 1)
        return
      }
      setSubmitting(true)
      await submitForm()
      setTimeout(() => {
        setSubmitting(false)
        setDone(true)
        setTimeout(() => { window.location.href = "/obrigado" }, 1500)
      }, 1500)
      return
    }
    setStep(step + 1)
  }

  function handleBack() {
    setErrors({})
    setStep(step - 1)
  }

  function getHeaderContent() {
    if (submitting) return { title: "Processando...", subtitle: "Aguarde enquanto enviamos sua aplicação." }
    if (done) return { title: "Aplicação realizada com sucesso!", subtitle: "" }
    if (step === 1) return {
      title: "Comece sua aplicação",
      subtitle: "Responda com atenção. Vamos entender seu momento para avaliar se a Supremus faz sentido para sua imobiliária.",
    }
    if (step === 2) return {
      title: "Qual é o seu momento hoje?",
      subtitle: "Isso nos ajuda a entender seu nível de imobiliária e direcionar melhor a análise da sua aplicação.",
    }
    if (currentFlowStep) return { title: currentFlowStep.title, subtitle: currentFlowStep.subtitle }
    return { title: "", subtitle: "" }
  }

  const header = getHeaderContent()

  return (
    <div
      className="min-h-screen text-white flex overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* ─── BACKGROUND FIXO ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#080f0a] via-[#0a1a10] to-[#0d1f12]" />
        <div className="absolute top-[-5%] -left-[10%] w-[700px] h-[700px] bg-[#1a8a4a]/12 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-5%] -right-[10%] w-[700px] h-[700px] bg-[#D4A843]/8 rounded-full blur-[200px]" />
        <div className="absolute top-[50%] left-[35%] w-[500px] h-[500px] bg-[#1a8a4a]/8 rounded-full blur-[160px]" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ─── PAINEL ESQUERDO — branding (desktop only) ─── */}
      <aside className="hidden lg:flex lg:w-[42%] xl:w-[40%] 2xl:w-[38%] flex-col justify-center relative z-10 px-12 xl:px-16 2xl:px-20 py-12 flex-shrink-0">
        {/* Linha divisória dourada */}
        <div className="absolute right-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-[#D4A843]/25 to-transparent" />

        {/* Back link — fixo no canto superior esquerdo */}
        <Link
          href="/"
          className="absolute top-10 left-12 xl:left-16 2xl:left-20 inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-xs font-semibold tracking-wider uppercase"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Voltar ao site
        </Link>

        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src="/images/Supremus_logo.png"
            alt="Supremus"
            className="h-16 xl:h-20 w-auto object-contain mb-8"
          />

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#D4A843]/50" />
            <span className="text-[#D4A843] text-[10px] font-bold tracking-[0.2em] uppercase">Mentoria Executiva</span>
            <div className="h-px w-8 bg-[#D4A843]/50" />
          </div>

          {/* Headline */}
          <h2 className="text-[1.6rem] xl:text-[1.9rem] font-black text-white leading-[1.2] mb-5">
            O ponto onde sua imobiliária começa a crescer de verdade
          </h2>

          <p className="text-white/40 text-sm xl:text-[15px] leading-relaxed mb-10">
            A Supremus é uma mentoria executiva que organiza, estrutura e eleva sua imobiliária ao nível de uma máquina de vendas com autoridade, processos e equipes de alta performance.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mb-10">
            {[
              { value: "R$ 2B+", label: "em vendas" },
              { value: "20 mil", label: "corretores" },
              { value: "12 meses", label: "de mentoria" },
            ].map(({ value, label }, i, arr) => (
              <div key={label} className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <p className="text-white font-black text-base xl:text-lg leading-none">{value}</p>
                  <p className="text-white/35 text-xs mt-0.5">{label}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-7 bg-white/10 shrink-0" />}
              </div>
            ))}
          </div>

          {/* IBRACIV */}
          <img
            src="/images/ibraciv_logo.png"
            alt="IBRACIV"
            className="h-7 opacity-25"
          />
        </div>
      </aside>

      {/* ─── PAINEL DIREITO — formulário ─── */}
      <main className="flex-1 relative z-10 flex flex-col overflow-y-auto">
        <div className="flex-1 flex flex-col px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 py-8 md:py-10">

          {/* Mobile header */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <img src="/images/Logo_symbol_supremus.png" alt="Supremus" className="h-10 w-auto" />
            <Link
              href="/"
              className="text-white/35 hover:text-white/60 transition-colors text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Voltar
            </Link>
          </div>

          {/* Centered form container */}
          <div className="max-w-[540px] w-full mx-auto flex flex-col flex-1 justify-center">

            {/* Gold accent top bar */}
            <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-transparent via-[#D4A843] to-transparent mb-8 opacity-60" />

            {/* ── LOADING STATE ── */}
            {submitting ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-5 animate-fadeIn">
                <div className="w-14 h-14 rounded-full border-[3px] border-white/8 border-t-[#D4A843] animate-spin" />
                <p className="text-white/50 text-sm font-medium tracking-wide">Enviando sua aplicação...</p>
              </div>
            ) : done ? (
              /* ── SUCCESS STATE ── */
              <div className="flex flex-col items-center text-center py-12 gap-5 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-[#D4A843]/12 border border-[#D4A843]/25 flex items-center justify-center animate-scaleIn shadow-[0_0_40px_rgba(212,168,67,0.15)]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#D4A843] text-xs font-bold tracking-widest uppercase mb-2">Aplicação recebida</p>
                  <h3 className="text-white font-black text-2xl md:text-3xl mb-3">Aplicação realizada com sucesso!</h3>
                  <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                    Sua aplicação será analisada pela equipe. Caso seu perfil esteja alinhado com a Supremus, você será direcionado para a próxima etapa.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 mt-2">
                  <div className="w-5 h-5 rounded-full border-2 border-white/10 border-t-[#D4A843] animate-spin" />
                  <p className="text-white/30 text-xs tracking-widest uppercase">Redirecionando...</p>
                </div>
              </div>
            ) : (
              <>
                {/* ── HEADER ── */}
                <div className="mb-6 md:mb-7">
                  <p className="text-[#D4A843] text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5">
                    Aplicação Supremus
                  </p>
                  <h2 className="text-white font-black text-xl md:text-2xl xl:text-[1.6rem] leading-tight">
                    {header.title}
                  </h2>
                  {header.subtitle && (
                    <p className="text-white/38 text-[13px] md:text-sm mt-2 leading-relaxed">
                      {header.subtitle}
                    </p>
                  )}
                </div>

                {/* ── PROGRESS ── */}
                <div className="mb-7 md:mb-8">
                  <div className="flex gap-1.5 mb-2">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-[3px] flex-1 rounded-full transition-all duration-500 ease-out ${
                          i < step ? "bg-[#D4A843]" : "bg-white/8"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/25 text-[11px] font-medium tracking-wide">
                    Etapa {step} de {totalSteps}
                  </p>
                </div>

                {/* ── STEP CONTENT ── */}
                <div className="flex-1">
                  {step === 1 ? (
                    <div className="flex flex-col gap-4">
                      {/* Nome */}
                      <div>
                        <label className="text-white/50 text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5 block">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          placeholder="Seu nome"
                          value={form.nome}
                          onChange={(e) => setForm(f => ({ ...f, nome: e.target.value }))}
                          className={`w-full bg-white/[0.04] border ${
                            errors.nome ? "border-red-500/70" : "border-white/10"
                          } rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4A843]/50 focus:bg-white/[0.06] transition-all`}
                        />
                        {errors.nome && <p className="text-red-400/90 text-xs mt-1.5">{errors.nome}</p>}
                      </div>

                      {/* E-mail */}
                      <div>
                        <label className="text-white/50 text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5 block">
                          E-mail
                        </label>
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={form.email}
                          onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                          className={`w-full bg-white/[0.04] border ${
                            errors.email ? "border-red-500/70" : "border-white/10"
                          } rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4A843]/50 focus:bg-white/[0.06] transition-all`}
                        />
                        {errors.email && <p className="text-red-400/90 text-xs mt-1.5">{errors.email}</p>}
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label className="text-white/50 text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5 block">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={form.whatsapp}
                          onChange={(e) => setForm(f => ({ ...f, whatsapp: formatWhatsapp(e.target.value) }))}
                          className={`w-full bg-white/[0.04] border ${
                            errors.whatsapp ? "border-red-500/70" : "border-white/10"
                          } rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4A843]/50 focus:bg-white/[0.06] transition-all`}
                        />
                        {errors.whatsapp && <p className="text-red-400/90 text-xs mt-1.5">{errors.whatsapp}</p>}
                      </div>
                    </div>
                  ) : step === 2 ? (
                    <OptionList
                      options={MOMENTO_OPTIONS}
                      selected={form.momento}
                      error={errors.momento}
                      onSelect={(val) => {
                        setForm(f => ({ ...f, momento: val, q3: "", q4: "", q5: "", q6: "" }))
                        setErrors({})
                      }}
                    />
                  ) : currentFlowStep ? (
                    <OptionList
                      options={currentFlowStep.options}
                      selected={(form as any)[currentFlowStep.field]}
                      error={errors[currentFlowStep.field]}
                      onSelect={(val) => {
                        setForm(f => ({ ...f, [currentFlowStep.field]: val }))
                        setErrors({})
                      }}
                    />
                  ) : null}
                </div>

                {/* ── NAVIGATION ── */}
                <div className="flex gap-3 mt-8 md:mt-10">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="flex-1 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-semibold py-3.5 rounded-xl transition-all text-sm"
                    >
                      Voltar
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="flex-[2] relative overflow-hidden font-bold py-3.5 rounded-xl transition-all text-sm tracking-wider text-[#0a0500]"
                    style={{
                      background: "linear-gradient(135deg, #b8860b 0%, #d4a843 20%, #f5d680 45%, #ffe8a0 55%, #f5d680 70%, #d4a843 85%, #b8860b 100%)",
                      backgroundSize: "200% 200%",
                    }}
                  >
                    <span className="relative z-10">
                      {step === totalSteps ? "ENVIAR APLICAÇÃO" : "PRÓXIMO"}
                    </span>
                  </button>
                </div>
              </>
            )}

            {/* IBRACIV */}
            <div className="flex justify-center mt-10 md:mt-12 pb-4">
              <img src="/images/ibraciv_logo.png" alt="Ibraciv" className="h-6 opacity-20" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
