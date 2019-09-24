import { LinksActionsTypes } from "./links.types.js";
import { getLinksItems } from "./links.utils.js";

const INITIAL_STATE = {
  links: {},
};

const linkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LinksActionsTypes.GET_LINKS:
      return {
        ...state,
        links: getLinksItems(),
      };
    default:
      return state;
  }
};

export default linkReducer;