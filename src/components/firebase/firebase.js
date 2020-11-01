import app from 'firebase/app';

const firebaseConfig = {
    //Fire base config goes here
  };

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
    }
}

export default Firebase;