import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    console.log("[v0] Recebendo requisição de envio de email")
    const { name, email, message } = await request.json()
    console.log("[v0] Dados recebidos:", { name, email, messageLength: message?.length })

    // Validação básica
    if (!name || !email || !message) {
      console.log("[v0] Validação falhou - campos faltando")
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    // Verificar se a API key existe
    if (!process.env.RESEND_API_KEY) {
      console.log("[v0] ERRO: RESEND_API_KEY não configurada")
      return NextResponse.json({ error: "Configuração de email não encontrada" }, { status: 500 })
    }

    console.log("[v0] Enviando email via Resend...")

    // **CORREÇÃO: Usando Resend com importação correta**
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: "leonardooliveira2105@gmail.com", // Seu email de destino
        reply_to: email,
        subject: `Nova mensagem de ${name} - Portfolio`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Nova mensagem do seu portfolio</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Nome:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Mensagem:</strong></p>
              <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 14px;">Esta mensagem foi enviada através do formulário de contato do seu portfolio.</p>
          </div>
        `,
      }),
    })

    const responseData = await resendResponse.json()
    console.log("[v0] Resposta do Resend:", { status: resendResponse.status, data: responseData })

    if (!resendResponse.ok) {
      console.log("[v0] Erro ao enviar email:", responseData)
      return NextResponse.json(
        {
          error: `Erro ao enviar email: ${responseData.message || "Erro desconhecido"}`,
          details: responseData,
        },
        { status: resendResponse.status },
      )
    }

    console.log("[v0] Email enviado com sucesso!")
    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" })
  } catch (error) {
    console.error("[v0] Erro ao enviar email:", error)
    return NextResponse.json(
      {
        error: "Erro ao enviar mensagem. Tente novamente mais tarde.",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    )
  }
}