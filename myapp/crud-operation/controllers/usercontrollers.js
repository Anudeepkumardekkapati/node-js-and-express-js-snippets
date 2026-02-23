let users = [
    { id: 1, name: "anudeep", age: 20 }
];
const getusers = (req, res) => {
    res.json(users);

};
const postusers = (req, res) => {
    const newuser = req.body;
    console.log(newuser);
    users.push(newuser);
    res.send("user added successfully");

}
const updateuser = (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) {
        return res.send("User not found");
    }
    user.name = req.body.name;
    user.age = req.body.age;
    res.send("sending updated detailes");
}
exports.getusers = getusers;
exports.postusers = postusers;
exports.updateuser = updateuser;