import { googleImage } from '@bochilteam/scraper'
const { getDevice, generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} hinata`
    const res = await googleImage('rule34 ' + text)
    let image = pickRandom(res)
    let link = image
        let hoy = `➩ Random Nsfw Rule34 ${text}`
        conn.sendButton(m.chat, hoy, global.wm, link, [['NEXT', `.rule34 ${text}`]], m)
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw']
handler.command = ['rule34']
handler.premium = true
handler.nsfw = true

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}