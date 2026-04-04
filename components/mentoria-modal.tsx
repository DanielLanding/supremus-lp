"use client"

import { useState } from "react"
import { createPortal } from "react-dom"

type FormData = {
  nome: string
  email: string
  whatsapp: string
  q1: string
  q2: string
  q3: string
  q4: string
}

type MentoriaDTO = {
  name: string
  email: string
  whatsapp: string
  momento_atual: string
  maior_desafio: string
  volume_venda_anual: string
  tamanho_equipe: string
}

function buildDTO(form: FormData): MentoriaDTO {
  return {
    name: form.nome,
    email: form.email,
    whatsapp: form.whatsapp,
    momento_atual: form.q1,
    maior_desafio: form.q2,
    volume_venda_anual: form.q3,
    tamanho_equipe: form.q4,
  }
}

const QUESTIONS = [
  {
    id: "q1" as const,
    pergunta: "Qual é o seu momento atual no mercado imobiliário?",
    opcoes: [
      "Corretor querendo empreender",
      "Investidor querendo empreender neste mercado",
      "Gestor / dono de imobiliária",
      "Gestor de equipe dentro de imobiliária",
    ],
  },
  {
    id: "q2" as const,
    pergunta: "Qual é o seu maior desafio hoje na operação?",
    opcoes: [
      "Falta de previsibilidade no faturamento",
      "Dificuldade em escalar e formar equipe",
      "Ausência de processos e sistemas",
      "Baixa conversão e captação de clientes",
    ],
  },
  {
    id: "q3" as const,
    pergunta: "Qual seu volume médio de venda anual?",
    opcoes: [
      "Entre 1 e 5 milhões",
      "Entre 5 e 20 milhões",
      "Entre 20 e 50 milhões",
      "Mais que 50 milhões",
    ],
  },
  {
    id: "q4" as const,
    pergunta: "Qual o tamanho da sua equipe de corretores hoje?",
    opcoes: [
      "Ainda não tenho",
      "Entre 1 e 5",
      "Entre 5 e 20",
      "Mais que 20",
    ],
  },
]

const TOTAL_STEPS = 5

function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function MentoriaModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  function openModal() {
    setOpen(true)
    setStep(1)
    setDone(false)
    setForm({ nome: "", email: "", whatsapp: "", q1: "", q2: "", q3: "", q4: "" })
    setErrors({})
    document.body.classList.add("modal-open")
  }

  function closeModal() {
    setOpen(false)
    document.body.classList.remove("modal-open")
  }

  function validateStep1() {
    const e: typeof errors = {}
    if (!form.nome.trim()) e.nome = "Informe seu nome"
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Informe um e-mail válido"
    if (form.whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "Informe um WhatsApp válido"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function validateQuestion(qId: "q1" | "q2" | "q3" | "q4") {
    if (!form[qId]) {
      setErrors({ [qId]: "Selecione uma opção para continuar" })
      return false
    }
    setErrors({})
    return true
  }

  function handleNext() {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateQuestion("q1")) return
    if (step === 3 && !validateQuestion("q2")) return
    if (step === 4 && !validateQuestion("q3")) return
    if (step === 5) {
      if (!validateQuestion("q4")) return
      const dto = buildDTO(form)
      console.log("[mentoria] payload:", JSON.stringify(dto, null, 2))
      // TODO: enviar para webhook
      // await fetch("https://seu-webhook.com", { method: "POST", body: JSON.stringify(dto) })
      setDone(true)
      return
    }
    setStep((s) => s + 1)
  }

  function handleBack() {
    setErrors({})
    setStep((s) => s - 1)
  }

  const currentQuestion = QUESTIONS[step - 2]

  return (
    <>
      {/* ── Trigger Button ── */}
      <button
        onClick={openModal}
        className="bg-[#f4c264] hover:bg-[#eab34e] text-black rounded-xl font-bold transition-colors block w-full max-w-[550px] text-center p-3 md:p-[1.4rem] text-[16px] md:text-[21px] tracking-wide cursor-pointer"
      >
        QUERO A MENTORIA SUPREMUS
      </button>

      {/* ── Backdrop (portal → direto no body, fora da árvore que recebe blur) ── */}
      {open && createPortal(
        <div
          data-modal-overlay
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          {/* ── Modal Card ── */}
          <div className="relative z-[9999] w-full max-w-lg bg-[#0f1f14] border border-[#D4A843]/20 rounded-2xl shadow-2xl overflow-hidden">

            {/* Gold top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#D4A843] via-[#f4c264] to-[#D4A843]" />

            {/* Logo */}
            <div className="pt-5 flex justify-center">
              <img src="/images/Logo_symbol_supremus.png" alt="Supremus" className="h-12 w-auto" />
            </div>

            {/* Header */}
            <div className="px-6 pt-3 pb-4 flex items-center justify-between">
              <div>
                <p className="text-[#D4A843] text-xs font-bold tracking-widest uppercase mb-1">
                  Aplicação Mentoria Supremus
                </p>
                <h2 className="text-white font-black text-xl leading-tight">
                  {done ? "Aplicação recebida!" : step === 1 ? "Fale um pouco sobre você" : currentQuestion.pergunta}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-white/40 hover:text-white/80 transition-colors ml-4 shrink-0"
                aria-label="Fechar"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            {!done && (
              <div className="px-6 mb-6">
                <div className="flex gap-1.5">
                  {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < step ? "bg-[#D4A843]" : "bg-white/10"}`}
                    />
                  ))}
                </div>
                <p className="text-white/30 text-[11px] mt-1.5">
                  Etapa {step} de {TOTAL_STEPS}
                </p>
              </div>
            )}

            {/* Body */}
            <div className="px-6 pb-6">
              {done ? (
                /* ── Success screen ── */
                <div className="flex flex-col items-center text-center py-4 gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4A843]/15 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                    Recebemos sua aplicação. Em breve você receberá um e-mail confirmando sua aplicação, e se aprovado seu perfil nossa equipe entrará em contato com você pelo WhatsApp.
                  </p>
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
              ) : (
                /* ── Steps 2-5: Questions ── */
                <div className="flex flex-col gap-3">
                  {errors[currentQuestion.id] && (
                    <p className="text-red-400 text-xs -mt-1">{errors[currentQuestion.id]}</p>
                  )}
                  {currentQuestion.opcoes.map((opcao) => {
                    const selected = form[currentQuestion.id] === opcao
                    return (
                      <button
                        key={opcao}
                        onClick={() => {
                          setForm((f) => ({ ...f, [currentQuestion.id]: opcao }))
                          setErrors({})
                        }}
                        className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
                          selected
                            ? "bg-[#D4A843]/15 border-[#D4A843] text-[#f4c264]"
                            : "bg-white/5 border-white/10 text-white/70 hover:border-white/25 hover:text-white"
                        }`}
                      >
                        <span className={`inline-flex w-5 h-5 rounded-full border mr-3 items-center justify-center shrink-0 transition-all ${selected ? "border-[#D4A843] bg-[#D4A843]" : "border-white/20"}`}>
                          {selected && (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2 2 4-4" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        {opcao}
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Footer buttons */}
              {!done && (
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
                    {step === TOTAL_STEPS ? "ENVIAR" : "PRÓXIMO"}
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
