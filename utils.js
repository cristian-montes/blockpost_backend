const fetch = require("node-fetch");


async function fetchPosts(tag){
    // console.log('tag', tag)
    const url = `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`;

    const data = await fetch(url, {
        method: 'GET',
        headers: {
           'Content-Type': 'application/json'
    },
    });

    res = await data.json();
    // console.log('data', res);

    return res;
}

module.exports = fetchPosts;