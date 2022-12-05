import express from 'express'
import path from 'path'
import axios from 'axios'
import {createShortcurtUrl} from './shortcurt.js'

const app = express()
const PORT = 3000;

const shortUrls = [
  {
    short: 'gg',
    full: 'https://google.com/'
  },
  {
    short: 'dev',
    full: 'https:/github.com/oberdandev',
  }
]

app.listen(PORT, ()=> console.log('app running at: ' + PORT))

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./src/pages/index.html'))
})

app.get('/style.css', (req, res) => {
  res.sendFile(path.resolve('./src/pages/style.css'))
})

app.post('/shortUrls', (req,res) => {

    const params = req.body.fullUrl
  
    const urls = shortUrls;

    const newUrl = {full: params, short: '123'}

    urls.push(newUrl)

    createShortcurtUrl(urls, app, req, res)

})


