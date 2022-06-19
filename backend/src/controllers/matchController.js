import {
  addDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";
import { db } from "../config/connectDB";
let addOnlineRoom = (room) => {
  return new Promise(async (resolve, reject) => {
    try {
      const docRef = await addDoc(collection(db, "OnlineRoom"), {
        room: room,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
};

let getOnlineRoom = (room) => {
  return new Promise(async (resolve, reject) => {
    try {
      const q = query(collection(db, "OnlineRoom"), where("room", "==", room));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
};

let deleteOnlineRoom = (room) => {
  return new Promise(async (resolve, reject) => {
    try {
      const q = query(collection(db, "OnlineRoom"), where("room", "==", room));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
};

export { addOnlineRoom, getOnlineRoom, deleteOnlineRoom };
