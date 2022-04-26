const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const todoList = [
    {
        _id: uuidv4(),
        objective: "Make a to-do list"
    }
]
app.get('/', (req, res) => {
    res.send(todoList)
})

app.post('/', (req, res) => {

    // console.log(req.params)
    // res.send(req.params)

    console.log(req.body);


    let sameObj = todoList.find(listItem => listItem.objective === req.query.objective)
    console.log(sameObj);
    if (sameObj.length) {
        console.log("To-do list step already exists")
    } else {
        todoList.push({
            _id: uuidv4(), 
            objective: req.body.objective
        })
        // res.send("Successfully added list item");
        console.log("Successfully added list item")
    } 
    res.sendStatus(200);

})
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

