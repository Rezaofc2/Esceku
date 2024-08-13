const { getDevice, generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
import axios from 'axios'
let handler = async (m, { conn }) => {
    let url = await axios.get('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/cecan/cogan.json')
    let image = url.data.getRandom()
    conn.sendFile(m.chat, image, 'cogan.jpg', wm, m, false, { contextInfo: { mentionedJid: conn.parseMention(wm) }})
}
handler.help = ['cogan']
handler.tags = ['internet']
handler.command = /^(cogan)$/i
handler.limit = true
export default handler