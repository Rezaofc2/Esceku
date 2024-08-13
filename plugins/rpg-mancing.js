let handler = async (m, {
    conn,
    command,
    args,
    usedPrefix
}) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let pengguna = global.db.data.users[m.sender]
    let pancingan = pengguna.pancingan
    let pemancing = m.name
    let umpan = pengguna.umpan
    let type = (args[0] || '').toLowerCase()
    let pp = pickRandom(hwaifu)
    const list = `⬡ contoh command↓
${usedPrefix + command} easy

⬡ 🎣 *Mancing Easy*
⬡ 🎣 *Mancing Normal*
⬡ 🎣 *Mancing Hard*`

    //
    try {
        if (/fishing|mancing/i.test(command)) {
            switch (type) {
                case 'easy':
                    let __timers1 = (new Date - global.db.data.users[m.sender].lastmancing)
  let _timers1 = (28800000 - __timers1) 
  let timers1 = clockString(_timers1)
  if (new Date - global.db.data.users[m.sender].lastmancing > 28800000){
                        if (pengguna.pancingan >= 1) {
                            if (pengguna.umpan >= 1) {
                                let mcing1 = `${Math.floor(Math.random() * 10)}`
                                let mcing2 = `${Math.floor(Math.random() * 10)}`
                                let mcing3 = `${Math.floor(Math.random() * 10)}`
                                let mcing4 = `${Math.floor(Math.random() * 10)}`
                                let mcing5 = `${Math.floor(Math.random() * 10)}`
                                let mcing6 = `${Math.floor(Math.random() * 10)}`
                                let mcing7 = `${Math.floor(Math.random() * 10)}`
                                let mcing8 = `${Math.floor(Math.random() * 10)}`
                                let mcing9 = `${Math.floor(Math.random() * 10)}`
                                let mcing10 = `${Math.floor(Math.random() * 10)}`
                                let mcing11 = `${Math.floor(Math.random() * 10)}`
                                let mcing12 = `${Math.floor(Math.random() * 10)}`
                                let mcing13 = `${Math.floor(Math.random() * 50)}`

                                let rbrb1 = (mcing1 * 1)
                                let rbrb2 = (mcing2 * 1)
                                let rbrb3 = (mcing3 * 1)
                                let rbrb4 = (mcing4 * 1)
                                let rbrb5 = (mcing5 * 1)
                                let rbrb6 = (mcing6 * 1)
                                let rbrb7 = (mcing7 * 1)
                                let rbrb8 = (mcing8 * 1)
                                let rbrb9 = (mcing9 * 1)
                                let rbrb10 = (mcing10 * 1)
                                let rbrb11 = (mcing11 * 1)
                                let rbrb12 = (mcing12 * 1)
                                let rbrb13 = (mcing13 * 1)

                                let zero1 = `${rbrb1}`
                                let zero2 = `${rbrb2}`
                                let zero3 = `${rbrb3}`
                                let zero4 = `${rbrb4}`
                                let zero5 = `${rbrb5}`
                                let zero6 = `${rbrb6}`
                                let zero7 = `${rbrb7}`
                                let zero8 = `${rbrb8}`
                                let zero9 = `${rbrb9}`
                                let zero10 = `${rbrb10}`
                                let zero11 = `${rbrb11}`
                                let zero12 = `${rbrb12}`

                                let hsl = `
 *🦀 = [ ${zero2} ]*        *🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*        *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*       *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*        *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*        *🦈 = [ ${zero9} ]*
 *🐡 = [ ${zero5} ]*        *🐋 = [ ${zero1} ]*
  
+1 Tiketcoin
`.trim()
                                pengguna.paus += rbrb1
                                pengguna.kepiting += rbrb2
                                pengguna.gurita += rbrb3
                                pengguna.cumi += rbrb4
                                pengguna.buntal += rbrb5
                                pengguna.dory += rbrb6
                                pengguna.lumba += rbrb7
                                pengguna.lobster += rbrb8
                                pengguna.hiu += rbrb9
                                pengguna.udang += rbrb10
                                pengguna.ikan += rbrb11
                                pengguna.orca += rbrb12
                                pengguna.tiketcoin += 1
                                pengguna.umpan -= rbrb13

                                setTimeout(() => {
                                    conn.reply(m.chat, `${pemancing} Yuk mancing mania level easy lagi`, m)
                                }, 28800000)
                                setTimeout(() => {
                                    conn.sendMessage(m.chat, {
text: hsl,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `MANCING EASY`,
thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/mancing.jpg",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
                                }, 12000)
                                  setTimeout(() => {
                                    conn.reply(m.chat, `${pemancing} Sedang Memancing...`, m)
                                }, 0)
                                global.db.data.users[m.sender].lastmancing = new Date * 1
                            } else conn.reply(m.chat, 'Minimal umpan kamu *100* untuk memancing level mudah', m)
                        } else conn.reply(m.chat, `kamu tidak mempunyai pancingan\nsilahkan ketik *#craft pancingan* untuk membuat pancingan`, m)
                    } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar* ${timers1}\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                    break
                case 'normal':
             let __timers2 = (new Date - global.db.data.users[m.sender].lastmancing2)
  let _timers2 = (28800000 - __timers2) 
  let timers2 = clockString(_timers2)
  if (new Date - global.db.data.users[m.sender].lastmancing2 > 28800000){
                        if (pengguna.pancingan >= 3) {
                            if (pengguna.umpan >= 149) {
                                let mcingd1 = `${Math.floor(Math.random() * 50)}`
                                let mcingd2 = `${Math.floor(Math.random() * 50)}`
                                let mcingd3 = `${Math.floor(Math.random() * 50)}`
                                let mcingd4 = `${Math.floor(Math.random() * 50)}`
                                let mcingd5 = `${Math.floor(Math.random() * 50)}`
                                let mcingd6 = `${Math.floor(Math.random() * 50)}`
                                let mcingd7 = `${Math.floor(Math.random() * 50)}`
                                let mcingd8 = `${Math.floor(Math.random() * 50)}`
                                let mcingd9 = `${Math.floor(Math.random() * 50)}`
                                let mcingd10 = `${Math.floor(Math.random() * 50)}`
                                let mcingd11 = `${Math.floor(Math.random() * 50)}`
                                let mcingd12 = `${Math.floor(Math.random() * 50)}`
                                let mcingd13 = `${Math.floor(Math.random() * 100)}`

                                let mcg1 = (mcingd1 * 1)
                                let mcg2 = (mcingd2 * 1)
                                let mcg3 = (mcingd3 * 1)
                                let mcg4 = (mcingd4 * 1)
                                let mcg5 = (mcingd5 * 1)
                                let mcg6 = (mcingd6 * 1)
                                let mcg7 = (mcingd7 * 1)
                                let mcg8 = (mcingd8 * 1)
                                let mcg9 = (mcingd9 * 1)
                                let mcg10 = (mcingd10 * 1)
                                let mcg11 = (mcingd11 * 1)
                                let mcg12 = (mcingd12 * 1)
                                let mcg13 = (mcingd13 * 1)

                                let aine1 = `${mcg1}`
                                let aine2 = `${mcg2}`
                                let aine3 = `${mcg3}`
                                let aine4 = `${mcg4}`
                                let aine5 = `${mcg5}`
                                let aine6 = `${mcg6}`
                                let aine7 = `${mcg7}`
                                let aine8 = `${mcg8}`
                                let aine9 = `${mcg9}`
                                let aine10 = `${mcg10}`
                                let aine11 = `${mcg11}`
                                let aine12 = `${mcg12}`

                                let hsls = `
 *🦀 = [ ${aine2} ]*        *🐠 = [ ${aine6} ]*
 *🦞 = [ ${aine8} ]*        *🐟 = [ ${aine11} ]*
 *🦐 = [ ${aine10} ]*       *🐬 = [ ${aine7} ]*
 *🦑 = [ ${aine4} ]*        *🐳 = [ ${aine12} ]*
 *🐙 = [ ${aine3} ]*        *🦈 = [ ${aine9} ]*
 *🐡 = [ ${aine5} ]*        *🐋 = [ ${aine1} ]*
  
+1 Tiketcoin
`.trim()
                                pengguna.paus += mcg1
                                pengguna.kepiting += mcg2
                                pengguna.gurita += mcg3
                                pengguna.cumi += mcg4
                                pengguna.buntal += mcg5
                                pengguna.dory += mcg6
                                pengguna.lumba += mcg7
                                pengguna.lobster += mcg8
                                pengguna.hiu += mcg9
                                pengguna.udang += mcg10
                                pengguna.ikan += mcg11
                                pengguna.orca += mcg12
                                pengguna.tiketcoin += 1
                                pengguna.umpan -= mcg13

                                setTimeout(() => {
                                    conn.reply(m.chat, `${pemancing} Yuk mancing mania level normal lagi`, m)
                                }, 28800000)
                                setTimeout(() => {
                                    conn.sendMessage(m.chat, {
text: hsls,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `MANCING NORMAL`,
thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/mancing.jpg",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
                                }, 12000)
                                  setTimeout(() => {
                                    conn.reply(m.chat, `${pemancing} Sedang Memancing...`, m)
                                }, 0)
                                global.db.data.users[m.sender].lastmancing2 = new Date * 1
                            } else conn.reply(m.chat, 'Minimal umpan kamu *150* untuk memancing level normal', m)
                        } else conn.reply(m.chat, 'Minimal pancingan kamu *Level 3*\nketik *#upgrade pancingan* untuk mengupdate', m)
                    } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar* ${timers2}\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                    break
                case 'hard':
           let __timers3 = (new Date - global.db.data.users[m.sender].lastmancing3)
  let _timers3 = (28800000 - __timers3) 
  let timers3 = clockString(_timers3)
  if (new Date - global.db.data.users[m.sender].lastmancing3 > 28800000){
                        if (pengguna.pancingan >= 5) {
                            if (pengguna.umpan >= 199) {
                                let mcingr1 = `${Math.floor(Math.random() * 100)}`
                                let mcingr2 = `${Math.floor(Math.random() * 100)}`
                                let mcingr3 = `${Math.floor(Math.random() * 100)}`
                                let mcingr4 = `${Math.floor(Math.random() * 100)}`
                                let mcingr5 = `${Math.floor(Math.random() * 100)}`
                                let mcingr6 = `${Math.floor(Math.random() * 100)}`
                                let mcingr7 = `${Math.floor(Math.random() * 100)}`
                                let mcingr8 = `${Math.floor(Math.random() * 100)}`
                                let mcingr9 = `${Math.floor(Math.random() * 100)}`
                                let mcingr10 = `${Math.floor(Math.random() * 100)}`
                                let mcingr11 = `${Math.floor(Math.random() * 100)}`
                                let mcingr12 = `${Math.floor(Math.random() * 100)}`
                                let mcingr13 = `${Math.floor(Math.random() * 150)}`

                                let mcgh1 = (mcingr1 * 1)
                                let mcgh2 = (mcingr2 * 1)
                                let mcgh3 = (mcingr3 * 1)
                                let mcgh4 = (mcingr4 * 1)
                                let mcgh5 = (mcingr5 * 1)
                                let mcgh6 = (mcingr6 * 1)
                                let mcgh7 = (mcingr7 * 1)
                                let mcgh8 = (mcingr8 * 1)
                                let mcgh9 = (mcingr9 * 1)
                                let mcgh10 = (mcingr10 * 1)
                                let mcgh11 = (mcingr11 * 1)
                                let mcgh12 = (mcingr12 * 1)
                                let mcgh13 = (mcingr13 * 1)

                                let aines1 = `${mcgh1}`
                                let aines2 = `${mcgh2}`
                                let aines3 = `${mcgh3}`
                                let aines4 = `${mcgh4}`
                                let aines5 = `${mcgh5}`
                                let aines6 = `${mcgh6}`
                                let aines7 = `${mcgh7}`
                                let aines8 = `${mcgh8}`
                                let aines9 = `${mcgh9}`
                                let aines10 = `${mcgh10}`
                                let aines11 = `${mcgh11}`
                                let aines12 = `${mcgh12}`

                                let hslsh = `
 *🦀 = [ ${aines2} ]*       *🐠 = [ ${aines6} ]*
 *🦞 = [ ${aines8} ]*       *🐟 = [ ${aines11} ]*
 *🦐 = [ ${aines10} ]*      *🐬 = [ ${aines7} ]*
 *🦑 = [ ${aines4} ]*       *🐳 = [ ${aines12} ]*
 *🐙 = [ ${aines3} ]*       *🦈 = [ ${aines9} ]*
 *🐡 = [ ${aines5} ]*       *🐋 = [ ${aines1} ]*
  
+1 Tiketcoin
`.trim()
                                pengguna.paus += mcgh1
                                pengguna.kepiting += mcgh2
                                pengguna.gurita += mcgh3
                                pengguna.cumi += mcgh4
                                pengguna.buntal += mcgh5
                                pengguna.dory += mcgh6
                                pengguna.lumba += mcgh7
                                pengguna.lobster += mcgh8
                                pengguna.hiu += mcgh9
                                pengguna.udang += mcgh10
                                pengguna.ikan += mcgh11
                                pengguna.orca += mcgh12
                                pengguna.tiketcoin += 1
                                pengguna.umpan -= mcgh13

                                setTimeout(() => {
                                    conn.reply(m.chat, `${pemancing} Yuk mancing mania level hard lagi`, m)
                                }, 28800000)
                                setTimeout(() => {
                                    conn.sendMessage(m.chat, {
text: hslsh,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `MANCING HARD`,
thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/mancing.jpg",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
                                }, 12000)
                                setTimeout(() => {
                                    conn.reply(m.chat, `${pemancing} Sedang Memancing...`, m)
                                }, 0)
                               global.db.data.users[m.sender].lastmancing3 = new Date * 1
                            } else conn.reply(m.chat, 'Minimal umpan kamu *200* untuk memancing level hard', m)
                         } else conn.reply(m.chat, 'Minimal pancingan kamu *Level 5*\nketik *#upgrade pancingan* untuk mengupdate', m)
                    } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar* ${timers3}\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                    break
                default:
                    return conn.reply(m.chat, list, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
            }
        }
    } catch (e) {
        conn.reply(m.chat, 'Error', m)
        console.log(e)
    }
}

handler.help = ['mancing']
handler.tags = ['rpg']
handler.command = /^(mancing)$/i
handler.rpg = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}