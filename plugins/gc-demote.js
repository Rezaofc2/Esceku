import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { teks, conn, isOwner, isAdmin, args }) => {
	if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
  if(m.quoted){
if(m.quoted.sender === ownerGroup || m.quoted.sender === conn.user.jid) return;
let usr = m.quoted.sender;
let nenen = await conn.groupParticipantsUpdate(m.chat, [usr], "demote"); return;
}
  if (!m.mentionedJid[0]) throw `tag yang mau diturunkan jabatannya`;
  let users = m.mentionedJid.filter(
    (u) => !(u == ownerGroup || u.includes(conn.user.jid))
  );
  for (let user of users)
    if (user.endsWith("@s.whatsapp.net"))
      await conn.groupParticipantsUpdate(m.chat, [user], "demote");
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
    conn.sendFile(m.chat, fs.readFileSync('./lib/sticker/berhasil.webp'), 'sticker.webp', '', m, null, {
  fileLength: '10000',
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      mediaUrl: yt,
      mediaType: 1,
      description: '',
      title: '',
      body: wm,
      thumbnail: await (await fetch (pp)).buffer(),
      sourceUrl: yt,
    }
  }
})
};

handler.help = ['demote @user']
handler.tags = ['group']
handler.command = /^(demo?te|member)$/i

handler.group = true
handler.botAdmin = true
handler.admin = true
handler.fail = null

export default handler