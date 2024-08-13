let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	lim = Math.max(0, lim)
	list.map(([user, data], i) => (Number(data.warning = lim)))
	list.map(([user, data], i) => (Number(data.warn = lim)))
		conn.reply(m.chat, `*Berhasil direset ${lim} / user*`, m)
}
handler.help = ['resetwarn']
handler.tags = ['owner']
handler.command = /^(resetwarn)$/i

handler.owner = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}