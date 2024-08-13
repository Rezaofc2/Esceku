import fetch from 'node-fetch';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(`*• Example :* ${usedPrefix + command} *[question]*`);
  let { key } = await conn.sendMessage(
    m.chat,
    {
      text: "Wait...",
    },
    {
      quoted: m,
    },
  );
  const hasil = await ChatGpt(
    text,
    `Namaku adalah akiraa, seorang gadis sekolahan berusia 16 tahun, kamu memiliki seorang lacara bernama syaii, dan nama dari lawan bicaramu adalah ${m.name}`,
  );
  await conn.sendMessage(
    m.chat,
    {
      text: hasil,
      edit: key,
    },
    {
      quoted: m,
    },
  );
};

handler.help = ["aryagpt"].map((a) => a + " *[question]*");
handler.tags = ["ai"];
handler.command = ["aryagpt"];

export default handler

async function ChatGpt(q, prompt) {
  try {
    const response = await (
      await fetch("https://nexra.aryahcr.cc/api/chat/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: prompt,
            },
            {
              role: "user",
              content: q,
            },
          ],
          model: "chatgpt",
        }),
      }).then((res) => res.json())
    ).gpt;
    return response;
  } catch (e) {
    throw new Error("Error fetching data from AI service.");
  }
}
