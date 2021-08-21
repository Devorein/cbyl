import React from "react";
import { Icon } from ".";

export interface HeaderProps {
  headerText: string
  headerIcon: string
  primary?: boolean
}

export function Header(props: HeaderProps) {
  const { headerText, headerIcon, primary = true } = props;
  return <div className="Header flex align-center items-center p-10px br-5px mb-10px primary-2">
    <div className="Header-icon flex items-center align-center">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24.7487" width="35" height="35" rx="5" transform="rotate(45 24.7487 0)" fill="black" />
      </svg>
      <div className="absolute flex">
        <Icon icon={headerIcon} />
      </div>
    </div>
    <div className="Header-text heading-3 ml-10px">{headerText}</div>
  </div>
}