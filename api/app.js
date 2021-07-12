const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())
app.get("/", (req, res) => {
  const tasks = [
    {
      task: "TOTOTOTODODODODODODODO",
      date: new Date().toISOString().substr(0, 10),
      state: 0,
    },
    {
      task: "これはふぃにっしゅ",
      date: new Date().toISOString().substr(0, 10),
      state: 1,
    },
    {
      task: "これはapp.jsから",
      date: new Date().toISOString().substr(0, 10),
      state: 1,
    },
  ];
  res.json(tasks);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
console.log("222");