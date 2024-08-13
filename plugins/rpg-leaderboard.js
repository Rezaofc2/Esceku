import { areJidsSameUser } from '@adiwajshing/baileys'
import fetch from 'node-fetch'
const leaderboards = [
    'level',
    'exp',
    'limit',
    'uang',
    'iron',
    'gold',
    'diamond',
    'emerald',
    'trash',
    'potion',
    'petFood',
    'wood',
    'rock',
    'string',
    'common',
    'uncommon',
    'mythic',
    'legendary',
    'pet', 
    'bank', 
    'tiketcoin'
]
let handler = async (m, {
    conn,
    args,
    participants,
    usedPrefix,
    command
}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
        return {
            ...value,
            jid: key
        }
    })
    let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
    let type = (args[0] || '').toLowerCase()
    const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
    let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `
⮕ ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ᴅɪғғᴇʀᴇɴᴛ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ:
${usedPrefix}${command} [type]
★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix}${command} legendary`.trim()
    if (!leaderboard.includes(type))
    return conn.sendMessage(m.chat, {
    text: wrong,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
        externalAdReply: {
            title: `GLOBAL LEADERBOARD`,
            body: null,
            thumbnailUrl: pickRandom(flaaa) + 'leaderboard',
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: true
        },
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363184819569813@newsletter',
        serverMessageId: 103,
        newsletterName: wm,
    }
}
}, { quoted: m});
    let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)) : 0
    let sortedItem = users.map(toNumber(type)).sort(sort(type))
    let userItem = sortedItem.map(enumGetKey)
    // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
    let text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

*• ${rpg.emoticon(type)} ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${conn.getName(user.jid)} \nwa.me/` : 'ғʀᴏᴍ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
    let mentionedJid = [who]
    conn.sendMessage(m.chat, {
    text: text,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
    mentionedJid: conn.parseMention(text),
        externalAdReply: {
            title: `GLOBAL LEADERBOARD`,
            body: null,
            thumbnailUrl: pickRandom(flaaa) + 'leaderboard',
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: true
        },
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363184819569813@newsletter',
        serverMessageId: 103,
        newsletterName: wm,
    }
}
}, { quoted: m});
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb)$/i

handler.rpg = true
export default handler

function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
        return {
            ...b[i],
            [property]: a[property] === undefined ? _default : a[property]
        }
    }
    else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
    return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}