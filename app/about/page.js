import CategoryIcon from '@/components/ui/CategoryIcon'
import './about.css'

export const metadata = {
  title: 'About Us — Suviro Pharmalife',
  description: 'Suviro Pharmalife is a pharmaceutical marketing organization connecting reputable manufacturers with healthcare providers — built on ethics, quality, and patient-first care.',
}

const CERTIFICATIONS = [
  { title: 'WHO-GMP', desc: 'Good Manufacturing Practices — the global benchmark for pharmaceutical manufacturing quality.' },
  { title: 'ISO 9001:2015', desc: 'Quality Management Systems certification ensuring consistent, controlled processes.' },
  { title: 'FSSAI Compliance', desc: 'For relevant nutritional and nutraceutical products, meeting food safety standards.' },
  { title: 'Schedule Drug Regulations', desc: 'Strict adherence to local drug authority guidelines and controlled-substance rules.' },
]

const SUPPLY_CHAIN = [
  { icon: 'BloodDrop', title: 'Temperature-Controlled Logistics', desc: 'Ensuring cold-chain integrity for sensitive formulations from facility to clinic.' },
  { icon: 'MedicalSearch', title: 'Strategic Warehousing', desc: 'Centrally located hubs to minimize transit times and prevent stock-outs.' },
  { icon: 'Pill1', title: 'Tamper-Proof Packaging', desc: 'High-grade Alu-Alu and blister packaging designed to withstand varying tropical climates and maintain shelf-life stability.' },
]

const VALUES = [
  { name: 'Quality', desc: 'We only offer products that meet strict safety standards and genuinely support patient recovery.', color: '#7c3aed' },
  { name: 'Ethics', desc: 'Compliance, integrity, and transparency dictate how we operate every day.', color: '#2563eb' },
  { name: 'Empathy', desc: 'We understand that healthcare is deeply personal, and we approach the challenges of patients and providers with true compassion.', color: '#0891b2' },
  { name: 'Responsibility', desc: 'We view ourselves as an active part of the healthcare ecosystem, dedicated to doing right by the communities we serve.', color: '#16a34a' },
  { name: 'Excellence', desc: 'We are constantly pushing to improve our services, refine our product line, and better serve our clients.', color: '#ca8a04' },
]

export default function About() {
  return (
    <div className="about-page">

      {/* ── Intro ── */}
      <section className="section about-intro">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1 className="section-title about-title">Who we are.</h1>
          <div className="about-lead">
            <p>
              Suviro Pharmalife is a dedicated pharmaceutical marketing organization.
              We connect reputable manufacturers with the healthcare providers who
              need their products most.
            </p>
            <p>
              Our goal is simple: to bridge the gap between pharmaceutical innovation
              and actual patient care by making sure safe, effective, and affordable
              medicines are always within reach. We firmly believe that sustainable
              business success is only possible when it is built on a foundation of
              ethics, clear communication, and mutual trust.
            </p>
            <p>
              Every single product in our portfolio is carefully vetted for quality,
              regulatory compliance, and real therapeutic value before it ever reaches
              a clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section about-values">
        <div className="container">
          <div className="values-head">
            <span className="eyebrow">Our Core Values</span>
            <h2 className="section-title">What we stand for.</h2>
          </div>
          <div className="core-values-grid">
            {VALUES.map((v, i) => (
              <div key={v.name} className="core-value">
                <div className="core-value-num" style={{ color: v.color }}>
                  0{i + 1}
                </div>
                <div className="core-value-name">{v.name}</div>
                <div className="core-value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section about-vm">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <span className="vm-label">Our Vision</span>
              <p className="vm-text">
                To be the healthcare partner doctors and institutions turn to first —
                recognized for our uncompromising quality, ethical boundaries, and
                patient-first mindset.
              </p>
            </div>
            <div className="vm-card vm-card--dark">
              <span className="vm-label">Our Mission</span>
              <p className="vm-text">
                To deliver reliable pharmaceutical options through honest business
                practices, active scientific dialogue, and meaningful partnerships
                that move patient care forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="section about-certs">
        <div className="container">
          <div className="certs-head">
            <span className="eyebrow">Regulatory Compliance &amp; Certifications</span>
            <h2 className="section-title">Quality assurance isn't a goal — it's our baseline.</h2>
            <p className="certs-sub">
              Our manufacturing partners operate out of state-of-the-art facilities
              certified by leading regulatory bodies. We strictly adhere to:
            </p>
          </div>
          <div className="certs-grid">
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="cert-card">
                <div className="cert-check">
                  <CategoryIcon name="MedicalSearch" size={20} color="#16a34a" />
                </div>
                <div>
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Guarantee ── */}
      <section className="section about-guarantee">
        <div className="container">
          <span className="eyebrow">Our Quality Guarantee</span>
          <h2 className="section-title">Integrity you can trust.</h2>
          <p className="guarantee-text">
            We don't take chances with product integrity. Every medication we market
            comes from vetted manufacturing facilities that strictly follow
            international quality and regulatory codes — ensuring complete peace of
            mind for both the doctors prescribing them and the patients taking them.
          </p>
        </div>
      </section>

      {/* ── Supply Chain ── */}
      <section className="section about-supply">
        <div className="container">
          <div className="supply-head">
            <span className="eyebrow">Supply Chain &amp; Distribution Excellence</span>
            <h2 className="section-title">Available when a patient needs it.</h2>
            <p className="supply-sub">
              A great product is only useful if it's available when a patient needs it.
              We have built a highly reliable logistics network featuring:
            </p>
          </div>
          <div className="supply-grid">
            {SUPPLY_CHAIN.map((s) => (
              <div key={s.title} className="supply-card">
                <div className="supply-icon">
                  <CategoryIcon name={s.icon} size={24} color="#2563eb" />
                </div>
                <div className="supply-title">{s.title}</div>
                <div className="supply-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="section about-cta">
        <div className="container">
          <div className="cta-inner">
            <h2 className="cta-title">Building healthier communities, together.</h2>
            <p className="cta-text">
              Whether you're a healthcare professional, a distribution partner, or an
              institution seeking dependable pharmaceutical solutions — we'd be glad to
              work with you.
            </p>
            <div className="cta-actions">
              <a href="/products" className="cta-btn cta-btn--primary">Explore Our Products</a>
              <a href="/contact" className="cta-btn cta-btn--ghost">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}