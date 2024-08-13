
let handler = async (m, { conn, usedPrefix, owner }) => {
    try {
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (3600000 - __timers) 
        let timers = clockString(_timers)
            if (new Date - global.db.data.users[m.sender].lastadventure > 3600000)
         {
         let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = pickRandom(hwaifu)
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let serigala = global.db.data.users[m.sender].serigala
            let exp = `${Math.floor(Math.random() * 10000)}`.trim() 
            let duit = `${Math.floor(Math.random() * 100000)}`.trim() 
            let _potion = ['1','2','3']
            let potion = _potion[Math.floor(Math.random() * _potion.length)]
            let _sampah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
            let _spider = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38']
             let _batu = ['13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38']
             let _iron = ['13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38']
            let sampah = _sampah[Math.floor(Math.random() * _sampah.length)]
            let string = _spider[Math.floor(Math.random() * _spider.length)]
            let batu = _batu[Math.floor(Math.random() * _batu.length)]
            let iron = _iron[Math.floor(Math.random() * _iron.length)]
            let _diamond = ['1','2','3','4','5','6','7','8','9','10']
            let diamond = _diamond[Math.floor(Math.random() * _diamond.length)]
            let _common = ['1','2','3']
            let common = _common[Math.floor(Math.random() * _common.length)]
            let _uncommon = ['1','2','1','2']
            let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)]
            let _mythic = `${pickRandom(['1','3','1','1','2'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1','3','1','1','2'])}`
            let nyawa = (Math.floor(Math.random() *100))
            let player = global.db.data.users[m.sender]
            if (player.healt < 80) return m.reply(`*LOW HEALTH*\n\nʏᴏᴜʀ ʜᴇᴀʟᴛʜ ɪs ʙᴇʟᴏᴡ 80﹗
ᴩʟᴇᴀsᴇ ʜᴇᴀʟ ❤ ғɪʀsᴛ ᴛᴏ ᴀᴅᴠᴇɴᴛᴜʀᴇ ᴀɢᴀɪɴ.`) 
      
            let legendary = (_legendary * 1)
            let itemrand = [`*Selamat anda mendapatkan item rare yaitu*\n${mythic} Mythic Crate`,`*Selamat kamu mendapatkan item rare yaitu*\n${legendary} Legendary Crate`]
            let rendem = itemrand[Math.floor(Math.random() * itemrand.length)]
            let str = `Kamu kehilangan nyawa -${nyawa} setelah berpetualang sampai ${pickRandom(['Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German', 'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Zimbabwe', 'Bulan', 'Pluto', 'Matahari', 'Hatinya dia', '...'])} dan mendapatkan
*Exp:* ${exp} 
*Uang:* ${duit}
*Tiketcoin:* 1
*String:* ${string}
*Iron:* ${iron}
*Batu:* ${batu}
*Sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*Diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*Common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*Uncommon crate:* ' + uncommon + ''}
`.trim()
            
            setTimeout(() => {
                  conn.reply(m.chat, str, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
                  }, 0)
            setTimeout(() => {
                  conn.reply(m.chat, rendem, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
                  }, 1000)
					
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].tiketcoin += 1
            global.db.data.users[m.sender].uang += duit * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].mythic += mythic * 1
            global.db.data.users[m.sender].legendary += legendary * 1
            global.db.data.users[m.sender].healt -= nyawa * 1
            global.db.data.users[m.sender].string += string * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi.`, m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}

handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^(adventure|berpetualang)$/i
handler.limit = true
handler.group = true
handler.fail = null

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