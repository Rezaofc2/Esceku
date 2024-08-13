import moment from 'moment-timezone'
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, {
    conn,
    usedPrefix,
    command,
    isOwner
}) => {
let pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
let fkontak = {
            key: {
                participant: `13135550002@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `Bidoata Owner`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ditzGans,;;;\nFN: Hai Kak!!!\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': pplu,
                    thumbnail: pplu,
                    sendEphemeral: true
                }   
            }
        }
let teksbio = `${htki} *BIODATA* ${htka}
*💌 Nama* : RezaOffc
*✉️ Nama RL* : Reza
*♂️ Gender* : Boys
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : Private 🥶
*🎨 Umur* : PRIVATE
*🧮 Kelas* : PRIVATE
*🧩 Hobby* : MAIN EPEP
*💬 Sifat* : ASIK KALAU DAH KENAL
*🗺️ Tinggal* : Jawa Timur, Ponorogo
*❤️ Waifu* : Fenrys, Elaina, Alya
*👥  Status* : Minikah

*📷 YOUTUBE* : https://youtube.com/@MrReza18
•·–––––––––––––––––––––––·•
`
let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'
const sections = [{
title: "INFORMASI OWNER",
      rows: [ {
        header: "📱 • Nomor".toUpperCase(),
        id: ".owner",
        title: "",
        description: "menampilkan owner"
      },
      {
        header: "🎨 • Thankyuu".toUpperCase(),
        id: ".tqto",
        title: "",
        description: "menampilkan list orng yg membantu owner"
   }, ]
    }, {
title: "•·––––––– SUPPORT ME –––––––·•",
      rows: [ {
        header: "💹 • Donasi".toUpperCase(),
        id: ".donasi",
        title: "",
        description: "bantu owner"
      },
      {
        header: "🔖 • Sewa".toUpperCase(),
        id: ".sewa",
        title: "",
        description: "harga sewa bot"
      },
     {
        header: "🌟 • Buy Premium".toUpperCase(),
        id: ".buyprem",
        title: "",
        description: "harga premium bot"
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
          text: teksbio
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: teks
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...null,
          title: "MASIH PEMULA PUH 😷👍",
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
await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
}
handler.premium = false
handler.command = /^(biodata)$/i
handler.register = true
handler.private = true
export default handler

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}