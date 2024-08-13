let handler = async (m, { conn, command }) => {
  try {	
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    const res = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${global.lolkey}`
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['feets', 'nsfwloli', 'futanari']
handler.tags = ['nsfw']
handler.premium = true;
handler.nsfw = true

handler.command = /^feets|nsfwloli|futanari|eroyuri$/i

export default handler