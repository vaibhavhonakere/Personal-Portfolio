export const siteContent = {
  identity: {
    name: "Vaibhav Honakere",
    role: "Software Engineer",
    location: "Tracy, California",
    status: "Open to software engineering opportunities",
    intro:
      "Computer Engineering graduate from UC Santa Cruz building AI-aware products, polished interfaces, and full-stack systems that stay usable under real constraints.",
    headline: {
      lead: "Software with",
      accent: "signal",
    },
    recruiterNote:
      "Publicly indexed work shows a mix of product sense, LLM experimentation, backend integration, and fast execution across internships and hackathon builds.",
  },
  navigation: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Strengths", href: "#strengths" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  links: {
    primary: { label: "View Experience", href: "#experience" },
    secondary: { label: "See Projects", href: "#projects" },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/vaibhavhonakere",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/vaibhavhonakere123",
      },
    ],
    pending: [
      "Add exact LinkedIn URL",
      "Add resume PDF",
      "Add preferred recruiter email",
    ],
  },
  highlights: [
    {
      value: "+15%",
      label: "Alexa retention improvement",
      text: "Built an end-to-end LLM-backed Alexa navigation flow that publicly lists a 15% retention lift.",
    },
    {
      value: "150+",
      label: "semantic data values",
      text: "Created a custom dataset to help large language models interpret user intent more effectively.",
    },
    {
      value: "3x",
      label: "Dean's Honors",
      text: "Public UCSC honors pages list Vaibhav Honakere in Fall 2020, Spring 2021, and Spring 2023.",
    },
  ],
  marquee: [
    "LLM workflows",
    "React interfaces",
    "Flask services",
    "AWS deployment",
    "Hackathon shipping",
    "Product thinking",
    "System integration",
    "Full-stack ownership",
  ],
  featuredRole: {
    company: "Amazon LLC",
    role: "Software Engineer Intern",
    period: "Jun 2023 - Sep 2023",
    focus: "Alexa Navigation",
    summary:
      "Worked on complex Alexa navigation using large language models, custom semantic data, Flask services, and AWS-backed deployment.",
    bullets: [
      "Used Llama, Falcon40B, and HuggingFace models to support complex Alexa navigation flows.",
      "Created a custom dataset with 150+ data values to extract semantic meaning from user requests.",
      "Built a Python Flask service with multiple routing endpoints and deployed it on EC2.",
      "Added token authentication with AWS Secrets Manager and integrated the service into Alexa's architecture.",
      "Publicly listed result: improved Alexa user experience retention by 15%.",
    ],
    stack: ["LLMs", "Python", "Flask", "EC2", "AWS Secrets Manager", "SageMaker"],
  },
  trajectory: [
    {
      year: "2024",
      title: "UC Santa Cruz",
      detail: "Completed a B.S. in Computer Engineering.",
    },
    {
      year: "2024",
      title: "Hackathon Builds",
      detail: "Shipped BloomBot and Chef it Up, two React-heavy projects with AI and systems integration.",
    },
    {
      year: "2023",
      title: "Amazon",
      detail: "Software Engineer Intern working on Alexa navigation with LLM-backed infrastructure.",
    },
    {
      year: "2022",
      title: "Droisys Inc",
      detail: "Software Engineer Intern.",
    },
  ],
  projects: [
    {
      name: "Chef it Up!",
      event: "LA Hacks 2024",
      summary:
        "An app that analyzes pantry or fridge images and generates custom recipes while reducing food waste.",
      details: [
        "Used image recognition with Gemini and a recipe workflow to suggest meals from available ingredients.",
        "Focused on ingredient substitution logic, prompt engineering, and a clean React-based user flow.",
      ],
      tech: ["React", "Gemini", "JavaScript", "Prompt Engineering"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/chef-it-up",
        },
        {
          label: "GitHub Repo",
          href: "https://github.com/vaibhavhonakere/RefrigeratorRecipes_LaHacks2024",
        },
      ],
    },
    {
      name: "BloomBot",
      event: "HackDavis 2024",
      summary:
        "A smart plant-care device that combines sensors, cloud processing, and Telegram updates for real-time plant health monitoring.",
      details: [
        "Integrated sensors for humidity, moisture, light, and temperature with an AWS-backed processing flow.",
        "Combined React, Python, ESP32 hardware, and messaging delivery to make environmental insights actionable.",
      ],
      tech: ["React", "Python", "ESP32", "AWS", "Flask", "Telegram"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/bloombot-w4xboy",
        },
      ],
    },
  ],
  strengths: [
    {
      title: "AI Product Engineering",
      text: "Experience applying LLMs and multimodal workflows to real navigation and recommendation problems instead of treating AI as decoration.",
    },
    {
      title: "Frontend With Taste",
      text: "React-based work that cares about clarity, interaction flow, and the difference between usable and memorable.",
    },
    {
      title: "Full-Stack Execution",
      text: "Comfort moving between APIs, data modeling, deployment paths, auth concerns, and the interface users actually touch.",
    },
    {
      title: "Fast Iteration Under Pressure",
      text: "Hackathon projects and internship work both point to an ability to ship quickly while integrating multiple systems cleanly.",
    },
  ],
  education: {
    school: "University of California, Santa Cruz",
    degree: "B.S. Computer Engineering",
    period: "Sep 2020 - Jun 2024",
    honors: ["Fall 2020 Dean's Honors", "Spring 2021 Dean's Honors", "Spring 2023 Dean's Honors"],
    tools: [
      "React",
      "Python",
      "Flask",
      "AWS",
      "JUnit",
      "Mockito",
      "HuggingFace",
      "Gemini",
      "ESP32",
    ],
  },
  contact: {
    heading: "The portfolio now has the shape. One last pass makes it recruiter-ready.",
    summary:
      "The public profile details are built in. Before deploying, add Vaibhav's exact LinkedIn URL, a direct resume link, and a recruiter email so the site converts cleanly.",
  },
};
