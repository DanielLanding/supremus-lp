"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"

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
  q6: string // conditional — liderança (flow imobiliária)
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
  "Corretor já estruturando sua própria operação",
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
      title: "Qual é o principal desafio da sua operação?",
      subtitle: "Escolha o ponto que mais limita o crescimento da sua imobiliária hoje.",
      field: "q3",
      options: [
        "Falta de previsibilidade no faturamento",
        "Dificuldade em formar e manter equipe produtiva",
        "Operação desorganizada (processos, gestão e acompanhamento)",
        "Baixa conversão e geração de clientes",
        "Estou vendendo bem, mas travado para escalar",
      ],
    },
    {
      title: "Qual foi o volume gerado em comissões nos últimos 3 meses? (VGC)",
      subtitle: "Considere o valor líquido da operação, já descontando as comissões dos corretores.",
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
      subtitle: "Considere os corretores ativos na sua operação hoje.",
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
        "Já estou me organizando para abrir minha própria operação",
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
      title: "Como você pretende iniciar sua operação?",
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
        "Já estou me organizando para iniciar uma operação",
      ],
    },
    {
      title: "Qual o capital disponível para investir na operação?",
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
      title: "Como você pretende estruturar sua operação imobiliária?",
      subtitle: "Considere o nível de estrutura que você imagina para iniciar.",
      field: "q5",
      options: [
        "Pretendo começar de forma enxuta, operando sem escritório",
        "Quero iniciar com estrutura simples e baixo custo",
        "Pretendo montar uma operação com equipe e estrutura básica",
        "Quero montar uma imobiliária estruturada com escritório físico",
        "Quero construir uma operação completa, com estrutura profissional desde o início",
      ],
    },
  ],
}

