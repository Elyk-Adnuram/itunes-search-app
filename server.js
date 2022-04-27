const express = require('express') //Require express.
const app = express() //Store Expresses functionality in variable.
const fs = require('fs'); //Require Filestream.
const helmet = require("helmet"); //Require Helmet
const fetch = require('isomorphic-fetch'); //Require isomorphic fetch.

app.use(helmet()); //Use helmet security.

const bodyParser = require('body-parser'); // Allows us access to the req.body object.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //converts everything that is being sent back to react to JSON(It stringifys whatever is being sent eg. res.json({"item": itemGet})).


//Get the relevant data from API:
app.get('/search', function(req, res) {
    fetch(`https://itunes.apple.com/search?term=${req.query.term}&media=${req.query.media}`)
    .then(res => res.json())
        .then(
            (result) => {
                const itemGet = result; 
                console.log(itemGet);
                res.json({'item' : itemGet});
            },
            (error) => {
                console.log(error); 
    }) 
})


//Port listening at:
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); 
});

