let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLinkkick && isGroupLink) {
    await m.reply(`*「ANTI LINK 」*\n\nTerdeteksi *${m.name}* Anda telah mengirimkan tautan grup!\n
Maaf kamu akan dikeluarkan dari grup ini sampai jumpa!`)
    if (isAdmin) return m.reply('*Eh maaf ya admin, tidak akan dikick. hehe..*')
    if (!isBotAdmin) return m.reply('*Bot bukan admin, gimana bisa kick orang _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK 」*\n\nPesanan ditolak, bot tidak akan ngekick Anda.\nKarena tautan grup itu sendiri')
    await conn.sendMessage(m.chat, { delete: m.key })
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}