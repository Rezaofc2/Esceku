let handler = async (m, {
    command,
    usedPrefix,
    args
}) => {
    let type = (args[0] || '').toLowerCase()
    let msk = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    let author = global.author
    let cok = `▧ ayambakar 🍖
〉Need 2 ayam 🐓 & 1 Coal 🕳️

▧ ayamgoreng 🍗
〉Need 2 ayam 🐓 & 1 Coal 🕳️

▧ oporayam 🍜
〉Need 2 ayam 🐓 & 1 Coal 🕳️

▧ rendang 🥘
〉Need 2 sapi 🐮 & 1 Coal 🕳️

▧ babipanggang 🥠
〉Need 2 babi 🐖 & 1 Coal 🕳️

▧ ikanbakar 🐟
〉Need 2 ikan 🐟 & 1 Coal 🕳️

▧ udangbakar 🦐
〉Need 2 udang 🦐 & 1 Coal 🕳️

▧ pausbakar 🐳
〉Need 2 paus 🐳 & 1 Coal 🕳️

▧ kepitingbakar 🦀
〉Need 2 kepiting 🦀 & 1 Coal 🕳️

• *Example :* .masak ayamgoreng`

    try {
        if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'ayambakar':
                       if (user.ayam >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.ayam -= count * 1
                        user.coal -= count * 1
                        user.ayambakar += 1 * count
                        conn.reply(m.chat, `berhasil memasak ayam bakar`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `ayam kamu kurang`, m)
                    break
                case 'rendang':
                                    if (user.sapi >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.sapi -= count * 1
                        user.coal -= count * 1
                        user.rendang += 1 * count
                        conn.reply(m.chat, `berhasil memasak rendang`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `sapi kamu kurang`, m)
                    break
                case 'ayamgoreng':
                                    if (user.ayam >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.ayam -= count * 1
                        user.coal -= count * 1
                        user.ayamgoreng += 1 * count
                        conn.reply(m.chat, `berhasil memasak ayam goreng`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `ayam kamu kurang`, m)
                    break
                case 'oporayam':
                                     if (user.ayam >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.ayam -= count * 1
                        user.oporayam += 1 * count
                        user.coal -= count * 1
                        conn.reply(m.chat, `berhasil memasak opor ayam`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `ayam kamu kurang`, m)
                    break
                case 'babipanggang':
                                     if (user.babi >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.babi -= count * 1
                        user.babipanggang += 1 * count
                        user.coal -= count * 1
                        conn.reply(m.chat, `berhasil memasak babi panggang`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `babi kamu kurang`, m)
                    break
                case 'ikanbakar':
                                     if (user.ikan >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.ikan -= count * 1
                        user.ikanbakar += 1 * count
                        user.coal -= count * 1
                        conn.reply(m.chat, `berhasil memasak ikan bakar`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `ikan kamu kurang`, m)
                    break
                case 'udangbakar':
                                   if (user.udang >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.udang -= count * 1
                        user.udangbakar += 1 * count
                        user.coal -= count * 1
                        conn.reply(m.chat, `berhasil memasak udang bakar`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `udang kamu kurang`, m)
                    break
                case 'pausbakar':
                                  if (user.paus >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.paus -= count * 1
                        user.coal -= count * 1
                        user.pausbakar += 1 * count
                        conn.reply(m.chat, `berhasil memasak paus bakar`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `paus kamu kurang`, m)
                    break
                case 'kepitingbakar':
                                     if (user.kepiting >= count * 1) {
                    if (user.coal >= count * 1) {
                        user.kepiting -= count * 1
                        user.coal -= count * 1
                        user.kepitingbakar += 1 * count
                        conn.reply(m.chat, `berhasil memasak kepiting bakar`, m)
                    } else conn.reply(m.chat, ` coal kamu kurang`, m)
                } else conn.reply(m.chat, `kepiting kamu kurang`, m)
                    break
                default:
                    conn.sendMessage(m.chat, {
text: cok,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: '「 C O O K I N G 」',
thumbnailUrl: pickRandom(flaaa) + "masak",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                m.reply('eror')
            }
        }
    }
}

handler.help = ['masak <masakan> <args>', 'cook <masakan> <args>']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i
handler.rpg = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}