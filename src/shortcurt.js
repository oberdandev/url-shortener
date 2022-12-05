export const createShortcurtUrl = async (urls, app, requisition, response) => {
  console.log(urls)
  
  urls.map(url => {
    app.get(`/${url.short}`, (req, res) =>{
      res.redirect(url.full)
    })
  })

  response.redirect('/')
}

export default createShortcurtUrl
