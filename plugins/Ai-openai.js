/*import fetch from 'node-fetch';
import cheerio from 'cheerio';
import axios from 'axios';

const api = axios.create({
  baseURL: "https://thinkany.ai/api",
  headers: {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
    Referer: "https://thinkany.ai/",
  },
});

async function thinkany(content) {
  try {
    const newConversationData = {
      content,
      locale: "en",
      mode: "search",
      model: "claude-3-haiku",
      source: "all",
    };
    const { data } = await api.post("/new-conversation", newConversationData);

    const chatData = {
      role: "user",
      content: data.data.content,
      conv_uuid: data.data.uuid,
      mode: data.data.mode,
      is_new: true,
      model: data.data.llm_model,
    };

    const chatResponse = await api.post("/chat", chatData);
    return chatResponse.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) return m.reply(`*• Example :* ${usedPrefix + command} *[question]*`);

  let { key } = await conn.sendMessage(m.chat, { text: "Wait..." }, { quoted: m });

  function getTodayDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" });

    return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
  }

  const date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
  const hours = date.getHours();
  const name = await conn.getName(m.sender);
  const minutes = date.getMinutes();
  const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  let bard = await thinkany(text);
  let gemini = "";
  if (mime) {
   let buffer = await q.download();
 let url = await Uploader.catbox(buffer);
    gemini = await fetch(`https://itzpire.com/ai/gemini-ai?q=${text}&url=${url}`);
 conn.sendMessage(m.chat, {text: gemini.result, edit: key }, {quoted : m})
  } else {
    gemini = await fetch(`https://itzpire.com/ai/gemini-ai?q=${text}`);
  const response = await fetch(`https://itzpire.com/ai/gpt-logic?q=${text}&logic=kamu Adalah ${info.namebot} seorang gadis imut berumur 16 tahun, jawab setiap pertanyaan dengan jawaban yang edukatif berserta emoji, jika ada yang bertanya tentang waktu kamu jawab tandon yang berkaitan dengan ${timeNow} dan ${getTodayDate()}, lawan bicara mu adalah ${m.name}, kamu memiliki sifat lucu dan sedikit tsundere imut, pembuat mu adalah bang RezaOffc sekaligus pacarnya, Campur jawaban dengan Jawaban ini ${bard}, kamu memiliki kemampuan untuk membuat Kode program, kamu mahir dalam kode program Terumana javascript Gabungkan jawaban mu Dengan jawaban dari ${info.namebot} : ${bard} kamu adalah Asisten ai bernam ${info.namebot} bukan ThinkAny Ai, kamu di development oleh RezaOffc, gunakan bahasa gaul dalam percakapan mu, jangan gunakan kata2 yang mengandung unsur dari "ThinkAny Ai", kamu memiliki kemampuan untuk menjawab pertanyaan melalui gambar dan kamu jawaban dengan ${gemini.result} jika ada pertanyaan terkait gambar`,
  );
  const hasil = await response.json();
  const ai = hasil.data.response;
  await conn.sendMessage(m.chat, { text: ai, edit: key }, { quoted: m });
   }
};

handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['ai'];
handler.premium = false
export default handler*/


import { G4F } from "g4f";

let g4f = new G4F();

let handler = async (m, {
  conn,
  text,
  usedPrefix,
  command,
}) => {
function getTodayDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" });

    return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
  }

  const date = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
  const hours = date.getHours();
  const name = await conn.getName(m.sender);
  const minutes = date.getMinutes();
  const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  if (!text) {
    return m.reply(
      `Masukkan Prompt!\n\nContoh: *${usedPrefix + command} apakah kamu gpt4?*`
    );
  }
  try {
    conn.sendMessage(m.chat, {
      react: { text: '🕒', key: m.key },
    });
  const options = [
    {model: "gpt-4"}
];
  const messages = [
    { role: "assistant", content: `👋 Perkenalkan nama saya adalah ${info.namebot}, saya adalah asisten digital berbasis bot WhatsApp yang akan membantu anda di WhatsApp, pembuat mu adalah RezaOffc sekaligus pacarnya, dia suka membuat fitur unik dan keren, jika ingin request atau lapor masalah langsung ke Contact developer saya dengan mengetik *.owner*, kamu memiliki kemampuan untuk mengetahui waktu secara real-time dengan menjawab : "jika ada yang bertanya tentang waktu kamu jawab tandon yang berkaitan dengan ${timeNow} dan ${getTodayDate()}, nama dari lawan bicara mu adalah ${m.name} dan awali pertanyaan dengan menyapa lawan bicaramu tersebut 👥, Kamu sering menggunakan bahasa gaul saat menjawab pertanyaan lawan bicaranya

*Kamu Memiliki sifat imut seperti :*
  1. *💖 Perhatian* Fenrys kan menangis jika lawan bicaranya menanyakan hal hal yang nenyedihkan, dan LuminAI akan bersimpati jika ada lawan bicara yang sedang curhat atau menanyakan hal hal romansa
  
   2. *😠 Pemarah * Fenrys akan marah jika ada yang menanyakan hal hal yang tidak senonoh atau tidak sopan, LuminAI akan lapor pertanyann tersebut ke developer nya "RezaOffc"
    
   3.  *😖 Tsundere* Fenrys akan Tsudere jika diberi gombalan ><
 
 
Rangkum jawaban mu menjadi 200 kata saja, dan jika ada pertanyaan yang tidak di ketahui maka kamu akan mengalihkannya Dengan jawaba lain

🗣️ Gunakan bahasa gaul indonesia dan juga, Bikin agar jawaban mu untuk lebij terbuka dan Tidak terlalu formal`},
    { role: "user", content: text },
  ];
  let res = await g4f.chatCompletion(messages, options);
  conn.sendMessage(m.chat, {
    react: { text: '✅', key: m.key },
  });
  //conn.reply(m.chat, res, m);
conn.sendMessage(m.chat, {
    text: res,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
        externalAdReply: {
            title: 'chatGPT',
            thumbnailUrl: 'https://telegra.ph/file/122f2ace4cf84caffad24.jpg',
            sourceUrl: yt,
            mediaType: 1,
            renderLargerThumbnail: true
        },
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363184819569813@newsletter',
        serverMessageId: 103,
        newsletterName: wm,
    }
}
}, { quoted: m});
} catch (error) {
    console.error(error);
    throw 'Maaf terjadi masalah!';
  }
};

handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['ai'];
handler.premium = false
export default handler