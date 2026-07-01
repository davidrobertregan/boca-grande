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

  // ---- Pickleball: placeholder content, filled in step 4 ----
  pickleball: {
    slug: 'pickleball',
    path: '/pickleball',
    shortTitle: 'P is for Pickleball',
    logoImg: null, // no title art yet
    logoAlt: 'P is For Pickleball',
    logoTextFallback: 'P is for Pickleball',
    documentTitle: 'P is for Pickleball',

    // Hub landing card
    card: {
      cover: '/pickleball-cover.jpeg',
      blurb:
        'A playful A-to-Z pickleball adventure for young players and their families.',
      ctaLabel: 'Explore the book',
      accent: 'text-green-700',
      accentBorder: 'border-green-500',
      accentBg: 'bg-green-600',
    },

    theme: {
      pageBg: 'bg-gradient-to-br from-lime-100 via-green-50 to-yellow-100',
      navText: 'text-green-800',
      navHover: 'hover:text-yellow-600',
      logoText: 'text-green-800',
      buyBorder: 'border-green-500',
      buyText: 'text-green-700',
      buyGradient: 'linear-gradient(90deg, #16a34a, #65a30d, #facc15)',
      buyHover: 'hover:from-green-600 hover:via-lime-600 hover:to-yellow-500',
      headingColor: 'text-gray-700',
    },

    buyLink: '#', // TODO: real buy link
    ctaBuyLink: '#',

    nav: [
      { href: '#author', label: 'About the Author' },
      { href: '#learn', label: 'Learn More' },
    ],

    hero: {
      cartImg: '/pickleball-cover.jpeg',
      cartAlt: 'P is For Pickleball book cover',
      taglineHtml: '"An A to Z pickleball adventure..."', // TODO: real tagline
      coverImg: '/pickleball-cover.jpeg',
      coverAlt: 'P is For Pickleball book cover',
      buyLabel: 'Buy Now',
    },

    description: {
      heading: 'Learn Pickleball from A to Z!', // TODO
      img: '/motif-0.png',
      imgAlt: 'P is For Pickleball illustration',
      subheading: 'Ready to play?', // TODO
      bodyHtml: `Placeholder description for P is for Pickleball. Real copy coming soon.`, // TODO
    },

    cta: {
      heading: 'Ready to Play Pickleball?', // TODO
      text: 'Grab your paddle and dink into this A to Z adventure!', // TODO
      buttonLabel: 'Get Your Copy Now',
      img: '/motif-1.png',
      imgAlt: 'Call to Action Image',
    },

    stickers: [],

    footerText: 'P is for Pickleball',
  },
}
