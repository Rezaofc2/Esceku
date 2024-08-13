import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Aku tidak ada di grup itu :('
    if (!me.admin) throw 'Aku bukan admin T_T'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link|linkgc|linkgroup|linkgrup$/i


export default handler


/*const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs';


let handler = async (m, { conn }) => {
  try {
  let alok = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            itemCoun : 99999999,
                            surface : 99999999,
                            message: 'T O U R L',
                            orderTitle: 'H A L O',
                            thumbnail: fs.readFileSync('./thumbnail.jpg'),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
                      const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
  let link = `https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat)
   let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: `*Link Group:* ${await conn.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat)
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
            "name": 'cta_copy',
                        "buttonParamsJson" : JSON.stringify({
                            display_text: 'SALIN',
                            copy_code: `https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat)
                        })
              },
            {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"INFO GROUP\",\"id\":\".infogc\"}"
              },
          ],
        })
      })
    }
  }
}, { quoted: fkontak });

return await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
  } catch {
    conn.reply(m.chat, `Jadikan @${conn.user.jid.split('@')[0]} sebagai admin untuk menggunakan perintah ini!`, m, { mentions: [conn.user.jid] })
  }
}
handler.help = ['linkgrup']
handler.tags = ['group']
handler.command = /^linkgc|linkgroup|linkgrup|link$/i

handler.group = true

export default handler*/