import {
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./db";

interface Fabric {
  id: string;
  name: string;
  meters: number;
  type: string;
  imageURL: string;
}

interface FabricAddParameters {
  name: string;
  meters: number;
  type: string;
  image?: FileList;
}

export const fetchFabrics = async () => {
  try {
    const snapshot = await getDocs(collection(db, "fabrics"));
    const fabricList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Fabric[];
    return fabricList;
  } catch (error) {
    console.log("Error fetching fabrics", error);
  }
};

export const addFabric = async ({
  name,
  meters,
  type,
  image,
}: FabricAddParameters) => {
  try {
    let imageURL = "";
    if (image && image[0]) {
      const file = image[0];
      const storageRef = ref(
        storage,
        `fabrics/${crypto.randomUUID()}-${file.name}`
      );
      await uploadBytes(storageRef, file);
      imageURL = await getDownloadURL(storageRef);
    }

    addDoc(collection(db, "fabrics"), {
      name,
      meters,
      type,
      imageURL,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log("Error saving fabric", error);
  }
};

export const deleteFabric = async (id: string) => {
  try {
    await deleteDoc(doc(db, "fabrics", id));
  } catch (error) {
    console.log("Error occured while deleting the fabric", error);
  }
};
