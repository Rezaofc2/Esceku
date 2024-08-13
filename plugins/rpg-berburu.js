const timeout = 28700000

let handler = async (m, { conn, usedPrefix, text }) => {
let time = global.db.data.users[m.sender].lastberbru + 28700000
  if (new Date - global.db.data.users[m.sender].lastberbru< 28700000) throw `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar ${msToTime(time - new Date())}*\n*Untuk Bisa Melanjutkan berburu Lagi*`
  
                                 let dapat = `${Math.floor(Math.random() * 60)}`.trim()
                                 let ahh = `${Math.floor(Math.random() * 40)}`.trim()
                                 let ohht = `${Math.floor(Math.random() * 30)}`.trim()
                                 let gurita = `${Math.floor(Math.random() * 20)}`.trim()
                                 let orci = `${Math.floor(Math.random() * 20)}`.trim()
                                 let lumba = `${Math.floor(Math.random() * 10)}`.trim()
                                 let dory = `${Math.floor(Math.random() * 10)}`.trim()
                                 let ih = `${Math.floor(Math.random() * 40)}`.trim()
                                 let lop = `${Math.floor(Math.random() * 30)}`.trim()
                                 let hi = `${Math.floor(Math.random() * 20)}`.trim()
                                 let bu = `${Math.floor(Math.random() * 40)}`.trim()
                                 let tai = `${Math.floor(Math.random() * 60)}`.trim()
                                
                                 
                                 global.db.data.users[m.sender].banteng += ohht * 1
                                 global.db.data.users[m.sender].harimau += ahh * 1
                                 global.db.data.users[m.sender].kerbau += gurita * 1
                                 global.db.data.users[m.sender].panda += dapat * 1
                                 global.db.data.users[m.sender].buaya += bu * 1
                                 global.db.data.users[m.sender].sapi += dory * 1
                                 global.db.data.users[m.sender].babihutan += lumba * 1
                                 global.db.data.users[m.sender].gajah += lop * 1
                                 global.db.data.users[m.sender].babi += hi * 1
                                 global.db.data.users[m.sender].kambing += ih * 1
                                 global.db.data.users[m.sender].monyet += tai * 1
                                 global.db.data.users[m.sender].ayam += orci * 1
                                 global.db.data.users[m.sender].tiketcoin += 1 
                                 
global.db.data.users[m.sender].lastberbru = new Date * 1
  let agess = ` *🐅 = [ ${ahh} ]*       *🐂 = [ ${dory} ]*
 *🐘 = [ ${lop} ]*      *🐒 = [ ${tai} ]*
 *🐐 = [ ${ih} ]*       *🐗 = [ ${lumba} ]*
 *🐼 = [ ${dapat} ]*        *🐃 = [ ${ohht} ]*
 *🐄 = [ ${gurita} ]*       *🐖 = [ ${hi} ]*
 *🐊 = [ ${bu} ]*      *🐔 = [ ${orci} ]*
  
+1 Tiketcoin`
 conn.sendMessage(m.chat, {
text: agess,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `HASIL BERBURU`,
thumbnailUrl: "https://telegra.ph/file/295a6d5105771875e1797.jpg",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  setTimeout(() => {
					conn.reply(m.chat, `Yuk berburu lagi😅`, m)
					}, timeout)
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(berburu)/i
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