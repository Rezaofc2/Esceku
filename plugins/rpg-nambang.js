const timeout = 28800000

let handler = async (m, { conn, usedPrefix, text }) => {
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

 if (user.healt < 80) {
        return m.reply(`
⚠️ Butuh setidaknya 80 ❤️Healths untuk menambang!! ⚠️
Silakan beli ❤️Healths terlebih dahulu dengan mengetik *${usedPrefix}buy potion <jumlah>*,
dan ketik *${usedPrefix}heal <jumlah>* untuk menggunakan potion.
`.trim());
    }
	    let time = global.db.data.users[m.sender].lastnambang + 28800000
  if (new Date - global.db.data.users[m.sender].lastnambang< 28800000) throw `Anda sudah menambang\nMohon tunggu hasil pertambangan mu\nTunggu selama ${msToTime(time - new Date())} lagi`
  if (user.pickaxe == 0) {
        return m.reply('⛏️ Kamu tidak bisa menambang tanpa alat penambang (pickaxe)!\nKetik *#craft pickaxe* untuk membuat');
    }
   // if (global.db.data.users[m.sender].aqua > 9) {
   // let aquah = `${Math.floor(Math.random() * 5)}`.trim()
    let berlians = `${Math.floor(Math.random() * 20)}`.trim()
    let emasbiasas = `${Math.floor(Math.random() * 20)}`.trim()
    let emasbatangs = `${Math.floor(Math.random() * 20)}`.trim()
    let string = `${Math.floor(Math.random() * 100)}`.trim()
    let iron = `${Math.floor(Math.random() * 20)}`.trim()
    let sampah = `${Math.floor(Math.random() * 1000)}`.trim()
    let batu = `${Math.floor(Math.random() * 100)}`.trim()
    // global.db.data.users[m.sender].aqua -= aquah * 1
    global.db.data.users[m.sender].berlian += berlians * 1
    global.db.data.users[m.sender].emas += emasbiasas * 1
    global.db.data.users[m.sender].diamond += emasbatangs * 1
    global.db.data.users[m.sender].string += string * 1
    global.db.data.users[m.sender].iron += iron * 1
    global.db.data.users[m.sender].batu += batu * 1
    global.db.data.users[m.sender].sampah += sampah * 1
    global.db.data.users[m.sender].tiketcoin += 1

	global.db.data.users[m.sender].lastnambang = new Date * 1

  let n = `Selamat kamu mendapatkan : \n+${berlians} Berlian\n+${string} string\n+${iron} iron\n+${batu} batu\n+${emasbiasas} Emas\n+${emasbatangs} Diamond\n+${sampah} Sampah\n\n+1 Tiketcoin`
 let pp = pickRandom(hwaifu)
conn.reply(m.chat, n, m, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pp }}})
  setTimeout(() => {
					conn.reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
					}, timeout)
}
handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang|mining)/i
handler.group = true

handler.fail = null
handler.limit = true
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