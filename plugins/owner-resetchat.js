let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 10
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.chat = lim)))
		conn.reply(m.chat, `*berhasil reset*`, m)
}
handler.help = ['chat'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(resetchat|risetchat)$/i

handler.owner = true
handler.mods = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
