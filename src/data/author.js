// Author-wide info shared across the hub and book pages.
const bioIntroHtml = `<b>Julie Horning</b> (or JuJu as her grandchildren call her) is a real estate agent, proud mother and grandmother, and former leader in the direct selling world, where she built teams and empowered women.`

const bioClosingHtml = `Julie has also been actively involved in nonprofit work, frequently supporting women and children. She and her husband, Dan, <b>now call Boca Grande home</b>, where community and connection remain at the heart of all she does.`

// Book-specific middle paragraph (why she wrote each book) sits between the
// shared intro and closing. Default middle is the Boca one, used on the hub.
const bocaMiddleHtml = `Inspired by her love for Boca Grande, a charming town on Gasparilla Island, she wrote "B is for Boca Grande", a children's alphabet book celebrating its beauty and history.`

export function bioWithMiddle(middleHtml) {
  return `${bioIntroHtml}<br /><br />${middleHtml}<br /><br />${bioClosingHtml}`
}

export const author = {
  name: 'Julie Horning',
  photo: '/author.png',
  bioIntroHtml,
  bioClosingHtml,
  bioHtml: bioWithMiddle(bocaMiddleHtml),
  socials: {
    instagram: 'https://instagram.com/dreambocagrande',
    facebook: 'https://facebook.com/Julie.Welch.Horning',
    realEstate: 'https://www.michaelsaunders.com/agents/julie-horning/256060588/',
  },
}
