import fetch from 'node-fetch';
import fs from 'fs';

let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === 'test' || m.text.toLowerCase() === 'tes') {
    let today = new Date()
    let day = today.toLocaleDateString('en-US', { weekday: 'long' })
    let username = '@' + m.sender.split`@`[0]

    let teks = `👋 Happy ${day} *${username}*, can I help you with anything?`

   conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
  }
}

export default handler