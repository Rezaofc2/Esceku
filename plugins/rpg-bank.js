import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
let { name, pasangan, limit, exp, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
  let bank = global.db.data.users[who].bank
  let user = global.db.data.users[who]
  const caption = `
• *Name:*${registered ? ' ' + name + ' ': ''}
• *Bank:* ${bank}
• *Money*: ${user.uang}

`.trim()
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: wm,
thumbnailUrl: "https://telegra.ph/file/c7cd3c7bd4e1a30167f14.jpg",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.rpg = true

export default handler