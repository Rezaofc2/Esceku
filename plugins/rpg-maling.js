const timeout = 604800000

let handler = async (m, { conn, usedPrefix, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = pickRandom(hwaifu)
	    let time = global.db.data.users[m.sender].lastmaling + 604800000
  if (new Date - global.db.data.users[m.sender].lastmaling< 604800000) throw `Anda sudah merampok bank\nTunggu selama ${msToTime(time - new Date())} lagi`
	let money = `${Math.floor(Math.random() * 30000)}`.trim()
	let exp = `${Math.floor(Math.random() * 999)}`.trim()
	let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
	global.db.data.users[m.sender].uang += money * 1
	global.db.data.users[m.sender].exp += exp * 1
	global.db.data.users[m.sender].kardus += kardus * 1
	global.db.data.users[m.sender].lastmaling = new Date * 1
 let ma = `Selamat kamu mendapatkan : \n+${money} Money\n+${kardus} Kardus\n+${exp} Exp`
 await conn.reply(m.chat, ma, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya Maling lagi 👋…`, m)
					}, timeout)
}
handler.help = ['maling']
handler.tags = ['rpg']
handler.command = /^(maling)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.exp = 0
handler.money = 0

handler.rpg = true
export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}