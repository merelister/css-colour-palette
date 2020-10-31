# css-colour-palette

A project for BC Hacks Lite's 2020 Halloween hackathon

**Reactjs frontend**
*important bits*:

- /index.js
	- root of the application

- /public
    - reactjs generated public files, favicon and other goodies go here :)

- /components:
	- all the component files for the react application
- /components/firebase
	-	files related to linking the react app with firebase, *firebase.js* needs to be edited with env variables to work (not going to expose them on github)

- /components/App
	- files related to the main application page; css, index etc..

**Running/Building**
The frontend is set to run from localhost on port 8080 for development.

<code>npm start</code> will run in development, to deploy
<code>npm run-script build</code> to retrieve a <code>/build</code> folder with an optimized build to be hosted.
