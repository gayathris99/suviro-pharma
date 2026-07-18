'use client'

import { useState, useEffect } from 'react'
import CategoryIcon from '@/components/ui/CategoryIcon'
import { optimizeCloudinary } from '@/lib/cloudinaryUrl'

const TINTS = {
  '#7c3aed': '#f3e8ff', '#6366f1': '#e0e7ff', '#2563eb': '#dbeafe',
  '#0891b2': '#cffafe', '#0d9488': '#ccfbf1', '#16a34a': '#dcfce7',
  '#65a30d': '#ecfccb', '#ca8a04': '#fef3c7', '#ea580c': '#ffedd5',
  '#dc2626': '#fee2e2', '#db2777': '#fce7f3', '#9333ea': '#f3e8ff',
  '#e11d48': '#ffe4e6', '#475569': '#f1f5f9', '#0f766e': '#ccfbf1',
  '#b45309': '#fef3c7',
}
const tintFor = (c) => TINTS[c] || '#eef2ff'

export default function ProductsView({ categories, products }) {
  const [selectedCat, setSelectedCat] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const stored = sessionStorage.getItem('suviro_category')
    if (stored) {
      const id = parseInt(stored)
      if (categories.some((c) => c.id === id)) setSelectedCat(id)
      sessionStorage.removeItem('suviro_category')
    }
  }, [categories])

  const filtered = products.filter((p) => {
    const matchesCat = selectedCat === 'all' || p.category_id === selectedCat
    const q = search.trim().toLowerCase()
    const matchesSearch =
      !q ||
      p.brand_name.toLowerCase().includes(q) ||
      p.drug_name.toLowerCase().includes(q)
    return matchesCat && matchesSearch
  })

  const activeCat = categories.find((c) => c.id === selectedCat)

  return (
    <section className="section products-page">
      <div className="container">

        <div className="products-head">
          <span className="eyebrow">Our Products</span>
          <h1 className="section-title">Formulations across every division.</h1>
          <p className="products-sub">
            A curated portfolio of evidence-based molecules, organised by therapeutic area.
          </p>
        </div>

        <div className="products-toolbar">
          <div className="cat-select-wrap">
            <select
              className="cat-select"
              value={selectedCat}
              onChange={(e) => {
                const v = e.target.value
                setSelectedCat(v === 'all' ? 'all' : parseInt(v))
              }}
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="product-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              placeholder="Search by brand or molecule…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="products-meta">
          {activeCat && (
            <span className="active-chip" style={{ background: tintFor(activeCat.color), color: activeCat.color }}>
              <CategoryIcon name={activeCat.icon} size={15} color={activeCat.color} />
              {activeCat.name}
            </span>
          )}
          <span className="result-count">
            {filtered.length} product{filtered.length === 1 ? '' : 's'}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="products-empty">
            No products found. Try a different category or search term.
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map((p) => (
              <article key={p.id} className="product-card">
                <div className="product-photo">
                  {p.image_url
                    ? <img src={optimizeCloudinary(p.image_url, 800)} alt={p.brand_name} />
                    : <div className="product-photo-ph" />}
                </div>
                <div className="product-card-body">
                  {p.category_name && (
                    <span className="product-cat" style={{ background: tintFor(p.category_color), color: p.category_color }}>
                      {p.category_name}
                    </span>
                  )}
                  <h3 className="product-brand">{p.brand_name}</h3>
                  <p className="product-drug">{p.drug_name}</p>

                  <div className="product-divider" />

                  <div className="product-detail">
                    <span className="product-detail-label">Composition</span>
                    <p className="product-comp">{p.composition}</p>
                  </div>

                  <div className="product-detail--inline">
                    <span className="product-detail-label">Dosage Form</span>
                    <span className="product-form">{p.dosage_form}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}