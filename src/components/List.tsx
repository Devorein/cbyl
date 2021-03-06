import React from 'react';
import { Icon } from ".";

export interface ListProps {
  items: Array<[string | null, string, {
    style?: React.CSSProperties,
    link?: string
  }?]>
  size?: "small" | "medium" | "large"
}

export function List(props: ListProps) {
  const { items, size = "medium" } = props;

  return <div className={`List flex flex-col`}>
    {items.map((item) => {
      const [icon, content, options = {}] = item;
      const isLink = options.link;
      return <li style={options.style ?? {}} key={content} className={`List-item ${size === "medium" ? 'p-10px' : size === "small" ? 'p-5px' : 'p-15px'} flex align-center`}>
        <div className="List-item-icon flex">
          {!icon ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="black" />
          </svg> : <Icon icon={icon} />
          }
        </div>
        <div className={`List-item-content body-1 ${size === "medium" || size === "small" ? 'ml-10px' : 'ml-15px'}`}>
          {isLink ? <a className="link" href={isLink} target="blank">{content}</a> : content}
        </div>
      </li>
    })}
  </div>
}