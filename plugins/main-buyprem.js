
let handler = async(m, { conn, text, usedPrefix, command}) => {
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
 let y = `*H A R G A  P R E M I U M*

Rp. 15.000,- / 1 Bulan
> _Admin +Rp. 1.000,-_

*Manfaat Fitur Premium :*
*1.* Dapat Akses fitur premium
*2.* Limit Tidak Terbatas
*3.* Dapat Akses Menu Premium

jika ingin beli premium silahkan ketik .owner`
//conn.sendButton(m.chat, Styles(y), Styles(`CHAT OWNER JIKA INGIN BELI`), "https://telegra.ph/file/d8a132de8b0afe9a2873f.png", [['OWNER', `.owner`]], m)
conn.sendMessage(m.chat, {
    text: Styles(y),
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
        externalAdReply: {
            title: Styles("PREMIUM RYSBOT"),
            body: null,
            thumbnailUrl: pickRandom(flaaa) + `BuyPremium`,
            sourceUrl: yt,
            mediaType: 1,
            renderLargerThumbnail: true
        },
    forwardedNewsletterMessageInfo: {
        newsletterJid: info.channel,
        serverMessageId: 103,
        newsletterName: wm,
    }
}
}, { quoted: m});
}
handler.help = ['premium']
handler.tags = ['main']
handler.command = /^(buyprem|premium)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}