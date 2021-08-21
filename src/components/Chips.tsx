import React from "react";
import { Icons } from ".";
import "./Chips.css";

export interface ChipsProps {
  items: Array<string | Array<string>>
  className?: string
}

export function Chips(props: ChipsProps) {
  const { items, className = '' } = props;

  return <div className={`Chips ${className}`}>
    {items.map((item) => {
      const containsIcon = Array.isArray(item)
      const content = !containsIcon ? item : item[1];
      const isLink = content.match(/^(http)/);
      const iconComponent = Icons.get(item[0])
      console.log({ containsIcon, iconComponent })
      return <span key={content} className={`Chips-item pv-10px ph-10px mr-10px mb-10px`}>
        <span className="flex align-center">
          <span className="Chips-item-icon flex">
            {!containsIcon ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="black" />
            </svg> : iconComponent
            }
          </span>
          <span className={`Chips-item-content body-1 ${containsIcon && !iconComponent ? '' : (!containsIcon ? 'ml-15px' : 'ml-10px')}`}>
            {isLink ? <a className="link" href={content} target="blank">{content.split(":").slice(1).join("").replace("//", "")}</a> : content}
          </span>
        </span>
      </span>
    })}
  </div>
}