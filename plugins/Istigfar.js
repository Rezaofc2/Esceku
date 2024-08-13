const handler = async (m, {
    conn,
    text
}) => {
    let user = global.db.data.users[m.sender]
    if (!user.warning) throw 'Kamu tidak memiliki peringatan (warning)!'

    if (user.lastIstigfar && user.lastIstigfar + 3600000 > Date.now()) {
        throw `Tunggu setelah ${msToTime(user.lastIstigfar + 3600000 - Date.now())}`
    }

    user.warning = Math.max(0, user.warning - 1)
    m.reply(`Sisa peringatan (warning) kamu: ${user.warning} / 5`)

    if (user.warning === 0) {
        m.reply('Hati-hati! Ini adalah peringatan terakhir kamu. Jika kamu melanggar lagi, kamu akan dikenai sanksi.')
    }

    user.lastIstigfar = Date.now()

    setTimeout(() => {
        conn.reply(m.chat, '⏰ Waktunya menggunakan perintah lagi!\nKetik *.maaf* untuk mengurangi warning.', m);
    }, 3600000);
}

handler.command = /^(astagh?fir(ullah)?|maaf)$/i
handler.limit = true

export default handler

function msToTime(duration) {
    const minutes = Math.floor(duration / (1000 * 60))
    const seconds = Math.floor((duration / 1000) % 60)
    return `${minutes} menit ${seconds} detik`
}