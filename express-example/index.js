const express = require('express');

const app = express();

const things = [
    {id: 1, name: 'thing1'},
    {id: 2, name: 'thing2'},
    {id: 3, name: 'thing3'},
    {id: 4, name: 'thing4'},
    {id: 5, name: 'thing5'},
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/things', (req, res) => {
    res.json(things);
});

app.get('/api/things/:thingId', (req, res) => {
    const thing = things.find(
        (thing) => thing.id === parseInt(req.params.thingId, 10),
    );
    if (!thing) {
        res.status(404).send('Error 404: thing not found');
    } else {
        res.json(thing);
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
