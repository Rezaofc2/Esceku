let handler = async (m, { conn, usedPrefix, participants }) => {

let naga = global.db.data.users[m.sender].naga
if (naga == 0) return m.reply('*Kamu belum memiliki Pet naga*')
conn.level = global.db.data.users[m.sender]
  conn.fightnaga = conn.fightnaga ? conn.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fightnaga[m.sender] != "undefined" && conn.fightnaga[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)
let gambar = pickRandom(hwaifu)
  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(8,20)

  let h = `*Pet Kamu* (🐉 naga ${global.db.data.users[m.sender].naga}) ⚔️menantang 🐉 naganya *@${lawan.split`@`[0]}* (🐉naga ${global.db.data.users[lawan].naga}) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`
    conn.reply(m.chat, h, m, { contextInfo: { mentionedJid: conn.parseMention(h),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})

  conn.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (let i=0;i<global.db.data.users[m.sender].naga;i++) kesempatan.push(m.sender)
  for (let i=0;i<global.db.data.users[lawan].naga;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (let i=0;i<10;i++){
    let unggul = getRandom(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.data.users[m.sender].uang += hadiah
    global.db.data.users[m.sender].tiketcoin += 1
    let o = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Pet🐉Kamu* (naga ${global.db.data.users[m.sender].naga}) MENANG melawan 🐉naganya *@${lawan.split`@`[0]}* (naga ${global.db.data.users[lawan].naga}) karena naga🐉kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`
      conn.reply(m.chat, o, m, { contextInfo: { mentionedJid: conn.parseMention(o),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].uang -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    let y = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Pet🐉Kamu* (naga ${global.db.data.users[m.sender].centaur}) KALAH melawan 🐉naganya *@${lawan.split`@`[0]}* (naga ${global.db.data.users[lawan].naga}) karena pet kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`
      conn.reply(m.chat, y, m, { contextInfo: { mentionedJid: conn.parseMention(y),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else {
    let q = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\nHasil imbang kak, ga dapet apa apa 😂`
    conn.reply(m.chat, q, m, { contextInfo: { mentionedJid: conn.parseMention(q),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }

  delete conn.fightnaga[m.sender]
}
handler.help = ['fightnaga']
handler.tags = ['game']
handler.command = /^(fightnaga)$/i
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