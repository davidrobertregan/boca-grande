export default function Hero() {
  return (
    <section id="history" className="mx-auto px-4 py-20 text-center backdrop-blur-sm pt-8">
      <div className="flex justify-around flex-wrap lg:flex-nowrap">
        <div className="order-1 pt-8 lg:order-0 lg:pt-0 flex flex-col justify-center items-center max-w-[500px] ml-[32px]">
          {/* CTA with Chico Image */}
          <div>
          <div className="hidden lg:block">
            <img 
              src="/boca-grande/chico-cart.png" 
              alt="B is For Boca book cover" 
            />
          </div>
          <p className="text-center italic">"Join <b>Chico the cheeky monkey</b> as he explores Boca Grande, Florida from A to Z..."</p>
          </div>
          <a 
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
            Buy Now
          </a>
        </div>
          {/* Book Cover Image */}
        <div className="flex justify-center items-center">
          <img 
            src="/boca-grande/b-is-for-boca-screenshot.png" 
            alt="B is For Boca book cover" 
            className="fade-edges max-w-[100%] md:max-w-[85%]"
          />
        </div>
      </div>
    </section>
  )
}