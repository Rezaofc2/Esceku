let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let phonix = global.db.data.users[m.sender].phonix
    let kuda = global.db.data.users[m.sender].kuda
    let naga = global.db.data.users[m.sender].naga
    let kucing = global.db.data.users[m.sender].kucing
    let hero = global.db.data.users[m.sender].hero
    let rubah = global.db.data.users[m.sender].rubah
    let centaur = global.db.data.users[m.sender].centaur
    let serigala = global.db.data.users[m.sender].serigala
    let anak = global.db.data.users[m.sender].anak
      
    switch (type) {
        case 'phonix':
            if (phonix == 0) return m.reply('*Kamu belum memiliki Pet phonix*')
            if (phonix == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktur = (new Date - global.db.data.users[m.sender].phonixlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].phonixlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakphonix += 20
                    global.db.data.users[m.sender].phonixlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 100) - 1)
                        if (global.db.data.users[m.sender].anakphonix > naiklvl) {
                            global.db.data.users[m.sender].phonix += 1
                            global.db.data.users[m.sender].anakphonix -= (phonix * 100)
                            conn.reply(m.chat, `*Selamat Pet phonix kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktur}* lagi`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
            if (kuda == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].kudalastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].kudalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkuda += 20
                    global.db.data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                            global.db.data.users[m.sender].kuda += 1
                            global.db.data.users[m.sender].anakkuda -= (kuda * 100)
                            conn.reply(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
            break
        case 'naga':
            if (naga == 0) return m.reply('*Kamu belum memiliki Pet Naga*')
            if (naga == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktuul = (new Date - global.db.data.users[m.sender].nagalastclaim)
            let _waktuul = (600000 - __waktuul)
            let waktuul = clockString(_waktuul)
            if (new Date - global.db.data.users[m.sender].nagalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anaknaga += 20
                    global.db.data.users[m.sender].nagalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (naga > 0) {
                        let naiklvl = ((naga * 100) - 1)
                        if (global.db.data.users[m.sender].anaknaga > naiklvl) {
                            global.db.data.users[m.sender].naga += 1
                            global.db.data.users[m.sender].anaknaga -= (naga * 100)
                            conn.reply(m.chat, `*Selamat Pet Naga kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuul}* lagi`)
            break
            case 'rubah':
            if (rubah == 0) return m.reply('*Kamu belum memiliki Pet rubah*')
            if (rubah == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuu = (new Date - global.db.data.users[m.sender].rubahlastclaim)
            let _waktuu = (600000 - __waktuu)
            let waktuu = clockString(_waktuu)
            if (new Date - global.db.data.users[m.sender].rubahlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakrubah += 20
                    global.db.data.users[m.sender].rubahlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (naga > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                            global.db.data.users[m.sender].rubah += 1
                            global.db.data.users[m.sender].anakrubah -= (rubah * 100)
                            conn.reply(m.chat, `*Selamat Pet rubah kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuu}* lagi`)
            break
            case 'kucing':
            if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
            if (kucing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktup = (new Date - global.db.data.users[m.sender].kucinglastclaim)
            let _waktup = (600000 - __waktup)
            let waktup = clockString(_waktup)
            if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkucing += 20
                    global.db.data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 100) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 100)
                            conn.reply(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                        }
                    }             
                  } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktup}* lagi`)
            break
            case 'hero':
            if (hero == 0) return m.reply('*Kamu belum memiliki hero*')
            if (hero == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuph = (new Date - global.db.data.users[m.sender].herolastclaim)
            let _waktuph = (600000 - __waktuph)
            let waktuph = clockString(_waktuph)
            if (new Date - global.db.data.users[m.sender].herolastclaim > 600000) {
                if (global.db.data.users[m.sender].makananhero > 0) {
                    global.db.data.users[m.sender].makananhero -= 1
                    global.db.data.users[m.sender].anakhero += 20
                    global.db.data.users[m.sender].herolastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan ${type}`, m)
                    if (hero > 0) { 
                        let naiklvl = ((hero * 100) - 1)
                        if (global.db.data.users[m.sender].anakhero > naiklvl) {
                            global.db.data.users[m.sender].hero += 1
                            global.db.data.users[m.sender].anakhero -= (hero * 100)
                            conn.reply(m.chat, `*Selamat Pet hero kamu naik level*`, m)
                        }
                    }             
                  } else m.reply(`Makanan hero kamu tidak cukup`)
            } else m.reply(`hero kamu sudah kenyang, coba kasih makan *${waktuph}* lagi`)
            break
            case 'centaur':
            if (centaur == 0) return m.reply('*Kamu belum memiliki Pet centaur*')
            if (centaur == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktum = (new Date - global.db.data.users[m.sender].centaurlastclaim)
            let _waktum = (600000 - __waktum)
            let waktum = clockString(_waktum)
            if (new Date - global.db.data.users[m.sender].centaurlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakcentaur += 20
                    global.db.data.users[m.sender].centaurlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet centaur`, m)
                    if (centaur > 0) { 
                        let naiklvl = ((centaur * 100) - 1)
                        if (global.db.data.users[m.sender].anakcentaur > naiklvl) {
                            global.db.data.users[m.sender].centaur += 1
                            global.db.data.users[m.sender].anakcentaur -= (centaur * 100)
                            conn.reply(m.chat, `*Selamat Pet centaur kamu naik level*`, m)
                        }
                    }             
                  } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktum}* lagi`)
            break
            case 'anak':
            if (anak == 0) return m.reply('*Kamu belum memiliki anak silahkan ngewe terlebih dulu*')
            if (anak == 20) return m.reply('anak kamu udah dewasa*')
            let __waktump = (new Date - global.db.data.users[m.sender].anaklastclaim)
            let _waktump = (600000 - __waktump)
            let waktump = clockString(_waktump)
            if (new Date - global.db.data.users[m.sender].anaklastclaim > 600000) {
                if (global.db.data.users[m.sender].makanananak > 0) {
                    global.db.data.users[m.sender].makanananak -= 1
                    global.db.data.users[m.sender].anakanak += 20
                    global.db.data.users[m.sender].anaklastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan anak`, m)
                    if (anak > 0) { 
                        let naiklvl = ((anak * 100) - 1)
                        if (global.db.data.users[m.sender].anakanak > naiklvl) {
                            global.db.data.users[m.sender].anak += 1
                            global.db.data.users[m.sender].anakserigala -= (anak * 100)
                            conn.reply(m.chat, `*Selamat anak kamu naik level*`, m)
                        }
                    }             
                  } else m.reply(`Makanan anak kamu tidak cukup`)
            } else m.reply(`anak kamu sudah kenyang, coba kasih makan *${waktump}* lagi`)
            break
                       case 'serigala':
            if (serigala == 0) return m.reply('*Kamu belum memiliki Pet serigala*')
            if (serigala == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktumh = (new Date - global.db.data.users[m.sender].serigalalastclaim)
            let _waktumh = (600000 - __waktumh)
            let waktumh = clockString(_waktumh)
            if (new Date - global.db.data.users[m.sender].serigalalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakserigala += 20
                    global.db.data.users[m.sender].serigalalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet serigala`, m)
                    if (serigala > 0) { 
                        let naiklvl = ((centaur * 100) - 1)
                        if (global.db.data.users[m.sender].anakserigala > naiklvl) {
                            global.db.data.users[m.sender].serigala += 1
                            global.db.data.users[m.sender].anakserigala -= (serigala * 100)
                            conn.reply(m.chat, `*Selamat Pet serigala kamu naik level*`, m)
                        }
                    }             
                  } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktumh}* lagi`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}feed [ hero | kucing | phonix | kuda | rubah | naga | centaur | serigala | anak ]\nContoh penggunaan: *${usedPrefix}feed kucing*`, m)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}