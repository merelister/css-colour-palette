import app from 'firebase/app';

const fireBaseConfig = {
    // Firebase config goes here
};

class Firebase {
    constructor() {
        app.initializeApp(fireBaseConfig);
    }
}

export default Firebase;