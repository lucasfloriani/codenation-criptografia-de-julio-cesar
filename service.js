const fs = require('fs')
const fetch = require('node-fetch')
var FormData = require('form-data')

const getData = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${process.env.TOKEN}`
const saveData = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${process.env.TOKEN}`

exports.getInfoToEncrypt = () => fetch(getData).then(resp => resp.json())

exports.sendDataToAPI = (fileDir) => {
  const form = new FormData()
  form.append('answer', fs.createReadStream(fileDir))
  return fetch(saveData, { method: 'POST', body: form }).then(resp => resp.json())
}
