import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./db";

interface Project {
  id: string;
  name: string;
  imageURL: string;
  status?: string;
}

interface AddProjectParameters {
  name: string;
  status: string;
  image?: FileList;
}

export const fetchProjects = async () => {
  try {
    const snapshot = await getDocs(collection(db, "projects"));
    const projectList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Project[];
    return projectList;
  } catch (error) {
    console.log("Error fetching projects.", error);
  }
};

export const addProject = async ({
  name,
  status,
  image,
}: AddProjectParameters) => {
  try {
    let imageURL = "";

    if (image && image[0]) {
      const file = image[0];
      const storageRef = ref(
        storage,
        `projects/${crypto.randomUUID()}-${file.name}`
      );
      await uploadBytes(storageRef, file);
      imageURL = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, "projects"), {
      name,
      status,
      imageURL,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding project", error);
    alert("Something went wrong while saving your project.");
  }
};

export const deleteProject = async (id: string) => {
  try {
    await deleteDoc(doc(db, "projects", id));
  } catch (error) {
    console.error("Error deleting the project", error);
  }
};
