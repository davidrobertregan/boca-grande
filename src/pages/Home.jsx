import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-3xl md:text-5xl mb-8">Julie Horning</h1>
      <p className="mb-12">Children's book author. (Author hub — coming soon.)</p>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link to="/boca" className="px-8 py-4 rounded-full bg-white shadow-lg font-bold text-teal-600 border-2 border-teal-400 hover:scale-105 transition-all">
          B is for Boca Grande
        </Link>
        <Link to="/pickleball" className="px-8 py-4 rounded-full bg-white shadow-lg font-bold text-green-700 border-2 border-green-500 hover:scale-105 transition-all">
          P is for Pickleball
        </Link>
      </div>
    </div>
  )
}
