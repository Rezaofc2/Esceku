
import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .pixiv anime', m)

  
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })

  let url = `https://api.lolhuman.xyz/api/pixiv?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`
  axios.get(url)
    .then(function (response) {
      let images = response.data.result
      if (images.length == 0) {
        conn.reply(m.chat, '🐱 No images found for that keyword.', m)
      } else {
        let index = Math.floor(Math.random() * images.length)
        let image = images[index]
        let ya = `• Title : ${image.title}\n• Id : ${image.id}\n• Link : ${image.image}`
        //conn.sendFile(m.chat, image.image, 'pixiv.jpg', image.title, m)
        conn.sendFile(m.chat, image.image, 'pp.jpg', ya, m, false, { contextInfo: { mentionedJid: conn.parseMention(ya) }})
      }
    })
    .catch(function (error) {
      console.log(error)
      conn.reply(m.chat, 'An error occurred while processing the request. Please try again later.', m)
    })
}

handler.help = ['pixiv']
handler.tags = ['internet', 'premium']
handler.premium = true
handler.command = /^pixiv$/i
handler.register = true

export default handler