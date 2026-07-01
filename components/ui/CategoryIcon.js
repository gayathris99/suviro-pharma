import * as HealthIcons from 'healthicons-react'

export default function CategoryIcon({ name, size = 24, color = 'currentColor' }) {
  const Icon = HealthIcons[name]
  if (!Icon) {
    const Fallback = HealthIcons['MedicalSearch']
    return <Fallback width={size} height={size} fill={color} />
  }
  return <Icon width={size} height={size} fill={color} />
}