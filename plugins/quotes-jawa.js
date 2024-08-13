
import axios from 'axios';

let handler = async (m, { conn }) => {
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
  let api = `https://api.botcahx.eu.org/api/random/quotesjawa?apikey=${btc}`;
  try {
    let response = await axios.get(api);
    let quote = response.data.quotes;

      await conn.reply(m.chat, quote, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan!');
  }
}

handler.help = ['quotesjawa'];
handler.tags = ['quotes'];
handler.command = /^quotesjawa$/i;

export default handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}