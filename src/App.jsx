import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BocaPage from './pages/BocaPage'
import PicklePage from './pages/PicklePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boca" element={<BocaPage />} />
      <Route path="/pickleball" element={<PicklePage />} />
    </Routes>
  )
}

export default App
