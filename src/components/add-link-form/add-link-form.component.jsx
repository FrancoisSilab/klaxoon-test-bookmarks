import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from 'react-bootstrap';

import "./add-link-form.styles.scss";

import FormGroup from "../form-group/form-group.component.jsx";

import {
  selectDurationVisibility,
  selectInputStatesValues
} from "../../redux/input/input.selectors.js";
import { toggleVisibility, updateInput } from "../../redux/input/input.actions.js";
import { addLinkItem } from "../../redux/links/links.utils.js";


const AddLinkForm = ({
  hidden,
  inputValues,
  toggleVisibility,
  updateInput,
  addLinkItem,
}) => {
  const { url, title, author, date, width, height, duration } = inputValues;

  const handleSubmit = event => {
    event.preventDefault();
    addLinkItem(inputValues);
  };


  const handleChange = event => {
    const { value, name } = event.target;
    // Mise a jours du state correspondant à la value de chaque input au onChange
    const data = {
      name,
      value
    }
    updateInput(data);
    // Affichage du champs duration en fonction de la catégory choisie
    if (name === "category") {
      var hiddenNewVal = value === "Video" ? false : true;
      toggleVisibility(hiddenNewVal);
    }
  };

  return (
    <form className="addLinkForm" onSubmit={handleSubmit}>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="url"
        value={url}
        label="URL"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="title"
        value={title}
        label="Title"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="author"
        value={author}
        label="Author"
        required
      ></FormGroup>
      <FormGroup
        type="date"
        handleChange={handleChange}
        name="date"
        value={date}
        label="Date"
        required
      ></FormGroup>
      <FormGroup
        type="section"
        handleChange={handleChange}
        options={["Photo", "Video"]}
        name="category"
        label="Category"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="width"
        value={width}
        label="Width"
        required
      ></FormGroup>
      <FormGroup
        type="text"
        handleChange={handleChange}
        name="height"
        value={height}
        label="Height"
        required
      ></FormGroup>
      {!hidden ? (
        <FormGroup
          type="time"
          handleChange={handleChange}
          name="duration"
          value={duration}
          label="Duration"
          required
        ></FormGroup>
      ) : null}
      <Button type="submit">
        Ajouter le lien
      </Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  addLinkItem: link => dispatch(addLinkItem(link)),
  updateInput: data => dispatch(updateInput(data)),
});

const mapStateToProps = state =>
  createStructuredSelector({
    hidden: selectDurationVisibility,
    inputValues: selectInputStatesValues
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLinkForm);
