import Header from '../components/Header'
import Hero from '../components/Hero'
import CallToAction from '../components/CallToAction'
import DescriptionAndHistory from '../components/DescriptionAndHistory'
import Footer from '../components/Footer'
import LaunchPopup from '../components/LaunchPopup'
import usePageTitle from '../hooks/usePageTitle'
import { books } from '../data/books'
import { author } from '../data/author'

const book = books.boca

export default function BocaPage() {
  usePageTitle(book.documentTitle)
  return (
    <>
      <div className={`min-h-screen ${book.theme.pageBg} fade-container`}>
        <Header book={book} />
        <Hero book={book} />
        <DescriptionAndHistory book={book} />
        <CallToAction book={book} />
        <Footer author={author} footerText={book.footerText} />
      </div>
      <LaunchPopup />
    </>
  )
}
