// Per-book content + theme. Components read everything from here so the same
// component set renders both books with different copy, images, and colors.

export const books = {
  boca: {
    slug: 'boca',
    path: '/boca',
    shortTitle: 'B is for Boca Grande',
    logoImg: '/b-is-for-boca-text.png',
    logoAlt: 'B is For Boca',
    documentTitle: 'B is for Boca Grande',

    // Hub landing card
    card: {
      cover: '/b-is-for-boca-screenshot.png',
      blurb:
        'An A-to-Z alphabet adventure through Boca Grande, Florida, with Chico the cheeky monkey.',
      ctaLabel: 'Explore the book',
      accent: 'text-teal-600',
      accentBorder: 'border-teal-400',
      accentBg: 'bg-teal-500',
    },

    // Tailwind classes / inline gradient tuned to the beach palette.
    theme: {
      pageBg: 'bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100',
      navText: 'text-purple-700',
      navHover: 'hover:text-pink-600',
      logoText: 'text-purple-800',
      buyBorder: 'border-teal-400',
      buyText: 'text-teal-600',
      buyGradient: 'linear-gradient(90deg, #10b981, #06b6d4, #2dd4bf)',
      buyHover:
        'hover:from-orange-500 hover:via-pink-600 hover:to-teal-500',
      headingColor: 'text-gray-700',
    },

    // Two IngramSpark links preserved from the original (different tracking params).
    buyLink:
      'https://shop.ingramspark.com/b/084?params=uzwiUAGaIrE3rlIGGG3Kp3QksY07FXDRvF7r26SMqmp',
    ctaBuyLink:
      'https://shop.ingramspark.com/b/084?params=oo8PKNc9xXuu81DRQx00gYH6gWlLtWtYFTT4BDEPWwA',

    nav: [
      { href: '#author', label: 'About the Author' },
      { href: '#learn', label: 'Learn More' },
    ],

    hero: {
      cartImg: '/chico-cart.png',
      cartAlt: 'B is For Boca book cover',
      taglineHtml:
        '"Join <b>Chico the cheeky monkey</b> as he explores Boca Grande, Florida from A to Z..."',
      coverImg: '/b-is-for-boca-screenshot.png',
      coverAlt: 'B is For Boca book cover',
      buyLabel: 'Buy Now',
    },

    // Middle bio paragraph (why she wrote this book); slots into the shared bio.
    authorMiddleHtml: `Inspired by her love for Boca Grande, a charming town on Gasparilla Island, she wrote "B is for Boca Grande", a children's alphabet book celebrating its beauty and history.`,

    description: {
      heading: 'Discover the Magic of Boca Grande from A to Z!',
      img: '/map.png',
      imgAlt: 'B is For Boca book cover',
      subheading: 'Will you join Chico on an Adventure?',
      bodyHtml: `Join Chico the cheeky monkey as he guides you through an exciting ABC adventure in Boca Grande, Florida!
        From A for Alligator to Z for Ziggy the Pig, each page is packed with fun facts, local treasures,
        and hidden surprises.
      <br /><br />
        Explore sunny beaches, spot playful dolphins, and read about the legendary pirate José Gaspar's
        hidden treasure. With every letter, kids will uncover the wonders of this special town, making it
        a perfect read for young explorers aged 4-8.
      <br /><br />
        <b>Can you find all the hidden treasures as you learn your ABCs?</b> Let the adventure begin!`,
    },

    cta: {
      heading: 'Ready to Explore Boca Grande?',
      text: 'Join us on this unforgettable adventure and discover the magic of Boca Grande!',
      buttonLabel: 'Get Your Copy Now',
      img: '/3dbocagrande_01.png',
      imgAlt: 'Call to Action Image',
    },

    // Decorative stickers with book-specific absolute positioning.
    stickers: [
      {
        src: 'gator.png',
        alt: 'Gator Sticker',
        section: 'author',
        className: `absolute object-contain z-10 right-[29%]
          m-auto w-40 h-40 top-[-75px]
          md:m-0 md:w-50 md:h-50 md:top-[-115px] md:right-0
          lg:w-65 lg:h-65`,
      },
      {
        src: 'chicken.png',
        alt: 'Chicken Sticker',
        section: 'cta',
        className: `absolute object-contain z-10 right-[-1px] m-auto
          z-10 left-[-1px]
          w-60 h-60 top-[-130px]
          md:w-75 md:h-75 md:top-[-180px] md:rotate-[-20deg] md:m-0
          lg:w-100 lg:h-100`,
      },
    ],

    footerText: 'B is for Boca Grande',
  },

  // ---- Pickleball ----
  // NOTE: copy is first-draft placeholder; title art + real buy link still TODO.
  pickleball: {
    slug: 'pickleball',
    path: '/pickleball',
    shortTitle: 'P is for Pickleball',
    logoImg: null, // TODO: dedicated title/logo art; text fallback for now
    logoAlt: 'P is For Pickleball',
    logoTextFallback: 'P is for Pickleball',
    documentTitle: 'P is for Pickleball',

    // Hub landing card
    card: {
      cover: '/pickleball-cover.jpeg',
      blurb:
        'A playful A-to-Z pickleball adventure with a troop of lovable jungle friends.',
      ctaLabel: 'Explore the book',
      accent: 'text-teal-600',
      accentBorder: 'border-teal-400',
      accentBg: 'bg-teal-500',
    },

    // Sunny court palette: gold/yellow, teal paddle, court blue.
    theme: {
      pageBg: 'bg-gradient-to-br from-amber-100 via-yellow-50 to-sky-100',
      navText: 'text-teal-700',
      navHover: 'hover:text-amber-500',
      logoText: 'text-teal-700',
      buyBorder: 'border-teal-400',
      buyText: 'text-teal-600',
      buyGradient: 'linear-gradient(90deg, #14b8a6, #38bdf8, #facc15)',
      buyHover: 'hover:from-amber-500 hover:via-teal-500 hover:to-sky-500',
      headingColor: 'text-gray-700',
    },

    buyLink: '#', // TODO: real buy link
    ctaBuyLink: '#', // TODO: real buy link

    nav: [
      { href: '#author', label: 'About the Author' },
      { href: '#learn', label: 'Learn More' },
    ],

    hero: {
      cartImg: '/motif-0.png',
      cartAlt: 'Monkey celebrating with a pickleball paddle',
      cartImgClass: 'max-h-72 mx-auto',
      taglineHtml:
        '"Join a troop of playful jungle friends as they learn pickleball from <b>A&nbsp;to&nbsp;Z</b>!"',
      coverImg: '/pickleball-cover.jpeg',
      coverAlt: 'P is For Pickleball book cover',
      coverImgClass: 'fade-edges max-w-[85%] md:max-w-[75%] mx-auto',
      rowClass: 'flex justify-center flex-wrap lg:flex-nowrap gap-8 lg:gap-16 max-w-6xl mx-auto',
      coverWrapClass: 'flex justify-center items-center',
      buyLabel: 'Buy Now',
    },

    // Middle bio paragraph (why she wrote this book); slots into the shared bio.
    authorMiddleHtml: `A lover of the game, she wrote "P is for Pickleball", a children's alphabet book celebrating the sport, its lingo, and the joy of play.`,

    description: {
      heading: 'Learn Pickleball from A to Z!',
      img: '/motif-13.png',
      imgAlt: 'Monkey running with a pickleball paddle',
      imgClass: 'max-h-96 object-contain mx-auto',
      subheading: 'Ready to hit the court?',
      bodyHtml: `From <b>A for Ace</b> to <b>Z for Zero-Zero</b>, rally through the alphabet with a
        cast of lovable jungle animals learning to play pickleball!
      <br /><br />
        Each page is packed with pickleball lingo, good sportsmanship, and giggles, making it a
        perfect read for young players aged 4-8.
      <br /><br />
        <b>Can you learn every pickleball word from A to Z?</b> Grab your paddle and let's play!`,
    },

    cta: {
      heading: 'Ready to Play Pickleball?',
      text: 'Grab your paddle and dink into this A-to-Z adventure!',
      buttonLabel: 'Get Your Copy Now',
      img: '/motif-1.png',
      imgAlt: 'Monkey with a star pickleball paddle',
      imgClass: 'mt-8 max-h-96 w-auto mx-auto',
    },

    stickers: [],

    footerText: 'P is for Pickleball',
  },
}
