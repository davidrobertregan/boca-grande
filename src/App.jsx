import Header from './components/Header'
import Hero from './components/Hero'
import AuthorSection from './components/AuthorSection'
import CallToAction from './components/CallToAction'
import DescriptionAndHistory from './components/DescriptionAndHistory'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <Header />
      <Hero />
      <DescriptionAndHistory />
      <AuthorSection />
      <CallToAction />
    </div>
  )
}

export default App
