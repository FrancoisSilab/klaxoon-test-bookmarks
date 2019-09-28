import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./link-list.styles.scss";

import LinkItem from "../link-item/link-item.component.jsx";

import { selectLinksItems } from "../../redux/links/links.selectors.js"

const LinkList =  ({ linksItems }) => {
  return (
    <ul className="link-list">
      {linksItems.map(({id, ...otherProps}) => (
        <LinkItem key={id} id={id} {...otherProps}></LinkItem>
      ))}
    </ul>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    linksItems: selectLinksItems,
  });

export default connect(mapStateToProps, null)(LinkList);
