

let handler = async(m, { conn, text, usedPrefix, command}) => {
let Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

 let y = `*H A R G A  S E W A B O T*

Rp. 15.000 / 1 Bulan

*Manfaat Sewa Bot:*
*1.* Auto Welcome/Goodbye
*2.* Kick/Add Pakai Bot
*3.* Buka/Tutup Gc Pakai Bot
*3.* Fitur Enable
*4.* Acc Pakai Bot
*5.* Hidetag/tagall
*6.* bisa main game/rpg
*7.* enable game/rpg

jika ingin sewa silahkan ketik .owner`
conn.sendMessage(m.chat, {
    text: Styles(y),
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
        externalAdReply: {
            title: Styles("SEWA RYSBOT"),
            body: null,
            thumbnailUrl: pickRandom(flaaa) + `SewaBot`,
            sourceUrl: yt,
            mediaType: 1,
            renderLargerThumbnail: true
        },
    forwardedNewsletterMessageInfo: {
        newsletterJid: info.channel,
        serverMessageId: 103,
        newsletterName: wm,
    }
}
}, { quoted: m});
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i

export default handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}