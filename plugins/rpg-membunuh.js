
import fetch from 'node-fetch'

let pajak = 0.02
let handler = async (m, { conn, text }) => {
if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }
  var zilll = number + "@s.whatsapp.net";
let nyawa = (Math.floor(Math.random() *100))
let dapat = (Math.floor(Math.random() *10000))
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
   if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
   if (zilll === nomerown)
      return conn.reply(m.chat, `Tidak bisa membunuh owner dek`, m);
     if (zilll === m.sender)
      return conn.reply(m.chat, `kamu tidak mendapatkan apa apa karena bunuh diri sendiri`, m);
   let pp = pickRandom(hwaifu)
  let __timers = (new Date - global.db.data.users[m.sender].lastrob)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 3600000){
  if (10000 > users[who].uang) throw 'Target Gaada Uang bodoh, Kismin dia'
  if (0 > users[who].healt) throw 'Target Gaada nyawa bodoh, mati dia'
users[who].uang -= dapat * 1
users[m.sender].uang +=  dapat * 1
users[who].healt -= nyawa * 1
  global.db.data.users[m.sender].lastrob = new Date * 1
  await conn.reply(m.chat, `Berhasil membunuh target dan anda mendapatkan Money Target Sebesar ${dapat} nyawa target berkurang -${nyawa}`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}else await conn.reply(m.chat, `Anda Sudah membunuh dan berhasil sembunyi , tunggu ${timers} untuk membunuh lagi`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.help = ['membunuh *@tag*']
handler.tags = ['rpg']
handler.command = /^membunuh|bunuh$/
handler.limit = true
handler.group = true

handler.rpg = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}