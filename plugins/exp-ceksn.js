import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`*🗃️YOURE SN:* ${sn}`)
}

handler.help = ['ceksn']
handler.tags = ['main']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler

/*import { promises } from 'fs'
import canvafy from "canvafy";
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import { createHash } from 'crypto'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = `Selamat dini hari ${m.name} 🌃`
  if (time >= 4) {
    res = `Selamat pagi ${m.name} 🌇`
  }
  if (time >= 10) {
    res = `Selamat siang ${m.name} 🏙`
  }
  if (time >= 15) {
    res = `Selamat sore ${m.name} 🌆`
  }
  if (time >= 18) {
    res = `Selamat malam ${m.name} 🌃`
  }
  return res
}
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
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
  let sn = createHash('md5').update(m.sender).digest('hex')
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: null
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: Styles(`*[ 🗃 ] KODE SN KAMU:*\n${sn}`)
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: Styles(`${ucapan()}`),
            subtitle: "Unreg",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [            
                            {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Unreg Otomatis\",\"id\":\".unreg ${sn}\"}`
              },
                            {
                 "name": "cta_copy",
                 "buttonParamsJson": `{\"display_text\":\"SALIN SN\",\"id\":\"${sn}\",\"copy_code\":\"${sn}\"}`
              }, 
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}          

handler.help = ['ceksn']
handler.tags = ['main']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)*/


