const express = require('express')
const app = express()
const port = process.env.PORT_NODE
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(`${port} : get a req....`)
  res.send(`service ${port} say HI...`)
})

app.get('/app1', (req, res) => {
  res.send(`service ${port}: app1`)
})

app.get('/app2', (req, res) => {
  res.send(`service ${port}: app2`)
})

app.get('/admin', (req, res) => {
  res.send(`service ${port}: This is ADMIN PAGE`)
})

app.post('/notif' , (req , res)=>{
    console.log("GET A POST NOTIF...")
    console.log(req.body)
    res.status(201).send("OK")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//curl -v --noproxy '*' -d '{"username":"jazi","password":"ali"}' -X POST -H "Content-Type: application/json" localhost:3333/notif