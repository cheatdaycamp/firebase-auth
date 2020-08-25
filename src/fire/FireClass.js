import app from "firebase/app";
import "firebase/auth";
// import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  databaseURL: process.env.REACT_DATABASE_URL,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class FireClass {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.user = null;
    // this.db = firebase.firestore();
  }

  // *** Auth API *** //
  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password).catch((err) => {
      console.log(err, err.code, err.message);
    });

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  doFirebaseAuth = async (something) => {
    const caca = await this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User exists");
        return true;
        // const {displayName, email, emailVerified, phothoURL, isAnonymous, uid, providerData} = user;
      } else {
        console.log("User DOESNT exist");
        return false;
        // user is signed out.
      }
    })();
    return caca;
  };
  storeUser = (user) => (this.user = user);
}

export default FireClass;
