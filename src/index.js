import express from 'express'
import path from 'path'
import axios from 'axios'
import {createShortcurtUrl} from './shortcurt.js'

const app = express()
const PORT = 3000;

const shortUrls = [
  {
    short: 'gg',
    full: 'https://google.com/',
    clicks: 0
  },
  {
    short: 'dev',
    full: 'https:/github.com/oberdandev',
    clicks: 0
  }
]

app.get('/api/urls', (req,res) => {
  res.json(shortUrls)
})

app.listen(PORT, ()=> console.log('app running at: ' + PORT))

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./src/pages/index.html'))
})

app.get('/style.css', (req, res) => {
  res.sendFile(path.resolve('./src/pages/style.css'))
})

app.get('/getUrlsToTable.js', (req, res) => {
  res.sendFile(path.resolve('./src/pages/getUrlsToTable.js'))
})

app.post('/shortUrls', (req,res) => {

    const params = req.body
  
    const urls = shortUrls;

    const newUrl = {short: params.shortUrl, full: params.fullUrl, clicks: 0}

    urls.push(newUrl)

    createShortcurtUrl(urls, app, req, res)

})


