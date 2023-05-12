

const express = require("express")

const app = express()

const cors = require('cors')

const port = process.env.PORT || 7000;

const user = [
    { id: 1, name: "Noman", email: "tabassum999@gmail.com" },

    { id: 2, name: "Arif", email: "Nay@gmail.com" },

    { id: 3, name: "Noman-Tp", email: "khanom@gmail.com" },
]


//midleware 

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("User management server is Running Baby")
})
app.get('/user', (req, res) => {
    res.send(user)
})
app.post('/user', (req, res) => {
    console.log("post is hitting baby !!! ");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`The server running at ${port}`);
})