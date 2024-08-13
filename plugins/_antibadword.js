const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = (await import('@adiwajshing/baileys')).default

import fetch from 'node-fetch';
import fs from 'fs';

let badwordRegex = /(anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|go?blo?(k|g)|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|blo?(k|g)|mmk|kntl|kontol|kontl|ajg|anjg|anjing|Bangsat|bngst|puki|kon|anj|ytm|yatm|ytim|taek|bacot|bct|bact|bcot|bngsat|ktl|ppk|fuck|suki)$/i
export async function before(m, { isBotAdmin, isAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let isBadword = badwordRegex.exec(m.text)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
    if (chat.antiBadword && isBadword && m.isGroup) {
    if (isAdmin) return
        global.db.data.users[m.sender].warning += 1
       
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
        "deviceListMetadata": {},
        "deviceListMetadataVersion": 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: null
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: `Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          ...null,
          title: `${user.warning >= 5 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'}

あ Warning: ${global.db.data.users[m.sender].warning} / 5

[❗] Jika warning mencapai 5 Kamu akan dikeluarkan dari group`,
          subtitle: "EzaBot",
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
          {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"MAAF\",\"id\":\".MAAF\"}"
              },
          ],
        })
      })
    }
  }
}, { quoted: m});
await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
        if (global.db.data.users[m.sender].warning >= 5) {
            global.db.data.users[m.sender].warning = 0
            await conn.sendFile(m.chat, fs.readFileSync('./lib/sticker/kamu akan ku kick.webp'), 'sticker.webp', '', m, null, {
  fileLength: '10000',
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      mediaUrl: yt,
      mediaType: 1,
      description: '',
      title: '',
      body: wm,
      thumbnail: await (await fetch (pp)).buffer(),
      sourceUrl: yt,
    }
  }
})
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}