import { firestore } from '../../firebase/firebase.utils.js';

export const getLinksItems = async (additionalData) => {
    console.log("test");
    const linkRef = firestore.collection("links");
    console.log(linkRef);
    linkRef.get().then((doc) => {
        console.log(doc);
    })
}