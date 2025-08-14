import Header from './components/Header'
import Hero from './components/Hero'
import AuthorSection from './components/AuthorSection'
import CallToAction from './components/CallToAction'
import DescriptionAndHistory from './components/DescriptionAndHistory'
import Footer from './components/Footer'
import LaunchPopup from './components/LaunchPopup'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 fade-container">
        <Header />
        <Hero />
        <DescriptionAndHistory />
        <AuthorSection />
        <CallToAction />
        <Footer />
      </div>
      <LaunchPopup />
    </>
  )
}

export default App
