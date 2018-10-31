// import * as admin from 'firebase-admin';
import * as Fire from 'firebase-admin';
import Rebase from 're-base';
import * as firebase from 'firebase';

// import functions from 'firebase-functions';
var path = require('path');
// import * as admin from 'firebase/app';
var serviceAccount = require('./serviceAccountKey.json');
const settings = {/* your settings... */ timestampsInSnapshots: true};
// var credential = admin.auth.GoogleAuthProvider.credential(null, serviceAccount);

// var gcloud = require('google-cloud')({ ... });
// var gcs = gcloud.storage();
// var bucket = gcs.bucket('<your-firebase-storage-bucket>');

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDc0aK3DiV8y_RZocxWIuTNmsxfw4xkzek",
    authDomain: "bypert-d4d08.firebaseapp.com",
    databaseURL: "https://bypert-d4d08.firebaseio.com",
    projectId: "bypert-d4d08",
    storageBucket: "bypert-d4d08.appspot.com",
    messagingSenderId: "99721646012"
  };
const admin = firebase.initializeApp(config);

// const admin = Fire.initializeApp({
//   credential: Fire.credential.cert(serviceAccount),
//   databaseURL: "https://bypert-d4d08.firebaseio.com"
// });
// const base = Rebase.createClass(admin.database());
//
export { admin };
