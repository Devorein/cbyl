import React from "react";
import data from "../data";
import "./Experiences.css";
import { Header } from "./Header";
import { List } from "./List";

export function Experiences() {
  return <div className="Experiences">
    <Header headerIcon="sandtime" headerText="Experiences" />
    <div className="Experiences-content grid grid-cols-2">
      {data.experiences.map(experience => {
        return <div className="Experiences-item mt-15px p-10px" key={experience.company_name + experience.employment_type + experience.title}>
          <div className="flex align-center pb-10px Experiences-item-info">
            <img src={experience.logo} alt={experience.company_name} height={100} width={100} className="mr-10px" />
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
            <List size="small" items={experience.steps} />
          </div>
        </div>
      })}
    </div>
  </div>
}