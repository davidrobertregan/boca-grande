import Header from '../components/Header'
import Hero from '../components/Hero'
import AuthorSection from '../components/AuthorSection'
import CallToAction from '../components/CallToAction'
import DescriptionAndHistory from '../components/DescriptionAndHistory'
import Footer from '../components/Footer'
import LaunchPopup from '../components/LaunchPopup'
import { books } from '../data/books'
import { author, bioWithMiddle } from '../data/author'

const book = books.boca
const bioHtml = bioWithMiddle(book.authorMiddleHtml)

export default function BocaPage() {
  return (
    <>
      <div className={`min-h-screen ${book.theme.pageBg} fade-container`}>
        <Header book={book} />
        <Hero book={book} />
        <DescriptionAndHistory book={book} />
        <AuthorSection author={author} stickers={book.stickers} bioHtml={bioHtml} />
        <CallToAction book={book} />
        <Footer author={author} footerText={book.footerText} />
      </div>
      <LaunchPopup />
    </>
  )
}
