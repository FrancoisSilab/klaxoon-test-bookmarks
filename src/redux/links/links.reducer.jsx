import { LinksActionsTypes } from "./links.types.js";
import { deleteLinkItem, addLinkItem } from "./links.utils.js"

const INITIAL_STATE = {
  linksItems: []
};

const linkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LinksActionsTypes.GET_LINKS:
      return {
        ...state,
        linksItems: action.payload
      };
      case LinksActionsTypes.ADD_LINK:
      return {
        ...state,
        linksItems: action.payload
      };
      case LinksActionsTypes.DELETE_LINK:
      return {
        ...state,
        linksItems: deleteLinkItem(state.linksItems, action.payload)
      };
    default:
      return state;
  }
};

export default linkReducer;
