export const siteContent = {
  identity: {
    name: "Vaibhav Honakere",
    role: "Software Engineer",
    location: "San Jose, California",
    intro:
      "I engineer any digital experiences I can think of leveraging cutting-edge technologies, full-stack expertise, cloud native solutions, good devops practices to drive innovation.",
    headline: {
      lead: "Hello, I'm",
      accent: "Vaibhav Honakere",
    },
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Me", href: "/contact" },
  ],
  links: {
    primary: { label: "Open Resume", href: "/resume" },
    secondary: { label: "See Projects", href: "/projects" },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/vaibhavhonakere",
      }
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
  homeMetrics: [
    {
      value: "4",
      label: "Years building software",
    },
    {
      value: "2",
      label: "Industry internships",
    },
    {
      value: "2+",
      label: "Public projects shipped",
    },
    {
      value: "8+",
      label: "Technologies applied",
    },
    {
      value: "3x",
      label: "Dean's Honors",
    },
  ],
  resumeMeta: [
    {
      label: "Strongest signal",
      value: "Amazon Alexa internship with LLM-backed workflow and public retention impact.",
    },
    {
      label: "Background",
      value: "UC Santa Cruz Computer Engineering with repeat Dean's Honors entries.",
    },
    {
      label: "What this page answers",
      value: "Can he build, think clearly, and work inside real systems?",
    },
  ],
  resumeBoard: {
    tabs: [
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "coursework", label: "Relevant Coursework" },
      { id: "about", label: "About Me" },
    ],
    sections: {
      experience: {
        title: "My experience",
        entries: [
          {
            period: "Sep 2024 - Present",
            location: "Mountain View, CA",
            role: "Software Engineer",
            org: "Wisk",
            bullets: [
              "Full-time software engineering role focused on production systems and product delivery.",
              "Contributing to real-world engineering work in a high-accountability environment.",
            ],
          },
          {
            period: "Jun 2024 - Aug 2024",
            location: "Mountain View, CA",
            role: "Software Engineer Intern",
            org: "Wisk",
            bullets: [
              "Summer software engineering internship before converting into a full-time role.",
              "Built hands-on experience shipping software inside an aviation-focused engineering organization.",
            ],
          },
          {
            period: "Jan 2024 - Mar 2024",
            location: "Santa Cruz, CA",
            role: "AI Researcher",
            org: "UC Santa Cruz",
            bullets: [
              "Worked on AI-focused research work at UC Santa Cruz.",
              "Applied experimentation and technical analysis in an academic research setting.",
            ],
          },
          {
            period: "Jun 2023 - Sep 2023",
            location: "Sunnyvale, CA",
            role: "Software Engineer Intern",
            org: "Amazon LLC / Alexa Navigation",
            bullets: [
              "Used Llama, Falcon40B, and HuggingFace models to support complex Alexa navigation flows.",
              "Created a custom dataset with 150+ data values to improve semantic understanding of user intent.",
              "Built Flask endpoints on EC2 and integrated AWS Secrets Manager token authentication.",
              "Publicly listed result: improved Alexa user experience retention by 15%.",
            ],
          },
          {
            period: "2022",
            location: "Remote",
            role: "Software Engineer Intern",
            org: "Droisys Inc",
            bullets: [
              "Earlier professional software engineering internship experience before Amazon.",
              "Worked in a team setting and built practical delivery experience in a production-oriented environment.",
            ],
          },
        ],
      },
      education: {
        title: "Education",
        entries: [
          {
            period: "Sep 2020 - Jun 2024",
            location: "Santa Cruz, CA",
            role: "B.S. Computer Engineering",
            org: "University of California, Santa Cruz",
            bullets: [
              "Dean's Honors: Fall 2020, Spring 2021, Spring 2023.",
              "Built a strong base across software systems, engineering fundamentals, and hands-on technical execution.",
            ],
          },
          {
            period: "Aug 2016 - May 2020",
            location: "San Ramon, CA",
            role: "High School Diploma",
            org: "Dougherty Valley High School",
            bullets: [
              "Completed secondary education before starting computer engineering studies at UC Santa Cruz.",
            ],
          },
        ],
      },
      skills: {
        title: "My skills",
        intro:
          "These are the technical skills I've used across full time jobs, internships, research, personal builds, and academic work.",
        skillGroups: [
          {
            label: "Programming Languages",
            items: [
              { name: "JavaScript", symbol: "JS" },
              { name: "Python", symbol: "PY" },
              { name: "TypeScript", symbol: "TS" },
              { name: "Java", symbol: "JV" },
              { name: "C", symbol: "C" },
              { name: "C++", symbol: "C+" },
              { name: "SQL", symbol: "SQL" },
              { name: "Bash", symbol: "$_" },
            ],
          },
          {
            label: "Cloud Computing Platforms",
            items: [
              { name: "AWS", symbol: "AWS" },
              { name: "EC2", symbol: "EC2" },
              { name: "SageMaker", symbol: "SM" },
              { name: "Google Cloud", symbol: "GCP" }
            ],
          },
          {
            label: "Front-end Web Development",
            items: [
              { name: "React", symbol: "R" },
              { name: "React Native", symbol: "RN" },
              { name: "HTML5", symbol: "</>" },
              { name: "CSS3", symbol: "CSS" },
              { name: "jQuery", symbol: "JQ" },
              { name: "Responsive UI", symbol: "UI" },
            ],
          },
          {
            label: "Back-end Web Development",
            items: [
              { name: "Node.js", symbol: "ND" },
              { name: "Flask", symbol: "FL" },
              { name: "Fast API", symbol: "FA" },
              { name: "Django", symbol: "DJ" },
              { name: "PostgreSQL", symbol: "PG" },
              { name: "MongoDB", symbol: "MG" },
              { name: "REST APIs", symbol: "API" },
              { name: "Secrets Manager", symbol: "SEC" },
            ],
          },
          {
            label: "Data Analysis & Machine Learning",
            items: [
              { name: "NumPy", symbol: "NP" },
              { name: "GPT-4", symbol: "GPT" },
              { name: "Llama", symbol: "LLM" },
              { name: "Falcon 40B", symbol: "F40" },
              { name: "Hugging Face", symbol: "HF" },
              { name: "Prompt Engineering", symbol: "PE" },
              { name: "Vector Databases", symbol: "VDB" },
            ],
          },
          {
            label: "DevOps & Containerization",
            items: [
              { name: "Docker", symbol: "DK" },
              { name: "Kubernetes", symbol: "K8" },
              { name: "Linux", symbol: "LX" },
              { name: "Terraform", symbol: "TF" },
              { name: "Pulumi", symbol: "PL" },
            ],
          },
          {
            label: "Version Control",
            items: [
              { name: "Git", symbol: "GIT" },
              { name: "GitLab", symbol: "GL" },
            ],
          },
          {
            label: "Scripting & Automation",
            items: [
              { name: "VS Code", symbol: "VS" },
              { name: "JUnit", symbol: "JT" },
              { name: "Mockito", symbol: "MK" },
              { name: "ESP32", symbol: "32" },
              { name: "Automation Workflows", symbol: "AUTO" },
            ],
          },
        ],
      },
      coursework: {
        title: "Relevant coursework",
        groups: [
          {
            label: "Core engineering",
            items: [
              "Data Structures",
              "Algorithms",
              "Computer Architecture",
              "Operating Systems",
            ],
          },
          {
            label: "Systems + software",
            items: [
              "Software Engineering",
              "Database Systems",
              "Computer Networks",
              "Embedded Systems",
            ],
          },
          {
            label: "Math + foundations",
            items: [
              "Discrete Mathematics",
              "Linear Algebra",
              "Probability",
              "Digital Logic Design",
            ],
          },
        ],
      },
      about: {
        title: "About me",
        intro:
          "I'm a UC Santa Cruz Computer Engineering graduate and software engineer who likes building products that are technically sound, useful to real people, and clean in execution. My background spans production engineering, AI-focused work, full-stack systems, and fast-paced internship environments, with a consistent focus on shipping practical software under real constraints.",
        facts: [
          { label: "Name", value: "Vaibhav Honakere" },
          { label: "Hometown", value: "San Jose, CA" },
          { label: "Industry Experience", value: "2+ years" },
        ],
      },
    },
  },
  projectsMeta: [
    {
      label: "Range",
      value: "AI recipe generation, sensor systems, messaging integrations, and React interfaces.",
    },
    {
      label: "Pattern",
      value: "Projects pair product framing with fast execution instead of isolated code demos.",
    },
    {
      label: "What this page answers",
      value: "What does his work look like when he builds end to end?",
    },
  ],
  contactMeta: [
    {
      label: "Best for",
      value: "Recruiter outreach, software opportunities, and product-focused roles.",
    },
    {
      label: "Still to add",
      value: "Exact recruiter email, LinkedIn profile, and optional calendar link.",
    },
    {
      label: "Goal",
      value: "Reduce the gap between interest and outreach.",
    },
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
    heading: "Let's work together",
    summary:
      "Fill this out so we can stay connected and discuss any opportunities",
    channels: [
      {
        icon: "✉",
        label: "Personal Email",
        value: "vaibhavhonakere123@gmail.com",
        href: "mailto:vaibhavhonakere123@gmail.com",
      },
      {
        icon: "in",
        label: "LinkedIn",
        value: "linkedin.com/in/vaibhav-honakere-1ba32918a",
        href: "https://www.linkedin.com/in/vaibhav-honakere-1ba32918a/",
      },
      {
        icon: "</>",
        label: "GitHub",
        value: "github.com/vaibhavhonakere",
        href: "https://github.com/vaibhavhonakere",
      },
    ],
  },
};
