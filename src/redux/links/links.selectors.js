import { createSelector } from "reselect";

const selectLink = state => state.links;

export const selectLinksItems = createSelector(
    [selectLink],
    links => links.linksItems,
  );

  export const selectLinksItemsFromId = linkId => createSelector(
    [selectLink],
    links => links.linksItems.filter(link => link.id === linkId),
  );