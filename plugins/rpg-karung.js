
import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {

let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
let user = global.db.data.users[who]
let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['ᴩᴀʜɪɴɢ', 'ᴩᴏɴ', 'ᴡᴀɢᴇ', 'ᴋʟɪᴡᴏɴ', 'ʟᴇɢɪ'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let ezatime = `${week} ${date}`
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
  let pp = pickRandom(hwaifu)
let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
  let menyu = `*《 ISI KARUNG MU 》*
    
 *➲️   🧺 = [ ${user.botol} ] Botol*
 *➲  ️ 🧺 = [ ${user.kardus} ] Kardus*
 *➲  ️ 🧺 = [ ${user.kaleng} ] Kaleng*  
 *➲  ️ 🧺 = [ ${user.sampah} ] Sampah*
 *➲  ️ 🧺 = [ ${user.gelas} ] Gelas*
 *➲  ️ 🧺 = [ ${user.plastik} ] Plastik*`
await conn.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }});
      await conn.reply(m.chat, menyu, fdoc, { contextInfo: { externalAdReply: {title: `${ucpn}`, body: ezatime, sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.help = ['karung']
handler.tags = ['rpg']
handler.command = /^(karung)$/i
handler.register = true

handler.rpg = true
export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat dini hari kak 🌃"
  if (time >= 4) {
    res = "Selamat pagi kak 🌇"
  }
  if (time >= 10) {
    res = "Selamat siang kak 🏙️"
  }
  if (time >= 15) {
    res = "Selamat sore kak 🌆"
  }
  if (time >= 18) {
    res = "Selamat malam kak 🌃"
  }
  return res
}