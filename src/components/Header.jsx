export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg h-[100px] flex items-center">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="text-2xl font-bold text-purple-800">
            <img src="/boca-grande/b-is-for-boca-text.png" alt="B is For Boca" className="h-[100px]" />
          </div>
          
          {/* Navigation Links */}
      <div className="flex items-center space-x-4 md:space-x-8 gap-[12px]">
            <a 
              href="#author" 
              className="text-purple-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              About the Author
            </a>
            <a 
              href="#history" 
              className="text-purple-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              Learn the History
            </a>
            <a 
              href="https://amazon.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}