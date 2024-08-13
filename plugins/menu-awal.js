const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let { pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[m.sender]
let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
let name = m.name
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
const sections = [{
title: global.htki + " INFO " + htka,
      rows: [ {
        header: "🚦 Rules".toUpperCase(),
        id: ".rules",
        title: "",
        description: "Rules untuk user bot"
      },
      {
        header: "‼️Tutorial".toUpperCase(),
        id: ".tutorial",
        title: "",
        description: "Tutorial menggunakan fitur bot"
    }, ]
    }, {
title: global.htki + " SUPPORT " + htka,
      rows: [ {
        header: "🔖 Sewabot".toUpperCase(),
        id: ".sewa",
        title: "",
        description: "Menampilkan list harga sewa BOT"
      },
      {
        header: "🌟 Buypremium".toUpperCase(),
        id: ".buyprem",
        title: "",
        description: "Menampilkan list harga premium BOT"
      },
        {
        header: "💹 donasi".toUpperCase(),
        id: ".donasi",
        title: "",
        description: "Support BOT agar lebih fast respon"
      }, ]
    }, {
      title: global.htki + " MENU " + htka,
      rows: [{
        header: "💬 All Menu".toUpperCase(),
        id: ".allmenu",
        title: "",
        description: "Menampilkan Semua command BOT"
      },
      {
        header: "🧧 menu main".toUpperCase(),
        id: ".mainmenu",
        title: "",
        description: "Menampilkan menu utama"
      },
       {
        header: "🚀 menu ai".toUpperCase(),
        id: ".aimenu",
        title: "",
        description: "Mencari/membuat sesuatu"
      },
      {
        header: "📩 menu downloader".toUpperCase(),
        id: ".downloadmenu",
        title: "",
        description: "Download sesuatu diBOT"
      },
      {
        header: "🎨 menu sticker".toUpperCase(),
        id: ".stikermenu",
        title: "",
        description: "Buat Sticker diBOT"
      },
      {
        header: "🧩 menu fun".toUpperCase(),
        id: ".funmenu",
        title: "",
        description: "Fitur yang aman untuk keluarga"
      },
       {
        header: "🐚 menu kerang".toUpperCase(),
        id: ".kerangmenu",
        title: "",
        description: "Kerang ajaib coy"
      },
      {
        header: "🌱 menu rpg".toUpperCase(),
        id: ".rpgmenu",
        title: "",
        description: "Game Epic Rpg!"
      },
      {
        header: "🎮 menu game".toUpperCase(),
        id: ".gamemenu",
        title: "",
        description: "Gamenya seru seru lho >-<"
      },
      {
        header: "🏢 menu group".toUpperCase(),
        id: ".groupmenu",
        title: "",
        description: "Only Groups"
      },
     {
        header: "ℹ️ menu info".toUpperCase(),
        id: ".infomenu",
        title: "",
        description: "Info info BOT"
      },
      {
        header: "🔞 menu nsfw".toUpperCase(),
        id: ".nsfwmenu",
        title: "",
        description: "Tch, dasar sagne"
      },
      {
        header: "🌎 menu internet".toUpperCase(),
        id: ".internetmenu",
        title: "",
        description: "Cari sesuatu diBOT"
      },
      {
        header: "✏️ menu maker".toUpperCase(),
        id: ".makermenu",
        title: "",
        description: "Buat sesuatu dari bot"
      },
     {
        header: "🌟 menu premium".toUpperCase(),
        id: ".premiummenu",
        title: "",
        description: "Only premium Users"
      },
      {
        header: "🛠️ menu tools".toUpperCase(),
        id: ".toolsmenu",
        title: "",
        description: "Mungkin tools ini bisa membantu?"
      },
     {
        header: "🎧 menu audio".toUpperCase(),
        id: ".soundmenu",
        title: "",
        description: "Ubah Audio dengan Filter"
      },
      {
        header: "⛩️ menu anime".toUpperCase(),
        id: ".animemenu",
        title: "",
        description: "Kamu wibu ya bang?"
      },
   {
        header: "📖 menu islami".toUpperCase(),
        id: ".islamicmenu",
        title: "",
        description: "Tobat yuk kak"
      },
      {
        header: "👩‍💻 menu owner".toUpperCase(),
        id: ".ownermenu",
        title: "",
        description: "Only owner"
       },
        {
        header: "⚡ menu cpanel".toUpperCase(),
        id: ".cpanelmenu",
        title: "",
        description: `Only owner`
       }]
    }]
     
  let user = global.db.data.users[m.sender]
  let ucpn = `${ucapan()}`
   let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let ezatime = `${week} ${date}`
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var days = Math.floor(seconds / (60 * 60 * 24));
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(days)}:${pad(hours)}:${pad(minutes)}`
}
					const runtime = process.uptime()
		            const teksy = `${kyun(runtime)}`
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    readmore: readMore
  let menyu = `╭─「 *ɪɴꜰᴏ ʙᴏᴛ* 」
