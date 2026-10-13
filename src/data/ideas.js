export const ideas = {
  title: "Ideas",
  subtitle: "Planned and unfinished projects I want to work on InshAllah",
  statusLabels: {
    planning: "Planning",
    "in-progress": "In Progress",
    "on-hold": "On Hold"
  },

  items: [
    {
      id: 1,
      title: "Uddokta AI",
      tag: "Hackathon",
      event: "Built for the IUT Fireball Hackathon",
      summary:
        "An AI-powered Business Intelligence Assistant designed to help small and medium entrepreneurs in Bangladesh make data-driven decisions easily. It helps local business owners understand their data, predict trends, and grow confidently in the digital era.",
      video: "soZ9i1Zonys",
      features: [
        "AI chat assistant (Bangla + English)",
        "Real-time sales and cash flow insights",
        "Smart inventory and customer retention analysis",
        "AI-powered forecasting and anomaly detection",
        "Local integration with bKash, Nagad and mobile POS"
      ],
      team: [
        { name: "Noshin Syara", role: "Project Lead & Solutions Architect" },
        { name: "Akbari Madina", role: "Solution Strategist" },
        { name: "Atia Zaman", role: "AI/ML Specialist" },
        { name: "Shoshita Islam", role: "Business Analyst" }
      ],
      vision:
        "To make business intelligence simple, local, and human - turning raw data into real insights for every 'Uddokta' in Bangladesh.",
      techStack: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "OpenAI API",
        "Firebase",
        "Figma",
        "Tailwind CSS"
      ]
    },
    {
      id: 2,
      title: "AI-Driven Cyber Defense Framework for Autonomous Vehicles",
      tag: "Poster",
      event: "Auto Canvas - Team Ignis",
      summary:
        "A cross-disciplinary CSE-Mechanical Engineering approach to cyberattack detection and response. The framework detects attacks such as GPS spoofing, CAN bus injection, V2X spoofing and LiDAR spoofing, validates sensor data, and uses physical safety checks for safer, more reliable autonomous driving.",
      image: "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791869468/Auto_canvas_jjphyz.jpg",
      techStack: ["LSTM", "Transformer", "AutoEncoder"]
    },
    {
      id: 3,
      title: "Monkeypox: A Dual Diagnosis Approach",
      tag: "Poster",
      summary:
        "An ML-based approach for Mpox that combines skin lesion image analysis with viral genome sequencing, aiming for improved diagnostic accuracy, disease severity detection, and personalized treatment recommendations.",
      image: "https://res.cloudinary.com/dkpfwi4hn/image/upload/v1791444682/poster_myefl4.png",
      techStack: ["ResNet", "EfficientNet", "GNN", "PySpark", "BioPython"]
    },
    {
      id: 5,
      title: "GovSheba",
      tag: "App",
      summary:
        "A Flutter app for verifying real, legal government documents, with a document storage system.",
      github: "https://github.com/ridika-2004/GovSheba.git",
      techStack: ["Flutter"]
    }
  ]
};
