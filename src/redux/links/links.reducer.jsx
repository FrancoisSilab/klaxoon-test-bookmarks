import { LinksActionsTypes } from "./links.types.js";
import { deleteLinkItem } from "./links.utils.js"

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
        state.linksItems.push(action.payload);
        return {
        ...state,
        linksItems: state.linksItems
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
