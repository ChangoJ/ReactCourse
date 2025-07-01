import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

interface Note {
  id?: string;
  title: string;
  body: string;
  date: number;
  // imageUrls: string[];
}

export const startNewNote = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote: Note = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    if (!uid) throw new Error("El UID del usuario no existe");

    const { active: note } = getState().journal;

    const noteToFireStore = { ...note };

    delete noteToFireStore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note?.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(updateNote(note));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch: any) => {
    dispatch(setSaving());

    const fileUploadPromises = [];

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }

    await Promise.all(fileUploadPromises)
      .then((fileUrls) => {
        dispatch(setActiveNote({ imageUrls: fileUrls }));
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
        throw new Error("Error uploading files");
      });
  };
};
