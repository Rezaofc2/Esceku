/***
 By RezaOffc
***/
let handler = async (m, {
    conn,
    usedPrefix,
    text,
    command
}) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    if (!text) return conn.reply(m.chat, 'tag orangnya om', m)
    var user = global.db.data.users[who]

    if (user.title == user.title) {
        user.title = 0
        m.reply(`berhasil menghapus title @${who.split`@`[0]}`)
     }
}

handler.help = ['deltitle']
handler.tags = ['owner']
handler.command = /^(deltitle)$/i
handler.rowner = true
export default handler