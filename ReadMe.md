# HTTP

The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.

## HTTP METHODS

- GET (_request_, _read_ or _retrieve_ a resource.)
  the query string (name/value pairs) is sent in the URL of a GET request:

  ```sh
  /test/demo_form.php?name1=value1&name2=value2
  ```

- POST (send data to a server to _create_ a resource.)
  The data sent to the server with POST is stored in the request body of the HTTP request:

  ```sh
  POST /test/demo_form.php HTTP/1.1
  Host: w3schools.com

  name1=value1&name2=value2

  ```

- PUT (_modify_ / _update_ a resource.)
  the same as _POST_ but the only difference is calling a PUT request multiple times will always _produce the same result_ while calling a POST request repeatedly _creates the same resource multiple times_

- HEAD (identical to GET, but without the response body.)

- DELETE (_deletes_ the specified resource.)

- PATCH (modify a _part_ of a resource.)

- OPTIONS (describes the communication options for the target resource.)

- CONNECT (start a two-way communications (a tunnel) with the requested resource.)

- TRACE (perform a message loop-back test that tests the path for the target resource (useful for debugging purposes).

//////////////////////////////////////////////////

## The Anatomy of an HTTP Request

- An HTTP method (e.g GET)
- A host URL (e.g https://api.spotify.com/)
- An endpoint path(e.g v1/artists/{id}/related-artists)
  _and optionally have;_
- Body
- Headers
- Query strings
- HTTP version

//////////////////////////////////////////////

## The Anatomy of an HTTP Response

- Protocol version (like HTTP/1.1)
- Status code (like 200)
- Status text (OK)
- Headers
  _A response may also optionally have:_
- Body
