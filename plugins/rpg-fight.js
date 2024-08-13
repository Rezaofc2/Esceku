let handler = async (m, { conn, usedPrefix, participants }) => {

let armor = global.db.data.users[m.sender].armor
if (armor == 0) return m.reply('*Kamu belum memiliki armor*\n_Ketik #craft armor untuk membuat armor_')
conn.level = global.db.data.users[m.sender]
  conn.fight = conn.fight ? conn.fight : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle ⚔️ karena Arena yang kamu miliki dipakai untuk fight yg lain.*`)

let gambar = pickRandom(hwaifu)
  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(8,20)

  let h = `*Kamu* (armor ${global.db.data.users[m.sender].armor}) ⚔️menantang *@${lawan.split`@`[0]}* (armor ${global.db.data.users[lawan].armor}) anda lagi berkelahi.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`
    conn.reply(m.chat, h, m, { contextInfo: { mentionedJid: conn.parseMention(h),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})

  conn.fight[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['armor kamu rendahan','Cupu','rendahan','Ampas','armor gembel']
  let alasanMenang = ['armor Hebat','armor gg','armor dewa','Legenda armor']

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
    let y = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Kamu* (armor ${global.db.data.users[m.sender].armor}) MENANG melawan *@${lawan.split`@`[0]}* (armor ${global.db.data.users[lawan].armor}) karena armor kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`
      conn.reply(m.chat, y, m, { contextInfo: { mentionedJid: conn.parseMention(y),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].uang -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    let g = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Kamu* (Armor ${global.db.data.users[m.sender].armor}) KALAH melawan ⚔️ *@${lawan.split`@`[0]}* (armor ${global.db.data.users[lawan].armor}) karena armor kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`
      conn.reply(m.chat, g, m, { contextInfo: { mentionedJid: conn.parseMention(g),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }else {
   let q = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\nHasil imbang kak, ga dapet apa apa 😂`
   conn.reply(m.chat, q, m, { contextInfo: { mentionedJid: conn.parseMention(q),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
  }

  delete conn.fight[m.sender]
}
handler.help = ['fight']
handler.tags = ['game']
handler.command = /^(fight)$/i
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