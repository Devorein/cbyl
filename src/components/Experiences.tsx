import React from "react";
import data from "../data";

export function Experiences() {
  return <div className="Experience">

    {data.experiences.map(experience => {
      return <div className="Experience-item" key={experience.company_name + experience.employment_type + experience.title}>
        <div className="flex">
          <img src={experience.logo} alt={experience.company_name} />
          <div>
            <div>
              {experience.title}
            </div>
            <div className="flex">
              <div>
                {experience.company_name}
              </div>
              <div>
                {experience.employment_type}
              </div>
            </div>
            <div>
              {experience.start_date} - {experience.end_date}
            </div>
            <div>
              {experience.location}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    })}
  </div>
}