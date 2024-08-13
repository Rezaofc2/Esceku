let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
	
 let ya = `╭━━━━°「 *Memek ${text}* 」°
┃
┊• Nama : ${text}
┃• memek : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
┊• lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`
conn.reply(m.chat, ya, m, { contextInfo: { mentionedJid: conn.parseMention(ya),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
}
handler.help = ['cekmemek <nama>']
handler.tags = ['fun']
handler.command = /^cekmemek/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
