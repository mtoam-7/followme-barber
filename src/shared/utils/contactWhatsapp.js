import { SITE } from '../constants/site'

/* Construye un link de WhatsApp */

export function buildWhatsappLink(message) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function whatsappForService(serviceName) {
  return buildWhatsappLink(
    `Hola, me gustaría reservar el servicio "${serviceName}".`
  )
}

export function whatsappForBarber(barberName) {
  return buildWhatsappLink(
    `Hola, me gustaría agendar una cita con ${barberName}.`
  )
}

export function whatsappGeneral() {
  return buildWhatsappLink('Hola, me gustaría reservar una cita.')
}