let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
	
  let ya = `╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• kontol : ${pickRandom(['ih item','Belang wkwk','bengkok kanan','bengkok kiri','gede','kecil','hitam'])}
┊• bentuk : ${pickRandom(['gendut kebanyakan coli','otot kntl kekar','berotot','tembem'])}
┃• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
╰═┅═━––––––๑`
conn.reply(m.chat, ya, m, { contextInfo: { mentionedJid: conn.parseMention(ya),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
}
handler.help = ['cekkontol <nama>']
handler.tags = ['fun']
handler.command = /^cekkontol/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}