// Conditional question for imobiliária flow when equipe > 5
const LIDERANCA_STEP: StepDef = {
  title: "Você possui liderança estruturada?",
  subtitle: "Gerente ou coordenador responsável pela equipe.",
  field: "q6",
  options: [
    "Não, eu mesmo gerencio toda a operação",
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
  corretor:    ["Entre R$50 mil e R$100 mil", "Entre R$100 mil e R$200 mil", "Acima de R$200 mil"],
  investidor:  ["Entre R$50 mil e R$80 mil", "Entre R$80 mil e R$200 mil", "Entre R$200 mil e R$500 mil", "Acima de R$500 mil"],
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
  // Step 1 (dados) + Step 2 (momento) + flow steps
  return 2 + getSteps(flow, form).length
}

/* ─────────────────────────── Component ─────────────────────────── */

export function MentoriaModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [form, setForm] = useState<FormData>({
    nome: "", email: "", whatsapp: "", momento: "",
    q3: "", q4: "", q5: "", q6: "",
  })
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({})
  const bodyRef = useRef<HTMLDivElement>(null)

  const flow = getFlow(form.momento)
  const flowSteps = getSteps(flow, form)
  const totalSteps = getTotalSteps(flow, form)

  // Transition helper
  const transitionTo = useCallback((nextStep: number) => {
    setStep(nextStep)
  }, [])

  function openModal() {
    setOpen(true)
    setStep(1)
    setDone(false)
    setSubmitting(false)
    setAnimating(true)
    setForm({ nome: "", email: "", whatsapp: "", momento: "", q3: "", q4: "", q5: "", q6: "" })
    setErrors({})
    document.body.classList.add("modal-open")
    setTimeout(() => setAnimating(false), 300)
  }

  function closeModal() {
    setOpen(false)
    document.body.classList.remove("modal-open")
  }

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

  async function handleNext() {
    if (step === 1) {
      if (!validateStep1()) return
      setStep(2)
      return
    }

    if (step === 2) {
      if (!validateSelection("momento")) return
      // Reset flow-specific answers when changing flow
      setForm(f => ({ ...f, q3: "", q4: "", q5: "", q6: "" }))
      setStep(3)
      return
    }

    // Flow-specific steps (step 3+)
    const flowIndex = step - 3
    const currentFlowStep = flowSteps[flowIndex]
    if (!currentFlowStep) return

    if (!validateSelection(currentFlowStep.field)) return

    const isLastFlowStep = flowIndex === flowSteps.length - 1

    // Check if we need to add liderança step dynamically
    // (it gets added to flowSteps when q5 is answered with >5)
    if (isLastFlowStep) {
      // Check if we just answered q5 and need liderança
      if (
        flow === "imobiliaria" &&
        currentFlowStep.field === "q5" &&
        EQUIPE_ACIMA_5.includes(form.q5)
      ) {
        // liderança step will appear as next
        setStep(step + 1)
        return
      }

      // Show loading, submit, then show success
      setSubmitting(true)
      submitForm().then(() => {
        setTimeout(() => {
          setSubmitting(false)
          setDone(true)
        }, 1500)
      })
      return
    }

    setStep(step + 1)
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

    try {
      await fetch(WEBHOOKS[flow][webhookGroup], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      })
    } catch (error) {
      console.error("[mentoria] erro ao enviar webhook:", error)
      // silently fail — don't block UX
    }
  }

  function handleBack() {
    setErrors({})

    if (step === 3) {
      // Going back to momento — keep momento selected
      setStep(2)
      return
    }

    // Check if going back should skip liderança
    setStep(step - 1)
  }

  // Current flow step definition (for steps 3+)
  const currentFlowStep = step >= 3 ? flowSteps[step - 3] : null

  // Step title & subtitle for header
  function getHeaderContent(): { title: string; subtitle: string } {
    if (submitting) return { title: "Processando...", subtitle: "Aguarde enquanto enviamos sua aplicação." }
    if (done) return { title: "Aplicação realizada com sucesso!", subtitle: "" }
    if (step === 1) return {
      title: "Comece sua aplicação",
      subtitle: "Responda com atenção. Vamos entender seu momento para avaliar se a Supremus faz sentido para sua operação.",
    }
    if (step === 2) return {
      title: "Qual é o seu momento hoje?",
      subtitle: "Isso nos ajuda a entender seu nível de operação e direcionar melhor a análise da sua aplicação.",
    }
    if (currentFlowStep) return {
      title: currentFlowStep.title,
      subtitle: currentFlowStep.subtitle,
    }
    return { title: "", subtitle: "" }
  }

  const header = getHeaderContent()

  // Animation classes - simplified to a pure fade for smoother transitions
  const fadeClass = animating
    ? "opacity-0"
    : "opacity-100 transition-opacity duration-500 ease-in-out"

  if (!open) {
    return (
      <button
        onClick={openModal}
        className="gold-metallic-btn rounded-xl font-bold block w-full max-w-[550px] text-center py-4 px-6 md:p-[1.4rem] text-[16px] md:text-[21px] tracking-wide cursor-pointer"
            style={{ background: "linear-gradient(135deg, #b8860b 0%, #d4a843 15%, #f5d680 35%, #ffe8a0 50%, #f5d680 65%, #d4a843 85%, #b8860b 100%)", backgroundSize: "200% 200%", color: "#1a0f00" }}
      >
        QUERO A MENTORIA SUPREMUS
      </button>
    )
  }

  return (
    <>
      <button
        onClick={openModal}
        className="gold-metallic-btn rounded-xl font-bold block w-full max-w-[550px] text-center p-3 md:p-[1.4rem] text-[16px] md:text-[21px] tracking-wide cursor-pointer"
            style={{ background: "linear-gradient(135deg, #b8860b 0%, #d4a843 15%, #f5d680 35%, #ffe8a0 50%, #f5d680 65%, #d4a843 85%, #b8860b 100%)", backgroundSize: "200% 200%", color: "#1a0f00" }}
      >
        QUERO A MENTORIA SUPREMUS
      </button>

      {createPortal(
        <div
          data-modal-overlay
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="relative z-[9999] w-full max-w-lg bg-[#0f1f14] border border-[#D4A843]/20 rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">
            {/* Gold top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#D4A843] via-[#f4c264] to-[#D4A843]" />

            {/* Logo */}
            <div className="pt-5 flex justify-center">
              <img src="/images/Logo_symbol_supremus.png" alt="Supremus" className="h-12 w-auto" />
            </div>

            {/* Header */}
            <div className="px-6 pt-3 pb-2 flex items-start justify-between">
              <div className={`flex-1 ${fadeClass}`}>
                <p className="text-[#D4A843] text-xs font-bold tracking-widest uppercase mb-1">
                  Aplicação Supremus
                </p>
                <h2 className="text-white font-black text-xl leading-tight">
                  {header.title}
                </h2>
                {header.subtitle && (
                  <p className="text-white/40 text-[13px] mt-1.5 leading-snug">
                    {header.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="text-white/40 hover:text-white/80 transition-colors ml-4 shrink-0 mt-1"
                aria-label="Fechar"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            {!done && !submitting && (
              <div className="px-6 mt-2 mb-5">
                <div className="flex gap-1.5">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ease-out ${
                        i < step ? "bg-[#D4A843]" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white/30 text-[11px] mt-1.5">
                  Etapa {step} de {totalSteps}
                </p>
              </div>
            )}

            {/* Body */}
            <div ref={bodyRef} className="px-6 pb-6">
              <div className={fadeClass}>
                {submitting ? (
                  /* ── Loading screen ── */
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full border-[3px] border-white/10 border-t-[#D4A843] animate-spin" />
                    <p className="text-white/50 text-sm font-medium">
                      Enviando sua aplicação...
                    </p>
                  </div>
                ) : done ? (
                  /* ── Success screen ── */
                  <div className="flex flex-col items-center text-center py-4 gap-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#D4A843]/15 flex items-center justify-center animate-scaleIn">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Aplicação realizada com sucesso!</h3>
                      <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                        Sua aplicação será analisada pela equipe. Caso seu perfil esteja alinhado com a Supremus, você será direcionado para a próxima etapa.
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="mt-2 bg-[#D4A843] hover:bg-[#c49a3a] text-black font-bold py-3 px-8 rounded-xl transition-colors text-sm tracking-wide"
                    >
                      FECHAR
                    </button>
                  </div>
                ) : step === 1 ? (
                  /* ── Step 1: Dados pessoais ── */
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Nome completo</label>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                        className={`w-full bg-white/5 border ${errors.nome ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D4A843]/60 transition-colors`}
                      />
                      {errors.nome && <p className="text-red-400 text-xs mt-1">{errors.nome}</p>}
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">E-mail</label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className={`w-full bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D4A843]/60 transition-colors`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={form.whatsapp}
                        onChange={(e) => setForm((f) => ({ ...f, whatsapp: formatWhatsapp(e.target.value) }))}
                        className={`w-full bg-white/5 border ${errors.whatsapp ? "border-red-500" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#D4A843]/60 transition-colors`}
                      />
                      {errors.whatsapp && <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>}
                    </div>
                  </div>
                ) : step === 2 ? (
                  /* ── Step 2: Momento atual ── */
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
                  /* ── Flow-specific steps ── */
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

              {/* Footer buttons */}
              {!done && !submitting && (
                <div className="flex gap-3 mt-6">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                    >
                      Voltar
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-[#D4A843] hover:bg-[#c49a3a] text-black font-bold py-3 rounded-xl transition-colors text-sm tracking-wide"
                  >
                    {step === totalSteps ? "ENVIAR APLICAÇÃO" : "PRÓXIMO"}
                  </button>
                </div>
              )}

              {/* Ibraciv logo */}
              <div className="flex justify-center mt-5">
                <img src="/images/ibraciv_logo.png" alt="Ibraciv" className="h-7 opacity-40" />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
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
    <div className="flex flex-col gap-3">
      {error && <p className="text-red-400 text-[13px] font-medium -mt-1 mb-1">{error}</p>}
      {options.map((opcao, i) => {
        const isSelected = selected === opcao
        return (
          <button
            key={opcao}
            onClick={() => onSelect(opcao)}
            className={`w-full flex items-start text-left px-5 py-4 rounded-xl border text-[14px] md:text-[15px] font-medium transition-all duration-300 group ${
              isSelected
                ? "bg-[#D4A843]/10 border-[#D4A843] text-white"
                : "bg-white/[0.03] border-white/10 text-white/60 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            }`}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className={`mt-0.5 inline-flex w-[18px] h-[18px] rounded-full border mr-4 items-center justify-center shrink-0 transition-all duration-300 ${
              isSelected ? "border-[#D4A843] bg-[#D4A843] shadow-[0_0_10px_rgba(212,168,67,0.4)]" : "border-white/20 group-hover:border-white/40"
            }`}>
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
