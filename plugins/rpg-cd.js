const handler = async (m, {
  conn
}) => {
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
  let {
    lasthourly,
    lastberburu,
    lastbansos,
    lastadventure,
    lastmancing,
    lastmancing2,
    lastmancing3,
    lastrob,
    lastwar,
    lastduel,
    lastmining,
    lastdungeon,
    lastclaim,
    lastpractice,
    lastweekly,
    lastkerja,
    lastkill,
    lastmaling,
    lastmulung,
    lastrampok,
    lastnambang,
    lastnebang,
    lastngewe,
    lastngocok,
    lastnguli,
    lastngojek,
    lastroket,
    lastyearly,
    lastdaily,
    lasthunt,
    lastcode,
    lastgrab,
    lastdagang,
    lastberkebon,
    lastbertani,
    lastmonthly
  } = db.data.users[m.sender]
  let warn = db.data.users[m.sender].warn
  let bann = db.data.users[m.sender].banned
  let str = `*—「 🕖 Cooldown 」—*

*Last Berburu :* ${lastberburu > 0 ? "❌" : "✅"}
*Last Memancing easy:* ${lastmancing > 0 ? "❌" : "✅"}
*Last Memancing normal:* ${lastmancing2 > 0 ? "❌" : "✅"}
*Last Memancing hard:* ${lastmancing3 > 0 ? "❌" : "✅"}
*Last Adventure :* ${lastadventure > 0 ? "❌" : "✅"}
*Last Berlatih :* ${lastpractice > 0 ? "❌" : "✅"}
*Last Duel :* ${lastduel > 0 ? "❌" : "✅"}
*Last Hunter :* ${lasthunt > 0 ? "❌" : "✅"}
*Last Dungeon :* ${lastdungeon > 0 ? "❌" : "✅"}
*Last Mining :* ${lastmining > 0 ? "❌" : "✅"}
*Last Bansos :* ${lastbansos > 0 ? "❌" : "✅"}
*Last Gaji :* ${lastclaim > 0 ? "❌" : "✅"}
*Last Hourly :* ${lasthourly > 0 ? "❌" : "✅"}
*Last Daily :* ${lastdaily > 0 ? "❌" : "✅"}
*Last Weekly :* ${lastweekly > 0 ? "❌" : "✅"}
*Last Monthly :* ${lastmonthly > 0 ? "❌" : "✅"}
*Last Yearly :* ${lastyearly > 0 ? "❌" : "✅"}
*Last Kerja :* ${lastkerja > 0 ? "❌" : "✅"}
*Last Kill :* ${lastkill > 0 ? "❌" : "✅"}
*Last Maling :* ${lastmaling > 0 ? "❌" : "✅"}
*Last Mulung :* ${lastmulung > 0 ? "❌" : "✅"}
*Last membunuh :* ${lastrob > 0 ? "❌" : "✅"}
*Last Merampok :* ${lastrampok > 0 ? "❌" : "✅"}
*Last Nambang :* ${lastnambang > 0 ? "❌" : "✅"}
*Last Nebang :* ${lastnebang > 0 ? "❌" : "✅"}
*Last Ngewe :* ${lastngewe > 0 ? "❌" : "✅"}
*Last Ngocok :* ${lastngocok > 0 ? "❌" : "✅"}
*Last Nguli :* ${lastnguli > 0 ? "❌" : "✅"}
*Last Ojek :* ${lastngojek > 0 ? "❌" : "✅"}
*Last Roket :* ${lastroket > 0 ? "❌" : "✅"}
*Last Grab :* ${lastgrab > 0 ? "❌" : "✅"}
*Last Bertani :* ${lastbertani > 0 ? "❌" : "✅"}
*Last Berdagang :* ${lastdagang > 0 ? "❌" : "✅"}
*Last Berkebon :* ${lastberkebon > 0 ? "❌" : "✅"}
*Last Redeem :* ${lastcode > 0 ? "❌" : "✅"}
${readMore}
⚠️ *Warn:* ${warn}
⛔ *Banned:* ${bann}`.trim();
await conn.reply(m.chat, Styles(str), m, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
};
handler.help = ["cd","cooldown"]
handler.tags = ["rpg"]
handler.command = /^(cd|cooldown)$/i
handler.rpg = true
export default handler;
const more = String.fromCharCode(8206),
  readMore = more.repeat(4201);
  
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}  