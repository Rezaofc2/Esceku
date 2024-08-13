
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, participants, groupMetadata, text }) => {
let Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }
let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let ezatime = `${week} ${date}`
    let pp = 'https://telegra.ph/file/3c1ea5866a11088685413.jpg'
         try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {

let intro = `╭─── *「 Kartu Intro 」*
│       
│ *Nama* : 
│ *Gender* : 
│ *Umur* : 
│ *Hobby* : 
│ *Kelas* : 
│ *Asal* : 
│ *Agama* : 
│ *Status* : 
╰──────────────
Senoga Beteh Ya Kak Di Grup \n*${groupMetadata.subject}*`
let name = m.name
 let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
/*conn.sendMessage(m.chat, {
text: intro,
contextInfo: {
externalAdReply: {
title: 'Silahkan Isi Kartu Intro Di Bawah Ini',
thumbnailUrl: pp,
sourceUrl: gc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkon})*/
conn.reply(m.chat, Styles(intro), fkon, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: Styles(ezatime), sourceUrl: fb, thumbnail: fs.readFileSync('./lib/sticker/welcome.webp') }}})
  }
}
handler.command = /^(intro)$/i

export default handler