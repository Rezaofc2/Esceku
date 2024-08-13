
import axios from 'axios';
let handler = async (m, { conn }) => {
  let api = `https://api.botcahx.eu.org/api/random/katailham?apikey=${btc}`;

  try {
    let response = await axios.get(api);
    let quote = response.data.hasil;

    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    m.reply(quote);
  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan!');
  }
}

handler.help = ['katailham'];
handler.tags = ['quotes'];
handler.command = /^katailham$/i;

export default handler
