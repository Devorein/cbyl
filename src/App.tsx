import React from 'react';
import './App.css';
import { Block, Education, Experiences, Projects, Skills } from './components';
import { Certificates } from './components/Certificates';
import data from "./data";

function App() {
  return (
    <div className="App flex">
      <div className="sidebar primary-1 flex flex-col align-center">
        <div className="name heading-2 mv-10px text-center">
          {data.name}
        </div>
        <div className="title heading-4 text-center mb-25px">
          {data.title}
        </div>
        <Block
          contentRenderComponent="list"
          headerProps={{
            headerText: "Personal Info",
            headerIcon: 'person'
          }}
          listProps={{
            items: [
              [
                "location",
                data.location
              ],
              [
                "phone",
                data.phone
              ],
              [
                "email",
                data.email
              ]
            ]
          }}
        />
        <Block
          contentRenderComponent="list"
          headerProps={{
            headerText: "Profile Links",
            headerIcon: 'link'
          }}
          listProps={{
            items: [
              [
                "globe",
                data.links.website[0],
                {
                  link: data.links.website[1]
                }
              ],
              [
                "github",
                data.links.github[0],
                {
                  link: data.links.github[1]
                }
              ],
              [
                "linkedin",
                data.links.linkedin[0],
                {
                  link: data.links.linkedin[1]
                }
              ],
              [
                "hashnode",
                data.links.hashnode[0],
                {
                  link: data.links.hashnode[1]
                }
              ],
              [
                "stackoverflow",
                data.links.stackoverflow[0],
                {
                  style: {
                    position: 'relative',
                    left: -3
                  },
                  link: data.links.stackoverflow[1],
                }
              ],
              [
                "codewars",
                data.links.codewars[0],
                {
                  link: data.links.codewars[1]
                }
              ],
              [
                "wakatime",
                data.links.wakatime[0],
                {
                  link: data.links.wakatime[1]
                }
              ],
              [
                "twitter",
                data.links.twitter[0],
                {
                  link: data.links.twitter[1]
                }
              ]
            ]
          }}
        />
        <Block
          contentRenderComponent="list"
          headerProps={{
            headerText: "Strengths",
            headerIcon: 'muscle'
          }}
          listProps={{
            items: data.strengths.map(strengths => [null, strengths])
          }}
        />
        <Certificates />
      </div>
      <div className="main-content ml-10px w-100p">
        <div className="grid grid-cols-2">
          <Education />
          <Experiences />
        </div>
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
