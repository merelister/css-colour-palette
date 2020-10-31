import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCULwlLw0lSmvj8M4EOncA7CAzIjeN_YKg",
    authDomain: "css-colour-palette.firebaseapp.com",
    databaseURL: "https://css-colour-palette.firebaseio.com/",
    projectId: "css-colour-palette",
    storageBucket: "css-colour-palette.appspot.com",
    messagingSenderId: "476789974619",
    appId: "1:476789974619:web:1d32a30ecb6b226895417e",
    measurementId: "G-TZ2T057476"
  };

class Firebase {
    constructor() {
        app.initializeApp(fireBaseConfig);
    }
}

export default Firebase;