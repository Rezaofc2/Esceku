let handler = async (m, {
    command,
    usedPrefix,
    args
}) => {
    let user = global.db.data.users[m.sender]
    let author = global.author
    let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const list = `
╭──『 ғᴏᴏᴅ 』
│⬡ typing command↓
│   ${usedPrefix + command } rendang
│
│⬡ 🍖 *Ayambakar*
│⬡ 🍗 *Ayamgoreng*
│⬡ 🥘 *Rendang*
│⬡ 🥠 *Babipanggang*
│⬡ 🍲 *Gulaiayam*
│⬡ 🍜 *Oporayam*
│⬡ 🍖 *ikanbakar*
│⬡ 🍖 *udangbakar*
│⬡ 🍖 *pausbakar*
│⬡ 🍖 *kepitingbakar*
│⬡ 🧴 *Ramuan*
│⬡ 🍌 *Pisang*
│⬡ 🍇 *anggur*
│⬡ 🥭 *mangga*
│⬡ 🍊 *jeruk*
│⬡ 🍎 *apel*
╰───────────────
`.trim()
    //try {
    if (/makan|eat/i.test(command)) {
        const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
             case 'pisang':
                if (user.stamina < 100) {
                    if (user.pisang >= count * 1) {
                        user.pisang -= count * 1
                        user.stamina += 10 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} pisang dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` pisang kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
                case 'anggur':
                if (user.stamina < 100) {
                    if (user.anggur >= count * 1) {
                        user.anggur -= count * 1
                        user.stamina += 10 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} anggur dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` anggur kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
                case 'mangga':
                if (user.stamina < 100) {
                    if (user.mangga >= count * 1) {
                        user.mangga -= count * 1
                        user.stamina += 10 * count
                        conn.reply(m.chat, `Nyam nyam`, m)
                    } else conn.reply(m.chat, `kamu barusaja makan ${count} mangga dan stamina kamu sekarang ${user.stamina}`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
                case 'jeruk':
                if (user.stamina < 100) {
                    if (user.jeruk >= count * 1) {
                        user.jeruk -= count * 1
                        user.stamina += 10 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} jeruk dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` jeruk kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
                case 'apel':
                if (user.stamina < 100) {
                    if (user.apel >= count * 1) {
                        user.apel -= count * 1
                        user.stamina += 10 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} apel dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` apel kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'ayamgoreng':
                if (user.stamina < 100) {
                    if (user.ayamgoreng >= count * 1) {
                        user.ayamgoreng -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} ayam goreng dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` Ayam goreng kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'ayambakar':
                if (user.stamina < 100) {
                    if (user.ayambakar >= count * 1) {
                        user.ayambakar -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} ayam bakar dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` Ayam bakar kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'oporayam':
                if (user.stamina < 100) {
                    if (user.oporayam >= count * 1) {
                        user.oporayam -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} opor ayam dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` Opor ayam kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'rendang':
                if (user.stamina < 100) {
                    if (user.rendang >= count * 1) {
                        user.rendang -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} rendang dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` Rendang kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
            break
            case 'babipanggang':
                if (user.stamina < 100) {
                    if (user.babipanggang >= count * 1) {
                        user.babipanggang -= count * 1
                        user.stamina += 10 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} babi panggang dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` Babi panggang kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'ikanbakar':
                if (user.stamina < 100) {
                    if (user.ikanbakar >= count * 1) {
                        user.ikanbakar -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} ikan bakar dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` ikan bakar kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'bawalbakar':
                if (user.stamina < 100) {
                    if (user.bawalbakar >= count * 1) {
                        user.bawalbakar -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} bawal bakar dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` bawal bakar kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'udangbakar':
                if (user.stamina < 100) {
                    if (user.udangbakar >= count * 1) {
                        user.udangbakar -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} udang bakar dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` udang bakar kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'pausbakar':
                if (user.stamina < 100) {
                    if (user.pausbakar >= count * 1) {
                        user.pausbakar -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `kamu barusaja makan ${count} paus bakar dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, ` paus bakar kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            case 'kepitingbakar':
                if (user.stamina < 100) {
                    if (user.kepitingbakar >= count * 1) {
                        user.kepitingbakar -= count * 1
                        user.stamina += 20 * count
                        conn.reply(m.chat, `Nyam nyam`, m)
                    } else conn.reply(m.chat, ` kepiting bakar kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
                case 'ramuan':
                if (user.stamina < 100) {
                    if (user.ramuan >= count * 1) {
                        user.ramuan -= count * 1
                        user.stamina += 100 * count
                        conn.reply(m.chat, `kamu barusaja minum ${count} ramuan dan stamina kamu sekarang ${user.stamina}`, m)
                    } else conn.reply(m.chat, `ramuan kamu kurang`, m)
                } else conn.reply(m.chat, `Stamina kamu sudah penuh`, m)
                break
            default:
                await conn.sendMessage(m.chat, {
text: list,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: '「 E A T I N G 」',
thumbnailUrl: pickRandom(flaaa) + "makan",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
        }
    } else if (/p/i.test(command)) {
        const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
        switch (_type) {
            case 'p':
                break
            default:
                return conn.reply(m.chat, list, m)
        }

        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                m.reply('error') 

            }
        }
    }
}

handler.help = ['eat', 'makan']
handler.tags = ['rpg']
handler.register = true
handler.command = /^(eat|makan)$/i
handler.rpg = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}