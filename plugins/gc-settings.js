const { getDevice, generateWAMessageFromContent, proto, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { 
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
 return m.reply(`TYPE\n\n.gc open\n.gc close`)
}
handler.help = ['group *open / close*']
handler.tags = ['group', 'adminry']
handler.command = /^(gc|group)$/i

handler.admin = true
handler.botAdmin = true

export default handler