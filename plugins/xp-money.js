let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`money kamu adalah ${global.db.data.users[who].uang}`)
}
handler.help = ['money [@user]','uang [@user]']
handler.tags = ['rpg']
handler.command = /^(money|uang)$/i
export default handler