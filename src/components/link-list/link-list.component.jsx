import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLinksItems } from "../../redux/links/links.selectors.js";

import './link-list.styles.scss';

import ListItem from '../link-item/link-item.component.jsx';

const LinkList = (links) => (
    <ul className='link-list'>
    {console.log(links)}
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
    </ul>
);

const mapStateToProps = state =>
  createStructuredSelector({
    links: selectLinksItems,
  });


export default connect(mapStateToProps,null)(LinkList);
