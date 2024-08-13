import {
	createHash
} from 'crypto'
import moment from 'moment-timezone'
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
import canvafy from 'canvafy'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
let handler = async function(m, {
	text,
	usedPrefix
}) {
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
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = `Selamat dini hari ${m.name} 🌃`
  if (time >= 4) {
    res = `Selamat pagi ${m.name} 🌇`
  }
  if (time >= 10) {
    res = `Selamat siang ${m.name} 🏙`
  }
  if (time >= 15) {
    res = `Selamat sore ${m.name} 🌆`
  }
  if (time >= 18) {
    res = `Selamat malam ${m.name} 🌃`
  }
  return res
}
const sections = [{
title: global.htki + " LIST UMUR" + htka,
      rows: [ {
        header: "30 Tahun".toUpperCase(),
        id: ".verify 30",
        title: "",
        description: "Set umur 30"
      },
      {
        header: "29 Tahun".toUpperCase(),
        id: ".verify 29",
        title: "",
        description: "Set umur 29"
    },
    {
        header: "28 Tahun".toUpperCase(),
        id: ".verify 28",
        title: "",
        description: "Set umur 28"
    },
    {
        header: "27 Tahun".toUpperCase(),
        id: ".verify 27",
        title: "",
        description: "Set umur 27"
    },
    {
        header: "26 Tahun".toUpperCase(),
        id: ".verify 26",
        title: "",
        description: "Set umur 26"
    },
    {
        header: "25 Tahun".toUpperCase(),
        id: ".verify 25",
        title: "",
        description: "Set umur 25"
    },
    {
        header: "24 Tahun".toUpperCase(),
        id: ".verify 24",
        title: "",
        description: "Set umur 24"
    },
    {
        header: "23 Tahun".toUpperCase(),
        id: ".verify 23",
        title: "",
        description: "Set umur 23"
    },
    {
        header: "22 Tahun".toUpperCase(),
        id: ".verify 22",
        title: "",
        description: "Set umur 22"
    },
    {
        header: "21 Tahun".toUpperCase(),
        id: ".verify 21",
        title: "",
        description: "Set umur 21"
    },
    {
        header: "20 Tahun".toUpperCase(),
        id: ".verify 20",
        title: "",
        description: "Set umur 20"
    },
    {
        header: "19 Tahun".toUpperCase(),
        id: ".verify 19",
        title: "",
        description: "Set umur 19"
    },
    {
        header: "18 Tahun".toUpperCase(),
        id: ".verify 18",
        title: "",
        description: "Set umur 18"
    },
    {
        header: "17 Tahun".toUpperCase(),
        id: ".verify 17",
        title: "",
        description: "Set umur 17"
    },
    {
        header: "16 Tahun".toUpperCase(),
        id: ".verify 16",
        title: "",
        description: "Set umur 16"
    },
    {
        header: "15 Tahun".toUpperCase(),
        id: ".verify 15",
        title: "",
        description: "Set umur 15"
    },
    {
        header: "14 Tahun".toUpperCase(),
        id: ".verify 14",
        title: "",
        description: "Set umur 14"
    },
    {
        header: "13 Tahun".toUpperCase(),
        id: ".verify 13",
        title: "",
        description: "Set umur 13"
    },
    {
        header: "12 Tahun".toUpperCase(),
        id: ".verify 12",
        title: "",
        description: "Set umur 12"
    },
    {
        header: "11 Tahun".toUpperCase(),
        id: ".verify 11",
        title: "",
        description: "Set umur 11"
    },
    {
        header: "10 Tahun".toUpperCase(),
        id: ".verify 10",
        title: "",
        description: "Set umur 10"
    },
    {
        header: "9 Tahun".toUpperCase(),
        id: ".verify 9",
        title: "",
        description: "Set umur 9"
    }] 
    }]
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: Styles(`${ucapan()}\n\nSilakan pilih usia Anda di tombol bawah😊...`)
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...null,
          title: null,
          subtitle: "EzaBot",
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
         { "name": 'single_select',
								"buttonParamsJson": JSON.stringify({
									title: "Click Here !",
									sections
								})},
            {
              "name": "cta_url",
              "buttonParamsJson": JSON.stringify({
                display_text: "CHANNEL BOT",
                url: "https://whatsapp.com/channel/0029VaFGs8U6RGJDSDeYmC2S",
                merchant_url: "https://whatsapp.com/channel/0029VaFGs8U6RGJDSDeYmC2S"
              })
            },
          ],
        })
      })
    }
  }
}, { quoted: m })
let user = global.db.data.users[m.sender];
	if (user.registered === true) throw '```✅ Nomor Kamu Udah Terverifikasi```';
