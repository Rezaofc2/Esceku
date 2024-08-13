import fetch from 'node-fetch';
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} DitzOfc|Tenka`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=${global.lolkey}&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'pornhub.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.help = ['codwarzone'].map(v => v + ' *<text>|<text>*')
handler.tags = ['maker']
handler.command = /^(codwarzone)$/i
handler.register = true
handler.limit = true

export default handler