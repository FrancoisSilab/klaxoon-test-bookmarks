import { firestore } from "../../firebase/firebase.utils.js";
import { fetchLinksItems, addLinkItemAction } from "./links.actions.js";
import { resetInput } from "../input/input.actions";

export const getLinksItems = () => {
  const links = [];

  // On obtient la référence de la collection links
  const colRef = firestore.collection("links");

  return dispatch => {
    // On obtient tout les documents de la collection links
    colRef
      .get()
      .then(function(querySnapShot) {
        if (querySnapShot.docs) {
          // Construction de l'objet links depuis la collection de document firebase
          querySnapShot.docs.map(linkDocument => {
            var currentLink = linkDocument.data();
            currentLink["id"] = linkDocument.id;
            return links.push(currentLink);
          });
          dispatch(fetchLinksItems(links));
        } else {
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
};

export const addLinkItem = (link) => {
  return dispatch => {
    // On obtient la référence de la collection links
    const colRef = firestore.collection("links");
    // On ajoute le nouveau linkItem comme nouveau document
    colRef
      .add(link)
      .then(function(docRef) {
        console.log("Document successfully written!");
        link["id"] = docRef.id;
        dispatch(addLinkItemAction(link));
        dispatch(resetInput());
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
};

export const deleteLinkItem = (linksItems, docId) => {
  firestore
    .collection("links")
    .doc(docId)
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
      console.log(linksItems.filter(linkItem => linkItem.id !== docId));
      return linksItems.filter(linkItem => linkItem.id !== docId);
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
      return linksItems;
    });
  return linksItems.filter(linkItem => linkItem.id !== docId);
};
