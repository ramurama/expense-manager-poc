import { getApps, initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { getDatabase, onValue, ref, update } from 'firebase/database'
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from 'firebase/storage'

import { config } from '../config'

if (!getApps().length) {
  initializeApp(config.firebase)
}

const auth = getAuth()

const dataStore = {
  db: getDatabase(),
  ref,
  onValue,
  update,
}

const firebaseStorage = {
  getStorage,
  storageRef,
  uploadBytesResumable,
  getDownloadURL,
}

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  dataStore,
  firebaseStorage,
}
