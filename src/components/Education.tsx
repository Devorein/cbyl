import React from "react";
import data from "../data";
import "./Education.css";
import { Header } from "./Header";

export function Education() {
  return <div className="Education">
    <Header headerIcon="mortarboard" headerText="Education" />
    <div className="grid grid-cols-2">
      {data.education.map(education =>
        <div className="flex align-center mv-15px p-15px Education-item">
          <img src={education.logo} alt={education.name} height={95} width={100} className="mr-15px" />
          <div>
            <div className="heading-3 mb-10px text-bold">
              {education.name}
            </div>
            <div className="flex align-center mb-5px">
              <div className="body-2 mr-10px text-bold">
                {education.degree}
              </div>
              <div>
                {education.fos}
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