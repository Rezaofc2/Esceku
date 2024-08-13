let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`nyawa kamu adalah ${global.db.data.users[who].healt}`)
}
handler.help = ['nyawa [@user]']
handler.tags = ['rpg']
handler.command = /^(nyawa)$/i
export default handler