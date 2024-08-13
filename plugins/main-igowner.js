let handler = async m => {
conn.reply(m.chat, ig, m) 
}
handler.help = ['igowner']
handler.tags = ['main']
handler.command = /^(igowner)$/i

export default handler