const isHent = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i

let handler = async (m, { text }) => {
let isHentai = isHent.exec(text)
let gambar = pickRandom(hwaifu)
let tek = "tidak boleh kirim link saat afk"
if (!isHentai) {
    } else return 
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
let user = global.db.data.users[m.sender]
let zilabaka = m.sender.split`@`[0]
user.afk = + new Date
user.afkReason = text
let teks = `@${zilabaka} sekarang AFK ${text ? '\nDengan Alasan : ' + text : 'Tanpa Alasan'}`
conn.reply(m.chat, Styles(teks), m, { contextInfo: { mentionedJid: conn.parseMention(teks),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.register = false

export default handler
//@${who.split`@`[0]}        /////@${m.sender.split`@`[0]

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}