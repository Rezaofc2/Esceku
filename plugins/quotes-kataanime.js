import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  try {
    let res = await (await fetch('https://katanime.vercel.app/api/getrandom'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.result) throw json
    let data = ""
    for (let i = 0; i < json.result.length; i++) {
      let { id, english, indo, character, anime } = json.result[i]
      data += `───────┅───────···\n${indo}\n*Character:* ${character}\n*Anime:* ${anime}\n───────┅───────···\n\n`
    }
     await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  conn.sendMessage(m.chat, {
text: data,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: 'K a t a  A n i m e', 
thumbnailUrl: 'https://telegra.ph/file/1814d853ff902f8f1ebe6.jpg',
sourceUrl: null, 
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  } catch (e) {
    console.log(e)
    m.reply('Maaf, gagal mengambil data')
  }
}

handler.help = ['kataanime']
handler.tags = ['quotes']
handler.command = /^(kataanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler