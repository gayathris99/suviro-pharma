import Link from 'next/link'
import Image from 'next/image'
import './Products.css'

// ── Dummy data ──
// Later this will be fetched from the database via API
// Only showing top 4 categories on the landing page
const categories = [
  {
    id:          1,
    name:        'Neuro Sciences',
    slug:        'neuro-sciences',
    description: 'Comprehensive range covering neuropathic care, migraine management, and neuro vitamins.',
    subCount:    4,
    color:       '#5B3DC4',
    catColor:    { bg: '#EEEDFE', text: '#3C3489' },
    image:       'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
  },
  {
    id:          2,
    name:        'Cardio Care',
    slug:        'cardio-care',
    description: 'Lipid management, antiplatelets, and hypertension formulations for cardiac health.',
    subCount:    4,
    color:       '#E05040',
    catColor:    { bg: '#FCEBEB', text: '#791F1F' },
    image:       'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
  },
  {
    id:          3,
    name:        'Nephro Care',
    slug:        'nephro-care',
    description: 'CKD management, phosphate binders, and renal nutrition support formulations.',
    subCount:    4,
    color:       '#2898D0',
    catColor:    { bg: '#E6F1FB', text: '#0C447C' },
    image:       'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80',
  },
  {
    id:          4,
    name:        'Gastro Care',
    slug:        'gastro-care',
    description: 'Acid suppression, hepatology, and digestive health solutions.',
    subCount:    4,
    color:       '#D0A028',
    catColor:    { bg: '#FAEEDA', text: '#633806' },
    image:       'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&q=80',
  },
]

export default function Products() {
  return (
    <section className="products" id="products">

      {/* ── Header ── */}
      <div className="products-header">
        <div>
          <div className="section-tag">Our Portfolio</div>
          <h2 className="section-title">
            Therapeutic <em>categories</em>
          </h2>
        </div>
        <Link href="/products" className="view-all-btn">
          View All Categories →
        </Link>
      </div>

      {/* ── Cards grid ── */}
      <div className="products-grid">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href="/products"
            className="product-card"
          >
            {/* Top colour bar */}
            <div
              className="product-card-bar"
              style={{ background: cat.color }}
            />

            {/* Image */}
            <div className="product-card-image">
              <Image
                src={cat.image}
                alt={cat.name}
                width={600}
                height={160}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                unoptimized
              />
            </div>

            {/* Body */}
            <div className="product-card-body">
              <span
                className="product-card-cat"
                style={{
                  background: cat.catColor.bg,
                  color:      cat.catColor.text,
                }}
              >
                {cat.name}
              </span>

              <div className="product-card-name">{cat.name}</div>
              <p className="product-card-desc">{cat.description}</p>

              <div className="product-card-footer">
                <span className="product-card-sub-count">
                  <strong>{cat.subCount}</strong> subcategories
                </span>
                <span className="product-card-link">View →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}