let handler = async(m, { conn }) => {
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
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
   let user = global.db.data.users[m.sender]
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let untotalreg = Object.values(global.db.data.users).filter(user => user.registered == false).length
    let totalprem = Object.values(global.db.data.users).filter(user => user.premium == true).length
   
    const message = `📊 *INFO DATABASE ${info.namebot}* 🤖

*User Total User:* ${totalreg}
*User Terdaftar:* ${rtotalreg}
*User Tidak Terdaftar:* ${untotalreg}
*User Premium:* ${totalprem}
*User Banned:* ${users.length}`;
let who = m.mentionedJid && m.mentionedJid[0] || (m.fromMe ? conn.user.jid : m.sender)
await conn.sendMessage(m.chat, {
      text: Styles(message),
      contextInfo: {
        externalAdReply: {
          title: wm,
          thumbnailUrl: pickRandom(hwaifu)
        },
        mentionedJid: [who]
      }
    }, {
      quoted: m
    });
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}