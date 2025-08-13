export default function DescriptionAndHistory() {
  return (
    <section 
      id="learn" 
      className="container mx-auto px-4 py-20 bg-white/60 backdrop-blur-sm"
      >

      <h1 className="text-center text-2xl md:text-4xl text-gray-700">Discover the Magic of Boca Grande from A to Z!</h1>
      <div className="flex flex-wrap lg:flex-nowrap pt-[32px] justify-center">
        <div className="flex">
          <img 
            src="/map.png" 
            alt="B is For Boca book cover" 
            className="fade-edges object-cover"
          />
        </div>
        <div className="p-0 pt-4 sm:p-8 sm:pt-0 text-justify md:text-start">
          <h1 className="text-2xl p-0 sm:p-2">Will you join Chico on an Adventure?</h1>
          <p>
            Join Chico the cheeky monkey as he guides you through an exciting ABC adventure in Boca Grande, Florida! 
            From A for Alligator to Z for Ziggy the Pig, each page is packed with fun facts, local treasures, 
            and hidden surprises.
          </p>
          <p>
            Explore sunny beaches, spot playful dolphins, and read about the legendary pirate José Gaspar's 
            hidden treasure. With every letter, kids will uncover the wonders of this special town, making it 
            a perfect read for young explorers aged 4-8.
          </p>
          <p>
            <b>Can you find all the hidden treasures as you learn your ABCs?</b> Let the adventure begin!
          </p>
        </div>
      </div>
    </section>
  )
}