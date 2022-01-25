export interface IProject {
  name: string
  description: string
  links: {
    website?: string
    github?: string | null
    npm?: string
  }
  stack: string[],
  start_date: string
  end_date: string
}

export interface ICertificate {
  name: string
  organization: string
  issue_date: string
  expiration_date: string
  credential_url: string
  logo: string
}

export interface IEducation {
  name: string
  degree: string
  field: string
  start_date: string
  end_date: string
  logo: string
  links: {
    website: string
    linkedin: string
  }
}

export interface IExperience {
  company_name: string
  title: string
  logo: string
  location: string
  start_date: string
  end_date: string
  employment_type: string
  steps: string[]
  links: {
    website: string
    linkedin: string
  }
}

export interface IConfig {
  primary_color: string,
  secondary_color: string,
  name: string
  title: string
  description: string
  location: string
  phone: string
  emails: string[]
  links: [label: string, link: string, icon: string][]
  skills: string[]
  strengths: string[]
  programming_languages: string[]
  frameworks: string[]
  databases: string[]
  platforms: string[]
  libraries: string[]
  tools: string[]
  certificates: ICertificate[]
  educations: IEducation[]
  experiences: IExperience[]
  projects: {
    sites: IProject[],
    apps: IProject[],
    libraries: IProject[]
  }
}