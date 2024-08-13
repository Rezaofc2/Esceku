

let linkRegex = /(wa.me)/i
export async function before(m, { isBotAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupWame = linkRegex.exec(m.text)

  if (chat.antiwame && isGroupWame) {
    await conn.sendMessage(m.chat, { delete: m.key })
  }
  return true
}

