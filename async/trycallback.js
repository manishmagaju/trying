import fs from "fs";

fs.readFile("user.json","utf8",(usererror,users)=>{
    if(usererror) return usererror;
    console.log(users);
});

fs.readFile("posts.json","utf8",(posterror,posts)=>{
    if(posterror) return posterror;
    console.log(posts);
});

fs.readFile("comments.json","utf8",(commenterror,comments)=>{
    if(commenterror) return commenterror;
    console.log(comments);
});


