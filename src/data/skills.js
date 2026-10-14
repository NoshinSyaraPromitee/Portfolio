const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skills = [
  { name: "C", cat: "Languages", icon: `${D}/c/c-original.svg` },
  { name: "C++", cat: "Languages", icon: `${D}/cplusplus/cplusplus-original.svg` },
  { name: "Python", cat: "AI / ML", icon: `${D}/python/python-original.svg` },
  { name: "TensorFlow", cat: "AI / ML", icon: `${D}/tensorflow/tensorflow-original.svg` },
  { name: "React", cat: "Web", icon: `${D}/react/react-original.svg` },
  { name: "Java", cat: "Web", icon: `${D}/java/java-original.svg` },
  { name: "GoLang", cat: "Web", icon: `${D}/go/go-original.svg` },
  { name: "Flutter", cat: "Mobile", icon: `${D}/flutter/flutter-original.svg` },
  { name: "MySQL", cat: "Data & Docs", icon: `${D}/mysql/mysql-original.svg` },
  { name: "MongoDB", cat: "Data & Docs", icon: `${D}/mongodb/mongodb-original.svg` },
  { name: "LaTeX", cat: "Data & Docs", icon: `${D}/latex/latex-original.svg` },
  { name: "React-Native", cat: "Mobile", icon: `${D}/react/react-original.svg` },
  // mono: dark logo, shown light in dark theme
  {
    name: "Unreal Engine",
    cat: "Games",
    icon: `${D}/unrealengine/unrealengine-original.svg`,
    mono: true
  },
  { name: "Unity", cat: "Games", icon: `${D}/unity/unity-original.svg`, mono: true }
];

export const cats = ["All", "Languages", "AI / ML", "Web", "Mobile", "Games", "Data & Docs"];