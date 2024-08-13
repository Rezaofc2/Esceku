const handler = async (m, {
    conn,
    command,
    args,
    usedPrefix
}) => {
    try {
        let user = global.db.data.users[m.sender];
        let pancingan = user.pancingan * 1;
        let pickaxe = user.pickaxe * 1;
        let sword = user.sword * 1;
        let armor = user.armor * 1;
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
        let type = (args[0] || '').toLowerCase();
        let prefix = usedPrefix;

        let lmao1 = `Gunakan Format *${usedPrefix}${command} [type]*
contoh *${usedPrefix}${command} sword*
*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')} pancingan
${rpg.emoticon('pickaxe')} Pickaxe
${rpg.emoticon('sword')} Sword
${rpg.emoticon('armor')} Armor
`.trim();

        switch (type) {
            case 'pancingan':
                if (pancingan == 0) {
                    m.reply(`anda belum memiliki *🎣FishingRod*\nuntuk mendapatkannya ketik *${usedPrefix}craft pancingan*`);
                } else if (pancingan > 9) {
                    m.reply(`*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`);
                } else {
                    let _kayu = pancingan * 25;
                    let _string = pancingan * 15;
                    let _money = pancingan * 10000;
                    if (user.kayu < _kayu || user.string < _string || user.uang < _money) {
                        m.reply(`Material kamu kurang!!${user.kayu < _kayu ? `\n${rpg.emoticon('kayu')}Kayu Kamu Kurang *${_kayu - user.kayu}*` : ''}${user.string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - user.string}*` : ''}${user.uang < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - user.uang}*` : ''}`);
                    } else {
                        user.pancingan += 1;
                        user.kayu -= _kayu;
                        user.string -= _string;
                        user.uang -= _money;
                        user.fishingroddurability = 0;
                        user.fishingroddurability += pancingan * 50;
                        m.reply(`Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`);
                    }
                }
                break;
            case 'pickaxe':
                if (pickaxe == 0) {
                    m.reply(`anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*\nuntuk memilikinya ketik *${usedPrefix}craft pickaxe*`);
                } else if (pickaxe > 5) {
                    m.reply(`*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max`);
                } else {
                    let __batu = pickaxe * 25;
                    let __kayu = pickaxe * 15;
                    let __money = pickaxe * 15000;
                    if (user.batu < __batu || user.kayu < __kayu || user.uang < __money) {
                        m.reply(`Material Anda Kurang!!${user.batu < __batu ? `\n${rpg.emoticon('batu')}Batu kamu kurang *${__batu - user.batu}*` : ''}${user.kayu < __kayu ? `\n${rpg.emoticon('kayu')}Kayu kamu kurang *${__kayu - user.kayu}*` : ''}${user.uang < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - user.uang}*` : ''}`);
                    } else {
                        user.pickaxe += 1;
                        user.kayu -= __kayu;
                        user.batu -= __batu;
                        user.uang -= __money;
                        user.pickaxedurability = 0;
                        user.pickaxedurability += pickaxe * 50;
                        m.reply(`Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`);
                    }
                }
                break;
            case 'sword':
                if (sword == 0) {
                    m.reply(`anda belum memiliki *${rpg.emoticon('sword')}Sword*\nuntuk memilikinya ketik *${usedPrefix}craft sword*`);
                } else if (sword > 5) {
                    m.reply(`*${rpg.emoticon('sword')}Sword* kamu sudah level max`);
                } else {
                    let _iron = sword * 25;
                    let ___kayu = sword * 15;
                    let ___money = sword * 10000;
                    if (user.iron < _iron || user.kayu < ___kayu || user.uang < ___money) {
                        m.reply(`Material Anda Kurang!!${user.iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - user.iron}*` : ''}${user.kayu < ___kayu ? `\n${rpg.emoticon('kayu')}Kayu kamu kurang *${___kayu - user.kayu}*` : ''}${user.uang < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - user.uang}*` : ''}`);
                    } else {
                        user.sword += 1;
                        user.iron -= _iron;
                        user.kayu -= ___kayu;
                        user.uang -= ___money;
                        user.sworddurability = 0;
                        user.sworddurability += sword * 50;
                        m.reply(`Succes mengupgrade *${rpg.emoticon('sword')}Sword*`);
                    }
                }
                break;
                case 'armor':
                if (sword == 0) {
                    m.reply(`anda belum memiliki *${rpg.emoticon('armor')}Armor*\nuntuk memilikinya ketik *${usedPrefix}craft armor*`);
                } else if (armor > 5) {
                    m.reply(`*${rpg.emoticon('armor')}Armor* kamu sudah level max`);
                } else {
                    let _iron = armor * 15;
                    let ___money = armor * 10000;
                    if (user.iron < _iron || user.uang < ___money) {
                        m.reply(`Material Anda Kurang!!${user.iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - user.iron}*` : ''}${user.uang < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - user.uang}*` : ''}`);
                    } else {
                        user.armor += 1;
                        user.iron -= _iron;
                        user.uang -= ___money;
                        user.armordurability = 0;
                        user.armordurability += armor * 50;
                        m.reply(`Succes mengupgrade *${rpg.emoticon('armor')}Armor*`);
                    }
                }
                break;
            default:
                conn.reply(m.chat, lmao1, m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
};

handler.help = ['upgrade'];
handler.tags = ['rpg'];
handler.command = /^(up(grade)?)$/i;
handler.fail = null;

export default handler