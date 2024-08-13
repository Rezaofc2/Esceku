
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
  let res = await fetch(`https://api.waifu.pics/nsfw/${command}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'nsfw2.jpg', `Search: ${command}`, m, false, { contextInfo: { mentionedJid: conn.parseMention(`Search: ${command}`) }})
}
handler.command = /^(blowjob|neko|trap|nsfwwaifu)$/i
handler.help = ['blowjob','neko','trap','nsfwwaifu']
handler.tags = ['nsfw']
handler.premium = true;
handler.nsfw = true;
export default handler