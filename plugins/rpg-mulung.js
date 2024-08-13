const timeout = 1800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmulung + 1800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) throw `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`
	let botolnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kalengnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
	let gelas = `${Math.floor(Math.random() * 1000)}`.trim()
	let plastik = `${Math.floor(Math.random() * 1000)}`.trim()
	global.db.data.users[m.sender].botol += botolnye * 1
	global.db.data.users[m.sender].kaleng += kalengnye * 1
		global.db.data.users[m.sender].plastik += plastik * 1
			global.db.data.users[m.sender].gelas += gelas * 1
	global.db.data.users[m.sender].kardus += kardusnye * 1
	global.db.data.users[m.sender].lastmulung = new Date * 1
  let y = `Selamat kamu mendapatkan : \n+${botolnye} Botol\n+${kardusnye} Kardus\n+${kalengnye} Kaleng\n+${gelas} Gelas\n+${plastik} Plastik`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    readmore: readMore
 let pp = pickRandom(hwaifu)
conn.reply(m.chat, y, m, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pp }}})
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya mulung lagi 😅`, m)
					}, timeout)
}
handler.help = ['mulung']
handler.tags = ['rpg']
handler.command = /^(mulung)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

handler.rpg = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

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