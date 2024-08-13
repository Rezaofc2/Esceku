const { getDevice, generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch';
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    try {
    let res = await (await fetch(`https://raw.githubusercontent.com/ketchupmaze/AssistenYulaDB/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
conn.sendFile(m.chat, cita, 'pp.jpg', `*nih ${command}nya*`, m, false, { contextInfo: { mentionedJid: conn.parseMention(`*nih ${command}nya*`) }})

    } catch (e) {
    conn.reply(m.chat, eror, m)
    }
}
handler.command = handler.help = [
'akira', 
'akiyama', 
'anna', 
'asuna', 
'ayuzawa', 
'boruto', 
'chitanda', 
'chitoge', 
'deidara', 
'doraemon', 
'elaina', 
'emilia', 
'asuna', 
'erza', 
'gremory', 
'hestia', 
'hinata', 
'inori', 
'itachi', 
'itori', 
'kaga', 
'kagura', 
'kakasih', 
'kaori', 
'kaneki', 
'kosaki', 
'kotori', 
'kuriyama', 
'kuroha', 
'kurumi', 
'madara', 
'mikasa', 
'miku', 
'minato', 
'naruto', 
'natsukawa', 
'nezuko', 
'nishimiya', 
'onepiece', 
'pokemon',
'rem', 
'rize',
'sagiri',
'sakura', 
'sasuke',
'shina',
'shinka',
'shizuka',
'tomori',
'toukachan',
'tsunade',
'yatogami',
'yuki',
'waifu'
]
handler.limit = true;
export default handler

