const express = require("express");
const fetchPosts = require("./utils");
const app = express();

const PORT = 7890;


app.listen(PORT, ()=> {
    console.log(`Started on ${PORT}`)
});



app.get('/api/ping', (req, res, next) => {
    res.send({" success":true} )
});


app.get('/api/posts/:tag', async (req, res, next) => {

    try {
        const tag = req.params.tag;
        const allPosts = await fetchPosts(tag);
        res.send(allPosts);

    } catch (error) {
        
        res.status(400 || error.status ).send({
            error:{
                status: 400 || error.status,
                message: "Tags parameter is required" || error.message
            }
        })

    }

 
});

module.exports = app;