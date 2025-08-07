function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-purple-800 mb-6 tracking-wide">
          The Adventures of Luna
        </h1>
        <p className="text-2xl text-purple-600 mb-8 font-medium">
          A Magical Journey Through the Enchanted Forest
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            Join Luna, a curious little fox, as she discovers the wonders of friendship, 
            courage, and magic in her enchanted forest home.
          </p>
        </div>
      </header>

      {/* Book Cover Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl p-8 h-80 flex items-center justify-center shadow-xl">
              <p className="text-3xl font-bold text-orange-800">Book Cover Placeholder</p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-purple-800">About the Book</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Perfect for children ages 4-8, this beautifully illustrated story teaches 
              valuable lessons about kindness, bravery, and the importance of helping others.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span className="text-purple-700 font-medium">32 pages of colorful illustrations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="text-purple-700 font-medium">Perfect bedtime story</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <span className="text-purple-700 font-medium">Hand-drawn artwork</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="bg-white/60 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-800 mb-8">Meet the Author</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">👩‍🎨</span>
            </div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Author Name</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              A passionate storyteller who believes in the magic of childhood imagination 
              and the power of stories to inspire young minds.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Get Your Copy Today!</h2>
          <p className="text-xl mb-8 opacity-90">
            Available in hardcover, paperback, and digital formats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Preview Pages
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
