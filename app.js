//Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en que vamos a ver nuestra app: localHost:3000
const port=3000

//path incial, respondera a la url localHost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//LocalHost:3000/Launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launchx')
})


//LocalHost:3000/Launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a Launchx')
})

//Regresando un Objeto
//LocalHost:3000/explorersinNode
app.get('/explorersinNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    const explorer1 = {id: 1, name: "Explorer1"}
    const explorer2 = {id: 1, name: "Explorer2"}
    res.send([explorer, explorer1, explorer2])
})


// Cons esto inicializamos esta app
app.listen(port, () => {
    console.log('Server Listo!')
})
