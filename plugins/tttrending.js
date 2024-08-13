import fetch from 'node-fetch';
let handler = async (m, { conn, text, command }) => {
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let zila = `${pickRandom(['fyp','trending','viral'])}`
  const res = await fetch(`https://api.botcahx.eu.org/api/search/tiktoks?query=${zila}&apikey=${btc}`)

    const api = await res.json(); 

    const randomIndex = Math.floor(Math.random() * api.result.data.length);

    let video = api.result.data[randomIndex];
  let lop = `乂  *TIKTOK - TRENDING*
 
	◦  *Title :* ${video.title}
	◦  *Duration*: ${video.duration} seconds
	◦  *Author :* ${video.author.nickname}
	
${wm}`
  conn.sendFile(m.chat, video.play, 'tiktokt.mp4', lop, m)
}
handler.help = ['tiktoktrending']
handler.tags = ['downloader']

handler.command = /^tiktokt|tiktoktrending|tttrending$/i
handler.premium = false

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}