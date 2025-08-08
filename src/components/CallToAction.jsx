import { useRef } from 'react';

export default function CallToAction() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.style.animation = 'wiggle 0.5s ease-in-out';
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.animation = '';
        }
      }, 500);
    }
  }

  return (
    <section className="container mx-auto px-4 py-20 lg:pt-0 bg-white/60 backdrop-blur-sm">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div>
          <h2 className="text-2xl md:text-4xl text-gray-700">Ready to Explore Boca Grande?</h2>
          <p className="mt-4">Join us on this unforgettable adventure and discover the magic of Boca Grande!</p>
          <a 
            ref={buttonRef}
            href="https://amazon.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full h-[48px] w-[250px] mt-[32px] bg-gradient-to-r flex items-center justify-center text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-orange-500 hover:via-pink-600 hover:to-teal-500"
            style={{
              background: 'linear-gradient(90deg, #10b981, #06b6d4, #2dd4bf)',
              backgroundSize: '100% 100%',
              fontWeight: '1000',
            }}
          >
            Get Your Copy Now
          </a>
        </div>
        <div className="hidden lg:block">
          <img 
            src="/boca-grande/3dbocagrande_01.png" 
            alt="Call to Action Image" 
            className="mt-8 max-w-full h-auto lg:h-[80%] transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  )
}