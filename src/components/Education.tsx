import React from "react";
import data from "../data";
import { Header } from "./Header";
import { Icon } from "./Icon";

export function Education() {
  return <div className="Education">
    <Header headerIcon="mortarboard" headerText="Education" />
    <div className="">
      {data.educations.map(education =>
        <div className="flex align-center mv-15px p-15px Education-item br-5px shadow-lg relative">
          <img src={education.logo} alt={education.name} height={95} width={100} className="mr-15px" />
          <div className="absolute p-5px top-0 right-0">
            <div className="flex p-5px align-center">
              {education.links.website && <a href={education.links.website} className="p-5px" target="_blank">
                <Icon icon="globe" />
              </a>}
              {education.links.linkedin && <a href={education.links.linkedin} className="p-5px" target="_blank">
                <Icon icon="linkedin" />
              </a>}
            </div>
          </div>
          <div>
            <div className="heading-3 mb-10px text-bold">
              {education.name}
            </div>
            <div className="flex align-center mb-5px">
              <div className="body-2 mr-10px text-bold">
                {education.degree}
              </div>
              <div>
                {education.field}
              </div>
            </div>
            <div className="body-2">
              {education.start_date} - {education.end_date}
            </div>
          </div>
        </div>)}
    </div>
  </div>
}