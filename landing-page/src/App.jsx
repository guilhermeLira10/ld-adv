import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { FloatingWhatsapp } from './components/common/FloatingWhatsapp'
import { HeroSection } from './sections/HeroSection'
import { PracticeAreasSection } from './sections/PracticeAreasSection'
import { AboutSection } from './sections/AboutSection'
import { CtaSection } from './sections/CtaSection'
import { FaqSection } from './sections/FaqSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PracticeAreasSection />
        <AboutSection />
        <CtaSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}

export default App
