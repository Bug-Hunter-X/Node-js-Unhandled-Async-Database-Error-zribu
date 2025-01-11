# Node.js Unhandled Async Database Error

This repository demonstrates a common error in Node.js applications: failing to properly handle errors within asynchronous operations, specifically database queries.  Improper error handling in asynchronous code can lead to server crashes and unexpected behavior.

## The Bug
The `bug.js` file contains code that performs a database query.  Crucially, it lacks robust error handling. If the database query fails, an unhandled exception is thrown, causing the server to crash.

## The Solution
The `bugSolution.js` file shows the corrected code. It includes comprehensive error handling within the asynchronous callback.  This prevents the server from crashing and allows for graceful handling of database errors.  Appropriate error logging and a 500 error response are implemented for user feedback.

## How to Run
1.  Clone this repository.
2.  Ensure you have Node.js and npm installed.
3.  Install a database like PostgreSQL or MySQL and adjust the db.query() statements accordingly (replace with mock data for testing). 
4.  Run `node bug.js` to reproduce the original error. 
5.  Run `node bugSolution.js` to see the corrected behavior. 
