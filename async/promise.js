import fs from "fs/promises";

//3 states
//1.pending(loading)
//2.resolved(success) .then()
//3.reject(error)  .catch()

fs.readFile("user.json", "utf8")
    .then((user) => {
        console.log(user);

        fs.readFile("posts.json", "utf8").then((posts) => {
            console.log(posts);

            fs.readFile("comments.json", "utf8").then((comments) => {
                console.log(comments);
            });
        });
    })

    .catch((usererror) => {
        console.log(usererror);
    });
