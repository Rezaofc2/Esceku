
let handler = async (m, { conn }) => {
  try {
	
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    const res = `https://api.lolhuman.xyz/api/random/nsfw/armpits?apikey=${global.lolkey}`
      await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);
  } catch (err) {
    console.log(err)
    conn.reply(m.chat, 'Error!', m)
  }
}
handler.help = ['armpits']
handler.tags = ['nsfw']
handler.premium = true
handler.command = /^armpits$/i

export default handler