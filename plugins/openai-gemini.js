import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;
  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return m.reply("• *Example :* .gemini halo");
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  let { key } = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });
  if (!mime) {
    try {
      let res = await Query(text);
      await conn.sendMessage(
        m.chat,
        { text: `*[ GEMINI RESPONSE ]*\n${res.result}`, edit: key },
        { quoted: m },
      );
    } catch (e) {
      throw e;
    }
  } else {
    let media = await q.download();
    let isTele = /image\/(png|jpe?g)/.test(mime);
    let link = await uploadImage(media);
    let res = await Image(text, link);
    await conn.sendMessage(
      m.chat,
      { text: `*[ GEMINI RESPONSE ]*\n${res.result}`, edit: key },
      { quoted: m },
    );
  }
};
handler.help = ["gemini"].map((a) => a + " *[query]*");
handler.tags = ["ai"];
handler.command = /^(gemini|g)$/i;
handler.premium = true;
export default handler

async function Query(query) {
  return await fetch("https://itzpire.com/ai/gemini-ai?q= " + query);
}

async function Image(query, url) {
  return await fetch(
    `https://itzpire.com/ai/gemini-ai?q=${query}&url=${url}`,
  );
}