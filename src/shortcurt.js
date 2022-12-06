export const createShortcurtUrl = async (urls, app, requisition, response) => {
  console.log(urls)
  
  urls.map(url => {
    app.get(`/${url.short}`, (req, res) =>{
      url.clicks += 1
      res.redirect(url.full)
    })
  })

  response.redirect('/')
}

export default createShortcurtUrl
