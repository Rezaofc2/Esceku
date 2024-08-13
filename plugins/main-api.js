import fetch from 'node-fetch';
let handler = async (m, { text }) => {
if (!text) throw `Masukan Apikey!`
  try {
    let api = await fetch(`https://api.botcahx.eu.org/api/checkkey?apikey=${text}`)
    let body = await api.text()
    m.reply(body)  
  } catch (e) {
    console.log(e) 
    m.reply('Apikey tidak terdaftar!')
  }
} 
handler.help = ['cekapikey']
handler.tags = ['main']    
handler.command = /^(checkapi|api|cekapi|cekapikey)$/i
handler.tags = ['main'];
handler.premium = false
handler.group = false
handler.private = false
export default handler
