export async function before(m) {
  let user = global.db.data.users[m.sender];
  if (user && user.seller && user.sellerTime && (new Date() >= user.sellerTime)) {
    user.seller = false;
    user.sellerTime = 0;
    await m.reply('waktu seller panel kamu habis');
conn.reply(global.nomerown + '@s.whatsapp.net', `sellernya @${m.sender.split`@`[0]} udah habis nih`, null, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: '「 INFO BOS 」', body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
  }
};



