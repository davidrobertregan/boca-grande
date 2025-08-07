export default function Hero() {
  return (
    <section id="history" className="container mx-auto px-4 py-20">
      <div className="flex justify-between ">
        <div className="flex flex-col justify-center items-center max-w-[500px] ml-[32px] mt-[100px]">
          <p className="text-center italic">"Join <b>Chico the cheeky monkey</b> as he guides you through an exciting ABC adventure in Boca Grande, Florida! From A for Alligator to Z for Ziggy the Pig, each page is packed with fun facts, local treasures, and hidden surprises..."</p>
          <a 
            href="https://amazon.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full h-[48px] w-[250px] mt-[32px] bg-gradient-to-r flex items-center justify-center font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-orange-500 hover:via-pink-600 hover:to-teal-500"
            style={{
              background: 'linear-gradient(90deg, #10b981, #06b6d4, #2dd4bf)',
              backgroundSize: '100% 100%',
            }}
          >
            Buy Now
          </a>
        </div>
        <div className="max-w-md relative">
          <img 
            src="/boca-grande/b-is-for-boca-screenshot.png" 
            alt="B is For Boca book cover" 
            className="w-full h-auto object-contain max-h-[600px] pr-8 fade-edges"
          />
        </div>
      </div>
    </section>
  )
}