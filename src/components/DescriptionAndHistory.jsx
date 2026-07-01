export default function DescriptionAndHistory({ book }) {
  const { description, theme } = book

  return (
    <section
      id="learn"
      className="container mx-auto px-4 py-20 bg-white/60 backdrop-blur-sm"
      >

      <h1 className={`text-center text-2xl md:text-4xl ${theme.headingColor}`}>{description.heading}</h1>
      <div className="flex flex-wrap lg:flex-nowrap pt-[32px] justify-center">
        <div className="flex">
          <img
            src={description.img}
            alt={description.imgAlt}
            className={description.imgClass ?? 'fade-edges object-cover'}
            loading="lazy"
          />
        </div>
        <div className="p-4 sm:p-8 lg:pt-0 text-justify md:text-start">
          <h1 className="text-2xl p-0 sm:p-2">{description.subheading}</h1>
          <p className="pt-3" dangerouslySetInnerHTML={{ __html: description.bodyHtml }} />
        </div>
      </div>
    </section>
  )
}
