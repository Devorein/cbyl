import React from 'react';
import './App.css';
import { Block } from './components';
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="sidebar primary-1 flex flex-cols align-center">
        <div className="name heading-1 mv-10px">
          {data.name}
        </div>
        <div className="title heading-4 text-center">
          {data.title}
        </div>
        <Block
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
          headerText="Skills"
          headerIcon={
            'puzzle'
          }
          listProps={{
            items: data.skills
          }}
        />
        <Block
          headerText="Strengths"
          headerIcon={
            'muscle'
          }
          listProps={{
            items: data.strengths
          }}
        />
      </div>
      <div className="main-content">
        <Block
          headerText="Programming Languages"
          headerIcon={"code"}
          listProps={{
            items: data.programming_languages
          }}
        />
      </div>
    </div>
  );
}

export default App;
