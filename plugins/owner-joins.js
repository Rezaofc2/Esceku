let handler = async (m, { conn, text, usedPrefix, args, participants }) => {
  var time = db.data.users[m.sender].lastjoin + 86400000
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  var delay = time => new Promise(res => setTimeout(res, time))
 
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6289606790112@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  var [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `Link nya mana?` 
  if (!code) throw `Link tidak valid!`
  if (!args[1]) throw `berapa hari?`
  if (isNaN(args[1])) throw `Hanya angka, mewakili hari!`
  var anubot = owner[0]
  m.reply(`Tunggu 3 detik bot akan join`)
  await delay(3000)
  try {
  var res = await conn.groupAcceptInvite(code)
  var b = await conn.groupMetadata(res)
  var d = b.participants.map(v => v.id)
  var member = d.toString()
  var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
  var jumlahHari = 86400000 * args[1]
  var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
  else global.db.data.chats[res].expired = now + jumlahHari
  if (e.length) await m.reply(`Sukses invite bot ke group\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`)
     if (!e.length) await m.reply(`Sukses invite bot ke group\n\n${await conn.getName(res)}\n\nBot akan keluar secara otomatis setelah *${msToDate(global.db.data.chats[res].expired - now)}*`)
     let mes = `Hi semuanya saya adalah *${info.namebot}*, saya akan menjadi asisten group ini selama *${msToDate(global.db.data.chats[res].expired - now)}*, silahkan nikmati fitur yang sudah kami sediakan dan jangan salah gunakan fitur bot, tetep baca *.rules* kami sebelum menggunakan bot ini
        
Ketik *.menu* untuk melihat fitur bot`
     let pp = pickRandom(hwaifu)
await conn.reply(res, mes, fkonn, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: pp }}})
    } catch (err) {
  console.error(err)
  throw "Error"
}
}
handler.help = ['joins <link> <day>']
handler.tags = ['owner']
handler.command = /^joins(ewa)?$/i

handler.owner = true

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " hari"
    // +minutes+":"+sec;
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}