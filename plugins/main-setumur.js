/***
 By RezaOffc
***/
import moment from 'moment-timezone'
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, {
    conn,
    usedPrefix,
    text,
    args,
    command
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
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
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
        id: ".setumur 30",
        title: "",
        description: "Set umur 30"
      },
      {
        header: "29 Tahun".toUpperCase(),
        id: ".setumur 29",
        title: "",
        description: "Set umur 29"
    },
    {
        header: "28 Tahun".toUpperCase(),
        id: ".setumur 28",
        title: "",
        description: "Set umur 28"
    },
    {
        header: "27 Tahun".toUpperCase(),
        id: ".setumur 27",
        title: "",
        description: "Set umur 27"
    },
    {
        header: "26 Tahun".toUpperCase(),
        id: ".setumur 26",
        title: "",
        description: "Set umur 26"
    },
    {
        header: "25 Tahun".toUpperCase(),
        id: ".setumur 25",
        title: "",
        description: "Set umur 25"
    },
    {
        header: "24 Tahun".toUpperCase(),
        id: ".setumur 24",
        title: "",
        description: "Set umur 24"
    },
    {
        header: "23 Tahun".toUpperCase(),
        id: ".setumur 23",
        title: "",
        description: "Set umur 23"
    },
    {
        header: "22 Tahun".toUpperCase(),
        id: ".setumur 22",
        title: "",
        description: "Set umur 22"
    },
    {
        header: "21 Tahun".toUpperCase(),
        id: ".setumur 21",
        title: "",
        description: "Set umur 21"
    },
    {
        header: "20 Tahun".toUpperCase(),
        id: ".setumur 20",
        title: "",
        description: "Set umur 20"
    },
    {
        header: "19 Tahun".toUpperCase(),
        id: ".setumur 19",
        title: "",
        description: "Set umur 19"
    },
    {
        header: "18 Tahun".toUpperCase(),
        id: ".setumur 18",
        title: "",
        description: "Set umur 18"
    },
    {
        header: "17 Tahun".toUpperCase(),
        id: ".setumur 17",
        title: "",
        description: "Set umur 17"
    },
    {
        header: "16 Tahun".toUpperCase(),
        id: ".setumur 16",
        title: "",
        description: "Set umur 16"
    },
    {
        header: "15 Tahun".toUpperCase(),
        id: ".setumur 15",
        title: "",
        description: "Set umur 15"
    },
    {
        header: "14 Tahun".toUpperCase(),
        id: ".setumur 14",
        title: "",
        description: "Set umur 14"
    },
    {
        header: "13 Tahun".toUpperCase(),
        id: ".setumur 13",
        title: "",
        description: "Set umur 13"
    },
    {
        header: "12 Tahun".toUpperCase(),
        id: ".setumur 12",
        title: "",
        description: "Set umur 12"
    },
    {
        header: "11 Tahun".toUpperCase(),
        id: ".setumur 11",
        title: "",
        description: "Set umur 11"
    },
    {
        header: "10 Tahun".toUpperCase(),
        id: ".setumur 10",
        title: "",
        description: "Set umur 10"
    },
    {
        header: "9 Tahun".toUpperCase(),
        id: ".setumur 9",
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


const total = Math.floor(isNumber(args[0]) ? Math.min(Math.max(parseInt(args[0]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
if (!text) return conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
if (text > 31) return conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
    var user = global.db.data.users[m.sender]
    if (user.age == user.age) {
        user.age = text
        m.reply(`Selamat berhasil set umur menjadi *${text} Tahun*`)  
     }
}

handler.help = ['setumur']
handler.tags = ['main']
handler.command = /^(setumur|setage)$/i
handler.register = true
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}

  