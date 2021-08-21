import React from "react";
import { Chips, Icon } from ".";
import data from "../data";
import { Header } from "./Header";
import "./Projects.css";

export function Projects() {
  return <div className="Projects mb-15px">
    <div>
      <Header headerText="Sites" headerIcon="browser" />
      <div className="grid grid-cols-2">
        {
          data.projects.sites.map(site => {
            return <div className="Project-item p-10px flex flex-col align-center">
              <div className="heading-3 mb-10px text-bold">{site.name}</div>
              <div className="body-2 mb-10px">
                {site.start_date} - {site.end_date}
              </div>
              <div className="p-5px">
                {site.links.website && <a href={site.links.website} className="p-5px" target="_blank">
                  <Icon icon="globe" />
                </a>}
                {site.links.github && <a href={site.links.github} className="p-5px" target="_blank">
                  <Icon icon="github" />
                </a>}
              </div>
              <Chips className={'text-center'} items={site.stack.map(item => [item, item])} />
              <div className="divider"></div>
              <div className="body-1 text-center p-10px">
                {site.description}
              </div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}