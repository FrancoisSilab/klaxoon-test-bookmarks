import React from "react";
import { connect } from "react-redux";

import "./link-item.styles.scss";

import LinkIcon from "../list-icon/list-icon.component.jsx";

import { deleteLinkItem } from "../../redux/links/links.actions.js";

const LinkItem = ({ title, author, date, url, id, removeLink }) => (
  <li className="listItem">
    <span className="listItem-title">{title}</span>
    <span className="listItem-origins">
      <p>{author}</p>
      <p>{date}</p>
    </span>
    <a className="listItem-url" href={url} target="_blank" rel="noreferrer">
      {url}
    </a>
    <LinkIcon edit code="&#9998;" to="/add-link/:linkId"></LinkIcon>
    <LinkIcon erase code="&#10007;" handleClick={() => removeLink(id)}></LinkIcon>
  </li>
);

const mapDispatchToProps = dispatch => ({
  removeLink: id => dispatch(deleteLinkItem(id))
});

export default connect(
  null,
  mapDispatchToProps
)(LinkItem);
