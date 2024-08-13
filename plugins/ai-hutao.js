/**
instagram @riz06y_
whatsapp wa.me/62882003146309
jangan dihapus ini wm anj
*/

import fetch from  'node-fetch';
import axios from  'axios';
import uploadImage from  '../lib/uploadImage.js'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`;
if (text.startsWith('gambar')) {
await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let a = await fetch (`https://api.yanzbotz.my.id/api/ai/chatgpt-image?url=${url}&query=${text}&apiKey=AkiraaBotz`)
let b = await a.json()
await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

  let hasil = `${b.result}`;

  await conn.sendMessage(m.chat, {
    text: "*°Hutao - Ai*" + "\n\n" + hasil,
    contextinfo: {
      externalAdReply: {  
        title: "[ 💬 ] Hutao - Ai",
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/95c272ff5f863cfb9cc0a.jpg',
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
} 
await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  let { key } = await conn.sendMessage(m.chat, { text: '...' });

  let ini = await fetchData("kamu adalah hutao, asisten ai terbaik ✨",text)
  await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
  await conn.sendMessage(m.chat, { text: `✅`, edit: key });
  await conn.sendMessage(m.chat, {
    text: "*°Hutao - Ai*" + "\n\n" + ini.answer,
    contextInfo: {
      externalAdReply: {  
        title: "Hutao - Ai",
        body: '',
        thumbnailUrl: 'https://telegra.ph/file/184fbaad6d93603a285ec.jpg',
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
};
handler.command = handler.help = ['aihutao'];
handler.tags = ['ai'];
handler.premium = false;
handler.register = true;
handler.limit = true;
export default handler


async function fetchData(sistem, input) {
    const messages = [
        { role: "system", content: sistem },
        { role: "user", content: input }
    ];

    try {
        const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            method: "POST",
            headers: {
                Accept: "text/event-stream",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ messages }),
        });

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}