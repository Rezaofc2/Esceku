import fetch from 'node-fetch'
const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default
import { googleImage } from '@bochilteam/scraper'
var handler = async (m, { conn, usedPrefix, command }) => {
    if (!command) throw `Use example ${command} anu`
    m.reply(wait)
    try {
    const res = await googleImage(`karakter anime ${command}`)
    let image = res.getRandom()
    let link = image
/*let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Nih Foto ${command}nya`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: link } }, { upload: conn.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
                "name": "quick_reply",
                "buttonParamsJson": `{\"display_text\":\"Next Image ${command}\",\"id\":\".${command}\"}`
              }, 
            ],
          })
       })
    }
  }
}, { quoted: m })

return await conn.relayMessage(m.chat, msgs.message, {})*/
conn.sendFile(m.chat, link, 'pp.jpg', `Nih Foto ${command}nya`, m, false, { contextInfo: { mentionedJid: conn.parseMention(`Nih Foto ${command}nya`) }})
} catch (e) {
conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}}
handler.help = ['bocchi','ayano','chisato','umaru','kaneki','megumin','yotsuba','shinomiya','yumeko','tejina','chiho','itori','kurumi','eba','ana','miku','shota','loli','ikuyo','kaguya','rlas','takina','onesan', 'shikimori','anya','nobita','fenrys','kanna']
handler.command = /^(chisato|ayano|bocchi|umaru|keneki|megumin|yotsuba|shinomiya|yumeko|tejina|chiho|itori|kurumi|eba|ana|miku|isuzu|shina|shota|loli|ikuyo|kaguya|rlas|takina|shikimori|onesan|anya|nobita|fenrys|kanna)$/i
handler.tags = ['anime']
handler.limit = true

export default handler