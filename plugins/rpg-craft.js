let handler = async (m, {
    conn,
    command,
    args,
    usedPrefix
}) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    user.pickaxe = user.pickaxe || 0
    user.pedang = user.pedang || 0
    user.fishingrod = user.fishingrod || 0
    let botol = global.botwm
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");

    let caption = `⛊ Pickaxe ⛏️
⛊ Sword ⚔️
⛊ pancingan 🎣
⛊ Armor 🛡️
⛊ ATM 💳

*「 RECIPE 」*

⬡ Pickaxe ⛏️
│• 10 Kayu
│• 5 Batu
│• 5 Iron
│• 20 String
╰────┈⭑
⬡ Sword ⚔️
│• 10 Kayu
│• 15 Iron
╰────┈⭑
⬡ pancingan 🎣
│• 10 Kayu
│• 2 Iron
│• 20 String
╰────┈⭑
⬡ Armor 🥼
│• 30 Iron
│• 5 Diamond
╰────┈⭑
⬡ Atm 💳
│• 6 Diamond
│• 10k Money
╰────┈⭑`


    try {
        if (/craft|Crafting/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'pickaxe':
                    if (user.pickaxe > 0) return m.reply('Kamu sudah memilik ini')
                    if (user.batu < 5 || user.kayu < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n10 kayu🪵 \n5 iron⛓\n20 String🕸️\n5 Batu 🪨`)
                    user.kayu -= 10
                    user.iron -= 5
                    user.batu -= 5
                    user.string -= 20
                    user.pickaxe += 1
                    user.pickaxedurability = 40
                    m.reply("Sukses membuat 1 pickaxe 🔨")
                    break
                case 'sword':
                    if (user.sword > 0) return m.reply('Kamu sudah memilik ini')
                    if (user.kayu < 10 || user.iron < 15) return m.reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :\n10 kayu🪵\n15 iron⛓️`)
                    user.kayu -= 10
                    user.iron -= 15
                    user.sword += 1
                    user.sworddurability = 40
                    m.reply("Sukses membuat 1 sword 🗡️")
                    break
                case 'pancingan':
                    if (user.pancingan > 0) return m.reply('Kamu sudah memilik ini')
                    if (user.kayu < 10 || user.iron < 2 || user.string < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :\n10 kayu🪵\n5 iron⛓\n20 String🕸️`)
                    user.kayu -= 10
                    user.iron -= 2
                    user.string -= 20
                    user.pancingan += 1
                    m.reply("Sukses membuat 1 Pancingan 🎣")
                    break
                case 'armor':
                    if (user.armor > 0) return m.reply('Kamu sudah memilik ini')
                    if (user.iron < 30 || user.diamond < 5) return m.reply(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :\n30 Iron ⛓️\n5 Diamond 💎`)
                    user.iron -= 30
                    user.diamond -= 5
                    user.armor += 1
                    user.armordurability = 50
                    m.reply("Sukses membuat 1 Armor 🛡️")
                    break
                case 'atm':
                    if (user.atm > 0) return m.reply('Kamu sudah memilik ini')
                    if (user.uang < 10000 || user.diamond < 6) return m.reply(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :\n10k Money 💹\n6 Diamond 💎`)
                    user.uang -= 10000
                    user.diamond -= 6
                    user.atm += 1
                    m.reply("Sukses membuat 1 Atm 💳")
                    break

                default:
                    return await conn.reply(m.chat, caption, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
            }
        } else if (/enchant|enchan/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
            switch (_type) {
                case 't':
                    break
                case '':
                    break

                default:
                    return conn.reply(m.chat, caption, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
            }
        }
    } catch (err) {
        m.reply("Error")
    }
}

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|chant)/i
handler.rpg = true
export default handler