if (!text) return conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
if (text > 31) return conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
    let name = m.name
	let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
	let age = (Math.floor(Math.random() *100))
	user.regTime = +new Date();
	user.registered = true;
	user.age = text
	user.name = name
	let sn = createHash('md5').update(m.sender).digest('hex');
    let capt = `*VERIFIKASI BERHASIL*\n\n`
        capt += `• *Nama:* ${name}\n`
        capt += `• *Umur:* ${text} tahun\n`
        capt += `• *Serial Number (SN):* .ceksn\n\n`
        capt += `Terima kasih telah melakukan verifikasi. Data pengguna telah disimpan dengan aman di database bot. Data kamu sekarang sudah terverifikasi.\n\n`
        capt += `🚀 Sekarang kamu dapat menggunakan fitur-fitur khusus yang hanya tersedia untuk pengguna terverifikasi.`
    let p = await new canvafy.Security()
.setAvatar(pp)
.setBackground("image", "https://telegra.ph/file/96b2851cae3f8ef95cb0c.jpg")
.setCreatedTimestamp(Date.now())
.setSuspectTimestamp(1)
.setBorder("#f0f0f0")
.setLocale("id") // country short code - default "en"
.setAvatarBorder("#f0f0f0")
.setOverlayOpacity(0.9)
.build();
await conn.sendFile(m.chat, p, '', capt, m)
};

handler.help = ['verify']
handler.tags = ['main']
handler.command = /^(verify)$/i;

