import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import moment from 'moment-timezone'
export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    if (m.isGroup && chat.autolevelup && !chat.isBanned) {
        if (canLevelUp(user.level, user.exp, global.multiplier)) {
            let before = user.level * 1
            while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
            if (before !== user.level) {
                let teks = `.             ${user.role}`
                let str = `
*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

*Note:* _Semakin Sering Berinteraksi Dengan Bot Semakin Tinggi Level Kamu_
`.trim()
                try {
                    await m.reply(str)
                } catch (e) {
                    await m.reply(str)
                }
            }
        }
        return !0
    }
    return !0
}