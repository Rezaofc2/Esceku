let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/elf?apikey=${global.lolkey}`, 'ditzofc.jpg', wm, m)
}
handler.help = ['elf']
handler.tags = ['anime']

handler.command = /^(elf)$/i
handler.premium = false
handler.register = true
handler.limit = true
export default handler