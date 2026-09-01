import { useState } from 'react'
import PageReveal from './components/PageReveal'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Services from './components/Services'
import Process from './components/Process'
import Technology from './components/Technology'
import About from './components/About'
import WhyMe from './components/WhyMe'
import Availability from './components/Availability'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <PageReveal onComplete={() => setRevealed(true)} />

      <div
        className="min-h-svh"
        style={{
          opacity: revealed ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <Navigation />

        <main>
          <Hero />

          {/* Thin section divider */}
          <div className="container-main">
            <div className="divider" />
          </div>

          <Capabilities />

          <div className="container-main">
            <div className="divider" />
          </div>

          <Services />

          <div className="container-main">
            <div className="divider" />
          </div>

          <Process />

          <div className="container-main">
            <div className="divider" />
          </div>

          <Technology />

          <div className="container-main">
            <div className="divider" />
          </div>

          <About />

          <div className="container-main">
            <div className="divider" />
          </div>

          <WhyMe />

          <div className="container-main">
            <div className="divider" />
          </div>

          <Availability />

          <CTA />
        </main>

        <Footer />
      </div>
    </>
  )
}
