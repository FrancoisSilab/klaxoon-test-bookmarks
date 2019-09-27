import { LinksActionsTypes } from "./links.types.js";

export const fetchLinksItems = (linksItems) => ({
  type: LinksActionsTypes.GET_LINKS,
  payload: linksItems
});

export const addLinkItemAction = (link) => ({
  type: LinksActionsTypes.ADD_LINK,
  payload: link
});

export const deleteLinkItem = (idLinkToRemove) => ({
  type: LinksActionsTypes.DELETE_LINK,
  payload: idLinkToRemove
});