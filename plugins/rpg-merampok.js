// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }
  var zilll = number + "@s.whatsapp.net";
let dapat = (Math.floor(Math.random() * 100000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
 if (zilll === nomerown + '@s.whatsapp.net')
      return conn.reply(m.chat, `Tidak bisa merampok owner dek`, m);
if (zilll === m.sender)
      return conn.reply(m.chat, `Kamu tidak mendapatkan apa apa karena merampok diri sendiri`, m);
let pp = pickRandom(hwaifu)
  let __timers = (new Date - global.db.data.users[m.sender].lastrampok)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrampok > 3600000){
  if (10000 > users[who].uang) throw 'Target Gaada Uang bodoh, Kismin dia'
  users[who].uang -= dapat * 1
  users[m.sender].uang += dapat * 1
  global.db.data.users[m.sender].lastrampok = new Date * 1
  await conn.reply(m.chat, `Berhasil Merampok Money Target Sebesar ${dapat}`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}else await conn.reply(m.chat, `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})}
handler.help = ['merampok <@tag>']
handler.tags = ['rpg']
handler.command = /^merampok|rampok$/
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