let handler = async (m, { conn, usedPrefix }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
	let user = global.db.data.users[who]
	if (typeof user == 'undefined') throw 'Pengguna tidak ada didalam data base'
	let gmbrt = 'https://telegra.ph/file/fc0f9ea7177e7a6a3e21b.jpg'
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
let zilabaka = m.name
                        let { name, pasangan, limit, exp, money, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
	let hsl = `👤 Name: *${registered ? '' + name + '': ''}*
🏷 Status: *${who.split`@`[0] == global.nomerown ? 'Developer' : premium ? 'Premium User' : global.db.data.users[who].level >= 1000 ? 'Elite User' : 'Free User'}*
🌟 Rank: *${role}*
⛊━─┈────────┈─━⛊
» *🐂 = [ ${user.banteng} ] banteng*
» *🐅 = [ ${user.harimau} ] harimau*
» *🐘 = [ ${user.gajah} ] gajah*
» *🐐 = [ ${user.kambing} ] kambing*
» *🐼 = [ ${user.panda} ] panda*
» *🐊 = [ ${user.buaya} ] buaya*
» *🐃 = [ ${user.kerbau} ] kerbau*
» *🐮 = [ ${user.sapi} ] sapi*
» *🐒 = [ ${user.monyet} ] monyet*
» *🐗 = [ ${user.babihutan} ] babihutan*
» *🐖 = [ ${user.babi} ] babi*
» *🐓 = [ ${user.ayam} ] ayam*
⛊━─┈────────┈─━⛊
Gunakan *${usedPrefix}pasar* untuk dijual
Gunakan *${usedPrefix}masak* untuk memasak`


	await  conn.sendMessage(m.chat, {
text: hsl,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `—「 KANDANG 」—`,
thumbnailUrl: gmbrt,
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fdoc})
}

handler.menufun = ['kandang']
handler.tagsfun = ['rpg']
handler.command = /^(kandang)$/i

handler.rpg = true
export default handler