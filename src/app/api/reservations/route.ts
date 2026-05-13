import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  console.log('[reservations] API key presente:', !!process.env.RESEND_API_KEY)

  const body = await req.json()
  const { name, email, phone, date, time, guests, notes } = body

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'D-Gothsublime@hotmail.com',
    subject: `Nova Reserva — ${name} · ${date} às ${time}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; background: #0A0A0A; color: #F5F0E8; padding: 40px 32px;">
        <p style="font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #C9A84C; margin: 0 0 24px;">Nova solicitação de reserva</p>
        <h1 style="font-size: 28px; font-style: italic; font-weight: 400; margin: 0 0 8px; color: #F5F0E8;">Alma Negra Bistrô</h1>
        <div style="width: 48px; height: 1px; background: #C9A84C; margin-bottom: 32px;"></div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: rgba(245,240,232,0.45); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; width: 40%;">Nome</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: #F5F0E8; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: rgba(245,240,232,0.45); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">E-mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: #F5F0E8; font-size: 14px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: rgba(245,240,232,0.45); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Telefone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: #F5F0E8; font-size: 14px;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: rgba(245,240,232,0.45); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Data</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: #C9A84C; font-size: 14px; font-style: italic;">${date}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: rgba(245,240,232,0.45); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Horário</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: #C9A84C; font-size: 14px; font-style: italic;">${time}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: rgba(245,240,232,0.45); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Pessoas</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(245,240,232,0.08); color: #F5F0E8; font-size: 14px;">${guests}</td>
          </tr>
          ${notes ? `
          <tr>
            <td style="padding: 10px 0; color: rgba(245,240,232,0.45); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; vertical-align: top;">Obs.</td>
            <td style="padding: 10px 0; color: rgba(245,240,232,0.6); font-size: 13px; line-height: 1.6;">${notes}</td>
          </tr>
          ` : ''}
        </table>

        <p style="margin-top: 40px; font-size: 11px; color: rgba(245,240,232,0.2); letter-spacing: 1px;">Alma Negra Bistrô · Sistema de reservas</p>
      </div>
    `,
  })

  if (error) {
    console.error('[reservations] Erro Resend:', JSON.stringify(error))
    return NextResponse.json({ error: error.message, detail: error }, { status: 500 })
  }

  console.log('[reservations] Enviado com sucesso:', data)
  return NextResponse.json({ success: true })
}
