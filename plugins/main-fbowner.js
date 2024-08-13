let handler = async m => {
conn.reply(m.chat, fb, m) 
}
handler.help = ['fbowner']
handler.tags = ['main']
handler.command = /^(fbowner)$/i

export default handler