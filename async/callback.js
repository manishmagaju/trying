import fs from "fs";

fs.readFile("user.json", "utf8", (error, data) => {
  if (error) return error;
  console.log(data);

  fs.readFile("posts.json", "utf8", (posterror, posts) => {
    if (posterror) return posterror;
    console.log(posts);

    fs.readFile("comments.json", "utf8", (commentserror, comments) => {
      if (commentserror) return commentserror;
      console.log(comments);
    });
  });
});
