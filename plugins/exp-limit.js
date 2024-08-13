let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let zilabaka = m.name
    let { name, pasangan, limit, exp, money, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
     let lim = global.db.data.users[who].limit;
     let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
    let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
let reza = `×  *Username* : ${name}
×  *Limit* : ${lim}
×  *level* : ${level}
×  *Status* : ${who.split`@`[0] == global.nomerown ? 'Developer' : premium ? 'Premium User' : global.db.data.users[who].level >= 1000 ? 'Elite User' : 'Free User'}`
await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
      await conn.reply(m.chat, reza, m, { contextInfo: { externalAdReply: {title: wm, body: 'buy premium? chat .owner', sourceUrl: yt, thumbnailUrl: pp }}})
}
handler.help = ['limit [@user]']
handler.tags = ['main']
handler.command = /^(limit)$/i
handler.register = true
export default handler