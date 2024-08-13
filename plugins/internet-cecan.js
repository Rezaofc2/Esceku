const { getDevice, generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
import axios from 'axios'
let handler = async (m, { conn, command }) => {
    let url = await axios.get('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/cecan/cecan.json')
    let image = url.data.getRandom()
    conn.sendFile(m.chat, image, 'pp.jpg', wm, m, false, { contextInfo: { mentionedJid: conn.parseMention(wm) }})
}
handler.help = ['cecan']
handler.tags = ['internet']
handler.command = /^(cecan)$/i
handler.limit = true
export default handler