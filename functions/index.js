const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

//testPython?input={string}
exports.testPython = functions.https.onRequest((request, response) => {

    // Kind of risky to enable cors but we're risk takers
    cors(request, response, () => {
    functions.logger.info("Running a python program now", {structuredData: true});

    // child process to run python inside of nodejs
    var spawn = require("child_process").spawn; 
    var process = spawn('python',["./scripts/hello.py", 
    request.query.input] );

    // Process the output of the python script into a response
    process.stdout.on('data', function(data) { 
        response.send(data.toString()); 
    } ) 
    });
});
