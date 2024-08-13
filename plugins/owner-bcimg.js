import uploadImage from '../lib/uploadImage.js';
import moment from 'moment-timezone';
import crypto from 'crypto';

const handler = async (m, { conn, text, participants, usedPrefix, command }) => {
  const groups = Object.entries(conn.chats)
    .filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce)
    .map(v => v[0]);

  const q = m.quoted ? m.quoted : m;
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
let ucpn = `${ucapan()}`
const frez = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": Styles(ucpn)
      }
    }
  let fakeig = {
			fileLength: 1000, seconds: 10000,
				contextInfo: {
				mentionedJid: participants.map(a => a.id),
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: '',
                        mediaType: 1,
						description: 'Follow: ' + yt,
						title: `–––––『${Styles(info.namebot)} ʙʀᴏᴀᴅᴄᴀꜱᴛ』–––––`,
						body: null, 
						renderLargerThumbnail: true,
						thumbnailUrl: pickRandom(flaaa) + 'Broadcast+Image',
						sourceUrl: null
					}
				}
			} 
  const mime = (q.msg || q).mimetype || q.mediaType || "";

  if (!mime) {
    return conn.reply(m.chat, `Example: reply/send image with caption *${usedPrefix + command}*`, m);
  }

  const image = await uploadImage(await q.download());
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m);

  for (const id of groups) {
    const participantIds = participants.map(a => a.id);
    await conn.sendFile(id, image, null, text, frez, null, fakeig).catch(_ => _);
  }

  m.reply(`Selesai Broadcast ${groups.length} Group`);
};

handler.help = ['bcimg'].map(v => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(bcimg)$/i;
handler.owner = true;
export default handler
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const randomID = length => crypto.randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "*Hay kak 👋🏻*\n*Selamat dini hari 🌃*"
  if (time >= 4) {
    res = "*Hay kak 👋🏻*\n*Selamat pagi 🌇*"
  }
  if (time >= 10) {
    res = "*Hay kak 👋🏻*\n*Selamat siang 🏙*"
  }
  if (time >= 15) {
    res = "*Hay kak 👋🏻*\n*Selamat sore 🌆*"
  }
  if (time >= 18) {
    res = "*Hay kak 👋🏻*\n*Selamat malam 🌃*"
  }
  return res
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}