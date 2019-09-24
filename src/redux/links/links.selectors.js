import { createSelector } from "reselect";

const selectLink = state => state.link;

export const selectLinksItems = createSelector(
    [selectLink],
    link => link.LinkItems,
  );