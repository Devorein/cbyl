import React from "react";
import { Chips, Icon } from ".";
import data from "../data";
import type { IProject } from "../types";
import { Header } from "./Header";
import "./Projects.css";

function Project(props: { project: IProject }) {
  const { project } = props;
  return <div className="Project-item p-10px flex flex-col align-center">
    <div className="heading-3 mb-10px text-bold">{project.name}</div>
    <div className="body-2 mb-10px">
      {project.start_date} - {project.end_date}
    </div>
    <div className="p-5px">
      {project.links.website && <a href={project.links.website} className="p-5px" target="_blank">
        <Icon icon="globe" />
      </a>}
      {project.links.github && <a href={project.links.github} className="p-5px" target="_blank">
        <Icon icon="github" />
      </a>}
    </div>
    <Chips className={'text-center'} items={project.stack.map(item => [item, item])} />
    <div className="divider"></div>
    <div className="body-1 text-center p-15px">
      {project.description}
    </div>
  </div>
}

export function Projects() {
  return <div className="Projects mb-15px">
    <div className="mb-15px">
      <Header headerText="Sites" headerIcon="browser" />
      <div className="grid grid-cols-2">
        {
          data.projects.sites.map(site => <Project key={site.name} project={site} />)
        }
      </div>
    </div>
    <div className="mb-15px">
      <Header headerText="Apps" headerIcon="browser" />
      <div className="grid grid-cols-2">
        {
          data.projects.apps.map(app => <Project key={app.name} project={app} />)
        }
      </div>
    </div>
  </div>
}