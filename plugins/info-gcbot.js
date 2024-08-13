import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
	try {
   m.reply(gcbot)
	} catch (e) {
		console.log(e)
		throw `Fitur Error.`
	}
}

handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^(gcbot)$/i

handler.register = false
handler.premium = false
handler.limit = false

export default handler