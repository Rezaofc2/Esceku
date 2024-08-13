import axios from "axios"
export async function before(m) {
  let chat = global.db.data.chats[m.chat];
  if (chat.simi && !chat.isBanned) {
    const commands = ['ai', 'menu', 'allmenu'];
    const isCommand = commands.some((v) => v.toLowerCase() == m.text.toLowerCase());
    if (isCommand) return;
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    if (!m.text) return;

    try {
         let simi = await getMessage(`${encodeURIComponent(m.text)}`, 'id')
      conn.reply(m.chat, simi, m, { contextInfo: {
    forwardingScore: 9999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363184819569813@newsletter',
      serverMessageId: 101,
      newsletterName: wm
    }}})
    } catch (err) {
      console.log(err);
    }
    
    return true;
  }
  
  return true;
};

async function getMessage(yourMessage, langCode) {
	const res = await axios.post(
    'https://api.simsimi.vn/v2/simtalk',
    new URLSearchParams({
        'text': yourMessage,
        'lc': langCode
    })
);

	if (res.status > 200)
		throw new Error(res.data.success);

	return res.data.message;
    }