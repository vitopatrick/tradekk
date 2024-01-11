import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export const addToDb = async (email: string) => {
  try {
    const collectionRef = collection(db, "/email-list");
    await addDoc(collectionRef, { email });
  } catch (error) {
    console.log("Done");
  }
};
