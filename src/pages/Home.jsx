import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import usePageTitle from '../hooks/usePageTitle'
import { author } from '../data/author'
import { books } from '../data/books'

const bookList = [books.boca, books.pickleball]

function BookCard({ book }) {
  const { card, shortTitle, path } = book
  return (
    <Link
      to={path}
      className="group flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full max-w-sm border border-gray-100"
    >
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={card.cover}
          alt={shortTitle}
          className="max-h-64 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 text-center">
        <h3 className={`text-2xl font-bold ${card.accent}`}>{shortTitle}</h3>
        <p className="mt-3 text-gray-600 flex-1">{card.blurb}</p>
        <span
          className={`mt-6 inline-block self-center px-6 py-3 rounded-full text-white font-bold shadow ${card.accentBg} group-hover:scale-105 transition-transform duration-300`}
        >
          {card.ctaLabel}
        </span>
      </div>
    </Link>
  )
}

export default function Home() {
  usePageTitle('Julie Horning — Children\'s Book Author')
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-sky-50 flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            {author.name}
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/boca" className="hidden sm:inline-block text-gray-600 hover:text-teal-600 font-medium transition-colors">
              B is for Boca
            </Link>
            <Link to="/pickleball" className="hidden sm:inline-block text-gray-600 hover:text-green-600 font-medium transition-colors">
              P is for Pickleball
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-100 to-teal-50">
        <div className="container mx-auto px-4 py-20 md:py-28 text-center">
          <p className="text-teal-600 font-semibold tracking-widest uppercase text-sm">Children's Book Author</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mt-3">{author.name}</h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Playful picture books that turn the alphabet into an adventure &mdash; from the beaches of
            Boca Grande to the pickleball court.
          </p>
          <a
            href="#books"
            className="mt-10 inline-block px-8 py-4 rounded-full bg-teal-500 text-white font-bold shadow-lg hover:bg-teal-600 hover:scale-105 transition-all duration-300"
          >
            Explore the books
          </a>
        </div>
      </section>

      {/* Books (middle) */}
      <section id="books" className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">My Books</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {bookList.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      {/* Author bio (bottom) */}
      <section className="bg-gradient-to-b from-teal-50 to-teal-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">Meet the Author</h2>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <img
              src={author.photo}
              alt={author.name}
              className="rounded-3xl shadow-xl h-72 w-72 md:h-96 md:w-96 object-cover shrink-0"
              loading="lazy"
            />
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-600 max-w-xl" dangerouslySetInnerHTML={{ __html: author.bioHtml }} />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer author={author} footerText={author.name} />
      </div>
    </div>
  )
}
