import yts from 'yt-search';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*• Example :* ${usedPrefix + command} *[query]*`;
  m.reply("Please wait...");
  try {
    let q = await (await yts(text)).videos;
    let array = [];
    if (!m.isGroup) {
      for (let key of q) {
        let cap = `*[ YOUTUBE SEARCH ]*
*• Title :* ${key.title}
*• Duration :* ${key.timestamp}
*• Release :* ${key.ago}
*• Author :* ${key.author.name}`;
        array.push([
          cap,
          wm,
          key.thumbnail,
          [
            ["DOWNLOAD VIDEO", `.ytv ${key.url}`],
            ["DOWNLOAD AUDIO", `.yta ${key.url}`],
          ],
        ]);
      }
    } else {
      for (let i of q) {
        array.push({
          headers: "YOUTUBE SEARCH",
          rows: [
            {
              headers: "Download Video",
              title: i.title,
              body: i.description,
              command: ".ytv " + i.url,
            },
            {
              headers: "Download Audio",
              title: i.title,
              body: i.description,
              command: ".yta " + i.url,
            },
          ],
        });
      }
    }
    if ("button" === "button") {
      if (m.isGroup) {
conn.reply(m.chat, q
          .map(
            (a, i) => `*• ${i + 1}.* ${a.title.toUpperCase()}
*• Duration :* ${a.timestamp}
*• Release :* ${a.ago}
*• Author :* ${a.author.name}
*• Url :* ${a.url}`,
          )
          .join("\n\n"), m, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
      } else {
        conn.sendCarousel(m.chat, array.slice(0, 20), m, {
          body: `*Y T - S E A R C H*
*• Result From :* ${text}`,
        });
      }
    }
  } catch (e) {
    throw e;
  }
};

handler.help = ['ytsearch'].map(v => v + ' <query>')
handler.tags = ['tools', 'internet', 'downloader']
handler.command = /^yts(earch)?$/i
handler.register = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}