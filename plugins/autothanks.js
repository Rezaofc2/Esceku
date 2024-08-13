let handler = async (m, { conn }) => {
  let thanksWords = ['terima kasih', 'thanks', 'makasi', 'makasih', 'thank you', 'tq', 'ty']
  let isThanks = false
  thanksWords.forEach((thanksWord) => {
    if (m.text.toLowerCase().includes(thanksWord)) {
      isThanks = true
    }
  })
  if (isThanks) {
    let replyMessage = "Terima kasih kembali!"
    conn.reply(m.chat, replyMessage, m, { contextInfo: {
    forwardingScore: 9999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: info.channel,
      serverMessageId: 101,
      newsletterName: wm
    }}})
  }
}

handler.customPrefix = /^((thanks?|makasi|makasih|hatur nuhun|terima kasih|thank you|tq|ty)(\s|$))/i
handler.command = new RegExp
export default handler

