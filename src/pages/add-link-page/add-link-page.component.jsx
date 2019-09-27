import React from "react";
import { connect } from "react-redux";

import AddLinkForm from "../../components/add-link-form/add-link-form.component.jsx";
import { toggleVisibility, resetInput } from "../../redux/input/input.actions.js";

import "./add-link-page.styles.scss";

class AddLinkPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  componentWillUnmount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  render() {
    return (
      <div>
        <h1>Add a link</h1>
        <AddLinkForm></AddLinkForm>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  resetInput: () => dispatch(resetInput())
});

export default connect(
  null,
  mapDispatchToProps
)(AddLinkPage);
