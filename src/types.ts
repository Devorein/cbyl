export interface IProject {
  name: string
  description: string
  links: {
    website?: string
    github?: string
  }
  stack: string[],
  start_date: string
  end_date: string
}