import React from "react";
import { Chips, ChipsProps, Header, List, ListProps } from "./";
import type { HeaderProps } from "./Header";

type BlockProps = {
  headerProps: HeaderProps
  chipsProps: ChipsProps
  contentRenderComponent: "chips",
  className?: string
} | {
  headerProps: HeaderProps
  listProps: ListProps
  contentRenderComponent: "list",
  className?: string
}

export function Block(props: BlockProps) {
  const { headerProps, className = "" } = props;
  return <div className={`Block w-100p ${className}`}>
    <Header {...headerProps} />
    <div className="Block-content">
      {props.contentRenderComponent === "list" ? <List {...props.listProps} /> : <Chips {...props.chipsProps} />}
    </div>
  </div>
}