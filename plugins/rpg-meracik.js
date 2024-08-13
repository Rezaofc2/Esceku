

import fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
 
             let timeoute = 1000
             let timeoutem = 60000
             let timeoutu = 600000
             let timeouto = 1000
             let timeouten = 60000
             let timeoutum = 600000
             let timeoutol = 1000
             let timeoutel = 60000
             let timeoutul = 600000
             let timeoutog = 1000
             let timeouteg = 60000
             let timeoutug = 600000
             let timeoutoy = 1000
             let timeoutey = 60000
             let timeoutuy = 600000
             let timeoutst = 1000
             let timeoutstt = 60000
             let timeoutsttt = 600000
             let timeoutww = 1000
             let timeoutwww = 60000
             let timeoutwwww = 600000
             let type = (args[0] || '').toLowerCase()
                 switch (type) {
                     case 'ramuan': 
                                     let apelu = global.db.data.users[m.sender].apel
                                     let angguru = global.db.data.users[m.sender].anggur
                                     let manggau = global.db.data.users[m.sender].mangga
                                     let pisangu = global.db.data.users[m.sender].pisang
                                     let jeruku = global.db.data.users[m.sender].jeruk 
                                     let __waktuga = (new Date - global.db.data.users[m.sender].lastramuanclaim)
                                     let _waktuga = (600000 - __waktuga)
                                     let waktuga = clockString(_waktuga)
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply('*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].lastramuanclaim > 600000) {
                                 	if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggas = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jeruks = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apels = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _ramuans = `${pickRandom(['1','2','3','4','5'])}`.trim()
                                     let ramuans = (_ramuans * 1)
                                     let manggas = (_manggas * 1)
                                     let anggurs = (_anggurs * 1)
                                     let jeruks = (_jeruks * 1)
                                     let apels = (_apels * 1)
                                     let pisangs = (_pisangs * 1)
                                     global.db.data.users[m.sender].mangga -= manggas * 1
                                     global.db.data.users[m.sender].anggur -= anggurs * 1
                                     global.db.data.users[m.sender].jeruk -= jeruks * 1
                                     global.db.data.users[m.sender].apel -= apels * 1
                                     global.db.data.users[m.sender].pisang -= pisangs * 1
                                     global.db.data.users[m.sender].ramuan += ramuans * 1
                                     global.db.data.users[m.sender].lastramuanclaim = new Date * 1
                                     let srcs = `
Berhasil meracik ramuan:
-${apels} Apel
-${manggas} Mangga
-${anggurs} Anggur
-${jeruks} Jeruk
-${pisangs} Pisang

Selamat kamu mendapatkan ramuan: 
+${ramuans}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutu)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcs, m)
                                      }, timeoutem)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk ramuan', m)
                                      }, timeoute)
                                      } else m.reply(`Pastikan anggur kamu *500* untuk bisa meracik ramuan`)
                                   } else m.reply(`Pastikan jeruk kamu *500* untuk bisa meracik ramuan`)
                                } else m.reply(`Pastikan pisang kamu *500* untuk bisa meracik ramuan`)
                             } else m.reply(`Pastikan apel kamu *500* untuk bisa meracik ramuan`)
                          } else m.reply(`Pastikan mangga kamu *500* untuk bisa meracik ramuan`)
                       } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktuga} lagi untuk meracik kembali `)
                     break 
                     case 'potion':
                                     let apele = global.db.data.users[m.sender].apel
                                     let anggure = global.db.data.users[m.sender].anggur
                                     let manggae = global.db.data.users[m.sender].mangga
                                     let pisange = global.db.data.users[m.sender].pisang
                                     let jeruke = global.db.data.users[m.sender].jeruk 
                                     let __waktution = (new Date - global.db.data.users[m.sender].lastpotionclaim)
                                     let _waktution = (600000 - __waktution)
                                     let waktution = clockString(_waktution)
                                     if (apele == 0 || anggure == 0 || manggae == 0 || pisange == 0 || jeruke == 0) return m.reply('*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].lastpotionclaim > 600000) {
                                     if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggan = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apeln = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _potionn = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let potionn = (_potionn * 1)
                                     let manggan = (_manggan * 1)
                                     let anggurn = (_anggurn * 1)
                                     let jerukn = (_jerukn * 1)
                                     let apeln = (_apeln * 1)
                                     let pisangn = (_pisangn * 1)
                                     global.db.data.users[m.sender].mangga -= manggan * 1
                                     global.db.data.users[m.sender].anggur -= anggurn * 1
                                     global.db.data.users[m.sender].jeruk -= jerukn * 1
                                     global.db.data.users[m.sender].apel -= apeln * 1
                                     global.db.data.users[m.sender].pisang -= pisangn * 1
                                     global.db.data.users[m.sender].potion += potionn * 1
                                     global.db.data.users[m.sender].lastpotionclaim = new Date * 1
                                     let srcn = `
Berhasil meracik potion:
-${apeln} Apel
-${manggan} Mangga
-${anggurn} Anggur
-${jerukn} Jeruk
-${pisangn} Pisang

Selamat kamu mendapatkan potion: 
+${potionn}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutum)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcn, m)
                                      }, timeouten)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk potion', m)
                                      }, timeouto)
                                      } else m.reply(`Pastikan anggur kamu *500* untuk bisa meracik potion`)
                                   } else m.reply(`Pastikan jeruk kamu *500* untuk bisa meracik potion`)
                                } else m.reply(`Pastikan pisang kamu *500* untuk bisa meracik potion`)
                             } else m.reply(`Pastikan apel kamu *500* untuk bisa meracik potion`)
                          } else m.reply(`Pastikan mangga kamu *500* untuk bisa meracik potion`)
                       } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktution} lagi untuk meracik kembali `)
                     break
                     case 'string':
                                     let apelg = global.db.data.users[m.sender].apel
                                     let anggurg = global.db.data.users[m.sender].anggur
                                     let manggag = global.db.data.users[m.sender].mangga
                                     let pisangg = global.db.data.users[m.sender].pisang
                                     let jerukg = global.db.data.users[m.sender].jeruk 
                                     let __waktutiong = (new Date - global.db.data.users[m.sender].laststringclaim)
                                     let _waktutiong = (600000 - __waktutiong)
                                     let waktutiong = clockString(_waktutiong)
                                     if (apelg == 0 || anggurg == 0 || manggag == 0 || pisangg == 0 || jerukg == 0) return m.reply('*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].laststringclaim > 600000) {
                                     if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggang = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apelng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _strings = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let strings = (_strings * 1)
                                     let manggang = (_manggang * 1)
                                     let anggurng = (_anggurng * 1)
                                     let jerukng = (_jerukng * 1)
                                     let apelng = (_apelng * 1)
                                     let pisangng = (_pisangng * 1)
                                     global.db.data.users[m.sender].mangga -= manggang * 1
                                     global.db.data.users[m.sender].anggur -= anggurng * 1
                                     global.db.data.users[m.sender].jeruk -= jerukng * 1
                                     global.db.data.users[m.sender].apel -= apelng * 1
                                     global.db.data.users[m.sender].pisang -= pisangng * 1
                                     global.db.data.users[m.sender].string += strings * 1
                                     global.db.data.users[m.sender].laststringclaim = new Date * 1
                                     let srcng = `
Berhasil meracik string:
-${apelng} Apel
-${manggang} Mangga
-${anggurng} Anggur
-${jerukng} Jeruk
-${pisangng} Pisang

Selamat kamu mendapatkan string: 
+${strings}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutul)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcng, m)
                                      }, timeoutel)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk string', m)
                                      }, timeoutol)
                                      } else m.reply(`Pastikan anggur kamu *500* untuk bisa meracik string`)
                                   } else m.reply(`Pastikan jeruk kamu *500* untuk bisa meracik string`)
                                } else m.reply(`Pastikan pisang kamu *500* untuk bisa meracik string`)
                             } else m.reply(`Pastikan apel kamu *500* untuk bisa meracik string`)
                          } else m.reply(`Pastikan mangga kamu *500* untuk bisa meracik string`)
                       } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutiong} lagi untuk meracik kembali `)
                     break
         
                           default:
                                  return conn.reply(m.chat, `${usedPrefix + command} [ramuan | potion | string | iron ]\nContoh penggunaan: *${usedPrefix + command} ramuan*`, m)
                           }
                        }

handler.help = ['meracik <type>']
handler.tags = ['rpg']
handler.command = /^(meracik|racik|membuat|buat)$/i
handler.limit = true
handler.group = true

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