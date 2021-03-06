const express = require('express')
const app = express();

const path = require('path');

//	Setting up a static directory for the files in /public

app.use(express.static(path.join(__dirname, '/public')))


// Routes

app.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname });
});

app.get('/gettingstarted', function(req, res) {
    res.sendFile('/public/gettingstarted/index.html', { root: __dirname });
});

app.get('/docs', function(req, res) {
    res.sendFile('/public/docs/index.html', { root: __dirname });
});

//	Other Routes

app.get('*', (req, res) => {
    res.redirect('/');
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Bad request?');
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));


