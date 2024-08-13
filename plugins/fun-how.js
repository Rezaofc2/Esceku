let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    let ppk = `${command} *${text}*
*${text}* is *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}`
conn.reply(m.chat, ppk, m, { contextInfo: { mentionedJid: conn.parseMention(ppk),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'how' + v)
handler.tags = ['kerang', 'fun']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}