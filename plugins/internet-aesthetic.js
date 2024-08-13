let handler = async (m, { conn, command }) => {
let thumb = `https://api.botcahx.eu.org/api/wallpaper/aesthetic?apikey=${btc}`
let text = `nih kak`
    //conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
 //   conn.sendFile(m.chat, nyenye, 'kul.jpg', 'Tch', m) 
    conn.sendFile(m.chat, thumb, 'menu.jpg', `${text}`, m)
}
handler.help = ['aesthetic']
handler.tags = ['internet']
handler.command = /^(aesthetic)$/i
handler.limit = true
export default handler
