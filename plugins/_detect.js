const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
export async function before(m) { 
	if (!m.messageStubType || !m.isGroup) return;
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
	let user = global.db.data.users[m.sender]
	let edtr = `@${m.sender.split`@`[0]}`
	let namagc = `${edtr} mengubah Subject Grup menjadi : *${m.messageStubParameters[0]}*`
	let ppgc = `${edtr} telah mengubah icon grup.`
	let resetlink = `${edtr} *mereset* link grup!`
	let dsk =  `${edtr} mengubah deskripsi grup.\n\n${m.messageStubParameters[0]}`
	let adminonly = `${edtr} telah mengatur agar *${m.messageStubParameters[0] == 'on' ? 'hanya admin' : 'semua peserta'}* yang dapat mengedit info grup.`
	let bukagc = `${edtr} telah *${m.messageStubParameters[0] == 'on' ? 'menutup' : 'membuka'}* grup!\nSekarang ${m.messageStubParameters[0] == 'on' ? 'hanya admin yang' : 'semua peserta'} dapat mengirim pesan.`
	let promote = `${edtr} telah menjadikan @${m.messageStubParameters[0].split`@`[0]} sebagai admin.`
	let demote = `${edtr} telah memberhentikan @${m.messageStubParameters[0].split`@`[0]} dari admin.`
	let pesansementara = `${edtr} *menonaktifkan* pesan sementara.`
	let pesansementara2 = `${edtr} mengubah durasi pesan sementara menjadi *@${m.messageStubParameters[0]}*`
	//
	let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg');
 let fkontak = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: `status@broadcast` } : {})
        },
        message: {
            'contactMessage': {
                'displayName': wm,
                'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${who.split('@')[0]}:${who.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
                'jpegThumbnail': pp,
                thumbnail: pp,
                sendEphemeral: true
            }
        }
    };
	//
	if (m.messageStubType == 21) {
	conn.reply(m.chat, namagc, fkontak, { contextInfo: { mentionedJid: conn.parseMention(namagc),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 22) {
		conn.reply(m.chat, ppgc, fkontak, { contextInfo: { mentionedJid: conn.parseMention(ppgc),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
		conn.reply(m.chat, resetlink, fkontak, { contextInfo: { mentionedJid: conn.parseMention(resetlink),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 24) {
		conn.reply(m.chat, dsk, fkontak, { contextInfo: { mentionedJid: conn.parseMention(dsk),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 25) {
		conn.reply(m.chat, adminonly, fkontak, { contextInfo: { mentionedJid: conn.parseMention(adminonly),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 26) {
		conn.reply(m.chat, bukagc, fkontak, { contextInfo: { mentionedJid: conn.parseMention(bukagc),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 29) {
		conn.reply(m.chat, promote, fkontak, { contextInfo: { mentionedJid: conn.parseMention(promote),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 30) {
		conn.reply(m.chat, demote, fkontak, { contextInfo: { mentionedJid: conn.parseMention(demote),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 72) {
		conn.reply(m.chat, pesansementara2, fkontak, { contextInfo: { mentionedJid: conn.parseMention(pesansementara2),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else if (m.messageStubType == 123) {
		conn.reply(m.chat, pesansementara, fkontak, { contextInfo: { mentionedJid: conn.parseMention(pesansementara),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: 'AUTO DETECT', body: null, sourceUrl: yt, thumbnailUrl: 'https://telegra.ph/file/944f4b8e973fb0f9b6413.jpg' }}})
	} else {
		console.log({
			messageStubType: m.messageStubType,
			messageStubParameters: m.messageStubParameters,
			type: WAMessageStubType[m.messageStubType],
		});
	}
}
