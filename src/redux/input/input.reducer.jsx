import { InputActionsTypes } from "./input.types.js";

const INITIAL_STATE = {
  hidden: true,
  inputStatesValues: {
    url: "",
    title: "",
    author: "",
    date: "",
    width: "",
    height: "",
    duration: ""
  }
};

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InputActionsTypes.TOGGLE_DURATION:
      return {
        ...state,
        hidden: action.payload
      };
    case InputActionsTypes.UPDATE_INPUT:
      const data = {}
      for (let [key, value] of Object.entries(state.inputStatesValues)) {
        console.log(`${key}: ${value}`);
        if(action.payload.name === key) {
          data[key] = action.payload.value;
        } else {
          data[key] = "";
        }
      }
      return {
        ...state,
        inputStatesValues: data,
      };
    default:
      return state;
  }
};

export default inputReducer;
