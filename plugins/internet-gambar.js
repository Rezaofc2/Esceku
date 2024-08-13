import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
    let res = await(await fetch(`https://github.com/ArifzynXD/database/raw/master/asupan/${command}.json`)).json()
    let img = res.getRandom()
    await conn.sendFile(m.chat, img.url, null, null, m, null)
}
handler.help = ['korea','china']
handler.tags = ['internet']
handler.command = /^(korea|china)$/i
handler.limit = true
export default handler

