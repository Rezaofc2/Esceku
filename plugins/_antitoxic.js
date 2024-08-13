

let linkRegex = /(anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|go?blo?(k|g)|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|blo?(k|g)|mmk|kntl|kontol|kontl|ajg|anjg|anjing|Bangsat|bngst|puki|kon|anj|ytm|yatm|ytim|taek|bacot|bct|bact|bcot|bngsat|ktl|ppk|fuck|suki)$/i
export async function before(m, { isAdmin, isBotAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)

  if (chat.antiToxic && isGroupToxic) {
    await conn.sendMessage(m.chat, { delete: m.key })
  }
  return true
}


