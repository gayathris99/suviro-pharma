'use client'

import { useRouter } from 'next/navigation'
import CategoryIcon from '@/components/ui/CategoryIcon'

const TINTS = {
  '#7c3aed': '#f3e8ff', '#6366f1': '#e0e7ff', '#2563eb': '#dbeafe',
  '#0891b2': '#cffafe', '#0d9488': '#ccfbf1', '#16a34a': '#dcfce7',
  '#65a30d': '#ecfccb', '#ca8a04': '#fef3c7', '#ea580c': '#ffedd5',
  '#dc2626': '#fee2e2', '#db2777': '#fce7f3', '#9333ea': '#f3e8ff',
  '#e11d48': '#ffe4e6', '#475569': '#f1f5f9', '#0f766e': '#ccfbf1',
  '#b45309': '#fef3c7',
}
const tintFor = (c) => TINTS[c] || '#eef2ff'

export default function DivisionCard({ category }) {
  const router = useRouter()

  function handleClick() {
    // Carry the chosen category to /products via sessionStorage
    // (keeps the URL clean; products page reads + clears it on mount)
    sessionStorage.setItem('suviro_category', category.id)
    router.push('/products')
  }

  return (
    <button className="division-card" onClick={handleClick}>
      <div className="division-circle" style={{ background: tintFor(category.color), color: category.color }}>
        <CategoryIcon name={category.icon} size={30} color={category.color} />
      </div>
      <div className="division-name">{category.name}</div>
      <div className="division-tagline">{category.tagline}</div>
      <div className="division-desc">{category.description}</div>
      <div className="division-cta">Explore →</div>
    </button>
  )
}