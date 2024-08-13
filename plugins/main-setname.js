/***
 By RezaOffc
***/
let handler = async (m, {
    conn,
    usedPrefix,
    text,
    command
}) => {
if (!text) throw "masukkan nama\ncontoh: *#setnama reza*"
    var user = global.db.data.users[m.sender]

    if (user.name == user.name) {
        user.name = text
        m.reply(`Selamat berhasil set name menjadi ${text}`)
     }
}

handler.help = ['setname']
handler.tags = ['main']
handler.command = /^(setname|setnama)$/i
handler.register = true
export default handler