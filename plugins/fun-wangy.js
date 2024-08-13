let handler = async(m, { conn, text }) => {
if (!text) throw `Masukkan text!`
              let wangy = `${text} ${text} ${text} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${text} wangi aku mau nyiumin aroma wanginya ${text} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${text} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${text} AAAAA LUCCUUUUUUUUUUUUUUU............ ${text} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${text} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${text} gw ... ${text} di laptop ngeliatin gw, ${text} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${text} aku gak mau merelakan ${text} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${text} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             conn.reply(m.chat, wangy, m, { contextInfo: { mentionedJid: conn.parseMention(wangy),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
}
handler.help = ['wangy']
handler.tags = ['fun']
handler.command = /^(wangy)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}