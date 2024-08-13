let handler = async (m, { conn, command }) => {
let thumb = `https://cataas.com/cat`
let text = `kucing`
    //conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
 //   conn.sendFile(m.chat, nyenye, 'kul.jpg', 'Tch', m) 
 await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
    conn.sendFile(m.chat, thumb, 'menu.jpg', `${text}`, m)
}
handler.help = ['kucing']
handler.tags = ['internet']
handler.command = /^(kucing)$/i
handler.limit = true
export default handler
