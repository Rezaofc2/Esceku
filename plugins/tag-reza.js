let handler = async (m, { conn }) => {
  let wm = global.wm;
  let _uptime = process.uptime() * 1000;
  let uptimex = clockString(_uptime);
  conn.sendFile(
    m.chat,
    "./mp3/reza.mp3",
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
          thumbnailUrl:
            "https://telegra.ph/file/ebeeb0c7d11cab44a50fa.jpg",
          title: "Kenapa Ngetag Ownerku Kak?"
        }
      }
    }
  );
};
handler.customPrefix = /(@6289606790112)/i
handler.command = new RegExp
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