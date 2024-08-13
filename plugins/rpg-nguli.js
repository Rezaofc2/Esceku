const timeout = 86400000

let handler = async (m, { conn, isPrems }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let time = global.db.data.users[m.sender].lastnguli + 86400000
 if (new Date - global.db.data.users[m.sender].lastnguli < 86400000) throw `Anda sudah mengklaim upah nguli hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
     global.db.data.users[m.sender].limit += 10
     global.db.data.users[m.sender].uang += 10000
     global.db.data.users[m.sender].exp += 10000
     global.db.data.users[m.sender].batu += 20
        let n = `_Selamat kamu mendapatkan_ \n+10 limit\n+10000 money\n+10000 exp\n+20 batu`
        let pp = pickRandom(hwaifu)
conn.reply(m.chat, n, m, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pp }}})
        global.db.data.users[m.sender].lastnguli = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `waktunya nguli lagi😁`, m)
					}, timeout)
    } 
handler.help = ['nguli']
handler.tags = ['rpg']
handler.command = /^(nguli)$/i
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

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}