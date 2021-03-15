import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyClpo6YWmV_RvoC80C5Ri0J2molrNMkcAY',
  authDomain: 'catch-of-the-day-ben-9d179.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-ben-9d179-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
