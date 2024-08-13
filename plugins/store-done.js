

import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*• Example :* ${usedPrefix + command} *[product,nominal]*`;
  let [produk, nom] = text.split(",");
  let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  try {
  let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let pp = pickRandom(hwaifu)
    let ezatime = `${week} ${date}`
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let done = `––––『 TRANSAKSI DONE 』––––

    *• 📦 Item :* ${produk}
    *• 📅 Tanggal :* ${ezatime}
    *• 🕒 Jam :* ${wib} Wib
    *• 💸 Nominal :* Rp ${nom}.000
    *• ✅ Status :* Berhasil / Succes\n\n> Powered By : @${[0]}`;
    await conn.reply(m.chat, done, m, { contextInfo: { mentionedJid: conn.parseMention(done),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pp }}})
  } catch (e) {
    throw error;
  }
};
handler.help = ["done"].map(a => a + " *[product,nominal]*")
handler.tags = ["store"];
handler.command = ["done"];
handler.private = true;
export default handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    return days + " Hari " + hours + " Jam"
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}