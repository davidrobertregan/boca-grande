import { useState, useEffect } from 'react';

export default function LaunchPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup was already shown today
    const lastShown = localStorage.getItem('launchPopupLastShown');
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (!lastShown || (now - parseInt(lastShown)) > oneDay) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Record when popup was shown
    localStorage.setItem('launchPopupLastShown', new Date().getTime().toString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] relative overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center sm:p-6">
            <img 
              src="/3dbocagrande_01.png" 
              alt="B is For Boca Grande Book Cover" 
              className="max-w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Text Side */}
          <div className="md:w-1/2 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
              🏝️ Launch Day is Here!
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                After a year of love and hard work, <span className='whitespace-nowrap'><strong>B is for Boca Grande</strong></span> launches next 
                <strong> Tuesday, Aug 19</strong> on Amazon 
                <span className="text-lg"> 🏝️🌅</span>
              </p>
              
              <p className="text-teal-600 font-semibold">
                (just $1.99 for the eBook!)
              </p>

              <p>
                It's my love letter to our happy place, and I'd be so grateful for your support:
              </p>

              <ul className="space-y-2 ml-4">
                <li>🌴 Grab the eBook on launch day</li>
                <li>📖 Read & enjoy</li>
                <li>⭐ Leave a review to share the magic!</li>
              </ul>

              <p className="text-purple-700 font-medium">
                Let's make Boca Grande sparkle together! 🐬☀️
              </p>

              <a 
                href="https://instagram.com/dreambocagrande" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-gradient-to-r from-orange-500 via-pink-600 to-teal-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-4"
                onClick={closePopup}
              >
                <svg className="w-5 h-5 mr-2 self-center" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow Me for Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}