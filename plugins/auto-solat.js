export async function before(m, { participants }) {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    this.autosholat = this.autosholat ? this.autosholat : {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let name = await this.getName(who);
    let id = m.chat;
    if (id in this.autosholat) {
        return false;
    }
    //let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
    //let jadwalSholat = data.data.timings;
    let jadwalSholat = {
        Dhuhr: "11:36",
        Asr: "14:57",
        Maghrib: "17:29",
        Isha: "18:42",
    };
    let jadwalSholat2 = {
    Subh: "04:21"
    };
    const date = new Date(new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
     let Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
   
        if (timeNow === waktu) {
            this.autosholat[id] = [
                this.sendFile(
    m.chat,
    "./mp3/autosholat.mp3",
    "rmrNoAqhgoNr.aac",
    null,
    null,
    true,
    {
      type: "audioMessage",
      ptt: false,
      contextInfo: {
      mentionedJid: users,
        externalAdReply: {
          body: Styles(`untuk wilayah ponorogo dan sekitarnya.`),
          containsAutoReply: true,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceId: null,
          sourceType: "PDF",
          previewType: "PDF",
          sourceUrl: null,
          thumbnailUrl:
            "https://telegra.ph/file/47e09c26d81a2461b6d52.jpg",
          title: Styles(`Waktu ${sholat} telah tiba`)
        }
      }
    }
  ),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
    for (const [sholat2, waktu2] of Object.entries(jadwalSholat2)) {
    
        if (timeNow === waktu2) {
            this.autosholat[id] = [
                this.sendFile(
    m.chat,
    "./mp3/azansubuh.mp3",
    "rmrNoAqhgoNr.aac",
    null,
    null,
    true,
    {
      type: "audioMessage",
      ptt: false,
      contextInfo: {
      mentionedJid: users,
        externalAdReply: {
          body: Styles(`untuk wilayah ponorogo dan sekitarnya.`),
          containsAutoReply: true,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceId: null,
          sourceType: "PDF",
          previewType: "PDF",
          sourceUrl: null,
          thumbnailUrl:
            "https://telegra.ph/file/8027bfa60642a129407d7.jpg",
          title: Styles(`Waktu ${sholat2} telah tiba`)
        }
      }
    }
  ),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
}

export const disabled = false