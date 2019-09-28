import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from 'react-bootstrap';

import AddLinkForm from "../add-link-form/add-link-form.component.jsx";
import { toggleVisibility, resetInput } from "../../redux/input/input.actions.js";
import { selectLinksItemsFromId } from "../../redux/links/links.selectors.js"
import { selectModalsVisibility } from "../../redux/modal/modal.selectors.js"
import { toggleEdit } from "../../redux/modal/modal.actions.js"

import "./edit-link-modal.styles.scss";

class EditLinkModal extends React.Component {
  constructor() {
    super();
  }

  handleClose = () => {
    const { toggleAdd, resetInput } = this.props;
    toggleAdd();
    resetInput();
  }

  componentDidMount() {
    const { toggleVisibility, linkToEdit } = this.props;
    console.log(linkToEdit);
    toggleVisibility("true");
  }

  componentWillUnmount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  render() {
    const { modalsVisibility, toggleEdit } = this.props;
    return (
      <div>
      <Modal show={modalsVisibility.editVisibility} onHide={toggleEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Link</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddLinkForm></AddLinkForm>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={toggleEdit}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  resetInput: () => dispatch(resetInput()),
  toggleEdit: () => dispatch(toggleEdit())
});

const mapStateToProps = (state, ownProps) => ({
  /*linkToEdit: selectLinksItemsFromId(ownProps.match.params.linkId),*/
  modalsVisibility: selectModalsVisibility,

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLinkModal);
