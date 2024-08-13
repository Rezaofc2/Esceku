let handler = async (m, { conn }) => {
  try {
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    const res = `https://api.lolhuman.xyz/api/random/nsfw/booty?apikey=${global.lolkey}`
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['booty']
handler.tags = ['nsfw']
handler.premium = true

handler.command = /^booty$/i

export default handler