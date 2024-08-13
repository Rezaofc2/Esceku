let handler  = async (m, { conn, usedPrefix: _p }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let pp = pickRandom(hwaifu)
  await conn.reply(m.chat, `Reza ganteng banget ≧ω≦`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.customPrefix = /^(reza|rez|re?za)$/i
handler.command = new RegExp
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}