import React from 'react';
import './App.css';
import { Block, Education, Experiences, Projects, Skills } from './components';
import { Certificates } from './components/Certificates';
import data from "./data";

function App() {
  return (
    <div className="App flex">
      <div className="sidebar flex flex-col align-center" style={{
        backgroundColor: data.primary_color
      }}>
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
            headerIcon: 'person',
            primary: false
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
              ...data.emails.map(email => ["email", email] as any)
            ]
          }}
        />
        <Block
          contentRenderComponent="list"
          headerProps={{
            headerText: "Profile Links",
            headerIcon: 'link',
            primary: false
          }}
          listProps={{
            items: data.links.map(([label, link, icon]) => ([
              icon,
              label,
              {
                link
              }
            ]))
          }}
        />
        <Block
          contentRenderComponent="list"
          headerProps={{
            headerText: "Strengths",
            headerIcon: 'muscle',
            primary: false
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
