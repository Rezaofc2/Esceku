/*
* Developer: Kuro Zann
* Whatsapp: +6285607265790
* Instagram: @dev.kurozann
* Github: https://github.com/KuroZann
*/

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	if (!text) {
	    throw `• *Example:* ${usedPrefix + command} tasya`;
	}
	
    const sizes = ['tepos', '30', '32A', '32B', '32C', '34A', '34B', '34C', '36A', '36B', '36C', '38A', '38B', '38C', '40A', '40B', '40C', '42A', '42B', '42C'];
    const colors = ['Merah', 'Biru', 'Hijau', 'Kuning', 'Hitam', 'Putih', 'Oranye', 'Ungu', 'Coklat', 'Abu-abu', 'Merah Muda', 'Biru Muda', 'Hijau Muda', 'Krem', 'Biru Tua', 'Hijau Tua', 'Biru Langit', 'Toska', 'Salmon', 'Emas', 'Perak', 'Magenta', 'Cyan', 'Olive', 'Navy', 'transparan'];
    const shapes = ['underwired', 'push-up', 'balcanote', 'padded', 'halter', 'Bikini', 'bralette', 'sport', 'tube', 'bridal', 'T-brief', 'tshirt', 'multiway', 'Midi', 'Maxi', 'tidak pakai', 'nursing', 'Cheeky', 'Brazilian', 'Cutaway', 'halter'];

    const randomSize = await getRandomItem(sizes);
    const randomColor = await getRandomItem(colors);
    const randomShape = await getRandomItem(shapes);

   let ya = `• Ukuran Bh ${text} adalah\n\n• Ukuran: ${randomSize}\n• Warna: ${randomColor}\n• Bentuk: ${randomShape}`
    
    conn.reply(m.chat, ya, m, { contextInfo: { mentionedJid: conn.parseMention(ya),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
};

handler.help = ['cekbh'].map(v => v + ' */name*');
handler.tags = ['group'];
handler.command = /^(cekbh)$/i;

handler.group = true;
handler.limit = true;
handler.register = true;

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}