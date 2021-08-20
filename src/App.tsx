import React from 'react';
import './App.css';
import { Block } from './components';
import data from "./data";

function App() {
  return (
    <div className="App flex">
      <div className="sidebar primary-1 flex flex-col align-center">
        <div className="name heading-1 mv-10px">
          {data.name}
        </div>
        <div className="title heading-4 text-center">
          {data.title}
        </div>
        <Block
          contentRenderComponent="list"
          headerText="Personal Info"
          headerIcon={
            'person'
          }
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
          headerText="Profile Links"
          headerIcon={
            'link'
          }
          listProps={{
            items: [
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
                data.links.stackoverflow
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
          headerText="Skills"
          headerIcon={
            'puzzle'
          }
          listProps={{
            items: data.skills
          }}
        />
        <Block
          contentRenderComponent="list"
          headerText="Strengths"
          headerIcon={
            'muscle'
          }
          listProps={{
            items: data.strengths
          }}
        />
      </div>
      <div className="main-content ml-10px w-100p">
        <Block
          headerText="Programming Languages"
          headerIcon={"code"}
          contentRenderComponent="chips"
          chipsProps={{
            items: data.programming_languages.map((value) => [value, value])
          }}
        />

        <Block
          headerText="Frameworks"
          headerIcon={"code"}
          contentRenderComponent="chips"
          chipsProps={{
            items: data.frameworks.map((value) => [value, value])
          }}
        />

        <Block
          headerText="Libraries"
          headerIcon={"code"}
          contentRenderComponent="chips"
          chipsProps={{
            items: data.libraries.map((value) => [value, value])
          }}
        />

        <Block
          headerText="Databases"
          headerIcon={"code"}
          contentRenderComponent="chips"
          chipsProps={{
            items: data.databases.map((value) => [value, value])
          }}
        />

        <Block
          headerText="Platforms"
          headerIcon={"code"}
          contentRenderComponent="chips"
          chipsProps={{
            items: data.platforms.map((value) => [value, value])
          }}
        />
      </div>
    </div>
  );
}

export default App;
