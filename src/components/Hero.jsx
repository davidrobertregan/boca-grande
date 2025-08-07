export default function Hero() {
  return (
    <section id="history" className="container mx-auto px-4 py-20">
      <div className="flex justify-between ">
        <div className="flex flex-col justify-center items-center grow">
          <button className="rounded-full h-[48px] w-[250px] mt-[250px]">Buy Now</button>
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