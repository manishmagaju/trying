import fs from "fs";

const rawData = fs.readFileSync("./src/data/user.json", "utf8");
const parsedUser = JSON.parse(rawData)



const userservice = () => {
    const allUsers = parsedUser
    return allUsers
}

const getUserIndividually = (user) => {

    const findedUsers = parsedUser.find((data) => data.name == user )
    return findedUsers;


}

export default { userservice, getUserIndividually };