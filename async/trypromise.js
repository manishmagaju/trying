import fs from "fs/promises";

fs.readFile("user.json", "utf8")
    .then((user) => {
        console.log(user); 

        return fs.readFile("posts.json", "utf8");
    })
    .then((posts) => {
        console.log(posts);

        return fs.readFile("comments.json", "utf8");
    })
    .then((comments) => {
        console.log(comments);
    })

    .catch((error) => {
        console.log(error);
    });
