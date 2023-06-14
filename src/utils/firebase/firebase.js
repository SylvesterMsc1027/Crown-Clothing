import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3yp0PCvmGV5wD2sz8eUupSLu0w3e9wNE",
  authDomain: "crown-db-f3256.firebaseapp.com",
  projectId: "crown-db-f3256",
  storageBucket: "crown-db-f3256.appspot.com",
  messagingSenderId: "915268710291",
  appId: "1:915268710291:web:cd6d6f8969edfd62b14266",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionkey, objectToAdd) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done");
};

export const getCategoriesandDocument = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);



  const categoriesMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title] = items;
    return acc
  }, {});
  return categoriesMap;
};

export const createUserFromAuth = async (userAuth, additionalinfo) => {
  if (!userAuth) return;
  const userRefDoc = doc(db, "user", userAuth.uid);
  const userSnapShot = await getDoc(userRefDoc);

  // if user does not exist
  if (!userSnapShot.exists()) {
    // create user
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRefDoc, {
        displayName,
        email,
        createdAt,
        ...additionalinfo,
      });
    } catch (error) {
      console.log("error while creating user", error.message);
    }
    return userRefDoc;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedlistner = (callback) =>
  onAuthStateChanged(auth, callback);
