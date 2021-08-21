import React from "react";
import { Icon } from ".";
import data from "../data";
import "./Experiences.css";
import { Header } from "./Header";
import { List } from "./List";

export function Experiences() {
  return <div className="Experiences mb-25px">
    <Header headerIcon="sandtime" headerText="Experiences" />
    <div className="Experiences-content">
      {data.experiences.map(experience => {
        return <div className="Experiences-item mt-15px p-15px relative" key={experience.company_name + experience.employment_type + experience.title}>
          <div className="flex align-center pb-10px Experiences-item-info">
            <img src={experience.logo} alt={experience.company_name} height={100} width={100} className="mr-10px" />
            <div className="absolute p-5px top-0 right-0">
              <div className="flex p-5px align-center">
                {experience.links.website && <a href={experience.links.website} className="p-5px" target="_blank">
                  <Icon icon="globe" />
                </a>}
                {experience.links.linkedin && <a href={experience.links.linkedin} className="p-5px" target="_blank">
                  <Icon icon="linkedin" />
                </a>}
              </div>
            </div>
            <div>
              <div className="heading-4 mb-5px text-bold">
                {experience.title}
              </div>
              <div className="flex align-center mb-10px">
                <div className="body-2 mr-10px text-bold">
                  {experience.company_name}
                </div>
                <div>
                  {experience.employment_type}
                </div>
              </div>
              <div className="body-2">
                {experience.start_date} - {experience.end_date}
              </div>
              <div>
                {experience.location}
              </div>
            </div>
          </div>
          <div className="mt-10px">
            <List size="small" items={experience.steps.map(step => [null, step])} />
          </div>
        </div>
      })}
    </div>
  </div>
}