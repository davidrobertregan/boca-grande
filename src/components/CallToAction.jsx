import { useRef } from 'react';

export default function CallToAction({ book }) {
  const { cta, theme, ctaBuyLink, stickers = [] } = book
  const ctaStickers = stickers.filter((s) => s.section === 'cta')
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
    <section className="container mx-auto px-4 py-20 mt-8 bg-white/60 backdrop-blur-sm relative">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div>
          <h2 className={`text-2xl md:text-4xl ${theme.headingColor}`}>{cta.heading}</h2>
          <p className="mt-4">{cta.text}</p>
          <a
            ref={buttonRef}
            href={ctaBuyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full h-[48px] w-full md:w-[250px] mt-[32px] bg-gradient-to-r flex items-center justify-center text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${theme.buyHover}`}
            style={{
              background: theme.buyGradient,
              backgroundSize: '100% 100%',
              fontWeight: '1000',
            }}
          >
            {cta.buttonLabel}
          </a>
        </div>
        <div className="hidden lg:block">
          <img
            src={cta.img}
            alt={cta.imgAlt}
            className={cta.imgClass ?? 'mt-8 max-w-full h-auto'}
            onClick={handleClick}
            loading="lazy"
          />
        </div>
      </div>
      {ctaStickers.map((s) => (
        <img key={s.src} src={s.src} alt={s.alt} className={s.className} loading="lazy" />
      ))}
    </section>
  )
}
