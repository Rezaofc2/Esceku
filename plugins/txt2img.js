//thanks to ifung (pembuat apikey)

import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `🚩 *contoh .${command} naruto* `;
	let url = `https://api.fumifumi.xyz/api/text2img?query=${text}`
	conn.sendFile(m.chat, url, null, 'nihh', m)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.premium = false
export default handler