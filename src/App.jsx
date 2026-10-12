import { Header } from './shared/components/Header'
import { Footer } from './shared/components/Footer'
import { Hero } from './features/home/components/Hero'
import { Services } from './features/home/components/Services'
import { Team } from './features/home/components/Team'
import { Gallery } from './features/home/components/Gallery'
import { About } from './features/home/components/About'
import { Contact } from './features/home/components/Contact'

function App() {
  return (
    <div className="bg-background text-text">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
