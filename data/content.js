const content = {
  hero: {
    heading: "Welcome to my little corner of the internet.",
    introduction: "I'm EverInk, a passionate developer and creator who enjoys building, learning, and experimenting with design and technology.",
    ctaButtons: [
      { text: "View My Work", link: "#projects" },
      { text: "Get in Touch", link: "#contact" }
    ],
    illustration: "assets/images/hero-illustration.svg",
    backgroundArtwork: "assets/images/hero-background.avif"
  },
  about: {
    title: "About Me",
    description: "I love creating useful things that bring joy and inspiration. My journey in development has been filled with curiosity and creativity, and I strive to make every project a reflection of my passion.",
    hobbies: [
      "Building web applications",
      "Exploring new design trends",
      "Writing and journaling",
      "Reading books",
      "Experimenting with new technologies"
    ]
  },
  skills: [
    { name: "HTML", icon: "assets/icons/html.svg" },
    { name: "CSS", icon: "assets/icons/css.svg" },
    { name: "JavaScript", icon: "assets/icons/javascript.svg" },
    { name: "Responsive Design", icon: "assets/icons/responsive.svg" },
    { name: "Git", icon: "assets/icons/git.svg" },
    { name: "UI Design", icon: "assets/icons/ui-design.svg" },
    { name: "UX", icon: "assets/icons/ux.svg" },
    { name: "Accessibility", icon: "assets/icons/accessibility.svg" },
    { name: "AI-assisted Development", icon: "assets/icons/ai.svg" },
    { name: "Problem Solving", icon: "assets/icons/problem-solving.svg" }
  ],
  projects: [
    {
      title: "Project One",
      description: "A brief description of Project One, highlighting its features and technologies used.",
      image: "assets/images/project-one.jpg",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/everink/project-one",
      liveDemo: "https://everink.github.io/project-one",
      tags: ["Web Development", "JavaScript"]
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two, showcasing its unique aspects and the problem it solves.",
      image: "assets/images/project-two.jpg",
      techStack: ["HTML", "CSS", "React"],
      githubLink: "https://github.com/everink/project-two",
      liveDemo: "https://everink.github.io/project-two",
      tags: ["React", "UI Design"]
    }
  ],
  timeline: [
    { year: "2020", event: "Started my journey in web development." },
    { year: "2021", event: "Learned HTML, CSS, and JavaScript." },
    { year: "2022", event: "Explored UI/UX design principles." },
    { year: "2023", event: "Started working on personal projects." }
  ],
  contact: {
    title: "Get in Touch",
    description: "I would love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.",
    email: "everink@example.com"
  }
};

export default content;