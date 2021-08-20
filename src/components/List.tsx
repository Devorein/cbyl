import React from 'react';
import { Icon } from ".";
import "./List.css";

export interface ListProps {
  items: Array<string | Array<string>>
  size?: "small" | "medium" | "large"
}

export function List(props: ListProps) {
  const { items, size = "medium" } = props;

  return <div className={`List flex flex-col`}>
    {items.map((item) => {
      const containsIcon = Array.isArray(item)
      const content = !containsIcon ? item : item[1];
      const isLink = content.match(/^(http)/);
      return <li key={content} className={`List-item ${size === "medium" ? 'p-10px' : size === "small" ? 'p-5px' : 'p-15px'} flex align-center`}>
        <div className="List-item-icon flex">
          {!containsIcon ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="black" />
          </svg> : typeof item[0] === "string" ? <Icon icon={item[0]} /> : item[0]
          }
        </div>
        <div className={`List-item-content body-1 ${size === "medium" || size === "small" ? 'ml-10px' : 'ml-15px'}`}>
          {isLink ? <a className="link" href={content} target="blank">{content.split(":").slice(1).join("").replace("//", "")}</a> : content}
        </div>
      </li>
    })}
  </div>
}