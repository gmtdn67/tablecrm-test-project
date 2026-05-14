export function normalizePhone(value: string) {
    const digits = value.replace(/\D/g, "")

  if (!digits) {
    return "+7"
  }

  if (digits.startsWith("8")) {
    return `+7${digits.slice(1)}`
  }

  if (digits.startsWith("7")) {
    return `+${digits}`
  }

  return `+7${digits}`
}