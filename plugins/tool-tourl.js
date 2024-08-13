

import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
let alok = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            itemCoun : 99999999,
                            surface : 99999999,
                            message: 'T O U R L',
                            orderTitle: 'H A L O',
                            thumbnail: await (await fetch (pp)).buffer(),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = `🚩 *ʟɪɴᴋ:*
${link}
☘️ *sɪᴢᴇ :* ${media.length} Byte
🍁 *ᴇxᴘɪʀᴇᴅ :* ${isTele ? 'No Expiry Date' : 'Unknown'}`
  conn.sendMessage(m.chat, {
    text: caption, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: '', 
    mediaType: 1,
    title: '',
    body: wm, 
    thumbnailUrl: pickRandom(logo), 
    sourceUrl: yt,
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: alok})
}

handler.help = ['tourl <reply image/video>']
handler.tags = ['tools']
handler.command = /^(tourl)$/i
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}