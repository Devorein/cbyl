import React from "react";
import { Chips, Icon } from ".";
import data from "../data";
import type { IProject } from "../types";
import { Header } from "./Header";

function Project(props: { project: IProject }) {
  const { project } = props;
  return <div className="Project-item shadow-lg br-5px p-10px flex flex-col align-center">
    <div className="heading-3 mv-10px text-bold text-center ph-10px">{project.name}</div>
    <div className="body-2 mb-10px">
      {project.start_date} - {project.end_date}
    </div>
    <div className="p-5px flex align-center">
      {project.links.website && <a href={project.links.website} className="p-5px" target="_blank">
        <Icon icon="globe" />
      </a>}
      {project.links.github && <a href={project.links.github} className="p-5px" target="_blank">
        <Icon icon="github" />
      </a>}
      {project.links.npm && <a href={project.links.npm} className="p-5px" target="_blank">
        <Icon icon="NPM" />
      </a>}
    </div>
    <Chips className={'items-center'} items={project.stack.map(item => [item, item])} />
    <div className="divider"></div>
    <div className="body-1 text-center p-15px">
      {project.description}
    </div>
  </div>
}

export function Projects() {
  return <div className="Projects mb-15px">
    <Header headerIcon="building" headerText="Projects" />
    <div className="mb-5px p-5px">
      <Header headerText="Sites" headerIcon="browser" primary={false} />
      <div className="grid grid-cols-3">
        {
          data.projects.sites.map(site => <Project key={site.name} project={site} />)
        }
      </div>
    </div>
    <div className="mb-5px p-5px">
      <Header headerText="Apps" headerIcon="window" primary={false} />
      <div className="grid grid-cols-3">
        {
          data.projects.apps.map(app => <Project key={app.name} project={app} />)
        }
      </div>
    </div>
    <div className="mb-5px p-5px">
      <Header headerText="Libraries" headerIcon="cube" primary={false} />
      <div className="grid grid-cols-3">
        {
          data.projects.libraries.map(library => <Project key={library.name} project={library} />)
        }
      </div>
    </div>
  </div>
}