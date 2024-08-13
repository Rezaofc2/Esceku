import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
		try {
			let img = await q.download?.()
			
			  const out = await uploadImage(img);
			let anu = await (await fetch(`https://api.lolhuman.xyz/api/${command.includes('usia') ? 'agedetect' : 'genderdetect'}?apikey=${lolkey}&img=${out}`)).json()
			if (anu.status != 200) throw Error(anu.message)
			m.reply(command.includes('usia') ? `*Usia :*\n\n${anu.result} Tahun.` : `*Gender :*\n\n${anu.result}.`)
		} catch (e) {
			console.log(e)
			throw 'Internal server error.'
		}
	
	} else m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
}

handler.help = ['cekusia']
handler.tags = ['ai']
handler.command = /^(cek(usia|gender)|usia)$/i

handler.premium = false
handler.limit = true

export default handler