export default function AuthorSection({ author, stickers = [], bioHtml }) {
  const authorStickers = stickers.filter((s) => s.section === 'author')
  const text = bioHtml ?? author.bioHtml

  return (
    <section
      id="author"
      className="container mx-auto px-4 py-20 backdrop-blur-sm relative">
      <div className="p-0 pt-4 md:p-8 sm:pt-0 text-justify md:text-start block md:flex md:flex-col">
        <h1 className="text-center text-2xl md:text-4xl w-full">Meet {author.name}</h1>
        <div className="flex justify-center flex-wrap lg:flex-nowrap pt-8">
        <div>
          <img
            src={author.photo}
            alt={`${author.name}, Author`}
            className="rounded-2xl mx-auto h-96 lg:h-96 lg:w-225 object-cover"
            loading="lazy"
          />
        </div>
        <p className="p-4 sm:p-8 lg:pt-0" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
      {authorStickers.map((s) => (
        <img key={s.src} src={s.src} alt={s.alt} className={s.className} loading="lazy" />
      ))}
    </section>
  )
}
