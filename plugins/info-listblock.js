let handler = async (m, { conn, usedPrefix }) => {
	await conn.fetchBlocklist().then(async data => {
		let txt = `*「  Daftar Nomor Yang Diblokir  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		for (let i of data) {
			txt += `├ @${i.split("@")[0]}\n`
		}
		txt += "└────"
		return conn.reply(m.chat, txt, m, { contextInfo: { mentionedJid: conn.parseMention(txt),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
	}).catch(err => {
		console.log(err);
		throw 'tidak ada yang diblokir!'
	})
}

handler.tags = ["info"]
handler.help = ["listblock"]
handler.command = /^(listb(lo(ck|k)?)?)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}