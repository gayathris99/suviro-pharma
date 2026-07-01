import { getCategories, getProducts } from '@/lib/queries'
import ProductsView from '@/components/products/ProductsView'
import './products.css'

export const metadata = {
  title: 'Products — Suviro Pharmalife',
  description: 'Explore our range of pharmaceutical formulations across neuro, nephro, cardio and gastro therapeutic divisions.',
}

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ])

  return <ProductsView categories={categories} products={products} />
}