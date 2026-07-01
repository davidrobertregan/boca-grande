import { Link } from 'react-router-dom'

export default function PicklePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-green-50 to-yellow-100 flex flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-3xl md:text-5xl mb-8">P is for Pickleball</h1>
      <p className="mb-12">Coming soon.</p>
      <Link to="/" className="text-green-700 underline">&larr; juliehorning.com</Link>
    </div>
  )
}
