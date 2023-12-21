// Create web server
// 1. Create a new Express web server
// 2. Create a new route for GET /comments
// 3. Send back some static comments data
// 4. Listen on port 3000
// 5. Print message to console that server is running

// 1. Create a new Express web server
const express = require('express');
const app = express();

// 2. Create a new route for GET /comments
app.get('/comments', function(req, res) {
    // 3. Send back some static comments data
    res.send([
        {
            username: 'treyhuffine',
            comment: 'This is a comment'
        },
        {
            username: 'treyhuffine',
            comment: 'This is a comment'
        }
    ]);
});

// 4. Listen on port 3000
app.listen(3000);

// 5. Print message to console that server is running
console.log('Server is running on port 3000');