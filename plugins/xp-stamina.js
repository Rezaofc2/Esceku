let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`stamina kamu adalah ${global.db.data.users[who].stamina}`)
}
handler.help = ['stamina [@user]']
handler.tags = ['rpg']
handler.command = /^(stamina)$/i
export default handler