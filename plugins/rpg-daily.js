const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000

let handler = async (m, { conn, isPrems }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
    let time = global.db.data.users[m.sender].lastdaily + 86400000
  if (new Date - global.db.data.users[m.sender].lastdaily < 86400000) throw `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].uang += isPrems ? moneyprem : moneyfree
       global.db.data.users[m.sender].potion += 5
        let y = `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money\n+5 Potion`
        await conn.reply(m.chat, y, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
        global.db.data.users[m.sender].lastdaily = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Daily sudah bisa di dapatkan kembali`, m)
					}, timeout)
    } 
handler.help = ['daily']
handler.tags = ['rpg']
handler.command = /^(daily)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0
handler.exp = 0
handler.limit = false

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