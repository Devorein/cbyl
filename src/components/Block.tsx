import React from "react";
import { Icon, List } from "./";

interface BlockProps {
  headerText: string
  headerIcon: string
  items: Array<string | Array<string>>
}

export function Block(props: BlockProps) {
  const { headerText, headerIcon, items } = props;
  return <div className="Block w-100p">
    <div className="Block-header flex align-center items-center p-10px br-5px mv-10px primary-2">
      <div className="Block-header-icon flex items-center align-center">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="24.7487" width="35" height="35" rx="5" transform="rotate(45 24.7487 0)" fill="black" />
        </svg>
        <div className="absolute">
          <Icon icon={headerIcon} />
        </div>
      </div>
      <div className="Block-header-text heading-3 ml-10px">{headerText}</div>
    </div>
    <div className="Block-content">
      <List items={items} />
    </div>
  </div>
}