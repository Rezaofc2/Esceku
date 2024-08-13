const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default
import uploadImage from '../lib/uploadImage.js';
var handler = async (m, { conn, text, usedPrefix, command } ) => {

const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || "";
if(!text) throw 'teksnya?'
  if (!mime) {
    return conn.reply(m.chat, `Example: reply/send image with caption *${usedPrefix + command}*`, m);
  }
  const image = await uploadImage(await q.download());
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
 let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])

conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
 for (let id of groups) {
 let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)

let media = await prepareWAMessageMedia({ image: { url: image } }, { upload: conn.waUploadToServer });
  let msg = generateWAMessageFromContent(id, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: text
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: wm
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...media,
          title: null,
          subtitle: "rysbot",
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": JSON.stringify({
                display_text: "Hᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ 📞",
                url: "https://wa.me/6289606790112",
                merchant_url: "https://wa.me/6289606790112"
              })
            },
         {
              "name": "cta_url",
              "buttonParamsJson": JSON.stringify({
                display_text: "Iɴғᴏ ʙᴏᴛ 🌐",
                url: "https://whatsapp.com/channel/0029VaFGs8U6RGJDSDeYmC2S",
                merchant_url: "https://whatsapp.com/channel/0029VaFGs8U6RGJDSDeYmC2S"
              })
            },
          ],
        })
      })
    }
  }
}, {});

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
}
await m.reply('*[ D O N E ! ]*')
}
handler.command = ['bcgcbutton','bcgcb']
handler.tags = ['owner']
handler.help = ['bcgcbutton </text>','bcgcb </text>']
// Follow: https://whatsapp.com/channel/0029VajfpGV0AgWEdZah4K07
handler.rowner = true

export default handler