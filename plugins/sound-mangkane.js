let handler = async (m, { conn, command, text, usedPrefix }) => {
let wm = global.wm;
  let _uptime = process.uptime() * 1000;
  let uptimex = clockString(_uptime);
  conn.sendFile(
    m.chat,
    `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`,
    "rmrNoAqhgoNr.aac",
    null,
    m,
    true,
    {
      type: "audioMessage",
      ptt: false,
      seconds: 9000,
      contextInfo: {
        externalAdReply: {
          body: null,
          containsAutoReply: true,
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          sourceId: null,
          sourceType: "PDF",
          previewType: "PDF",
          sourceUrl: null,
          thumbnailUrl: pickRandom(hwaifu), 
          title: oh
        }
      }
    }
  );
 }
handler.help = ['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['audio']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i

export default handler

function clockString(ms) {
  let days = Math.floor(ms / (24 * 60 * 60 * 1000));
  let daysms = ms % (24 * 60 * 60 * 1000);
  let hours = Math.floor(daysms / (60 * 60 * 1000));
  let hoursms = ms % (60 * 60 * 1000);
  let minutes = Math.floor(hoursms / (60 * 1000));
  let minutesms = ms % (60 * 1000);
  let sec = Math.floor(minutesms / 1000);
  return `${days} Hari ${hours} Jam ${minutes} Menit ${sec} Detik`;
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}