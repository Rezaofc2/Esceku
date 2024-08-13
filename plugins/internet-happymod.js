import axios from 'axios';
import cheerio from 'cheerio';


let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*• Example :* ${usedPrefix + command} *[query]*`;
   
    let res = await (happymod(text))
    
    let json = res
    if (!json.hsl) throw json
    let data = "*± H A P P Y - M O D*"
    for (let i = 0; i < json.hsl.length; i++) {
      let { name, version, url } = json.hsl[i]
      
      data += `
      
*• Name :* ${name}
*• Version :* ${version}
*• Download :* ${url}`

    }
  m.reply(data)


}

handler.help = ['happymod']
handler.tags = ['internet']
handler.command = /^(happymod)$/i
handler.register = false
handler.limit = true

export default handler

async function happymod(query) {
try {
    const res = await axios.get(
      "https://unduh.happymod.com/search.html?q=" + query,
    );
    const html = res.data;
    const $ = cheerio.load(html);
    const hsl = [];
    $("article.flex-item").each((index, element) => {
      const appName = $(element)
        .find("h2.has-normal-font-size.no-margin.no-padding.truncate")
        .text()
        .trim();
      const appVersion = $(element)
        .find("div.has-small-font-size.truncate")
        .first()
        .text()
        .trim();
      const appUrl = $(element).find("a.app.clickable").attr("href");

      if (appName && appVersion && appUrl) {
        hsl.push({
          name: appName,
          version: appVersion,
          url: "https://unduh.happymod.com/" + appUrl,
        });
      }
    });
    return {
      status: true,
      dev: "amirul.dev",
      hsl,
    };
} catch (error) {
    return {
      status: false,
      dev: "amirul.dev",
      message: "permintaan tidak dapat diproses!!",
    };
  }
}
