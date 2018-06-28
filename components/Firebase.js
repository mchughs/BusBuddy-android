import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAUndN6DC7XMmOvtdxGPnZE34v3yiFMayE",
  authDomain: "busbuddy-f5885.firebaseapp.com",
  databaseURL: "https://busbuddy-f5885.firebaseio.com",
  projectId: "busbuddy-f5885",
  storageBucket: "busbuddy-f5885.appspot.com",
  messagingSenderId: "870928909982"
};
firebase.initializeApp(config);

export const reviewBase = firebase.database().ref('reviews/')
export const companyBase = firebase.database().ref('companies/')
