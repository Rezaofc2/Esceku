export async function before(m) {
  let user = global.db.data.users[m.sender];
  if (user && user.premium && user.premiumTime && (new Date() >= user.premiumTime)) {
    user.premium = false;
    user.premiumTime = 0;
    await m.reply('waktu premium kamu habis');
conn.reply(global.nomerown + '@s.whatsapp.net', `premiumnya @${m.sender.split`@`[0]} udah habis nih`, null, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: '「 INFO BOS 」', body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
  }
};



