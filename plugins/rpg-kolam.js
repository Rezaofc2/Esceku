
import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
	let user = global.db.data.users[who]
	if (typeof user == 'undefined') throw 'Pengguna tidak ada didalam data base'
	let gmbrt = 'https://telegra.ph/file/1b4ffd2adf5fc3aa191ff.jpg'
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
» 🦈 = [ ${user.hiu} ] Hiu
» 🐟 = [ ${user.ikan} ] Ikan
» 🐠 = [ ${user.dory} ] Dory
» 🐳 = [ ${user.orca} ] Orca
» 🐋 = [ ${user.paus} ] Paus
» 🦑 = [ ${user.cumi} ] Cumi
» 🐙 = [ ${user.gurita} ] Gurita
» 🐡 = [ ${user.buntal} ] Buntal
» 🦐 = [ ${user.udang} ] Udang
» 🐬 = [ ${user.lumba} ] Lumba
» 🦞 = [ ${user.lobster} ] Lobster
» 🦀 = [ ${user.kepiting} ] Kepiting
⛊━─┈────────┈─━⛊
🎏 Total Isi:  ${user.hiu + user.ikan + user.dory + user.orca + user.paus + user.cumi + user.gurita +user.buntal + user.udang + user.lumba + user.lobster + user.kepiting} jenis
🎣 Sisa Umpan: ${user.umpan}
🎣 Pancingan : *${user.pancingan == 0 ? 'Tidak Punya' : '' || user.pancingan == 1 ? 'pancingan lv 1' : '' || user.pancingan == 2 ? 'pancingan lv 2' : '' || user.pancingan == 3 ? 'pancingan lv 3' : '' || user.pancingan == 3 ? 'pancingan lv 3' : '' || user.pancingan == 4 ? 'pancingan lv 4' : '' || user.pancingan == 5 ? 'pancingan lv 5' : '' || user.pancingan == 6 ? 'pancingan lv 6' : '' || user.pancingan == 7 ? 'pancingan lv 7' : '' || user.pancingan == 8 ? 'pancingan lv 8' : '' || user.pancingan == 9 ? 'pancingan lv max' : 'lv max'}*

Gunakan *${usedPrefix}pasar* untuk dijual
Gunakan *${usedPrefix}masak* untuk memasak`

	await  conn.sendMessage(m.chat, {
text: hsl,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `—「 KOLAM 🏝️ 」—`,
thumbnailUrl: gmbrt,
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fdoc})
}

handler.help = ['kolam']
handler.tags = ['rpg']
handler.command = /^(kolam)$/i

handler.rpg = true
export default handler