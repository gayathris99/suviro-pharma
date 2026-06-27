import Hero     from '@/components/sections/Hero'
import ValuesBar from '@/components/sections/ValuesBar'
import Divisions from '@/components/sections/Divisions'
import HowWeWork from '@/components/sections/HowWeWork'
import ClinicianVoices from '@/components/sections/ClinicianVoices'
import NationalReach from '@/components/sections/NationalReach'
import Faq from '@/components/sections/Faq'
import Promise from '@/components/sections/Promise'

export default function Home() {
  return (
    <>
      <Hero />
      <ValuesBar/>
      <Divisions/>
      <HowWeWork/>
      <ClinicianVoices/>
      <NationalReach/>
      <Faq/>
      <Promise/>
    </>
  )
}