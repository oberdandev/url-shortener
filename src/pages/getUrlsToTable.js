
const url = 'http://localhost:3000/api/urls'
const docTable = document.querySelector('#tableUrls')

async function getUrlsFromAPI(url) {
  const response = await axios.get(url)
  console.log(response.data)
  return response.data
}

async function addUrlsToTable(url) {
  const listOfShortenedLinks = await getUrlsFromAPI(url)
  listOfShortenedLinks.map(url => {
    docTable.insertAdjacentHTML('beforeend', `<tbody>
    <td>
      <a href="${url.full}">${url.full}</a>
    </td>
    <td>
      <a href="/${url.short}">${url.short}</a>
    </td>
    <td>
      ${url.clicks}
    </td>
  </tbody>`)
  })

}

console.log('entrou no getUrlsToTable.js')

addUrlsToTable(url)
