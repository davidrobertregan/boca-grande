import Header from './components/Header'
import Hero from './components/Hero'
import AuthorSection from './components/AuthorSection'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <Header />
      <Hero />
      <AuthorSection />
      <CallToAction />
    </div>
  )
}

export default App
