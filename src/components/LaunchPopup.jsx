import { useState, useEffect } from 'react';

export default function LaunchPopup() {
  const [isVisible, setIsVisible] = useState(true);

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
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
            <img 
              src="/b-is-for-boca-screenshot.png" 
              alt="B is For Boca Grande Book Cover" 
              className="max-w-full h-auto max-h-80 object-contain"
            />
          </div>

          {/* Text Side */}
          <div className="md:w-1/2 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
              🏝️ Launch Day is Here! 🌅
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                After a year of love and hard work, <strong>B is for Boca Grande</strong> launches next 
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
                <li>⭐ Leave a review so others can discover it too</li>
              </ul>

              <p className="text-purple-700 font-medium">
                Let's make Boca Grande sparkle together! 🐬☀️
              </p>

              <a 
                href="https://amazon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 via-pink-600 to-teal-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-4"
                onClick={closePopup}
              >
                Get the eBook on Amazon 📚
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}