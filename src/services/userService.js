import fs from "fs";

const userservice = ()=>{

    const rawData = fs.readFileSync("./src/data/user.json","utf8");
    const parsed = JSON.parse(rawData)
    return parsed
}

export default {userservice};