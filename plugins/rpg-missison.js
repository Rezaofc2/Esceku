import { promises, readFileSync } from "fs";
let misi = JSON.parse(readFileSync("./lib/misi.json"));
async function handler(m, { conn, args, text , usedPrefix, command }) {
  //conn.mission = conn.mission || {}
  conn.mission = conn.mission ? conn.mission : {}
  if(m.sender in conn.mission) return conn.reply(m.chat, "Kamu masih melakukan misi, tunggu sampai selesai!!", m)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
  try {
    let json = misi[Math.floor(Math.random() * misi.length)] //get misi
    const cooldown = 5 * (1000 * 60) //coldown timer second
    let user = global.db.data.users[m.sender] //Get db user
    
    if ( user.healt == 0 ) return conn.reply(m.chat, `your healt is less than 100`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})

    if(typeof user.lastmisi != "number") global.db.data.users[m.sender].lastmisi = 0
    if(typeof user.exp != "number") global.db.data.users[m.sender].exp = 0
    if(typeof user.berlian != "number") global.db.data.users[m.sender].berlian = 0

    let timers = (cooldown - (new Date - user.lastmisi))
    if(new Date - user.lastmisi <= cooldown) return conn.reply(m.chat, `wait for 🕐${clockString(timers)}`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
     if (!user.skill) return conn.reply(m.chat, "Anda belum mempunyai skill\nKetik *#pilihskill* untuk mendapatkan skill", m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
    if(!(m.sender in conn.mission)) {
      conn.mission[m.sender] = {
        sender: m.sender,
        timeout: setTimeout(() => {m.reply('timed out');delete conn.mission[m.sender]}, 60000),
        json
      }
      //Caption
      let caption = `*MISI TELAH DIBERIKAN KEPADA PEMBURU! (BETA)*
      
*RANK:* ${json.rank}
*MISI:* ${json.misii}
*HADIAH:* Exp ${json.exp} Berlian ${json.berlian}
*TITLE:* ${json.title}

Ketik *terima* Untuk Menerima
Ketik *tolak* Untuk Membatalkan`
      return conn.reply(m.chat, caption, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}}) //SendMessage
    }
  } catch (e) {
    console.error(e)
    if(m.sender in conn.mission) {
      let { timeout } = conn.mission[m.sender]
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      conn.reply(m.chat, 'Rejected', m)
    }
  }
}

handler.before = async m => {
  //conn.mission = conn.mission || {}
  conn.mission = conn.mission ? conn.mission : {}
  if(!(m.sender in conn.mission)) return
  if(m.isBaileys) return

  let { timeout, json } = conn.mission[m.sender]
  let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
  const cooldown = 5 * (1000 * 60) //coldown timer second
  let user = global.db.data.users[m.sender] //Get db user

  let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText : m.text ? m.text : '').toLowerCase()
  if(txt != "terima" && txt != "tolak" && txt != "gas") return

  if(typeof user.lastmisi != "number") global.db.data.users[m.sender].lastmisi = 0
  if(typeof user.exp != "number") global.db.data.users[m.sender].exp = 0
  if(typeof user.berlian != "number") global.db.data.users[m.sender].berlian = 0

  let timers = (cooldown - (new Date - user.lastmisi))
  if(new Date - user.lastmisi <= cooldown) return conn.reply(m.chat, `Wait for 🕐${clockString(timers)}`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})

  let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
  let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
  let Aku = (randomaku * 1)
  let Kamu = (randomkamu * 1)
  let aud = ["Diserang", "Dibokong", "di tangkap", "di perkosa","terbunuh"]
  let aui = aud[Math.floor(Math.random() * aud.length)]

  //Gacha systemBeta
  try {
    if(/^accept|terima?$/i.test(txt)) {
      if(Aku > Kamu) {
        var cpt = `Berhasil Menyelesaikan 📰misi ${json.misii}`
        conn.reply(m.chat, `${json.title ? `kamu mendapatkan title ${json.title}`: ""}`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
        conn.reply(m.chat, cpt, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
        user.exp += json.exp
        user.berlian += json.berlian
        user.title = json.title
        user.misi += json.misii
      } else if(Aku < Kamu) {
        var flr = `Gagal Menyelesaikan 📰Misi ${json.misii} Dikarenakan ${aui} `
        conn.reply(m.chat, flr, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
      } else {
        var cpe = `Berhasil Menyelesaikan 📰misi ${json.misii}`
        conn.reply(m.chat, `${json.title ? `Kamu mendapatkan title ${json.title}`: ""}`, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
        conn.reply(m.chat, cpe, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
        user.exp += json.exp
        user.berlian += json.berlian
        user.title = json.title
        user.misi += json.misii
      }
      user.lastmisi = new Date * 1
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      return !0
    } else if (/^cancel|tolak?$/i.test(txt)) {
      clearTimeout(timeout)
      delete conn.mission[m.sender]
      conn.reply(m.chat, 'Canceled', m)
      return !0
    }
  } catch (e) {
    clearTimeout(timeout)
    delete conn.mission[m.sender]
    //if (moneyDulu > (user.uang * 1)) user.uang = moneyDulu * 1
    conn.reply(m.chat,  'Error saat pengambilan misi (Rejected)', m)
    console.log("\n".repeat(3))
    console.log(e.stack)
    return !0
  } finally {
    clearTimeout(timeout)
    delete conn.mission[m.sender]
    return !0
  }
}

handler.help = ['mission']
handler.tags = ['rpg']
handler.command = /^(m(isi)?(ission)?)$/i
handler.rpg = true
export default handler


/**
 * Detect if thats number
 * @param {Number} x
 * @returns Boolean
 */
function number(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}

/**
 * Random pick from Array
 * @param {Array} list
 * @returns Any
 */
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Convert milliseconds to clock string
 * @param {Number} ms
 * @returns String
 */
 function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
