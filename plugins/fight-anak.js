let handler = async (m, { conn, usedPrefix, participants }) => {

let anak = global.db.data.users[m.sender].anak
if (anak == 0) return m.reply('*Kamu belum memiliki anak*')
conn.level = global.db.data.users[m.sender]
  conn.fightanak = conn.fightanak ? conn.fightanak : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fightanak[m.sender] != "undefined" && conn.fightanak[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight anak mu yg lain.*`)
let gambar = pickRandom(hwaifu)
  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(8,20)

  let y = `*Anak Kamu* (👶Anak ${global.db.data.users[m.sender].anak}) ⚔️menantang 👶Anak *@${lawan.split`@`[0]}* (👶Anak ${global.db.data.users[lawan].anak}) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`
  conn.reply(m.chat, y, m, { contextInfo: { mentionedJid: conn.parseMention(y),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})

  conn.fightanak[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas anaknya',' anakgembel']
  let alasanMenang = ['Hebat','Pro','Ganas','Legenda','Sangat Pro','Rajin Ngasi Makan Anak']

  let kesempatan = []
    for (let i = 0; i < global.db.data.users[m.sender].anak; i++) kesempatan.push(m.sender)
    for (let i = 0; i < global.db.data.users[lawan].anak; i++) kesempatan.push(lawan)

    let pointPemain = 0
    let pointLawan = 0
    for (let i = 0; i < 10; i++) {
        let unggul = getRandom(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
    }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.data.users[m.sender].uang += hadiah
    global.db.data.users[m.sender].tiketcoin += 1
    let o = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*👶Anak Kamu* (Anak ${global.db.data.users[m.sender].anak}) MENANG melawan 👶anaknya *@${lawan.split`@`[0]}* (anak ${global.db.data.users[lawan].anak}) karena anak👶kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`
    conn.reply(m.chat, o, m, { contextInfo: { mentionedJid: conn.parseMention(o),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    let u = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*👶Anak Kamu* (anak ${global.db.data.users[m.sender].anak}) KALAH melawan 👶Anak *@${lawan.split`@`[0]}* (anak ${global.db.data.users[lawan].anak}) karena anak kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`
    conn.reply(m.chat, u, m, { contextInfo: { mentionedJid: conn.parseMention(u),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else {
    let q = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\nHasil imbang kak, ga dapet apa apa 😂`
    conn.reply(m.chat, q, m, { contextInfo: { mentionedJid: conn.parseMention(q),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }

  delete conn.fightanak[m.sender]
}
handler.help = ['fightanak']
handler.tags = ['game']
handler.command = /^(fightanak)$/i
handler.limit = true
handler.group = true
handler.rpg = true

export default handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}