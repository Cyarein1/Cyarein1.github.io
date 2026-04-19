export const portfolioData = {
  name: "Siyabonga Mthethwa",
  title: "Full-stack Developer",
  email: "cyarein@gmail.com",
  phone: "0739198082",
  location: "Durban, South Africa",
  dateOfBirth: "2001",
  profileImage: "/essentials/profile-pic.jpeg",
  aboutImage: "/essentials/about-pic.jpg",
  cv: {
    // Keep the portfolio download pointed at this one canonical file.
    href: "/essentials/Siyabonga-Mthethwa-CV.pdf",
    downloadName: "Siyabonga-Mthethwa-CV.pdf",
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/cyarein",
    },
    {
      label: "GitHub",
      href: "https://github.com/Cyarein1",
    },
  ],
  about: [
    "I'm Siyabonga Mthethwa, a full-stack software developer from Durban with hands-on experience building and scaling web applications that are clean, reliable, and genuinely useful.",
    "I work across JavaScript, React, Node.js, PostgreSQL, and Python, and I've learned how to deliver under tight deadlines, collaborate well with cross-functional teams, and improve systems through debugging, testing, and thoughtful code reviews.",
    "I'm also experienced with modern AI tooling and prompt engineering, and I'm especially interested in building efficient, user-focused systems that feel smooth to use and solid behind the scenes.",
    "Outside of coding, I enjoy playing chess in my free time, especially speed chess. I love the rush that comes with quick decision-making and staying sharp under pressure.",
  ],
  experience: [
    {
      title: "Software Engineering Intern",
      place: "bbd x Umuzi, Online",
      year: "Feb 2025 - Jan 2026",
      bullets: [
        "Built and shipped new features using React, React Native, JavaScript, Material UI, and PostgreSQL.",
        "Connected frontend applications to backend services and APIs to support full-stack product functionality.",
        "Followed a test-driven development approach and wrote unit tests with Jasmine to deliver reliable, maintainable code.",
        "Fixed production issues under tight deadlines and helped keep applications stable and moving forward.",
        "Reviewed colleagues' work on GitHub, provided constructive feedback, and helped unblock delivery.",
      ],
    },
    {
      title: "Web Developer",
      place: "Marketing Fridays, Online",
      year: "Jul 2024 - Aug 2025",
      bullets: [
        "Revamped the company website using PHP, HTML, CSS, and SQL.",
        "Helped boost online sales and improve the overall user experience.",
        "Built an accessible dashboard with drag-and-drop tools and integrated analytics.",
      ],
    },
    {
      title: "AI Prompt Engineer",
      place: "Outlier, Online",
      year: "Oct 2024 - Feb 2025",
      bullets: [
        "Engineered prompts for a variety of AI models.",
        "Refined model behavior through strategic prompt engineering using Python and NLP tools.",
        "Evaluated and improved over 100 model responses using Python, R, and A/B testing.",
      ],
    },
  ],
  education: [
    {
      title: "IT (Systems Development)",
      place: "Umuzi Academy, Online",
      year: "Aug 2023 - Aug 2024",
      description:
        "Learned the foundations of software and systems development while building Vanilla JavaScript projects using PostgreSQL and Express.js for backend logic, and HTML, CSS, and JavaScript for frontend development.",
    },
    {
      title: "BSc Civil Engineering",
      place: "UKZN, Durban, Kwa-Zulu Natal",
      year: "Jan 2020 - Dec 2022",
      description:
        "Incomplete.",
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: [
        "HTML, CSS",
        "JavaScript (Advanced)",
        "React.js, React Native",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js, Express",
        "PHP",
        "PostgreSQL",
        "Python",
        "REST API Integration",
      ],
    },
    {
      title: "Version Control & DevOps",
      items: ["Git, GitHub", "Docker"],
    },
    {
      title: "AI & Automation Tools",
      items: ["n8n", "Claude", "Tabnine", "Cursor"],
    },
  ],
  clientProjects: [
    {
      name: "Zithande Cleaners",
      year: "2025",
      stack: ["React", "Tailwind CSS", "JavaScript"],
      description:
        "I built this website for a landscaping company using React, Tailwind CSS, and JavaScript. The project is still being finalised while the client wraps up a few remaining details.",
      image: "/essentials/client-projects/zithande-cleaners-compressed.jpg",
      liveUrl: "https://67d94a4c.zithande-cleaners.pages.dev/",
    },
    {
      name: "Matamela Secondary",
      year: "2025",
      stack: ["PHP", "JavaScript", "CSS", "HTML"],
      description:
        "I designed and built the full website for Matamela High School using PHP, JavaScript, HTML, and CSS, with a focus on making the school easier to present online.",
      image: "/essentials/client-projects/matamela-secondary-compressed.jpg",
      liveUrl: "https://matamelasecondary.co.za",
    },
    {
      name: "Marketing Fridays",
      year: "2024",
      stack: ["PHP", "HTML", "CSS", "SQL", "JavaScript"],
      description:
        "I built this website for Marketing Fridays to promote events, show off past experiences, and help improve ticket sales. I also added a simple dashboard so content could be updated without needing coding knowledge.",
      image: "/essentials/client-projects/marketing-fridays.jpg",
      liveUrl: "https://marketingfridays.com",
    },
  ],
  personalProjects: [
    {
      name: "Recipe Search",
      year: "2025",
      stack: ["React", "Redux Toolkit", "Material UI", "JavaScript"],
      description:
        "I built this recipe search app with React, Redux Toolkit, and Material UI to make finding meal ideas feel quick and simple. Users can search by keyword, add ingredients they want to cook with, and browse the results in a clean responsive layout using the Spoonacular Recipe API.",
      image: "/essentials/recipe-search-cover-2026.png",
      githubUrl:
        "https://github.com/Umuzi-org/Siyabonga-Mthethwa-532-react-and-redux-recipe-search-part-1-presenting-the-form-javascript-react",
      liveUrl: "https://recipe-search-ct0.pages.dev/",
    },
    {
      name: "Memory Game",
      year: "2024",
      stack: ["React", "Material UI", "JavaScript"],
      description:
        "I built this memory game with React and Material UI as a fun interactive project where players flip cards and try to match fast-food-themed pairs like burgers, pizza, and popcorn.",
      image: "/essentials/memory-game-cover-2026.jpg",
      githubUrl:
        "https://github.com/Umuzi-org/Siyabonga-Mthethwa-222-memory-game-in-vanilla-js-javascript",
      liveUrl: "https://memorygame-4w9.pages.dev/",
    },
    {
      name: "Visitor Database Manager",
      year: "2024",
      stack: ["Node.js", "Express.js", "PostgreSQL"],
      description:
        "I built this backend-focused app to practise capturing and managing visitor information, with a strong focus on CRUD operations and working with structured data properly.",
      image: "/essentials/visitor-form.png",
      githubUrl:
        "https://github.com/Umuzi-org/Siyabonga-Mthethwa-282-node-sql-assignment-javascript",
    },
  ],
};
