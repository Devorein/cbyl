import React from 'react';
import './App.css';
import { Block, Experiences, Skills } from './components';
import data from "./data";

function App() {
  return (
    <div className="App flex">
      <div className="sidebar primary-1 flex flex-col align-center">
        <div className="name heading-1 mv-10px">
          {data.name}
        </div>
        <div className="title heading-4 text-center mb-15px">
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
                data.links.website
              ],
              [
                "github",
                data.links.github
              ],
              [
                "linkedin",
                data.links.linkedin
              ],
              [
                "hashnode",
                data.links.hashnode
              ],
              [
                "stackoverflow",
                data.links.stackoverflow,
                {
                  style: {
                    position: 'relative',
                    left: -3
                  }
                }
              ],
              [
                "codewars",
                data.links.codewars
              ],
              [
                "wakatime",
                data.links.wakatime
              ],
              [
                "twitter",
                data.links.twitter
              ]
            ]
          }}
        />
        <Block
          contentRenderComponent="list"
          headerProps={{
            headerText: "Skills",
            headerIcon: 'puzzle'
          }}
          listProps={{
            items: data.skills.map(skill => [null, skill])
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
      </div>
      <div className="main-content ml-10px w-100p">
        <Experiences />
        <Skills />
      </div>
    </div>
  );
}

export default App;
