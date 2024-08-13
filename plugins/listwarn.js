let handler = async (m, { conn, isOwner }) => {
    let users = Object.entries(global.db.data.users).filter(user => user[1].warn)
    let caption = `

Total : ${users.length} Pengguna\n${users ? '\n' + users.map(([jid], i) => `
${isOwner ? '@' + jid.split`@`[0] : jid}〔 *${global.db.data.users[jid].warn}* 〕
`.trim()).join('\n') : ''}
`.trim()
    conn.reply(m.chat, caption, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['listwarn']
handler.tags = ['group']
handler.command = /^listwarn$/i
handler.group = true
export default handler
