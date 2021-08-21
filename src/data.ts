import type { IProject } from "./types";

const data = {
  name: "Safwan Shaheer",
  title: "Open Source Contributor and full-stack Web, Mobile Developer.",
  description: "An skilled developer dedicated to lifelong learning with a passion for tinkering with bleeding edge technologies and making an impact along the way.",
  location: "Dhaka, Bangladesh",
  phone: "+8801796263758",
  email: "safwanshaheer00@gmail.com",
  links: {
    website: "https://devorein.me",
    github: "https://github.com/devorein",
    linkedin: "https://linkedin.com/in/devorein",
    hashnode: "https://hashnode.com/@devorein",
    stackoverflow: "https://stackoverflow.com/users/9745104/devorein",
    codewars: "https://codewars.com/users/Devorein",
    wakatime: "https://wakatime.com/@devorein",
    twitter: "https://twitter.com/devorein"
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
    "Hard Working",
    "Time Management",
    "Proactive",
    "Dedicated Learner",
    "Team player",
    "Reliable & Consistent"
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
        description: "Yalavisa is a visa issuance service for the fastest Dubai in Israel! Until Business Day 1 and your visa! Thousands of satisfied customers. Easy and fast service without filling out forms, at the cheapest price in Israel. And all this directly from your WhatsApp",
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
        start_date: "July 5th, 2021",
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
        start_date: "July 5th, 2021",
        end_date: "Present",
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
          "Prism",
          "js-yaml",
          "Notistack"
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
      {
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
      },
      {
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
        start_date: "Aug 22nd, 2020",
        end_date: "Aug 23rd, 2021",
      },
      {
        name: "Relendar",
        description: "A discord bot to keep track of your academic schedule.",
        links: {
          github: "https://github.com/devorein/github-action-heroku-worker-toggler"
        },
        stack: [
          "Typescript",
          "Node",
          "Heroku",
          "Moment",
          "yargs",
          "discord.js",
        ],
        start_date: "Aug 22nd, 2020",
        end_date: "Aug 23rd, 2021",
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