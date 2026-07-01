export default function Hero({ book }) {
  const { hero, theme, buyLink } = book

  const onClick = (e) => {
    e.target.style.animation = 'wiggle 0.5s ease-in-out';
    setTimeout(() => {
      e.target.style.animation = '';
    }, 500);
  }

  return (
    <section id="history" className="mx-auto px-4 py-20 text-center backdrop-blur-sm pt-8">
      <div className={hero.rowClass ?? 'flex justify-around flex-wrap lg:flex-nowrap'}>
        <div className="order-1 pt-8 lg:order-0 lg:pt-0 flex flex-col justify-center items-center max-w-[500px]">
          {/* CTA with cart image */}
          <div>
          <div id="chicoCart" className="hidden lg:block">
            <img
              src={hero.cartImg}
              alt={hero.cartAlt}
              onClick={onClick}
              className={`transition-transform duration-300 hover:scale-110 hover:rotate-2 cursor-pointer ${hero.cartImgClass ?? ''}`}
            />
          </div>
          <p className="text-center italic" dangerouslySetInnerHTML={{ __html: hero.taglineHtml }} />
          </div>
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full h-[48px] w-full md:w-[250px] mt-[32px] bg-gradient-to-r flex items-center justify-center text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${theme.buyHover}`}
            style={{
              background: theme.buyGradient,
              backgroundSize: '100% 100%',
              fontWeight: '1000',
            }}
          >
            {hero.buyLabel}
          </a>
        </div>
          {/* Book Cover Image */}
        <div className={hero.coverWrapClass ?? 'flex justify-center lg:justify-end items-center'}>
          <img
            src={hero.coverImg}
            alt={hero.coverAlt}
            className={hero.coverImgClass ?? 'fade-edges max-w-[100%] md:max-w-[85%]'}
          />
        </div>
      </div>
    </section>
  )
}
