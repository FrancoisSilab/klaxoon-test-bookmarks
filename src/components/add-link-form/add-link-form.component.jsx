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
import { selectLinksItems } from "../../redux/links/links.selectors.js";
import { toggleVisibility, updateInput, resetInput } from "../../redux/input/input.actions.js";
import { addLinkItem } from "../../redux/links/links.utils.js";


const AddLinkForm = ({
  hidden,
  linksItem,
  inputValues,
  toggleVisibility,
  updateInput,
  addLinkItem,
  resetInput,
}) => {
  const { url, title, author, date, width, height, duration } = inputValues;

  const handleSubmit = event => {
    event.preventDefault();
    console.log(linksItem);
    console.log(inputValues);
    addLinkItem(linksItem, inputValues);
    resetInput();
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
      <CustomButton type="submit" value="submit">
        Ajouter le lien
      </CustomButton>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  addLinkItem: (linksItems, link) => dispatch(addLinkItem(linksItems, link)),
  updateInput: data => dispatch(updateInput(data)),
  resetInput: () => dispatch(resetInput()),
});

const mapStateToProps = state =>
  createStructuredSelector({
    hidden: selectDurationVisibility,
    linksItem: selectLinksItems,
    inputValues: selectInputStatesValues
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLinkForm);
