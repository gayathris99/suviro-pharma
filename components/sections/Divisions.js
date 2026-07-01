import Link from 'next/link'
import { getTopCategories } from '@/lib/queries'
import DivisionCard from './DivisionCard'
import './Divisions.css'

export default async function Divisions() {
  const categories = await getTopCategories(4)

  return (
    <section className="section divisions">
      <div className="container">

        <div className="divisions-head">
          <div>
            <span className="eyebrow">Therapeutic Divisions</span>
            <h2 className="section-title">
              Four specialised branches.<br />
              One standard of care.
            </h2>
          </div>
          <Link href="/products" className="divisions-link">
            View full product list →
          </Link>
        </div>

        <div className="divisions-grid">
          {categories.map((c) => (
            <DivisionCard key={c.id} category={c} />
          ))}
        </div>

      </div>
    </section>
  )
}