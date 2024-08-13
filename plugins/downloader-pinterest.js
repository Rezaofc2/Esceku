const isHent = /18?|sepon(g|k)?|desah|xnxx|mia|khalifah|sexy|bikini|bugil|r34|xx(x)?|sex|porno|tete|payudara|penis|montok|ngocok|oppai|naked|bikini|sex?(y|i)|boha?(y|i)|tete?k|titi?t|hent(ai|ao)?|animeh|pussy|dick|xnxx|kontol|col?mek|co?li|cum|hot|me?me?(k|g)|neocoil?l|yame?te|kimochi|boke?p|nsfw|rule?34|telanjang|crot|peju/i

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  if (!args || args.length < 1) {
    return m.reply(
      `*Contoh penggunaan: ${usedPrefix + command} *[query] -- [count]*`,
    );
  }
let isHentai = isHent.exec(text)
    if (!isHentai) {
  let [query, count] = args.join(" ").split(" --");
  count = parseInt(count);

  if (!count) {
    try {
      const results = await searchPinterest(query);
      const randomResult = results[Math.floor(Math.random() * results.length)];
      let y = `*[ PINTEREST SEARCH ]*
*• ID :* ${randomResult.id}
*• Title :* ${randomResult.grid_title}
*• Create at:* ${randomResult.created_at}
*• Url :* ${randomResult.link}
*• Source :* ${randomResult.pin}`      
      conn.sendFile(m.chat, randomResult.images_url, 'pp.jpg', y, m, false, { contextInfo: { mentionedJid: conn.parseMention(y) }})
    } catch (error) {
      console.log(error);
      conn.reply(m.chat, "Terjadi kesalahan saat menjalankan perintah.", m);
    }
  } else {
    if (count > 10) return m.reply("*Maksimum 10 request*");

    try {
      const results = await searchPinterest(query);
      for (let i = 0; i < count; i++) {
        const randomResult =
          results[Math.floor(Math.random() * results.length)];
        setTimeout(() => {
          let str = `*[ PINTEREST SEARCH ]*
*• ID :* ${randomResult.id}
*• Title :* ${randomResult.grid_title}
*• Create at:* ${randomResult.created_at}
*• Url :* ${randomResult.link}
*• Source :* ${randomResult.pin}`
          conn.sendFile(m.chat, randomResult.images_url, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid: conn.parseMention(str) }})
        }, i * 5000);
      }
    } catch (error) {
      console.log(error);
      m.reply("Terjadi kesalahan saat menjalankan perintah.");
    }
  }
    } else return m.reply('Jangan Mencari Hal Aneh!, Ketahuan Owner Bakal Di Banned')
};

handler.help = ["pinterest"].map((a) => a + " *[query -- count]*");
handler.tags = ["tools", "internet"];
handler.command = ["pinterest", "pin"];

export default handler

async function searchPinterest(query) {
  const baseUrl = "https://www.pinterest.com/resource/BaseSearchResource/get/";
  const queryParams = {
    source_url: "/search/pins/?q=" + encodeURIComponent(query),
    data: JSON.stringify({
      options: {
        isPrefetch: false,
        query,
        scope: "pins",
        no_fetch_context_on_resource: false,
      },
      context: {},
    }),
    _: Date.now(),
  };
  const url = new URL(baseUrl);
  Object.entries(queryParams).forEach((entry) =>
    url.searchParams.set(entry[0], entry[1]),
  );

  try {
    const json = await (await fetch(url.toString())).json();
    const results = json.resource_response?.data?.results ?? [];
    return results.map((item) => ({
      pin: "https://www.pinterest.com/pin/" + item.id ?? "",
      link: item.link ?? "",
      created_at:
        new Date(item.created_at).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }) ?? "",
      id: item.id ?? "",
      images_url: item.images?.["736x"]?.url ?? "",
      grid_title: item.grid_title ?? "",
    }));
  } catch (error) {
    console.error("Error mengambil data:", error);
    return [];
  }
}