│ ❒ ʀᴜɴᴛɪᴍᴇ : *${Styles(teksy)}*
│ ❒ ${Styles('pengguna')} : *${totalreg}*
│ ❒ ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ : *±${fitur.length}*
│ ❒ ᴜꜱᴇʀ ʙᴀɴɴᴇᴅ : *${users.length}*
╰───────────────────
╭─「 *ɪɴꜰᴏ ᴜꜱᴇʀ* 」  
│ ❒ ɴᴀᴍᴇ : *${Styles(registered ? '' + name + '': '')}*
│ ❒ ʟɪᴍɪᴛ : *${limit}*
│ ❒ ʟᴇᴠᴇʟ : *${level}*
│ ❒ ${Styles('rank')} : *${Styles(role)}*
╰───────────────────`
    const arr = [
        { text: `*■■□□□□□□□□ 10%*`, timeout: 100 },
        { text: `*■■■■□□□□□□ 30%*`, timeout: 100 },
        { text: `*■■■■■■□□□□ 50%*`, timeout: 100 },
        { text: `*■■■■■■■■□□ 80%*`, timeout: 100 },
        { text: `*■■■■■■■■■■ 100%*`, timeout: 100 },
        { text: `${Styles(ucpn)}${Styles(registered ? ' ' + name + ' ': '')}👋!`, timeout: 100 },
    ];

    const lll = await conn.sendMessage(m.chat, { text: "*□□□□□□□□□□ 0%*" }, { quoted: m });

    for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
        await conn.relayMessage(m.chat, {
            protocolMessage: {
                key: lll.key,
                type: 14,
                editedMessage: {
                    conversation: arr[i].text
                }
            }
        }, {});
    }
 let media = await prepareWAMessageMedia({ image: await getProfile(conn, m) }, { upload: conn.waUploadToServer });
  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: menyu
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: `*[❗] ɴᴏᴛᴇ :*
ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ꜰɪᴛᴜʀ yᴀɴɢ ᴇʀᴏʀ
ꜱɪʟᴀʜᴋᴀɴ ʟᴀᴩᴏʀ ᴋᴇᴩᴀᴅᴀ ᴏᴡɴᴇʀ`
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...media,
          title: null,
          subtitle: "EzaBot",
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
         { "name": 'single_select',
								"buttonParamsJson": JSON.stringify({
									title: "CLICK HERE",
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
           {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"OWNER\",\"id\":\".owner\"}"
              },
          ],
        })
      })
    }
  }
}, {});

return await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
await conn.sendMessage(m.chat, { audio: { url: `./mp3/Ppuh.mp3` }, viewOnce: true, seconds: 10000, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100,0,100,0,100,0,100] }, { quoted: m })
}

handler.command = /^(menu|help)$/i
handler.register = true

export default handler
function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    return days + " Hari " + hours + " Jam"
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat dini hari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time >= 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}

async function getProfile(conn, m) {
  let font = await jimp.loadFont('./pro.fnt'),
    mask = await jimp.read('https://telegra.ph/file/998c55d5889f8874c0f98.jpg'),
    welcome = await jimp.read(pickRandom(thumbnailUrl)),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}

let thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
]