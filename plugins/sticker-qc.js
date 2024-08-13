import { Sticker } from 'wa-sticker-formatter';
import uploadImage from '../lib/uploadImage.js';
import axios from 'axios';
import uploadFile from '../lib/uploadFile.js';
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {

    try {
        let q = m.quoted ? m.quoted: m
        let mime = (q.msg || q).mimetype || ''
        let txt = text ? text: typeof q.text == 'string' ? q.text: ''
        conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
        let avatar = await conn.profilePictureUrl(q.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
        avatar = /tele/.test(avatar) ? avatar: await uploadImage((await conn.getFile(avatar)).data)
        if (!/webp/.test(mime)) {
            let req = await fakechat(txt, q.name, avatar)
            let stiker = await createSticker(req, false, wm)
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        } else {
            let media = await m.quoted.download()
            let out = await uploadFile(media)
            let req = await fakechatImg(out, txt, q.name, avatar)
            let stiker = await createSticker(req, false, wm)
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        }
    } catch (e) {
        throw e
    }
}
handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc|quotely)$/i

export default handler

async function fakechat(text, name, url) {
let warna = pickRandom(["#000000","#FFFFFF"])
    let body = {
        "type": "quote",
        "format": "webp",
        "backgroundColor": warna,
        "width": 480,
        "height": 480,
        "scale": 2,
        "messages": [{
        "avatar": true,
        "from": {
            "first_name": name,
            "language_code": "en",
            "name": name,
            "photo": {
            "url": url
            }
        },
        "text": text,
        "replyMessage": {}
        }]
    }
    let res = await axios.post('https://qc.botcahx.eu.org/generate', body);
    return Buffer.from(res.data.result.image, "base64");
}

async function fakechatImg(url, text, name, avatar) {
let warna = pickRandom(["#000000","#FFFFFF"])
    let body = {
        "type": "quote",
        "format": "webp",
        "backgroundColor": warna,
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [{
        "entities": [],
        "media": {
            "url": url
        },
        "avatar": true,
        "from": {
            "id": 1,
            "name": name,
            "photo": {
            "url": avatar
            }
        },
        "text": text,
        "replyMessage": {}
        }]
    }
    let res = await axios.post('https://qc.botcahx.eu.org/generate', body);
    return Buffer.from(res.data.result.image, "base64");
}

async function createSticker(req, url, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        author: wm,
        quality
    }
return (new Sticker(req ? req: url, stickerMetadata)).toBuffer()
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}