import React from "react";
import data from "../data";
import { Block } from "./Block";

export function Skills() {
  return <div className="grid grid-cols-3">
    <Block
      headerProps={{
        headerText: "Languages",
        headerIcon: "code"
      }}
      contentRenderComponent="chips"
      chipsProps={{
        items: data.programming_languages.map((value) => [value, value])
      }}
    />
    <Block
      headerProps={{
        headerText: "Databases",
        headerIcon: "database"
      }}
      contentRenderComponent="chips"
      chipsProps={{
        items: data.databases.map((value) => [value, value])
      }}
    />

    <Block
      headerProps={{
        headerText: "Tools",
        headerIcon: "tools"
      }}
      contentRenderComponent="chips"
      chipsProps={{
        items: data.tools.map((value) => [value, value])
      }}
    />
    <Block
      headerProps={{
        headerText: "Platforms",
        headerIcon: "platform"
      }}
      contentRenderComponent="chips"
      chipsProps={{
        items: data.platforms.map((value) => [value, value])
      }}
    />
    <Block
      headerProps={{
        headerText: "Frameworks",
        headerIcon: "cog"
      }}
      contentRenderComponent="chips"
      chipsProps={{
        items: data.frameworks.map((value) => [value, value])
      }}
    />
    <Block
      headerProps={{
        headerText: "Libraries",
        headerIcon: "cube"
      }}
      contentRenderComponent="chips"
      chipsProps={{
        items: data.libraries.map((value) => [value, value])
      }}
    />

  </div>
}