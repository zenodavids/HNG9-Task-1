const http = require("http");

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send back a response and end the connection
  res.end(
    JSON.stringify({
      slackUsername: "Chidozie",
      backend: true,
      age: 30,
      bio: "fullstack web3 developer",
    })
  );
});

// Start the server on port 3000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");

/**
 * ## Task Description 👆🏽👆🏽👆🏽

- Setup a server (Hosted)
- Create an **(GET)** api endoint that returns the following  json response:

     { "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }

    - SlackUsername should be a **string** datatype and your slack username
    - Backend should be a **boolean** datatype
    - Age should be an  **integer** datatype
    - Bio(description about yourself) should be a **string** datatype
- Push to **GitHub**

**Sample Input:** does not apply
****None

**Sample Response Format**
{ "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }
 */
