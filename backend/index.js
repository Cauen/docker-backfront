const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/list', (req, res) => {
  res.send([
    { name: "José" },
    { name: "Maria" },
    { name: "João" },
    { name: "Jacó" },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})