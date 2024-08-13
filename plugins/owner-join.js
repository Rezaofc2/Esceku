let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
  var name = m.sender
var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6289606790112@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`Berhasil join grup`)
    let mes = `Hi semuanya saya adalah *${info.namebot}*, saya akan menjadi asisten group ini, silahkan nikmati fitur yang sudah kami sediakan dan jangan salah gunakan fitur bot, tetep baca *.rules* kami sebelum menggunakan bot ini
        
Ketik *.menu* untuk melihat fitur bot`
     let pp = pickRandom(hwaifu)
await conn.reply(res, mes, fkonn, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.help = ['join <Link Grup>']
handler.tags = ['owner']

handler.command = /^join$/i

handler.owner = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}