import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js'
import fs from 'fs';

let handler = async (m, { conn, command, usedPrefix, text }) => {
    if (!text) throw `Kirim prompt dengan cara ${usedPrefix + command} naruto`;

    let apiUrl = `https://api.botcahx.eu.org/api/search/openai-image?text=${text}&apikey=${btc}`;
    let res = await fetch(apiUrl);
    if (!res.ok) throw 'Gagal mengambil gambar dari API';
    let buffer = await res.buffer();

    let filePath = './tmp/tmp-sticker.png';
    fs.writeFileSync(filePath, buffer);

    m.reply(stiker_wait);
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)

    await fs.unlinkSync(encmedia);
    await fs.unlinkSync(filePath);
}

handler.help = ['aistiker <prompt>'];
handler.tags = ['sticker','ai'];
handler.command = /^(aistiker|ai?s|aisticker|stickerai)$/i;
handler.limit = true;
export default handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
}