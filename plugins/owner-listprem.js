let handler = async (m, {
	conn,
	text,
	usedPrefix
}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
	let response = "•  PREMIUM MEMBERSHIP\n\n";
	let totalPremium = 0;

	for (let user in global.db.data.users) {
		if (global.db.data.users[user].premium) {
			let number = user.split("@")[0];
			let name = global.db.data.users[user].name || "";
			let days = Math.abs(Math.floor((global.db.data.users[user].premiumTime - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[user].premiumTime - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[user].premiumTime - new Date()) / (60 * 1000))) % 60;

			response += `◦  *@${number}*\n╭  ◦ ${name} \n│  ${days} Hari\n│  ${hours} Jam\n╰  ${minutes} Menit\n\n`;

			totalPremium++;
		}
	}

	response += `◦   Total Premium : *${totalPremium}*\n`;
	response += `mau upgrade premium? Silahkan hubungi: *@${nomerown}* :)`;

	conn.reply(m.chat, response, m, { contextInfo: { mentionedJid: conn.parseMention(response),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}

handler.command = ['listprem']
handler.tags = ['info']
export default handler