import React from 'react';
import logo from './title.png';
import './App.css';
import  { FirebaseContext } from '../firebase';

const App = () => (

    <div className="App">
        <header className="App-header">

            [// Draw the logo]
            <img src={logo} className="App-logo" alt="logo"/>
            
            [// Make connection w/ firebase via the context]
            <FirebaseContext.Consumer>
                {firebase => {
                    return <h2 className="App-title">Connection to firebase succesful!</h2>;
                }}
            </FirebaseContext.Consumer>
        </header>
    </div>
);
 
export default App;