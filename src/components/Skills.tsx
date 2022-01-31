import React from "react";
import data from "../data";
import { Block } from "./Block";
import { Header } from "./Header";

export function Skills() {
  return <div className="Skills">
    <Header headerIcon={"puzzle"} headerText={"Skills"} />
    <div className="ph-5px grid grid-cols-3">
      <Block
        headerProps={{
          headerText: "Languages",
          headerIcon: "code",
          primary: false
        }}
        contentRenderComponent="chips"
        chipsProps={{
          items: data.programming_languages.map((value) => [value, value])
        }}
      />
      <Block
        headerProps={{
          headerText: "Databases",
          headerIcon: "database",
          primary: false
        }}
        contentRenderComponent="chips"
        chipsProps={{
          items: data.databases.map((value) => [value, value])
        }}
      />

      <Block
        headerProps={{
          headerText: "Tools",
          headerIcon: "tools",
          primary: false
        }}
        contentRenderComponent="chips"
        chipsProps={{
          items: data.tools.map((value) => [value, value])
        }}
      />
      <Block
        headerProps={{
          headerText: "Platforms",
          headerIcon: "platform",
          primary: false
        }}
        contentRenderComponent="chips"
        chipsProps={{
          items: data.platforms.map((value) => [value, value])
        }}
      />
      <Block
        headerProps={{
          headerText: "Frameworks",
          headerIcon: "cog",
          primary: false
        }}
        contentRenderComponent="chips"
        chipsProps={{
          items: data.frameworks.map((value) => [value, value])
        }}
      />
      <Block
        headerProps={{
          headerText: "Libraries",
          headerIcon: "cube",
          primary: false
        }}
        contentRenderComponent="chips"
        chipsProps={{
          items: data.libraries.map((value) => [value, value])
        }}
      />
    </div>

  </div>
}