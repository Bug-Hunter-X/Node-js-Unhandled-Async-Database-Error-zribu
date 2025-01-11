const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: not handling the error properly in an async operation.
  // If the database query fails, the server will crash.
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Should handle the error properly, such as logging it and sending an error response.
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return; // Important to return to stop further execution
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(results));
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});