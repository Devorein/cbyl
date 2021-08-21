import React from "react";
import { Chips, ChipsProps, Header, List, ListProps } from "./";
import type { HeaderProps } from "./Header";

type BlockProps = {
  headerProps: HeaderProps
  chipsProps: ChipsProps
  contentRenderComponent: "chips"
} | {
  headerProps: HeaderProps
  listProps: ListProps
  contentRenderComponent: "list"
}

export function Block(props: BlockProps) {
  const { headerProps } = props;
  return <div className="Block w-100p mb-15px">
    <Header {...headerProps} />
    <div className="Block-content mb-15px">
      {props.contentRenderComponent === "list" ? <List {...props.listProps} /> : <Chips {...props.chipsProps} />}
    </div>
  </div>
}