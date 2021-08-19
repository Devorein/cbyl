import React from 'react';
import './App.css';
import { Block } from './components';
import data from "./data";

interface AppProps { }

function App({ }: AppProps) {
  return (
    <div className="App">
      <div className="sidebar primary-1 flex flex-cols align-center">
        <div className="name heading-1 mv-10px">
          {data.name}
        </div>
        <div className="title heading-4 text-center">
          {data.title}
        </div>
        <Block headerText="Personal Info" headerIcon={<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.58185 10C12.3436 10 14.5818 7.76172 14.5818 5C14.5818 2.23828 12.3436 0 9.58185 0C6.82013 0 4.58185 2.23828 4.58185 5C4.58185 7.76172 6.82013 10 9.58185 10ZM13.0818 11.25H12.4295C11.5623 11.6484 10.5975 11.875 9.58185 11.875C8.56622 11.875 7.60529 11.6484 6.73419 11.25H6.08185C3.18341 11.25 0.831848 13.6016 0.831848 16.5V18.125C0.831848 19.1602 1.67169 20 2.70685 20H16.4568C17.492 20 18.3318 19.1602 18.3318 18.125V16.5C18.3318 13.6016 15.9803 11.25 13.0818 11.25Z" fill="white" />
        </svg>
        }>

        </Block>
      </div>
    </div>
  );
}

export default App;
