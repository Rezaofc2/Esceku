let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps[Math.floor(Math.random() * ps.length)]
    let b
    do b = ps[Math.floor(Math.random() * ps.length)]
    while (b === a)
    let o = `@${m.sender.split`@`[0]} ❤️ ${toM(b)}`
        this.reply(m.chat, o, m, { contextInfo: { mentionedJid: conn.parseMention(o),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
}
handler.help = ['jodohin']
handler.tags = ['fun']
handler.command = ['jodohin']
handler.limit = true
handler.group = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}