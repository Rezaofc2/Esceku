const timeout = 6000000

let handler = async (m, { conn, usedPrefix, text }) => {
if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }
var zilll = number + "@s.whatsapp.net";
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
   if (!who) throw 'Tag salah satu lah'
let pp = pickRandom(hwaifu)
   if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
   if (zilll === nomerown + '@s.whatsapp.net')
      return conn.reply(m.chat, `Tidak bisa membunuh owner dek`, m);
      if (zilll === m.sender)
      return conn.reply(m.chat, `kamu tidak mendapatkan apa apa karena bunuh diri sendiri`, m);
	    let time = global.db.data.users[m.sender].lastkill + 6000000
  if (new Date - global.db.data.users[m.sender].lastkill< 6000000) throw `Anda sudah menggunakan kill\nTunggu selama ${msToTime(time - new Date())} lagi`
	let money = `${Math.floor(Math.random() * 20000)}`.trim()
	let bank = `${Math.floor(Math.random() * 20000)}`.trim()
	let exp = `${Math.floor(Math.random() * 20000)}`.trim()
	let kardus = `${Math.floor(Math.random() * 100)}`.trim()
	global.db.data.users[m.sender].uang += money * 1
	global.db.data.users[m.sender].exp += exp * 1
	global.db.data.users[m.sender].kardus += kardus * 1
	global.db.data.users[m.sender].bank += bank * 1
	global.db.data.users[who].uang -= money * 1
	global.db.data.users[who].exp -= exp * 1
	global.db.data.users[m.sender].bank -= bank * 1
	global.db.data.users[who].kardus += kardus * 1
	global.db.data.users[m.sender].lastkill = new Date * 1
  let y = `Selamat kamu mendapatkan : \n+${money} Money\n+${kardus} Kardus\n+${exp} Exp\n+${bank} Bank`
  await conn.reply(m.chat, y, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
  setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya kill lagi 👋…`, m)
					}, timeout)
}
handler.help = ['kill']
handler.tags = ['rpg']
handler.command = /^(kill)/i
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