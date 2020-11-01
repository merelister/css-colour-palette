import React, { Component  } from "react";
import logo from './title.png';
import './App.css';
import  { FirebaseContext } from '../firebase';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Event to handle input and update input state
    handleChange(event){
        this.setState({input: event.target.value});
    }

    // Event to handle pressing of the button / function call to firebase
    handleSubmit(event){
        let URL = 'http://localhost:5001/css-colour-palette/us-central1/testPython?input=' + this.state.input;

        // fetch
        fetch(URL)
        .then(function(response) {
            console.log(response)
         })
         .catch(function(ex) {
            console.log('parsing failed', ex)
         })
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <input className="input" type="text" id="input" name="input" maxLength="10" placeholder="string" value={this.state.input}  onChange={this.handleChange}></input>
                    <button className="ViewButton" onClick={this.handleSubmit}>Test API</button>
                    <FirebaseContext.Consumer>
                        {firebase => {
                            return <h2 className="App-title">Connection to firebase succesful!</h2>;
                        }}
                    </FirebaseContext.Consumer>
                </header>
            </div>
        )
    }
}
 
export default App;