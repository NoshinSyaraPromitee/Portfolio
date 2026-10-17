// src/data/projects.js
const projects = [
  {
    id: 1,
    title: "RoomieRadar",
    timeline: "Dec 2025 - Apr 2026",
    description:
      "A web platform for analyzing roommate compatibility based on user preferences and lifestyle answers.",
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    category: "mern",
    github: "https://github.com/NoshinSyaraPromitee/RoomieRadar.git",
    images: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519525/577766303-8ccb30ee-b0ed-446b-8539-eba1538f4f1b_cpo7s3.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519524/547017881-bf5f701d-7658-450c-96ff-aa96601b0eb8_gfvwus.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519526/577764953-0cf3b094-8064-4bdf-a160-f02b8e3deb44_ualddk.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519526/577764953-0cf3b094-8064-4bdf-a160-f02b8e3deb44_ualddk.png"
    ] // e.g. ["/projects/roomieradar/1.png","/projects/roomieradar/2.png"]
  },

  {
    id: 2,
    title: "Khaza Enterprise",
    timeline: "Frontend Build",
    description:
      "A car rental site for a Bangladeshi company - fleet pages, hero carousels, auth flows, and a partner companies modal system.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    category: "mern",
    github: "https://github.com/asif851/khaza-Enterprise-Website.git",
    images: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791448346/Screenshot_65_pybr5b.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791448356/Screenshot_71_wyf6x2.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791448354/Screenshot_68_xqyy5t.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791448351/Screenshot_70_qel6sa.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791448330/Screenshot_66_boe7l0.png"
    ]
  },

  {
    id: 3,
    title: "PrescriptSense",
    video: "F1aPceQl0OI",
    videoVertical: true,
    timeline: "Dec 2025 - Apr 2026",
    description:
      "A Flutter-based mobile app for prescription assistance and medication management.",
    techStack: ["Flutter", "Dart"],
    category: "mobile",
    github: "https://github.com/tasniamaha/Prescript_Sense.git",
    images: []
  },

  {
    id: 4,
    title: "Reality Check",
    timeline: "Aug 2025 - Present",
    description:
      "A multi-model deepfake detection system combining SigLIP, Xception, and EfficientNet, with a Django backend and React frontend.",
    techStack: ["Python", "Django", "React", "Node.js", "REST API"],
    category: "ml",
    github: "https://github.com/tasniamaha/RealityCheck-AI.git",
    images: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519806/598445591-0632a4ed-28b5-4cc8-9add-2ebca04ccd06_qnom5q.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519794/598445692-79161b6a-2651-4b66-b672-f5681b2c12be_ashu28.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519781/598445946-0b543a4e-f5a6-4c79-a9dc-495c0cc88ef9_h32lq3.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519781/598446158-018b6c70-883f-4f17-8d37-4d1c9dd51443_zghjjr.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783519781/598446349-295957e9-1287-48e4-9abf-43177ee9024c_aoip4k.jpg"
    ]
  },
  {
    id: 5,
    title: "StackShare",
    timeline: "Academic Project",
    description:
      "A web application that makes borrowing and lending devices super easy - perfect for students, clubs, and small communities!",
    techStack: ["MySql", "React", "Node.js", "Express.js"],
    category: "mern",
    github: "https://github.com/tasniamaha/StackShare_rdbms.git",
    images: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783518808/559721524-b629806e-4ee6-4a27-96f2-b3e718662a73_tzkzy4.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783518806/559722475-67d08521-c059-4d04-b0f2-b3c7ae4cd689_glocmj.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783518804/559721854-6b042ca9-a773-42e5-93dc-25628d7353d8_hgnkcy.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783518804/559721729-6d0e15c0-d9da-4e6e-9b37-cf85a8d86738_rtypx1.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783518804/559722175-2eebca17-0339-4847-8be4-70a940464d95_lbey9w.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1783518806/559722051-134db94e-0c86-40bb-81b6-e317c008d076_tzocsl.png"
    ]
  },

  {
    id: 6,
    title: "SkillSync",
    placeholderText: "See GitHub for details",
    timeline: "Academic Project",
    description:
      "A resume sorting and classification system built with classical machine learning techniques.",
    techStack: ["TF-IDF", "SVM", "Naive Bayes", "Random Forest"],
    category: "ml",
    github: "https://github.com/NSP2023",
    images: []
  },

  {
    id: 7,
    title: "OOP Gaming Simulator",
    video: "6ONNH4Q2cvw",
    timeline: "Academic Project",
    description:
      "An academic game project built in Unreal Engine with C++, applying object-oriented programming principles such as classes, inheritance and polymorphism to structure the game's characters, objects and gameplay logic.",
    techStack: ["Unreal Engine", "C++"],
    category: "games",
    github: null,
    images: []
  },

  {
    id: 8,
    title: "PlantPal",
    timeline: "Industrial Training Project",
    description:
      "MyPlantPal is a Flutter mobile application that helps users identify plants, learn about plant care, and manage their gardening journey through an easy-to-use interface. It turns gardening tasks into a game, and includes a plant shop and fertilizer recipes. The backend is written in Go and deployed with Docker and Cloudflare.",
    techStack: ["Flutter", "Go", "MongoDB", "Docker", "Cloudflare"],
    category: "mobile",
    github: "https://github.com/NSP2023",
    images: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449804/Screenshot_2026-10-08-14-49-05-98_b2f6ccf882cbc0ed88a3b37bcb0518b0_rnxefq.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449805/Screenshot_2026-10-08-14-49-32-76_b2f6ccf882cbc0ed88a3b37bcb0518b0_bs1zsz.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449805/Screenshot_2026-10-08-14-51-39-05_b2f6ccf882cbc0ed88a3b37bcb0518b0_qdysvb.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449804/Screenshot_2026-10-08-14-51-49-79_b2f6ccf882cbc0ed88a3b37bcb0518b0_tjmg0m.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449806/Screenshot_2026-10-08-14-52-42-93_b2f6ccf882cbc0ed88a3b37bcb0518b0_tf8lkf.jpg",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449806/Screenshot_2026-10-08-14-49-57-86_b2f6ccf882cbc0ed88a3b37bcb0518b0_ef20no.jpg"
    ]
  },

  {
    id: 9,
    title: "SecondServe",
    timeline: "Academic Project",
    description:
      "A food redistribution platform that connects hotel kitchens with NGOs to reduce food waste.",
    techStack: ["React.js", "Spring Boot", "Java"],
    category: "mern",
    github: "https://github.com/NoshinSyaraPromitee/SecondServe_Webarchi.git",
    images: [
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449657/Screenshot_277_ruey1n.png",
      "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791449657/Screenshot_277_ruey1n.png"
    ]
  },

  {
    id: 10,
    title: "Bengali LLM Hallucination Detection Challenge",
    placeholderText: "See GitHub for details",
    timeline: "Datathon",
    description:
      "Competition project on detecting hallucinations in Bengali LLM responses. Given a Bengali prompt and a candidate response (with or without supporting context), the task is to classify the response as faithful (1, factually correct) or hallucinated (0, contains fabricated or incorrect information).",
    techStack: ["Python", "NLP", "LLM"],
    category: "ml",
    github: "https://github.com/ridika-2004/Bengali-LLM-Hallucination-Detection-Challenge.git",
    images: []
  },

  {
    id: 11,
    title: "HerCare",
    video: "LLjSL3JBn88",
    timeline: "Project Showcasing Competition",
    description:
      "A smart digital assistant for women to track their health and improve their life and health experiences with ease.",
    techStack: ["Flutter", "Dart"],
    category: "mobile",
    github: "https://github.com/ridika-2004/HerCare.git",
    images: []
  },

  {
    id: 12,
    title: "Shohay-Centralized Donation Platform",
    video: "qyctedrGQcY",
    timeline: "Academic Project",
    description:
      "A centralized donation platform with a React.js frontend, a Spring Boot backend, and a MongoDB database.",
    techStack: ["React.js", "Spring Boot", "MongoDB"],
    category: "mern",
    github: "https://github.com/thesohannur/Java-Project.git",
    images: []
  }
];

export const projectCategories = [
  { key: "all", label: "All Projects" },
  { key: "mern", label: "MERN Stack" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "ml", label: "ML Projects" },
  { key: "games", label: "Games" }
];

export default projects;
