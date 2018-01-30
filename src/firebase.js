import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDgIP6g-yq5oQ8t7wlsQPcBo3B2bjsipmo",
    authDomain: "managingtargets.firebaseapp.com",
    databaseURL: "https://managingtargets.firebaseio.com",
    projectId: "managingtargets",
    storageBucket: "managingtargets.appspot.com",
    messagingSenderId: "327324019314"
  };

export const firebaseApp = firebase.initializeApp(config);


export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');
