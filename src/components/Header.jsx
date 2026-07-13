import { Link } from 'react-router-dom'

export default function Header({ book }) {
  const { theme, nav, logoImg, logoAlt, logoTextFallback, buyLink } = book

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg flex items-center">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <div className={`text-2xl font-bold ${theme.logoText}`}>
            {logoImg ? (
              <img src={logoImg} alt={logoAlt} className="h-[86px]" loading="eager" />
            ) : (
              <span>{logoTextFallback}</span>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4 space-x-8 gap-[12px]">
            {nav.map((item) => {
              const cls = `hidden md:inline-block ${theme.navText} ${theme.navHover} font-medium transition-colors duration-200`
              // Internal route paths use the SPA Link; on-page hash anchors stay <a>.
              return item.href.startsWith('/') ? (
                <Link key={item.href} to={item.href} className={cls}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} className={cls}>
                  {item.label}
                </a>
              )
            })}
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white ${theme.buyText} border-2 ${theme.buyBorder} hover:bg-blue px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-300`}
              style={{
                fontWeight: '800',
                padding: '12px 24px',
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
