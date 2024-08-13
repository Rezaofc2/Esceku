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
    let [tag, title] = text.split `|`

    if (!tag) return conn.reply(m.chat, '_Contoh : .titlein @6281395861695|kangcoli_', m)
    if (!title) return conn.reply(m.chat, '_Contoh : .titlein @6281395861695|kangcoli_', m)
    var user = global.db.data.users[who]

    if (user.title == "") {
        user.title = title
        m.reply(`Selamat @${who.split`@`[0]} anda mendapatkan title ${title} dari owner`)
     } else if (user.title) {
        m.reply(`Dia Sudah Punya title ${user.title} tolong hapus dulu`)
    }
}

handler.help = ['titlein']
handler.tags = ['owner']
handler.command = /^(titlein)$/i
handler.rowner = true
export default handler