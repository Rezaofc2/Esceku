import fetch from 'node-fetch';
async function stableDiff(prompt, negative) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(
        "https://requesteracessibili.joaovitorkas13.workers.dev",
        {
          method: "POST",
          headers: {
            authority: "requesteracessibili.joaovitorkas13.workers.dev",
            "content-type": "application/json",
            origin: "https://just4demo24.blogspot.com",
            referer: "https://just4demo24.blogspot.com/",
            "user-agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
          },
          body: JSON.stringify({
            prompt: prompt,
            negative_prompt: negative,
            sync_mode: 0,
          }),
        },
      ).then((v) => v.json());

      return resolve(res);
    } catch (e) {
      reject(e);
    }
  });
}

let handler = async (m, { 
conn, 
usedPrefix,
text,
command
 }) => {
    if (!text) throw `*• Example :* ${usedPrefix + command} *[prompt]*`;
    m.reply(wait);
    for (let i of await (
      await stableDiff(text, "not hd, watermark")
    ).images) {
      conn.sendFile(m.chat, i.url, null, wm, m);
    }
  }
handler.help = handler.command = ["diff", "difffusion"]
handler.tags = ['ai'];
handler.premium = false;
handler.limit = true;
export default handler