export default handler

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/*import {
	createHash
} from 'crypto'
import moment from 'moment-timezone'
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'


let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
let handler = async function(m, {
	text,
	usedPrefix
}) {
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
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = `Selamat dini hari ${m.name} 🌃`
  if (time >= 4) {
    res = `Selamat pagi ${m.name} 🌇`
  }
  if (time >= 10) {
    res = `Selamat siang ${m.name} 🏙`
  }
  if (time >= 15) {
    res = `Selamat sore ${m.name} 🌆`
  }
  if (time >= 18) {
    res = `Selamat malam ${m.name} 🌃`
  }
  return res
}
const sections = [{
title: global.htki + " LIST UMUR" + htka,
      rows: [ {
        header: "30 Tahun".toUpperCase(),
        id: ".verify 30",
        title: "",
        description: "Set umur 30"
      },
      {
        header: "29 Tahun".toUpperCase(),
        id: ".verify 29",
        title: "",
        description: "Set umur 29"
    },
    {
        header: "28 Tahun".toUpperCase(),
        id: ".verify 28",
        title: "",
        description: "Set umur 28"
    },
    {
        header: "27 Tahun".toUpperCase(),
        id: ".verify 27",
        title: "",
        description: "Set umur 27"
    },
    {
        header: "26 Tahun".toUpperCase(),
        id: ".verify 26",
        title: "",
        description: "Set umur 26"
    },
    {
        header: "25 Tahun".toUpperCase(),
        id: ".verify 25",
        title: "",
        description: "Set umur 25"
    },
    {
        header: "24 Tahun".toUpperCase(),
        id: ".verify 24",
        title: "",
        description: "Set umur 24"
    },
    {
        header: "23 Tahun".toUpperCase(),
        id: ".verify 23",
        title: "",
        description: "Set umur 23"
    },
    {
        header: "22 Tahun".toUpperCase(),
        id: ".verify 22",
        title: "",
        description: "Set umur 22"
    },
    {
        header: "21 Tahun".toUpperCase(),
        id: ".verify 21",
        title: "",
        description: "Set umur 21"
    },
    {
        header: "20 Tahun".toUpperCase(),
        id: ".verify 20",
        title: "",
        description: "Set umur 20"
    },
    {
        header: "19 Tahun".toUpperCase(),
        id: ".verify 19",
        title: "",
        description: "Set umur 19"
    },
    {
        header: "18 Tahun".toUpperCase(),
        id: ".verify 18",
        title: "",
        description: "Set umur 18"
    },
    {
        header: "17 Tahun".toUpperCase(),
        id: ".verify 17",
        title: "",
        description: "Set umur 17"
    },
    {
        header: "16 Tahun".toUpperCase(),
        id: ".verify 16",
        title: "",
        description: "Set umur 16"
    },
    {
        header: "15 Tahun".toUpperCase(),
        id: ".verify 15",
        title: "",
        description: "Set umur 15"
    },
    {
        header: "14 Tahun".toUpperCase(),
        id: ".verify 14",
        title: "",
        description: "Set umur 14"
    },
    {
        header: "13 Tahun".toUpperCase(),
        id: ".verify 13",
        title: "",
        description: "Set umur 13"
    },
    {
        header: "12 Tahun".toUpperCase(),
        id: ".verify 12",
        title: "",
        description: "Set umur 12"
    },
    {
        header: "11 Tahun".toUpperCase(),
        id: ".verify 11",
        title: "",
        description: "Set umur 11"
    },
    {
        header: "10 Tahun".toUpperCase(),
        id: ".verify 10",
        title: "",
        description: "Set umur 10"
    },
    {
        header: "9 Tahun".toUpperCase(),
        id: ".verify 9",
        title: "",
        description: "Set umur 9"
    }] 
    }]
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: Styles(`${ucapan()}\n\nSilakan pilih usia Anda di tombol bawah😊...`)
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...null,
          title: null,
          subtitle: "EzaBot",
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
         { "name": 'single_select',
								"buttonParamsJson": JSON.stringify({
									title: "Click Here !",
									sections
								})},
            {
              "name": "cta_url",
              "buttonParamsJson": JSON.stringify({
                display_text: "CHANNEL BOT",
                url: "https://whatsapp.com/channel/0029VaFGs8U6RGJDSDeYmC2S",
                merchant_url: "https://whatsapp.com/channel/0029VaFGs8U6RGJDSDeYmC2S"
              })
            },
          ],
        })
      })
    }
  }
}, { quoted: m })
let user = global.db.data.users[m.sender];
	if (user.registered === true) throw '```✅ Nomor Kamu Udah Terverifikasi```';
if (!text) return conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
if (text > 31) return conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
    let name = m.name
	let pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
	let age = (Math.floor(Math.random() *100))
	user.regTime = +new Date();
	user.registered = true;
	user.age = text
	user.name = name
	let sn = createHash('md5').update(m.sender).digest('hex');
    let capt = `*VERIFIKASI BERHASIL*\n\n`
        capt += `• *Nama:* ${name}\n`
        capt += `• *Umur:* ${text} tahun\n`
        capt += `• *Serial Number (SN):* .ceksn\n\n`
        capt += `Terima kasih telah melakukan verifikasi. Data pengguna telah disimpan dengan aman di database bot. Data kamu sekarang sudah terverifikasi.\n\n`
        capt += `🚀 Sekarang kamu dapat menggunakan fitur-fitur khusus yang hanya tersedia untuk pengguna terverifikasi.`
    conn.reply(m.chat, capt, m, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pp }}})
};

handler.help = ['verify']
handler.tags = ['main']
handler.command = /^(verify)$/i;

export default handler

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}*/