import Header from './components/Header'
import Hero from './components/Hero'
import AuthorSection from './components/AuthorSection'
import CallToAction from './components/CallToAction'
import DescriptionAndHistory from './components/DescriptionAndHistory'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <div className="fade-in-1"><Header /></div>
      <div className="fade-in-2"><Hero /></div>
      <div className="fade-in-3"><DescriptionAndHistory /></div>
      <div className="fade-in-4"><AuthorSection /></div>
      <div className="fade-in-5"><CallToAction /></div>
      <div className="fade-in-6"><Footer /></div>
    </div>
  )
}

export default App
