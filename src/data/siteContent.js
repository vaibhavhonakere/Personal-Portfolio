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
      value: "5+",
      label: "Years building software",
    },
    {
      value: "2+",
      label: "Industry internships",
    },
    {
      value: "6+",
      label: "Public projects shipped",
    },
    {
      value: "8+",
      label: "Technologies applied",
    }
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
        title: "Experience",
        entries: [
          {
            period: "Sep 2024 - Present",
            location: "Mountain View, CA",
            role: "Software Engineer",
            org: "Wisk",
            bullets: [
              "Built modular TypeScript extensions for an internal analytics platform, adding cloud file versioning, notebook templating, and metadata-driven content generation for engineering workflows.",
              "Expanded observability across simulation and platform services with Prometheus, OpenTelemetry, Grafana, and OpenSearch so engineers can inspect cluster health, logs, and runtime behavior in one place.",
              "Built and deployed cloud-native platform services on Google Cloud using FastAPI, Kubernetes, Terraform, Helm, and containerized workloads to support internal simulation analysis and engineering workflows at scale.",
              "Deployed internal services on Cloud Run and built authorization workflows for internal applications using Secret Manager and RBAC controls to enforce secure, scoped access across development, staging, and production.",
              "Cut a legacy processing cycle from four days to under twenty-four hours by redesigning workloads as horizontally scalable Kubernetes jobs and automating idle-resource shutdown behavior.",
              "Built out GitOps-style delivery using GitLab CI, Argo CD, and Argo Workflows on cost-optimized clusters serving 100+ users, and added Go-based workflow extensions to tighten credential handling and per-user access control.",
              "Currently contributing to C++ pipeline work around the public IRIG library, decoding aircraft flight-test channels and records into human-readable CSV output for downstream analysis and internal tooling.",
            ],
          },
          {
            period: "Jun 2024 - Aug 2024",
            location: "Mountain View, CA",
            role: "Software Engineer Intern",
            org: "Wisk",
            bullets: [
              "Designed and brought up a GKE-based cluster environment for an internal data-analysis tool, including secure VPN-connected access patterns for engineers working with protected systems.",
              "Built higher-level libraries and developer utilities that simplified analysis workflows and plugged into GitLab pipelines to automate testing and reduce repetitive setup work.",
              "Developed Google Vertex AI powered plugins for internal tooling, helping automate code-generation tasks and speed up engineering iteration.",
              "Created Terraform modules and Helm charts that simplified BigQuery and Google Cloud Storage permission setup, making cloud integration more repeatable across services.",
            ],
          },
          {
            period: "Jan 2024 - Mar 2024",
            location: "Santa Cruz, CA",
            role: "AI Researcher",
            org: "UC Santa Cruz",
            bullets: [
              "Contributed to AI Explainability and Accountability Lab research focused on explainable AI, anomaly detection, and monitoring methods for autonomous vehicle systems.",
              "Supported supervised learning workflows for autonomy-related perception tasks using labeled training and evaluation data.",
              "Assisted with unsupervised learning analysis to compare patterns, anomalies, and model behavior across different driving scenarios.",
              "Helped organize and prepare datasets for CNN and neural network experiments tied to autonomous systems research.",
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
        title: "Skills",
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
              { name: "Go", symbol: "GO" },
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
              { name: "GPT", symbol: "GPT" },
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
        title: "Relevant Coursework",
        groups: [
          {
            label: "Computer Science",
            items: [
              "Object-Oriented Programming",
              "Programming in C",
              "Information Systems",
              "Data Structures & Algorithms",
              "Computer Architecture",
              "Analysis of Algorithms",
            ],
          },
          {
            label: "Systems + AI",
            items: [
              "Systems / Multi-threaded Programming",
              "Numerical Methods",
              "Introduction to AI",
              "Data Mining & Machine Learning",
              "High Performance Computing",
              "Web Application Development",
              "Cloud Computing",
            ],
          },
          {
            label: "Applied Mathematics I",
            items: [
              "Honors Multivariable Calculus",
              "Ordinary Differential Equations",
              "Vector Calculus",
              "Partial Differential Equations & Systems",
              "Elementary Linear Algebra",
              "Linear Algebra II",
            ],
          },
          {
            label: "Applied Mathematics II",
            items: [
              "Discrete Mathematics",
              "Introduction to Statistics",
              "Probability",
              "Abstract Algebra",
              "Honors Real Analysis",
              "Fourier Analysis",
              "Methods for Complex Analysis",
            ],
          },
        ],
      },
      about: {
        title: "About Me",
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
      name: "ClipQuest",
      icon: "◉",
      association: "Personal Project",
      summary: "Video moment search engine for jumping directly to the right second inside long-form content.",
      description:
        "ClipQuest is designed as a retrieval-first video product where users can search for a phrase, topic, or moment and land directly on the relevant section instead of manually scrubbing through an entire file. The project is centered on timestamp precision, useful indexing, and a smoother viewing flow that makes large video libraries feel searchable and structured.",
      tech: ["React.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Hugging Face", "Apache Kafka", "Vector Databases"],
      links: [
        {
          label: "GitHub Repo",
          href: "https://github.com/vaibhavhonakere/ClipQuest",
        },
      ],
    },
    {
      name: "Mini Edge Network",
      icon: "◌",
      association: "Distributed Systems Simulation",
      summary: "Distributed systems simulation focused on node coordination, replication behavior, and failure handling.",
      description:
        "Mini Edge Network is a systems-heavy build oriented around simulating how lightweight edge nodes communicate, replicate state, and recover under imperfect conditions. The value of the project is in the architecture itself: modeling service-to-service behavior, observing failure cases, and creating a contained environment for testing distributed systems ideas without needing a full production deployment.",
      tech: ["Go", "Docker", "Redis", "gRPC", "Linux", "Distributed Systems"],
      links: [
        {
          label: "GitHub Repo",
          href: "https://github.com/vaibhavhonakere/Mini-Edge-Network",
        },
      ],
    },
    {
      name: "Shutterfly",
      icon: "▣",
      association: "Automation / CLI Tool",
      summary: "CLI automation tool for processing Shutterfly sports portrait print orders from CSV files and local photo folders.",
      description:
        "Shutterfly is a Node.js automation project built to streamline sports portrait ordering by reading structured CSV order sheets, matching them against local photo folders, running a preflight file check, and then automating the upload and print-selection workflow through Shutterfly. It is a practical operations-focused tool that turns a repetitive manual ordering process into a reproducible CLI workflow.",
      tech: ["Node.js", "JavaScript", "Puppeteer", "CLI Tooling", "CSV Processing", "Automation"],
      links: [
        {
          label: "GitHub Repo",
          href: "https://github.com/vaibhavhonakere/Shutterfly",
        },
      ],
    },
    {
      name: "Chef It Up",
      icon: "✦",
      association: "LA Hacks 2024",
      summary:
        "Ingredient-based recipe generator that turns pantry or fridge inputs into usable meal ideas.",
      description:
        "Chef It Up was built around a very practical product problem: people know what ingredients they have, but they do not know what they can actually make with them. The app uses ingredient input and image-based flows to generate recipes, suggest substitutions, and reduce wasted groceries while keeping the experience fast enough to feel useful during real meal planning.",
      tech: ["React.js", "JavaScript", "Google Gemini API", "HTML/CSS", "Prompt Engineering"],
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
      icon: "✿",
      association: "HackDavis 2024",
      summary:
        "A smart plant-care device that combines sensors, cloud processing, and Telegram updates for real-time plant health monitoring.",
      description:
        "BloomBot combines hardware, cloud processing, and messaging into a single plant-monitoring workflow. The system reads environmental signals like moisture, humidity, light, and temperature, processes the data through a backend pipeline, and sends useful updates through Telegram so plant health becomes something users can actually act on instead of something they just passively measure.",
      tech: ["React.js", "Python", "Flask", "AWS", "ESP32", "Telegram Bot API"],
      links: [
        {
          label: "GitHub Repo",
          href: "https://github.com/BatuhanSA/BloomBot",
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/bloombot-w4xboy?ref_content=my-projects-tab&ref_feature=my_projects",
        },
      ],
    },
    {
      name: "GroupGrub",
      icon: "🍽",
      association: "TreeHacks 2024",
      summary: "Group dining coordination app for helping friends decide where to eat with less back-and-forth.",
      description:
        "GroupGrub is a product concept focused on reducing the friction of choosing food with multiple people. The idea is to combine preferences, filters, location context, and lightweight voting into one decision flow so groups can land on a restaurant faster instead of getting stuck in long message threads. It is positioned as a consumer-facing app with clear room for stronger backend and recommendation logic.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Google Maps API"],
      links: [
        {
          label: "GitHub Repo",
          href: "https://github.com/sarthak815/GroupGrub",
        },
        {
          label: "Devpost",
          href: "https://devpost.com/software/groupgrub",
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
