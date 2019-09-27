import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./add-link-form.styles.scss";

import FormGroup from "../form-group/form-group.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import {
  selectDurationVisibility,
  selectInputStatesValues
} from "../../redux/input/input.selectors.js";
import { toggleVisibility, updateInput } from "../../redux/input/input.actions.js";

const AddLinkForm = ({
  handleSubmit,
  hidden,
  inputValues,
  toggleVisibility,
  updateInput
}) => {
  console.log(inputValues);
  const { url, title, author, date, width, height, duration } = inputValues;

  const handleChange = event => {
    const { value, name } = event.target;
    console.log(value);
    console.log(name);
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
      <CustomButton type="submit" value="submit">
        Ajouter le lien
      </CustomButton>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  updateInput: data => dispatch(updateInput(data))
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
