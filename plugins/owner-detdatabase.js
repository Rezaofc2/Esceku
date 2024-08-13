


import fs from 'fs'
let handler = async (m, { conn, text }) => {
    conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['getdatabase']
handler.tags = ['owner']
handler.command = /^(getdatabase|getdb)$/i

handler.owner = true

export default handler