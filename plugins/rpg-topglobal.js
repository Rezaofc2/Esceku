
let handler = async (m, { conn, participants }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = pickRandom(hwaifu)
await conn.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }});
  let bank = Object.entries(global.db.data.users).sort((a, b) => b[1].bank - a[1].bank);
  let getUser = bank.map(v => v[0]);
  let show = Math.min(10, bank.length);
  let rankbank = bank.map(([user, data]) => user);
  let teks = `[ 🌐 ] *T O P - G L O B A L*\n`;
  teks += `[ 🏆 ] *You:* *${rankbank.indexOf(m.sender) + 1}* of *${getUser.length}*\n\n`;
  teks += bank
    .slice(0, show)
    .map(([user, data], i) => 
      (i + 1) + '. @' + user.split`@`[0] + '\n' +
      '   ◦ *Bank* : *' + data.bank + '*\n' +
      '   ◦ *Level* : *' + data.level + '*'
    )
    .join('\n');
  teks += `\n\nSimple Bot Menu © RezaOffc`;
  conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: conn.parseMention(teks),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
};

handler.command = ["topglobal"];
handler.tags = ["rpg"];
handler.help = ["topglobal"];
handler.register = true;

handler.rpg = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}