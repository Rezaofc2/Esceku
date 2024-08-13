import axios from 'axios';

let handler = async (m, { conn }) => {
  let api = `https://api.lolhuman.xyz/api/quotes/dilan?apikey=${global.lolkey}`;
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let pp = pickRandom(hwaifu)
let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
  try {
    let response = await axios.get(api);
    let quote = response.data.result;
await conn.reply(m.chat, quote, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan!');
  }
}

handler.help = ['katadilan'];
handler.tags = ['quotes'];
handler.command = /^katadilan$/i;

export default handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}