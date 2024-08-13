
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command,
    DevMode
}) => {
let acak = await conn.groupMetadata(m.chat)
        let peserta = pickRandom(acak.participants)
    if (args.length < 2) {
        return conn.reply(m.chat, `Gunakan format .giveaway <type> <jumlah>\n📍contoh penggunaan: *.giveaway money 100*\n\n*List yang bisa di transfer :*\n💹Money\n🔮Exp\n🎉Limit\n💳 bank\n🥤Potion\n🗑️Sampah\n💎Diamond\n📦Common\n🛍️Uncommon\n🎁Mythic\n🧰Legendary\n🕸️string\n🪵kayu\n🪨batu\n⛓iron`.trim(), m)
    }
    let count = args[1] && args[1].length > 0 ? Math.min(999999999999999999999999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let type = (args[0] || '').toLowerCase()
        let users = global.db.data.users
        switch (type) {
            case 'money':
                if (global.db.data.users[m.sender].uang >= count * 1) {
                    try {
                        global.db.data.users[m.sender].uang -= count * 1
                        global.db.data.users[peserta.id].uang += count * 1
                       conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} Money`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].uang += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk giff Money sebesar ${count}`.trim(), m)
                break
                case 'exp':
                if (global.db.data.users[m.sender].exp >= count * 1) {
                    try {
                        global.db.data.users[m.sender].exp -= count * 1
                        global.db.data.users[peserta.id].exp += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} exp`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].exp += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk give exp sebesar ${count}`.trim(), m)
                break
            case 'bank':
                if (global.db.data.users[m.sender].bank >= count * 1) {
                   try {
                       global.db.data.users[m.sender].bank -= count * 1
                       global.db.data.users[peserta.id].bank += count * 1
                       conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} bank`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].atm += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                               m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Limit kamu tidak mencukupi untuk five Uang dari Bank sebesar ${count}`.trim(), m)
                break
            case 'limit':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[peserta.id].limit += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} limit`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Limit kamu tidak mencukupi untuk give Limit sebesar ${count}`.trim(), m)
                break
            case 'potion':
                if (global.db.data.users[m.sender].potion >= count * 1) {
                    try {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[peserta.id].potion += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} potion`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].potion += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                break
            case 'sampah':
                if (global.db.data.users[m.sender].sampah >= count * 1) {
                    try {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[peserta.id].sampah += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} sampah`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].sampah += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Sampah kamu tidak cukup`.trim(), m)
                break
            case 'diamond':
                if (global.db.data.users[m.sender].diamond >= count * 1) {
                    try {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[peserta.id].diamond += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} diamond`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].diamond += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Diamond kamu kamu tidak cukup`.trim(), m)
                break
            case 'common':
                if (global.db.data.users[m.sender].common >= count * 1) {
                    try {
                        global.db.data.users[m.sender].common -= count * 1
                        global.db.data.users[peserta.id].common += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} common`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].common += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Common crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'uncommon':
                if (global.db.data.users[m.sender].uncommon >= count * 1) {
                    try {
                        global.db.data.users[m.sender].uncommon -= count * 1
                        global.db.data.users[peserta.id].uncommon += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} uncommon`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].uncommon += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uncommon crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'mythic':
                if (global.db.data.users[m.sender].mythic >= count * 1) {
                    try {
                        global.db.data.users[m.sender].mythic -= count * 1
                        global.db.data.users[peserta.id].mythic += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} mythic`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].mythic += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Mythic crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'legendary':
                if (global.db.data.users[m.sender].legendary >= count * 1) {
                    try {
                        global.db.data.users[m.sender].legendary -= count * 1
                        global.db.data.users[peserta.id].legendary += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} legendary`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].legendary += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Legendary crate kamu kamu tidak cukup`.trim(), m)
                break
            case 'string':
                if (global.db.data.users[m.sender].string >= count * 1) {
                    try {
                        global.db.data.users[m.sender].string -= count * 1
                        global.db.data.users[peserta.id].string += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} string`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].string += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer String sebesar ${count}`.trim(), m)
                break
            case 'batu':
                if (global.db.data.users[m.sender].batu >= count * 1) {
                    try {
                        global.db.data.users[m.sender].batu -= count * 1
                        global.db.data.users[string].batu += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} batu`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].batu += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Batu sebesar ${count}`.trim(), m)
                break
            case 'kayu':
                if (global.db.data.users[m.sender].kayu >= count * 1) {
                    try {
                        global.db.data.users[m.sender].kayu -= count * 1
                        global.db.data.users[peserta.id].kayu += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} kayu`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].kayu += count * 1
                        m.reply('Gagal')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Kayu sebesar ${count}`.trim(), m)
                break
            case 'iron':
                if (global.db.data.users[m.sender].iron >= count * 1) {
                    try {
                        global.db.data.users[m.sender].iron -= count * 1
                        global.db.data.users[peserta.id].iron += count * 1
                        conn.reply(m.chat, `Selamat kepada @${peserta.id.split('@')[0]} telah mendapatkan price give away.\n ${count} iron`, m, {
            contextInfo: {
                mentionedJid: acak.participants.map(v => v.id)
            }
        })
                    } catch (e) {
                        global.db.data.users[m.sender].iron += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                m.reply("error")
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Iron sebesar ${count}`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Gunakan format .giveaway <type> <jumlah>\n📍contoh penggunaan: *.giveaway money 100*\n\n*List yang bisa di transfer :*\n💹Money\n🔮Exp\n🎉Limit\n💳 bank\n🥤Potion\n🗑️Sampah\n💎Diamond\n📦Common\n🛍️Uncommon\n🎁Mythic\n🧰Legendary\n🕸️string\n🪵kayu\n🪨batu\n⛓iron`.trim(), m)
        }
}
    
handler.help = ['giveaway <Args>']
handler.tags = ['rpg']
handler.command = /^(giveaway)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

handler.rpg = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}