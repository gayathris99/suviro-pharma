// ═══════════════════════════════════════════
// PUBLIC SITE — READ-ONLY DATABASE QUERIES
// ───────────────────────────────────────────
// The public site only READS. The admin app writes.
// Both share the same Neon database via DATABASE_URL.
// ═══════════════════════════════════════════

import { sql } from './db'

// All categories, ordered for display (used by /products dropdown)
export async function getCategories() {
  return await sql`
    SELECT id, name, tagline, description, icon, color, sort_order
    FROM categories
    ORDER BY sort_order, id
  `
}

// Top N categories by product count (used by the homepage divisions).
// Ties broken by sort_order then id for stable ordering.
export async function getTopCategories(limit = 4) {
  return await sql`
    SELECT
      c.id, c.name, c.tagline, c.description, c.icon, c.color, c.sort_order,
      COUNT(p.id)::int AS product_count
    FROM categories c
    LEFT JOIN products p ON p.category_id = c.id
    GROUP BY c.id
    ORDER BY product_count DESC, c.sort_order, c.id
    LIMIT ${limit}
  `
}

// All products, with their category name + color
export async function getProducts() {
  return await sql`
    SELECT
      p.id, p.category_id, p.brand_name, p.drug_name,
      p.composition, p.dosage_form, p.image_url, p.image_url_2,
      c.name  AS category_name,
      c.color AS category_color
    FROM products p
    LEFT JOIN categories c ON c.id = p.category_id
    ORDER BY p.brand_name
  `
}

// Products for one category
export async function getProductsByCategory(categoryId) {
  return await sql`
    SELECT id, brand_name, drug_name, composition, dosage_form, image_url, image_url_2
    FROM products
    WHERE category_id = ${categoryId}
    ORDER BY brand_name
  `
}