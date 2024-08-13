const free = 10000
const prem = 20000
const limitfree = 10
const limitprem = 20
const moneyfree = 10000
const moneyprem = 20000

let handler = async (m, { isPrems }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
    let time = global.db.data.users[m.sender].lastweekly + 604800000
  if (new Date - global.db.data.users[m.sender].lastweekly < 604800000) throw `Anda sudah mengklaim, klaim mingguan ini\ntunggu selama ${msToTime(time - new Date())} lagi`
    //    conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].uang += isPrems ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
       // global.db.data.users[m.sender].legendary += 3
        let w = `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money\n+${isPrems ? limitprem : limitfree} Limit`
        await conn.reply(m.chat, w, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
        global.db.data.users[m.sender].lastweekly= new Date * 1
    }
    
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i
handler.limit = false
handler.fail = null

handler.rpg = true
export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    weeks = Math.floor((duration / (1000 * 60 * 60 * 24)) % 168)

  weeks  = (weeks < 10) ? "0" + weeks : weeks
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return weeks + " hari " +  hours + " jam " + minutes + " menit"
}