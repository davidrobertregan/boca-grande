export default function AuthorSection() {
  return (
    <section 
      id="author" 
      className="container mx-auto px-4 py-20 backdrop-blur-sm relative">
      <div className="p-0 pt-4 md:p-8 sm:pt-0 text-justify md:text-start block md:flex md:flex-col">
        <h1 className="text-center text-2xl md:text-4xl w-full">Meet Julie Horning</h1>
        <div className="flex justify-center flex-wrap lg:flex-nowrap pt-8">
        <div>
          <img 
            src="/author.png" 
            alt="Julie Horning, Author of B is For Boca" 
            className="rounded-2xl mx-auto h-96 lg:h-auto"
            loading="lazy"
          />
        </div>
        <p className="p-4 sm:p-8 lg:pt-0">
          <b>Julie Horning</b> (or JuJu as her grandchildren call her) is a real estate agent, proud mother and grandmother, and former leader in the direct selling world, where she built teams and empowered women. 
          <br /><br />
          Inspired by her love for Boca Grande, a charming town on Gasparilla Island, she wrote "B is for Boca Grande", a children's alphabet book celebrating its beauty and history. 
          <br /><br />
          Julie has also been actively involved in nonprofit work, frequently supporting women and children. She and her husband, Dan, <b>now call Boca Grande home</b>, where community and connection remain at the heart of all she does.
        </p>
        </div>
      </div>
      {/* Gator Sticker */}
      <img
        src="gator.png" 
        alt="Gator Sticker"
        className="absolute object-contain z-10 right-[29%] 
          m-auto w-40 h-40 top-[-75px]
          md:m-0 md:w-50 md:h-50 md:top-[-115px] md:right-0
          lg:w-65 lg:h-65"
        loading="lazy"
      />
    </section>
  )
}