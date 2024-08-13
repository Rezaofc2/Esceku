let handler = async (m, { conn, usedPrefix, participants }) => {

let centaur = global.db.data.users[m.sender].centaur
if (centaur == 0) return m.reply('*Kamu belum memiliki Pet centaur*')
conn.level = global.db.data.users[m.sender]
  conn.fightcentaur = conn.fightcentaur ? conn.fightcentaur : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fightcentaur[m.sender] != "undefined" && conn.fightcentaur[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight pet mu yg lain.*`)
let gambar = pickRandom(hwaifu)
  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(8,20)

 let g = `*Pet Kamu* (🐴centaur ${global.db.data.users[m.sender].centaur}) ⚔️menantang 🐴centaurnya *@${lawan.split`@`[0]}* (🐴centaur ${global.db.data.users[lawan].centaur}) lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`
   conn.reply(m.chat, g, m, { contextInfo: { mentionedJid: conn.parseMention(g),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})

  conn.fightcentaur[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (let i=0;i<global.db.data.users[m.sender].centaur;i++) kesempatan.push(m.sender)
  for (let i=0;i<global.db.data.users[lawan].centaur;i++) kesempatan.push(lawan)

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
   let h = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Pet🐴Kamu* (centaur ${global.db.data.users[m.sender].centaur}) MENANG melawan 🐴centaurnya *@${lawan.split`@`[0]}* (centaur ${global.db.data.users[lawan].centaur}) karena centaur🐴kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`
     conn.reply(m.chat, h, m, { contextInfo: { mentionedJid: conn.parseMention(h),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].uang -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    let y = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Pet🐴Kamu* (centaur ${global.db.data.users[m.sender].centaur}) KALAH melawan 🐴centaurnya *@${lawan.split`@`[0]}* (centaur ${global.db.data.users[lawan].centaur}) karena pet kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`
      conn.reply(m.chat, y, m, { contextInfo: { mentionedJid: conn.parseMention(y),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else {
    let q = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\nHasil imbang kak, ga dapet apa apa 😂`
    conn.reply(m.chat, q, m, { contextInfo: { mentionedJid: conn.parseMention(q),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }

  delete conn.fightcentaur[m.sender]
}
handler.help = ['fightcentaur']
handler.tags = ['game']
handler.command = /^(fightcentaur)$/i
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