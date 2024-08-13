const moneymins = 1
import moment from 'moment-timezone';
let handler = async (m, { conn, command, args }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    readmore: readMore
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['ᴩᴀʜɪɴɢ', 'ᴩᴏɴ', 'ᴡᴀɢᴇ', 'ᴋʟɪᴡᴏɴ', 'ʟᴇɢɪ'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let ezatime = `${week} ${date}`
    let user = global.db.data.users[m.sender]
let pp = pickRandom(hwaifu)
  let count = command.replace(/^pull|tarik/i, '')
    if (user.atm == 0) return conn.reply(m.chat, 'kamu belum mempuyai atm !\nketik *#craft atm* untuk membuat atm', m, { contextInfo: { externalAdReply: {title: wm, body: ezatime, sourceUrl: yt, thumbnailUrl: pp }}})
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / moneymins) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].bank >= moneymins * count) {
    global.db.data.users[m.sender].bank -= moneymins * count
    global.db.data.users[m.sender].uang += count
    conn.reply(m.chat, `-${moneymins * count} ATM\n+ ${count} Money`, m, { contextInfo: { externalAdReply: {title: wm, body: ezatime, sourceUrl: yt, thumbnailUrl: pp }}})
  } else conn.reply(m.chat, `Kamu Tidak Mempunyai Uang ${count} Di ATM!!`, m, { contextInfo: { externalAdReply: {title: wm, body: ezatime, sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.help = ['pull <jumlah>', 'pullall']
handler.tags = ['rpg']
handler.command = /^pull([0-9]+)|pull|pullall|tarik|tarikall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.rpg = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}