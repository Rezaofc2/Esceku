let handler = async (m, { conn }) => {
  try {
  	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    const res = `https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${global.lolkey}`
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['ecchi']
handler.tags = ['nsfw']
handler.premium = true
handler.command = /^ecchi$/i
export default handler