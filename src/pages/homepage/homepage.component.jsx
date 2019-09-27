import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { getLinksItems } from "../../redux/links/links.utils.js";
import { selectLinksItems } from "../../redux/links/links.selectors.js";

import "./homepage.styles.scss";

import LinkList from "../../components/link-list/link-list.component.jsx";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getLinksItems();
  }

  render() {
    return (
      <div>
        <h1>List Page</h1>
        <LinkList linksItems={this.props.links}></LinkList>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getLinksItems: () => dispatch(getLinksItems())
});

const mapStateToProps = state =>
  createStructuredSelector({
    links: selectLinksItems,
  });

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(HomePage);
