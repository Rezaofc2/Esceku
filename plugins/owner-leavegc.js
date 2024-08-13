
import fs from 'fs';
let handler = async (m, { conn, args, command, text }) => {
	let group = text ? text : m.chat
        await conn.sendFile(m.chat, fs.readFileSync('./lib/sticker/leave.webp'), 'sticker.webp', '', m, null, {
  fileLength: '10000',
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      mediaUrl: yt,
      mediaType: 1,
      description: '',
      title: '',
      body: wm,
      thumbnailUrl: pickRandom(hwaifu),
      sourceUrl: yt,
    }
  }
})
        await conn.groupLeave(group)
        m.reply('S u k s e s')
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}