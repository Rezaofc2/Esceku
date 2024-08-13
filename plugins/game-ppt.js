//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let poin = 2000
    let kalah = 1000
    let reseqv = `✳️ Select batu/kertas/gunting\n\nExample : *${usedPrefix + command}* batu\n`
    if (!text) throw reseqv
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }


    if (text == astro) {
      global.db.data.users[m.sender].exp += 500
        m.reply(`▢ *Seri*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Points (±)500 XP`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].exp += 2000
            m.reply(`▢ *Menang* 🎊\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Points *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 1000
            m.reply(`▢ *Kalah*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n Points *-${kalah} XP*`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].exp += 2000
            m.reply(`▢ *Menang* 🎊\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Points *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 1000
            m.reply(`▢ *Kalah*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\nPoints *-${kalah} XP*`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].exp += 2000
            m.reply(`▢ *Menang* 🎊\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\n🎁 Points *+${poin} XP*`)
        } else {
          global.db.data.users[m.sender].exp -= 1000
            m.reply(`▢ *Kalah*\n\n‣ Kamu : ${text}\n‣ Bot : ${astro}\n\nPoints *-${kalah} XP*`)
        }
    } else {
        throw reseqv
    }
}
handler.help = ['ppt <batu/gunting/kertas>']
handler.tags = ['game']
handler.command = ['ppt'] 
handler.register = false
handler.game = true

export default handler
