
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, text }) => {
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
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
let { name, pasangan, limit, exp, uang, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
let nyawa = global.db.data.users[who].healt
let hasil = formatRupiah(Number(uang));
let hasil2 = formatNumber(exp)
let bank = formatRupiah(Number(global.db.data.users[who].bank));
let lim = global.db.data.users[who].limit; 
let stamina = global.db.data.users[who].stamina
let poin = global.db.data.users[who].poin
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
let alok = {
	key : {                remoteJid : "status@broadcast",
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            itemCoun : 99999999,
                            surface : 99999999,
                            message: wm,
                            orderTitle: 'H A L O',
                            thumbnailUrl: pickRandom(hwaifu),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
  let menyu = `╭─•「 *INFO DOMPET* 」
├▢ *Name:* ${registered ? '' + name + '': ''}
├▢ *Umur:* ${age} tahun
├▢ *Level:* ${level}
├▢ *Exp:* ${hasil2}
├▢ *Limit:* ${lim}
├▢ *Health:* ${nyawa}
├▢ *Stamina:* ${stamina}
├▢ *Money:* ${hasil}
├▢ *Atm:* ${bank}
╰──────────────────•

❒ *Status:* ${who.split`@`[0] == global.nomerown ? 'Developer' : premium ? 'Premium User' : global.db.data.users[who].level >= 1000 ? 'Elite User' : 'Free User'}
❒ *Rank:* ${role}
❒ *Title:* ${global.db.data.users[who].title == 0 ? 'Tidak Punya' : global.db.data.users[who].title}`
await conn.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }});
      await conn.reply(m.chat, Styles(menyu), alok, { contextInfo: { externalAdReply: {title: `${Styles(ucpn)}`, body: Styles(ezatime), sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.help = ['my','dompet']
handler.tags = ['rpg']
handler.command = /^(me|my|dompet)$/i
handler.register = true

handler.rpg = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}
function formatNumber(num) {
	let formatted = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	return formatted;
}

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