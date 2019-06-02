require('dotenv').config()
const sha1 = require('node-sha1')
const uploader = require('./uploader.js')
const hash = require('./hash.js')
const service = require('./service')

main()
async function main() {
  try {
    // 1º Passso - Salvar o conteudo em arquivo json chamado answer.json
    const result = await service.getInfoToEncrypt()
    uploader.createOrUpdateFile('./answer.json', JSON.stringify(result))

    // 2º Passo - Decifrar o texto e atualizar o arquivo json ('answer.json')
    const textDecrypted = hash.cesarDecrypt(result.cifrado, result.numero_casas)
    const updatedJson = { ...result, decifrado: textDecrypted }
    uploader.createOrUpdateFile('./answer.json', JSON.stringify(updatedJson))

    // 3º Passo - Encriptografar o texto decifrado para sha1
    const encryptMessage = sha1(updatedJson.decifrado)
    const updateJsonWithSha = { ...updatedJson, resumo_criptografico: encryptMessage }
    uploader.createOrUpdateFile('./answer.json', JSON.stringify(updateJsonWithSha))

    // 4º Passo - Enviar dados para a API
    const response = await service.sendDataToAPI('./answer.json')
    console.log(response)
  } catch(e) {
    console.error(e)
  }
}
