const http = require('http');

const server = http.createServer((req, res) => {
  // Proper error handling for async database query
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(results));
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});