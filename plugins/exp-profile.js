
import moment from 'moment-timezone'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let pp = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU'
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
let ucpn = `${ucapan()}`
const frez = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": Styles(ucpn)
      }
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  	let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'Tidak Ada Bio'
    let { name, pasangan, sahabat, limit, exp, uang, bank, banned, lastclaim, premiumTime, premium, registered, regTime, age, level, role } = global.db.data.users[who]
    let username = conn.getName(who)
    let reza = `@${pasangan.split`@`[0]}`
    let lim = global.db.data.users[who].limit; 
    let zila = `@${sahabat.split`@`[0]}`
    let shbt = `${zila}`
    let skata = db.data.users[who].skata
    let str = `╭─•「 *U S E R - P R O F I L E* 」
├▢ *Name* : ${name}
├▢ *Status* : ${who.split`@`[0] == global.nomerown ? 'Developer' : premium ? 'Premium User' : global.db.data.users[who].level >= 1000 ? 'Elite User' : 'Free User'}
├▢ *Bio* : ${about}
├▢ *Tag* : @${who.replace(/@.+/, '')}
├▢ *Number* : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
├▢ *Age* : ${global.db.data.users[who].age == -1 ? 'Tidak di ketahui' : global.db.data.users[who].age}
├▢ *Role* : ${role} 
├▢ *Level* : ${level}
├▢ *Money* : ${uang}
├▢ *Exp* : ${exp}
├▢ *Limit* : ${lim}
├▢ *Wr Skata* : ${skata} %
├▢ *Total chat* : ${global.db.data.users[who].chat} 
╰──────────────────•⳹
 ◦ *Pacar*: ${pasangan ? reza : 'Gak punya' }
 ◦ *Sahabat*: ${sahabat ? shbt : 'Gak punya' }
 ◦ *Banned* : ${banned ? 'Yes' : 'No'}
 ◦ *Premium* : ${premium ? 'Yes' : 'No'}
 ◦ *registered* : ${registered ? 'Yes' : 'No'}

Ketik .inv untuk melihat Inventory RPG`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', Styles(str), frez, false, { contextInfo: { mentionedJid: conn.parseMention(str) }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['info']
handler.command = /^profile|profil$/i
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "*Hay kak 👋🏻*\n*Selamat dini hari 🌃*\n*Tidur sana kak 🥺*"
  if (time >= 4) {
    res = "*Hay kak 👋🏻*\n*Selamat pagi 🌇*\n*Jangan lupa sarapan ya kak 😊*"
  }
  if (time >= 10) {
    res = "*Hay kak 👋🏻*\n*Selamat siang 🏙*\n*Udah makan belum kak? 🫠*"
  }
  if (time >= 15) {
    res = "*Hay kak 👋🏻*\n*Selamat sore 🌆*\n*Jaga kesehatan ya kak 😊*"
  }
  if (time >= 18) {
    res = "*Hay kak 👋🏻*\n*Selamat malam 🌃*\n*Jangan begadang ya kak 😊*"
  }
  return res
}