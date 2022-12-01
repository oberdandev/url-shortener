import express from 'express'
import path from 'path'
import axios from 'axios'


const app = express()
const PORT = 3000;

app.listen(PORT, ()=> console.log('app running at: ' + PORT))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./src/pages/index.html'))
})

app.get('/style.css', (req, res) => {
  res.sendFile(path.resolve('./src/pages/style.css'))
})

app.post('/shortUrls', (req,res) => {
 
})
