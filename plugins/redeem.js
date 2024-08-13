const timeout = 86400000

let handler = async (m, { conn, text, usedPrefix, command }) => {
let time = global.db.data.users[m.sender].lastcode + 86400000
if (new Date - global.db.data.users[m.sender].lastcode < 86400000) throw `[ ! ] Kamu sudah meng claim kode redeem`
const user = global.db.data.users[m.sender]
 if (!text) throw `*• Example:* .redeem ${db.data.redeem}`
let redeem = db.data.redeem
let ep = 200000
let li = 20
let ua = 200000
let bak = 200000
if (text == redeem) {
user.exp += ep
user.limit += li
user.uang += ua
user.bank += bak
global.db.data.users[m.sender].lastcode = new Date * 1
let tek = `*[ YOUR REDEEM REWARD ]*
*• Limit :* ${li}
*• Exp :* ${ep}
*• Money :* ${ua}
*• Bank :* ${bak}

Terimakasih Karena telah menggunakan ${info.namebot}, semoga kedepannya akan menjadi lebih baik dari sebelumnya`
m.reply(tek)
} else m.reply('*[ INVALID REDEEM CODE ]*')
}
handler.help = ["claimredeem","redeem"].map(a => a + ' *[code redeem]*')
handler.tags = ["rpg"]
handler.command = ["claimredeem","redeem"]
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