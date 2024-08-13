let buatall = 1

import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = pickRandom(hwaifu)
    conn.judi = conn.judi ? conn.judi : {}
    if (m.chat in conn.judi) return m.reply ('Masih ada yang melakukan casino disini, tunggu sampai selesai!!')
    else conn.judi[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    readmore: readMore
let pp = pickRandom(hwaifu)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].uang / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return await conn.reply(m.chat, `#judi <jumlah>\n #judi 1000`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
        if (global.db.data.users[m.sender].uang >= count * 1) {
            global.db.data.users[m.sender].uang -= count * 1
        await m.reply("jangan judi nanti rugi")
            if (Aku > Kamu) {
                let y = `aku roll:${Aku}\nKamu roll: ${Kamu}\n\nAwokawokawok kamu *Kalah*, kamu kehilangan ${count} Money`.trim()
                conn.sendMessage(m.chat, {
text: y,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: wm,
thumbnailUrl: 'https://telegra.ph/file/f8a842f049ecc93b7f920.jpg',
sourceUrl: yt,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].uang += count * 2
                let p = `aku roll:${Aku}\nKamu roll: ${Kamu}\n\nsialan, kamu *Menang*, kamu Mendapatkan ${count * 2} Money`.trim() 
                conn.sendMessage(m.chat, {
text: p, 
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: wm,
thumbnailUrl: 'https://telegra.ph/file/f8a842f049ecc93b7f920.jpg',
sourceUrl: yt,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
            } else {
                global.db.data.users[m.sender].uang += count * 1
                let o = `aku roll:${Aku}\nKamu roll: ${Kamu}\n\nYahh kamu *Seri*, kamu Mendapatkan ${count * 1} Money`.trim()
                conn.sendMessage(m.chat, {
text: o, 
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: wm,
thumbnailUrl: 'https://telegra.ph/file/f8a842f049ecc93b7f920.jpg',
sourceUrl: yt,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
            }
        } else conn.reply(m.chat, `uang kamu tidak cukup untuk melakukan judi sebesar ${count} Money`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                m.reply("error")
            }
        }
    } finally {
        delete conn.judi[m.chat]
    }
}
    
handler.help = ['judi <jumlah>']
handler.tags = ['rpg']
handler.command = /^(judi)$/i

handler.rpg = null

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}