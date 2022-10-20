import Constants from 'expo-constants'

const envConfig = Constants.manifest?.extra?.envConfig

const { firebase, dataSyncInterval } = envConfig

export const config = {
  firebase: {
    apiKey: firebase.apiKey,
    authDomain: firebase.authDomain,
    projectId: firebase.projectId,
    databaseURL: firebase.databaseURL,
    storageBucket: firebase.storageBucket,
    messagingSenderId: firebase.messagingSenderId,
    appId: firebase.appId,
  },
  dataSyncInterval,
} as const
