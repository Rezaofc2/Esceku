
import fs from 'fs';
import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js'

let handler = async (m, {
    conn,
    args
}) => {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
  const res = `https://telegra.ph/file/b8451db7760a8a800eb4c.png`
            let stiker = await sticker(false, res, stickpack, stickauth)
   
          
if (stiker) await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, {
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      mediaUrl: yt,
      mediaType: 1,
      description: '',
      title: null,
      body: wm,
      thumbnail: await (await fetch (pp)).buffer(),
      sourceUrl: yt,
    }
  }
})
}
handler.help = ['script']
handler.tags = ['main']
handler.command = /^(sc|script)$/i
handler.register = true

export default handler