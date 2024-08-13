
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, command }) => {

    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender    
    let name = conn.getName(who)
switch (command) {
case 'cekgender':
case 'cekkelamin': {
let ya = `Jenis kelamin ${text} adalah ${pickRandom(['cewek','cowok','cewok','waria','hode'])}`
conn.reply(m.chat, ya, m, { contextInfo: { mentionedJid: conn.parseMention(ya),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
      break;
    }
  }
};
handler.tags = ['kerang']
handler.help = handler.command = ['cekgender','cekkelamin']
handler.limit = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}