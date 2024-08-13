let handler = async m => {
conn.reply(m.chat, yt, m) 
}
handler.help = ['ytowner']
handler.tags = ['main']
handler.command = /^(ytowner)$/i

export default handler