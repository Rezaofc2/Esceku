let handler = async (m, {
    conn,
    usedPrefix,
    participants
}) => {
let serigala = global.db.data.users[m.sender].serigala
if (serigala == 0) return m.reply('*Kamu belum memiliki Pet serigala*')
    conn.level = global.db.data.users[m.sender]
    conn.fightserigala = conn.fightserigala ? conn.fightserigala : {}
    const delay = time => new Promise(res => setTimeout(res, time));

    if (typeof conn.fightserigala[m.sender] != "undefined" && conn.fightserigala[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle karena arena yg kamu miliki sedang kamu pakai .*`)
let gambar = pickRandom(hwaifu)
    let users = participants.map(u => u.id)
    var lawan
    lawan = users[Math.floor(users.length * Math.random())]
    while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
    }

    let lamaPertarungan = Acakin(8, 20)

    let h = `*Pet 🐺 Kamu* (🐺Serigala ${global.db.data.users[m.sender].serigala}) menantang serigalanya *@${lawan.split`@`[0]}* (🐺 serigala ${global.db.data.users[lawan].serigala}) lagi kelahi rebutin bini.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`
    conn.reply(m.chat, h, m, { contextInfo: { mentionedJid: conn.parseMention(h),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})

    conn.fightserigala[m.sender] = true

    await delay(1000 * 60 * lamaPertarungan)

    let alasanKalah = ['Naikin lagi levelnya😐', 'Cupu', 'Kurang hebat', 'Ampas Petnya', 'Pet gembel']
    let alasanMenang = ['Hebat', 'Pro', 'Ganas Pet', 'Legenda Pet', 'Sangat Pro', 'Rajin Ngasi Makan Pet']

    let kesempatan = []
    for (let i = 0; i < global.db.data.users[m.sender].serigala; i++) kesempatan.push(m.sender)
    for (let i = 0; i < global.db.data.users[lawan].serigala; i++) kesempatan.push(lawan)

    let pointPemain = 0
    let pointLawan = 0
    for (let i = 0; i < 10; i++) {
       let unggul = Acakin(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
    }

    if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 20000
        global.db.data.users[m.sender].uang += hadiah
        global.db.data.users[m.sender].tiketcoin += 1
        let o = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Pet 🐺 Kamu* (serigala ${global.db.data.users[m.sender].serigala}) MENANG melawan 🐺 serigalanya *@${lawan.split`@`[0]}* (serigala ${global.db.data.users[lawan].serigala}) karena serigala🐺kamu ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nHadiah Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`
        conn.reply(m.chat, o, m, { contextInfo: { mentionedJid: conn.parseMention(o),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
    } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        global.db.data.users[m.sender].money -= denda
        global.db.data.users[m.sender].tiketcoin += 1
        let y = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\n*Pet🐺Kamu* (serigala ${global.db.data.users[m.sender].serigala}) KALAH melawan 🐺serigalanya *@${lawan.split`@`[0]}* (serigala ${global.db.data.users[lawan].serigala}) karena pet kamu ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nUang kamu berkurang Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`
        conn.reply(m.chat, y, m, { contextInfo: { mentionedJid: conn.parseMention(y),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
    } else {
        let q = `*@${m.sender.split`@`[0]}* [${pointPemain * 10}] - [${pointLawan * 10}] *@${lawan.split`@`[0]}*\n\nHasil imbang kak, ga dapet apa apa 😂`
        conn.reply(m.chat, q, m, { contextInfo: { mentionedJid: conn.parseMention(q),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
    }

    delete conn.fightserigala[m.sender]
}
handler.help = ['fightserigala']
handler.tags = ['game']
handler.command = /^(fightserigala)$/i
handler.limit = true
handler.group = true
handler.rpg = true
export default handler

function Acakin(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}