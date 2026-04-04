import { NextRequest, NextResponse } from "next/server"

export type MentoriaDTO = {
  nome: string
  email: string
  whatsapp: string
  momento_atual: string
  maior_desafio: string
  volume_venda_anual: string
  tamanho_equipe: string
  criado_em: string
}

export async function POST(req: NextRequest) {
  const body: MentoriaDTO = await req.json()

  // TODO: salvar no banco / enviar e-mail / integrar com CRM
  console.log("[mentoria] nova aplicação:", body)

  return NextResponse.json({ ok: true }, { status: 200 })
}
