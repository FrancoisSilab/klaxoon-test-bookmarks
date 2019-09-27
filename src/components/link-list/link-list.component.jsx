import React from "react";
import "./link-list.styles.scss";

import LinkItem from "../link-item/link-item.component.jsx";

const LinkList =  ({ linksItems }) => {
  return (
    <ul className="link-list">
      {linksItems.map(({id, ...otherProps}) => (
        <LinkItem key={id} id={id} {...otherProps}></LinkItem>
      ))}
    </ul>
  );
};

export default LinkList;
