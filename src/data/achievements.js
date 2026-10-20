const achievements = [
  {
    id: 1,
    title: "Featured in TBS graduate",
    caption: "Built an AI-powered career platform with a 3-person team in 36 hours.",
    image: ["https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783893722/TBS_jajlt1.jpg"],
    link: "https://www.facebook.com/share/p/1DNom6DNYL/",
    size: "tall"
  },

  {
    id: 2,
    title: "Featured in Kryzotech",
    caption: "Got featured by Kryzotech for being their internee and winner of I3C and IWC - 2026",
    image: ["https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783893344/She_Stem_2_myhcvg.jpg"],
    link: null,
    size: "square"
  },

  {
    id: 3,
    title: "Featured in The Daily Campus ",
    caption: "I3C and IWC gold medal",
    image: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783893733/Daily_Campus_bzo2ms.jpg"
    ],
    link: "https://www.facebook.com/share/p/1cn5TidWad/",
    size: "wide"
  },

  {
    id: 4,
    title: "Featured in 'Amader Banshundhara Newspaper'",
    caption: "Completed the IUT CSE department's hands-on React and deployment workshop.",
    image:
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783517813/IMG-20260616-WA0006_1_errngn.jpg",
    link: "https://www.facebook.com/share/p/1DZcK3V9nE/",
    size: "square"
  },

  {
    id: 5,
    title: "Winner in Glory Girls Tech Fest 1.0",
    caption:
      "Winner at the Tech Quiz in Glory Girls Tech Fest 1.0, organized by the ICT olympiad, Bangladesh",
    image: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1784727068/Screenshot_2026-01-13-14-57-34-729_com.miui.gallery-edit_dm1bad.jpg"
    ],
    link: "https://www.facebook.com/share/14pvBcUnXbh/",
    size: "tall"
  },

  {
    id: 6,
    title: "Bronze Honor in IAAC",
    caption: "Bronze honor in International Astronomy and Astrophysics Competition (IAAC) 2023",
    image:
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1784727064/469960827_1104929787993341_1657834141233509313_n_et2bkv.jpg",
    link: "https://github.com/NSP2023",
    size: "wide"
  },

  {
    id: 7,
    type: "text",
    category: "Astronomy",
    badge: "Bronze Honor",
    year: "2021",
    title: "IAAC 2021",
    caption:
      "Bronze Honor in the International Astronomy and Astrophysics Competition (IAAC) 2021.",
    link: null
  },

  {
    id: 8,
    type: "text",
    category: "Astronomy",
    badge: "Silver Honor",
    year: "2020",
    title: "IAAC 2020",
    caption:
      "Silver Honor in the International Astronomy and Astrophysics Competition (IAAC) 2020.",
    link: null
  },

  {
    id: 9,
    type: "text",
    category: "Astronomy",
    badge: "1st Runner-Up",
    year: "2020",
    title: "Astrovation 1.0",
    caption:
      "1st Runner-Up in the Astronomy Olympiad of Astrovation 1.0, organized by Bangladesh Astronomy Pathshala.",
    link: null
  },

  {
    id: 10,
    type: "text",
    category: "Quiz",
    badge: "8th - National Round",
    year: 2022,
    title: "Cyber-Hero",
    caption:
      "Cyber Security Quiz Competition organized by Cyber71. Placed 8th in the national round.",
    link: null
  },

  {
    id: 11,
    type: "text",
    category: "Quiz",
    badge: "4th - Divisional Round",
    year: 2019,
    title: "Biggan-Uthsab",
    caption: "Placed 4th in the divisional round of Biggan-Uthsab by Bigganchinta.",
    link: null
  },

  {
    id: 12,
    type: "text",
    category: "Quiz",
    badge: "9th - Divisional Round",
    year: "2016",
    title: "Vasha Protijog 2016",
    caption: "Placed 9th in the divisional round of Vasha Protijog 2016.",
    link: null
  },

  {
    id: 13,
    type: "text",
    category: "Publication",
    badge: "Published",
    year: null,
    title: "Article in Prothom Alo",
    caption: "Had my article published in Prothom Alo, Bangladesh's leading daily newspaper.",
    link: "https://www.prothomalo.com/lifestyle/%E0%A6%86%E0%A6%AE%E0%A6%BF-%E0%A6%AF%E0%A6%BE-%E0%A6%95%E0%A6%B0%E0%A6%9B%E0%A6%BF"
  },

  {
    id: 14,
    type: "text",
    category: "Publication",
    badge: "Published",
    year: null,
    title: "Sci-fi story in Bigganchinta",
    caption: 'My science-fiction story "Revenge" was published in Bigganchinta.',
    link: "https://www.bigganchinta.com/sciencefiction/story-revenge"
  },

  {
    id: 15,
    type: "text",
    category: "Quiz",
    badge: "3rd - Divisional Round",
    year: "2015",
    title: "Vasha Protijog 2015",
    caption:
      "Regional winner in Vasha Protijog (Language Olympiad) 2015, placing 3rd in the Rangpur division.",
    link: null
  },

  {
    id: 16,
    type: "text",
    category: "Quiz",
    badge: "92% Score",
    year: "2020",
    title: "International COVID-19 Awareness Quiz",
    caption:
      "Certificate of Appreciation from Rajiv Gandhi University for scoring 92% in the Online International COVID-19 Awareness Quiz 2020.",
    link: null
  },

  {
    id: 17,
    type: "text",
    category: "Astronomy",
    badge: "Certificate of Achievement",
    year: "2020",
    title: "Astronomers Without Borders Quiz",
    caption:
      "Certificate of Achievement from Astronomers Without Borders for their astronomy quiz in 2020.",
    link: null
  },

  {
    id: 18,
    type: "text",
    category: "Cultural & Sports",
    badge: "2nd - Upazila Round",
    year: "2019",
    title: "Moushumi Competition 2019",
    caption:
      "2nd place in Group Acting at the Rangpur upazila round of the Moushumi Competition, organized by Bangladesh Shishu Academy.",
    link: null
  },

  {
    id: 19,
    type: "text",
    category: "Cultural & Sports",
    badge: "3rd - Divisional Round",
    year: "2016",
    title: "Poem Recitation",
    caption:
      "3rd place in poem recitation in the Rangpur division, organized by Bishwo Shahitto Kendro.",
    link: null
  },

  {
    id: 20,
    type: "text",
    category: "Cultural & Sports",
    badge: "Orange Belt - 7th Kyu",
    year: "2018",
    title: "Karate",
    caption: "Earned the 7th Kyu (Orange) belt from Bangladesh Shito-Ryu Karate-Do Academy, Rangpur.",
    link: null
  },

  {
    id: 21,
    type: "text",
    category: "Participation",
    badge: "Participant",
    year: "2020",
    title: "International Essay Contest for Young People",
    caption: "Took part in the International Essay Contest for Young People 2020 by the Goi Peace Foundation.",
    link: null
  },

  {
    id: 22,
    type: "text",
    category: "Participation",
    badge: "National Level",
    year: "2020",
    title: "National High School Programming Contest",
    caption: "Took part in the national-level quiz of the National High School Programming Contest 2020.",
    link: null
  },

  {
    id: 23,
    type: "text",
    category: "Participation",
    badge: "National Round",
    year: "2019",
    title: "Biggan Utsab - National Quiz",
    caption:
      "Competed in the national quiz round of Biggan Utsab (Science Festival) 2019, organized by bKash and Bigganchinta.",
    link: null
  },

  {
    id: 24,
    type: "text",
    category: "Participation",
    badge: "Regional Round",
    year: null,
    title: "Bangladesh Math Olympiad",
    caption: "Competed in the regional rounds of the 13th, 15th and 18th Bangladesh Math Olympiad.",
    link: null
  },

  {
    id: 25,
    type: "text",
    category: "Participation",
    badge: "Participant",
    year: "2019",
    title: "1st National Newspaper Olympiad",
    caption: "Took part in the 1st National Newspaper Olympiad 2019, organized by YOUTHPRENEUR Network.",
    link: null
  }
];

export default achievements;
