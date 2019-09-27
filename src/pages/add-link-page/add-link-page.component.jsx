import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AddLinkForm from "../../components/add-link-form/add-link-form.component.jsx";

import {
  selectLinksItems,
  selectLinksItemsFromId
} from "../../redux/links/links.selectors.js";
import { selectDurationVisibility } from "../../redux/input/input.selectors.js";
import { toggleVisibility } from "../../redux/input/input.actions.js";
import { addLinkItem } from "../../redux/links/links.utils.js";

import "./add-link-page.styles.scss";

class AddLinkPage extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = event => {
    event.preventDefault();
    const { linksItem, addLinkItem } = this.props;
    const linkToAdd = {};
    for (const [key, value] of Object.entries(this.state)) {
      console.log(key);
      console.log(value);
      linkToAdd[key] = value;
    }
    console.log(linkToAdd);
    addLinkItem(linksItem, linkToAdd);
  };

  componentDidMount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  componentWillUnmount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  render() {
    const { ...inputStateValues } = this.state;
    return (
      <div>
        <h1>Add a link</h1>
        <AddLinkForm handleSubmit={this.handleSubmit}></AddLinkForm>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  addLinkItem: (linksItems, link) => dispatch(addLinkItem(linksItems, link)),
  resetInput: () => dispatch(resetInput())
});

const mapStateToProps = state =>
  createStructuredSelector({
    linksItem: selectLinksItems
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLinkPage);
