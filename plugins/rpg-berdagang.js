// let pajak = 0.02
let handler = async (m, { conn, text }) => {
let dapat = (Math.floor(Math.random() * 5000))
if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }
  var rez = number + "@s.whatsapp.net";
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah, yang kamu ingin berdagang bareng'
  if (rez === m.sender)
      return conn.reply(m.chat, `tidak bisa berdagang dengan diri sendiri`, m);
  let __timers = (new Date - global.db.data.users[m.sender].lastdagang)
  let _timers = (28800000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  let username = conn.getName(who)
  if (new Date - global.db.data.users[m.sender].lastdagang > 28800000){
  if (4999 > users[who].uang) throw 'Target tidak memiliki modal harap masukkan modal 5000'
  if (4999 > users[m.sender].uang) throw 'kamu tidak memiliki modal harap masukkan modal 5000'
  users[who].uang -= dapat * 1
 users[m.sender].uang -= dapat * 1
  global.db.data.users[m.sender].lastdagang = new Date * 1
  let y = `Mohon tunggu kak..\nKamu dan @${who.replace(/@.+/, '')} sedang berdagang..\n\nKamu dan @${who.replace(/@.+/, '')} meletakkan modal -${dapat}…`
  conn.reply(m.chat, y, m, { contextInfo: { mentionedJid: conn.parseMention(y),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
  setTimeout(() => {
					let u = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].uang += 5000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +5000\n${users[who].uang += 5000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, u, m, { contextInfo: { mentionedJid: conn.parseMention(u),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 3600000)
  setTimeout(() => {
					let h = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].uang += 5000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +5000\n${users[who].uang += 5000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, h, m, { contextInfo: { mentionedJid: conn.parseMention(h),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 7200000)
  setTimeout(() => {
					let w = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].uang += 5000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +5000\n${users[who].uang += 5000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, w, m, { contextInfo: { mentionedJid: conn.parseMention(w),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 10800000)
  setTimeout(() => {
					let e = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].uang += 5000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +5000\n${users[who].uang += 5000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, e, m, { contextInfo: { mentionedJid: conn.parseMention(e),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 14400000)
  setTimeout(() => {
					let r = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].uang += 5000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +5000\n${users[who].uang += 5000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, r, m, { contextInfo: { mentionedJid: conn.parseMention(r),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 18000000)
  setTimeout(() => {
					let s = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].uang += 5000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +5000\n${users[who].uang += 5000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, s, m, { contextInfo: { mentionedJid: conn.parseMention(s),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 21600000)
  setTimeout(() => {
					let hm = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +5000\n${users[m.sender].uang += 5000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +5000\n${users[who].uang += 5000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, hm, m, { contextInfo: { mentionedJid: conn.parseMention(hm),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 25200000)
  setTimeout(() => {
					let yaa = `Selamat kamu dan @${who.replace(/@.+/, '')} mendapatkan money..\n\nPenghasilan dagang kamu didapatkan +10000\n${users[m.sender].uang += 10000} Money kamu\n\nPenghasilan dagang @${who.replace(/@.+/, '')} didapatkan +10000\n${users[who].uang += 10000} Money @${who.replace(/@.+/, '')}`
					conn.reply(m.chat, yaa, m, { contextInfo: { mentionedJid: conn.parseMention(yaa),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
					}, 28800000)
}
else conn.reply(m.chat, `Anda Sudah Berdagang , tunggu ${timers} lagi..`, m)

}
handler.help = ['berdagang <@tag>']
handler.tags = ['rpg']
handler.command = /^(berdagang|berbisnis)$/
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