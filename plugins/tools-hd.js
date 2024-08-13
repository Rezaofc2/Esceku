import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      conn.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }});
      const out = await uploadImage(img);
      const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini?url=${out}&apikey=${btc}`);
      const image = await api.json();
      const { url } = image 
       conn.sendFile(m.chat, url, null, wm, m);
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi gagal. Silakan coba lagi.`);
  }
}

handler.help = ['remini','hd','hdr']
handler.tags = ['tools']
handler.command = /^(remini|hd|hdr)$/i

handler.register = false
handler.limit = true

export default handler

/*import uploadImage from '../lib/uploadImage.js';
import { remini } from 'betabotz-tools';

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			let api = await remini(out)
			await conn.sendMessage(m.chat, { image: { url: api.image_data }, caption: `*nih sudah jadi tuan*` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(eror)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}

handler.help = ['remini','hd']
handler.tags = ['tools']
handler.command = /^(remini|hd)$/i

handler.register = false
handler.limit = true

export default handler*/