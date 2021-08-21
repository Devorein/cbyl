import type { IProject } from "./types";

const data = {
  name: "Safwan Shaheer",
  title: "Open Source Contributor and full-stack Web, Mobile Developer.",
  description: "An skilled developer dedicated to lifelong learning with a passion for tinkering with bleeding edge technologies and making an impact along the way.",
  location: "Dhaka, Bangladesh",
  phone: "+8801796263758",
  email: "safwanshaheer00@gmail.com",
  links: {
    website: [
      "devorein.me",
      "https://devorein.me"
    ],
    github: [
      "github.com/devorein",
      "https://github/devorein"
    ],
    linkedin: [
      "linkedin/devorein",
      "https://linkedin.com/in/devorein"
    ],
    hashnode: [
      "hashnode/@devorein",
      "https://hashnode.com/@devorein"
    ],
    stackoverflow: [
      "stackoverflow/devorein",
      "https://stackoverflow.com/users/9745104/devorein"
    ],
    codewars: [
      "codewars/Devorein",
      "https://codewars.com/users/Devorein",
    ],
    wakatime: [
      "wakatime/@devorein",
      "https://wakatime.com/@devorein",
    ],
    twitter: [
      "twitter/devorein",
      "https://twitter.com/devorein"
    ]
  },
  skills: [
    "Algorithm",
    "Data Structures",
    "Object Oriented Programming",
    "Test Driven Development",
    "Open Source Contribution",
    "Full Stack Development",
    "Mobile Development",
    "Linux"
  ],
  strengths: [
    "Fluent in English",
    "Hard Working",
    "Time Management",
    "Proactive",
    "Dedicated Learner",
    "Team player",
    "Reliable & Consistent",
  ],
  programming_languages: [
    "Typescript",
    "Javascript",
    "Python",
    "Go",
    "Sass",
    "Bash"
  ],
  frameworks: [
    "Apollo Graphql",
    "Express",
    "Next.js",
    "React Native",
    "Storybook",
    "Vue.js",
    "Material UI"
  ],
  databases: [
    "MongoDB",
    "Postgresql",
    "Redis"
  ],
  platforms: [
    "DigitalOcean",
    "Docker",
    "Github Actions",
    "Heroku",
    "Netlify",
    "Vercel",
    "Firebase",
    "Cloudflare Workers"
  ],
  libraries: [
    "Babel",
    "Eslint",
    "Formik",
    "Jest",
    "React",
    "Redux",
    "Tailwind CSS",
    "Webpack",
  ],
  tools: [
    "Figma",
    "Git",
    "Notion",
    "Postman",
    "VSCode"
  ],
  certificates: [
    {
      name: "Postman Student Expert",
      organization: "Postman",
      issue_date: "Jul, 2021",
      expiration_date: "N/A",
      credential_url: "https://badgr.com/backpack/badges/60e86db63c77ab51736dc19f",
      logo: "https://media.badgr.com/uploads/badges/assertion-HYxMMyUgT8GDzczzRbo8AQ.png",
    },
    {
      name: "RU330: Redis Security",
      organization: "Redis Labs",
      issue_date: "Jul, 2021",
      expiration_date: "N/A",
      credential_url: "https://university.redislabs.com/certificates/e2db31a2f914431d8fa71dac3c6aece6",
      logo: "https://www.zdnet.com/a/hub/i/r/2020/05/11/f9afed5d-33cd-438f-ba73-31b31abba8e1/resize/370xauto/51e7a7c321c6531276c81ec376c7622e/redis-logo-2.png",
    },
    {
      name: "RU102JS: Redis for JavaScript Developers",
      organization: "Redis Labs",
      issue_date: "Jun, 2021",
      expiration_date: "N/A",
      credential_url: "https://university.redislabs.com/certificates/b0953b94b1df445c9eea75cb3bca6682",
      logo: "https://www.zdnet.com/a/hub/i/r/2020/05/11/f9afed5d-33cd-438f-ba73-31b31abba8e1/resize/370xauto/51e7a7c321c6531276c81ec376c7622e/redis-logo-2.png",
    },
    {
      name: "RU101: Introduction to Redis Data Structures",
      organization: "Redis Labs",
      issue_date: "Jun, 2021",
      expiration_date: "N/A",
      credential_url: "https://university.redislabs.com/certificates/0297722d667d4830a86fe6a5e1457e48",
      logo: "https://www.zdnet.com/a/hub/i/r/2020/05/11/f9afed5d-33cd-438f-ba73-31b31abba8e1/resize/370xauto/51e7a7c321c6531276c81ec376c7622e/redis-logo-2.png",
    }
  ],
  education: [
    {
      name: "BRAC University",
      degree: "Bachelor's degree",
      fos: "Computer Science",
      start_date: "January, 2021",
      end_date: "January, 2024",
      logo: "https://www.bracu.ac.bd/sites/default/files/resources/media/bracu_logo.png",
      links: {
        website: "https://www.bracu.ac.bd/",
        linkedin: "https://www.linkedin.com/school/brac-university/"
      }
    }
  ],
  experiences: [
    {
      company_name: "Atlas Authority LLC",
      title: "Developer Intern",
      logo: "https://www.clipartmax.com/png/middle/345-3458375_atlas-authority-llc-logo-traffic-sign.png",
      location: "New York, United States",
      start_date: "July 2021",
      end_date: "Present",
      employment_type: "Part-time",
      steps: [
        "Building a notion integration using forge platform",
        "Creating custom notion frontend renderer",
        "Creating custom notion backend api"
      ],
      links: {
        website: "https://atlasauthority.com/",
        linkedin: "https://www.linkedin.com/company/atlas-authority/"
      }
    }
  ],
  projects: {
    sites: [
      {
        name: "Yalavisa",
        description: "Yalavisa is a visa issuance service for the fastest Dubai in Israel!",
        links: {
          website: "https://yalavisa.pages.dev/",
          github: null
        },
        stack: [
          "Vue.js"
        ],
        start_date: "August 5th, 2021",
        end_date: "August 11th, 2021",
      },
      {
        name: "HDWD",
        description: "Garner constructive feedback of your facilities without hurting your Google ratings",
        links: {
          website: "https://review-nextjs.pages.dev/",
          github: null
        },
        stack: [
          "Next.js",
          "Tailwind CSS",
          "Formik",
          "Google Analytics"
        ],
        start_date: "July 14th, 2021",
        end_date: "July 28th, 2021",
      },
      {
        name: "Dev Shahriar",
        description: "Portfolio Site for SM Shahriar Islam, Data Engineer at Pathao",
        links: {
          website: "https://shahriar.vercel.app/",
          github: "https://github.com/devShahriar/shahriar"
        },
        stack: [
          "Next.js",
          "Tailwind CSS",
          "Moment",
          "React Icons"
        ],
        start_date: "July 5th, 2021",
        end_date: "July 10th, 2021",
      }
    ] as IProject[],
    apps: [
      {
        name: "Desimarketplace",
        description: "An online marketplace connecting local vendors to Bangladeshis living in the US",
        links: {
          website: "https://desimart.vercel.app/"
        },
        stack: [
          "Next.js",
          "Tailwind CSS",
          "Material UI",
          "Firebase"
        ],
        start_date: "June 24th, 2021",
        end_date: "Present",
      },
      {
        name: "Rder",
        description: "Rder is a real-time ride sharing mobile app inspired by Pathao and Uber",
        links: {},
        stack: [
          "React Native",
          "AWS",
          "GCP",
        ],
        start_date: "April 2nd, 2021",
        end_date: "June 4th, 2021",
      },
      {
        name: "Reinforz",
        description: "An online quiz app to make learning any topic a breeze, with enriched functionality and customization in mind",
        links: {
          website: "https://reinforz.vercel.app",
          github: "https://github.com/devorein/reinforz"
        },
        stack: [
          "React",
          "Material UI",
          "React Icons",
          "React Dropzone"
        ],
        start_date: "May 26th, 2021",
        end_date: "Present",
      }
    ] as IProject[],
    libraries: [
      {
        name: "Nishan",
        description: "An ecosystem of packages for notion, written in Typescript",
        links: {
          npm: "https://www.npmjs.com/search?q=%40nishans",
          github: "https://github.com/Devorein/Nishan"
        },
        stack: [
          "Typescript",
          "Node",
          "Axios",
        ],
        start_date: "Oct 26th, 2020",
        end_date: "Present",
      },
      /* {
        name: "github-action-learn-section-notion",
        description: "Update your github README learn section with data fetched from a remote notion database",
        links: {
          github: "https://github.com/Devorein/github-readme-learn-section-notion"
        },
        stack: [
          "Github Actions",
          "Typescript",
          "Node",
          "Notion",
        ],
        start_date: "May 4th, 2021",
        end_date: "May 10th, 2021",
      }, */
      /* {
        name: "Heroku Worker Toggler",
        description: "A github action to toggle your heroku worker on/off to save resources used by your dyno",
        links: {
          github: "https://github.com/devorein/github-action-heroku-worker-toggler"
        },
        stack: [
          "Github Actions",
          "Node",
          "Typescript",
          "Heroku",
        ],
        start_date: "Aug 22nd, 2021",
        end_date: "Aug 27th, 2021",
      }, */
      {
        name: "Relendar",
        description: "A discord bot to keep track of your academic schedule.",
        links: {
          github: "https://github.com/devorein/github-action-heroku-worker-toggler"
        },
        stack: [
          "Typescript",
          "Node",
          "Moment",
          "yargs",
          "discord.js",
        ],
        start_date: "July 11th, 2021",
        end_date: "Present",
      },
      {
        name: "mongql",
        description: "Generate graphql typedefs, resolvers, fragments and operations from mongoose schema in an instant.",
        links: {
          github: "https://github.com/Devorein/mongql",
          npm: "https://www.npmjs.com/package/mongql",
        },
        stack: [
          "Typescript",
          "Graphql",
          "Node",
        ],
        start_date: "July 16th, 2020",
        end_date: "Aug 27th, 2020",
      }
    ] as IProject[]
  }
}


export default data;