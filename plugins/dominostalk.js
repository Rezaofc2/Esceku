import fetch from 'node-fetch';
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 291756557`, m)
	let kemii = await fetch(`https://api.lolhuman.xyz/api/higghdomino/${text}?apikey=${global.lolkey}`)
	let hasil = await kemii.json()
	conn.reply(m.chat, `${hasil.result}`, m)
   console.log(hasil)
}
handler.help = ['dominostalk *<text>*']
handler.tags = ['internet']
handler.command = /^(dominostalk)$/i
handler.limit = true

export default handler