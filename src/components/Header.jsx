export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg flex items-center">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className="text-2xl font-bold text-purple-800">
            <img src="/b-is-for-boca-text.png" alt="B is For Boca" className="h-[86px]" loading="eager" />
          </div>
          
          {/* Navigation Links */}
      <div className="flex items-center space-x-4 space-x-8 gap-[12px]">
            <a 
              href="#author" 
              className="hidden md:inline-block text-purple-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              About the Author
            </a>
            <a 
              href="#learn" 
              className="hidden md:inline-block text-purple-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              Learn More
            </a>
            <a 
              href="https://amazon.com/dp/B0FMKQLH61" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 border-2 border-teal-400 hover:bg-blue px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{
                fontWeight: '800',
                padding: '12px 24px'
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}