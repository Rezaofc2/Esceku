import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '• *Example :* .cocofun https://cocofun.com/xxxx', m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let kemii = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=${global.lolkey}&url=${text}`)
  let res = await kemii.json()
  let hasil = `Title: ${res.result.title}\nTag: ${res.result.tag}\nLike: ${res.result.likes}\nViews: ${res.result.views}\nUploader: ${res.result.uploader}\nDuration: ${res.result.duration}`
  conn.sendFile(m.chat, res.result.nowm, 'cocofun.mp4', done, m)
}
handler.help = ['cocofun'].map(v => v + ' *<url>*')
handler.tags = ['downloader']

handler.command = /^cocofun$/i
handler.premium = false

export default handler  