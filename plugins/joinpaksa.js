export async function before(m) {
  if (m.isBaileys || !m.sender || !m.text) return;
  let chat = global.db.data.chats[m.chat]
  if (chat.joinpaksa) {
  const groupCode = global.gcbot.split('/').pop();
  const { id } = await this.groupGetInviteInfo(groupCode);
  const data = (await this.groupMetadata(id)) || (await this.chats[id].metadata) || null
  if (!data) return;
  const isIdExist = data.participants.some(participant => participant.id === m.sender);
  global.db.data.chats[m.chat].isBanned = !isIdExist;
  if (!isIdExist) {
      const inviteCode = await this.groupInviteCode(id);
    const caption = `🤖 Silakan bergabung dengan grup bot terlebih dahulu untuk menggunakan layanannya.

Bergabunglah di sini: ${gcbot}`;
if (
    m.text.startsWith(".") ||
    m.text.startsWith("#") ||
    m.text.startsWith("!") ||
    m.text.startsWith("/") ||
    m.text.startsWith("\\/")
  )
    return await this.reply(m.chat, caption, m);
  }
}
  return true
}
  
// Dibuat Oleh @kasan Fixed By @Nayla