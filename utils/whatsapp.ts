// Punto único de contacto por WhatsApp para todo el sitio.
export const WHATSAPP_PHONE = '573123693829';

const DEFAULT_TEXT = 'Hola, quiero información sobre un servicio';

// URL base solicitada (teléfono + texto por defecto).
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=+${WHATSAPP_PHONE}&text=${encodeURIComponent(
  DEFAULT_TEXT
)}`;

// Construye una URL de WhatsApp con un mensaje personalizado (p. ej. desde un formulario).
// Si no se pasa mensaje, usa el texto por defecto.
export function buildWhatsappUrl(message?: string): string {
  const text = message && message.trim() ? message.trim() : DEFAULT_TEXT;
  return `https://api.whatsapp.com/send?phone=+${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}
