let handler = async (m, { conn, participants }) => {
	await conn.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }});
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = pickRandom(hwaifu)
	let member = participants.map(u => u.id);
	let kontol = {};
	for (let i = 0; i < member.length; i++) {
		if (typeof global.db.data.users[member[i]] != 'undefined' && member[i] != conn.user.jid && member[i] != conn.user.jid.split('@')[0] + '@s.whatsapp.net') {
			kontol[member[i]] = {
				bank: global.db.data.users[member[i]].bank,
				level: global.db.data.users[member[i]].level,
				limit: global.db.data.users[member[i]].limit
			};
		}
	}
	let bank = Object.entries(kontol).sort((a, b) => b[1].bank - a[1].bank);
	let limit = Object.entries(kontol).sort((a, b) => b[1].limit - a[1].limit);
	let rankbank = bank.map(v => v[0]);
	let rankLimit = limit.map(v => v[0]);
	let ismoney = Math.min(10, bank.length);
	let isLimit = Math.min(10, limit.length);
	let teks = `*[ 🚩 ] T O P - L O C A L*\n`;
	teks += `*[ 🏆 ] You : ${rankbank.indexOf(m.sender) + 1}* of *${member.length}*\n`;
	teks += `*[ 🔥 ] Group :* ${await conn.getName(m.chat)}\n\n`;
	teks += bank.slice(0, ismoney).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + '\n   ◦  *Bank : ' + data.bank + '*\n   ◦  *Level️ : ' + data.level + '*').join('\n');
	teks += `\n\nSimple Bot Menu © RezaOffc`;
	conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: conn.parseMention(teks),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
};

handler.command = /^toplokal|toplocal$/i
handler.tags = ["rpg"];
handler.help = ["toplocal"];
handler.register = true;
handler.group = true;

handler.rpg = true
export default handler

function formatNumber(num) {
	let formatted = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	return formatted;
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}