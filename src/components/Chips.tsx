import React from "react";
import { Icon } from ".";
import "./Chip.css";

export interface ChipsProps {
  items: Array<string | Array<string>>
}

export function Chips(props: ChipsProps) {
  const { items } = props;

  return <div className={`Chip flex`}>
    {items.map((item) => {
      const containsIcon = Array.isArray(item)
      const content = !containsIcon ? item : item[1];
      const isLink = content.match(/^(http)/);
      return <li key={content} className={`Chip-item flex align-center pv-10px ph-10px mr-10px`}>
        <div className="Chip-item-icon flex">
          {!containsIcon ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="black" />
          </svg> : typeof item[0] === "string" ? <Icon icon={item[0]} /> : item[0]
          }
        </div>
        <div className={`Chip-item-content body-1 ${!containsIcon ? 'ml-15px' : 'ml-10px'}`}>
          {isLink ? <a className="link" href={content} target="blank">{content.split(":").slice(1).join("").replace("//", "")}</a> : content}
        </div>
      </li>
    })}
  </div>
}