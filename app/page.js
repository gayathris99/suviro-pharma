import Hero     from '@/components/sections/Hero'
import About    from '@/components/sections/About'
import Products from '@/components/sections/Products'
import Quality  from '@/components/sections/Quality'
import Contact  from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Quality />
      <Contact />
    </>
  )
}