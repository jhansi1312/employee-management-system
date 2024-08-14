const express  = require('express')

const app = express();
const mongoose = require('mongoose');
const { EmployeeRouter } = require('./routes/EmployeeRouter');
const { Employee } = require('./models/Employee');
const cors = require('cors')

app.use(cors({ origin: '*' }))
const port =  8000


app.listen(port, () => console.log(`server listening on ${port}`))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Employees')
.then(() => console.log("Database Connected"))

app.use('/',EmployeeRouter)

app.get("/", (req, res) => {
    Employee.find().then((doc) => {res.send(doc);return (doc);})
    // res.send(doc)
})