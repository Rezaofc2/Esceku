
let handler = async(m, { conn, text, command, isAdmin, isBotAdmin }) => {
	
//	let target = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
//	if (!m.quoted && !text) return m.reply(
//	"Tag or send the number target!"
//	);
	
	switch (command) { // Full Version
		case 'blacklist': case 'hitamkan': {
			if (!isAdmin) return dfail('admin', m, conn)
			if (!isBotAdmin) return dfail('botAdmin', m, conn)
			if (!m.quoted && !text) return m.reply(
			"Tag or send the number target!"
			);
			if (!text) return m.reply(
			"Input waktu!\nExample: .blacklist @user 5"
			);
			let Shiro_text = text.split(' ');
			let target = m.quoted ? m.quoted.sender : Shiro_text[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net";
			if (!global.db.data.chats[m.chat]?.blacklist) {
				global.db.data.chats[m.chat].blacklist = {
					target: {
						status: false,
						waktu: 0
					}
				}
			};
			if (target == conn.user.jid) {
				return m.reply("Tidak dapat memblacklist nomor bot!")
			}
			let Shiro_protek = Shiro_text[2] || Shiro_text[1] || Shiro_text[0] || 0
			let Shiro_onWA = await conn.onWhatsApp(target)
			let Shiro_find = Shiro_onWA.find(u => u.exists)
			if (!Shiro_find) return m.reply(
			`Nomor tidak terdaftar di whatsapp, \nExample Code : .blacklist @user waktu (1 = 1 jam)\nExample: .blacklist @user 5`
			);
			if (Shiro_protek?.includes('@')) { 
				return m.reply("Input waktu!\nExample: .blacklist @user 5")
			};
			let Shiro_info = Shiro_text[1] || Shiro_text[0] || 24
			let Shiro_waktu = 3600000 * Shiro_info + Date.now();
			try {
				await m.reply("Success blacklist nomor tersebut dari group!")
				.then(() => {
					global.db.data.chats[m.chat].blacklist[target] = {
						status: true,
						waktu: Shiro_waktu
					};
				});
			} catch (e) {
				m.reply(String(e))
			}
		};
		break;	
		case 'unblacklist': case 'putihkan': {
			if (!isAdmin) return dfail('admin', m, conn)
			if (text.includes('all') || text.includes('clear')) {
				let datachat = global.db.data.chats[m.chat]
				return m.reply("Succsessfully clear all user blacklist!")
				.then(() => {
					delete datachat.blacklist
				})
			};
			if (!m.quoted && !text) return m.reply(
			"Tag or send the number target!"
			);
			let target = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
			let datagrup = global.db.data.chats[m.chat]
		//	let data_find = dataUser.blacklist?.find(u => u?.nomor == target)
			let data_info = datagrup.blacklist[target]
			if (!data_info?.status) return m.reply("User tersebut tidak di blacklist!")
			await m.reply("Success unblacklist nomor tersebut dari group!")
			.then(() => {
				data_info.status = false
				data_info.waktu = 0
			});
		}
		break;
		case 'listblacklist': {
			try {
				let Shiro_data = global.db.data.chats[m.chat]
				let Shiro_obj = Object.entries(Shiro_data.blacklist)
				let Shiro_filter = Shiro_obj.filter(u => u[1].status).map(([key, value]) => {
					return { ...value, jid: key }
				});
				let Shiro_txt = "*Berikut Daftar Nomor Yang di Blacklist*\n" +
				"*Total:* " + Shiro_filter.length + "\n\n";
				Shiro_filter.forEach((v) => {
					Shiro_txt += `*◈ Number :* ${v.jid.split("@")[0]}\n`
					Shiro_txt += `*◈ Waktu :* ${msToTimez(v.waktu - Date.now() || 'not detect')}\n\n`
				})
				return m.reply(Shiro_txt)
			} catch (x) {
				m.reply("Tidak ada user yang di blacklist!")
				console.log(x.message)
			};
		}
		break;
	};
	handler.before = async(m) => {
		let datauser = global.db.data.chats[m.chat]
		if (!datauser.blacklist) {
			datauser.blacklist = {}
		};
		let data_obj = Object.entries(datauser.blacklist)
		let data_filter = data_obj.filter(u => u[1].status)
		.map(([key, value]) => {
			return { ...value, jid: key }
		});
		// Detect expired blacklist
		for (let entry of data_filter) {
			if (m.message && entry.jid && entry.status) {
				if (new Date() * 1 >= entry.waktu) {
					datauser.blacklist[entry.jid].status = false
					datauser.blacklist[entry.jid].waktu = 0
					let data_capt =`📲 *SYSTEM INFORMATION*\n\n*Hai @${entry.jid.split('@')[0]}*\nMasa blacklist kamu telah berakhir,\nSekarang kamu sudah bisa mengirim pesan!`
					// Update blacklist status
					await conn.reply(m.chat, data_capt, fkontak, {
						mentions: [entry.jid]
					});
				}
			}
		};
		// Delete chat user
		if (m.message && m.sender in datauser.blacklist) {
			if (m.message && datauser.blacklist[m.sender].status) {
				return conn.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						fromMe: false,
						id: m.id,
						participant: m.key.participant || m.sender
					}
				});
			}
		};
	}
}
handler.help = ['blacklist', 'unblacklist', 'listblacklist'];
handler.tags = ["group"];
handler.command = /^(blacklist|hitamkan|unblacklist|putihkan|listblacklist)$/i;

//handler.botAdmin = true;
//handler.admin = handler.rowner = true

handler.group = true;
export default handler; // For Script Esm
// module.exports = handler // For Script Cjs

function msToTime(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
    let h = isNaN(ms) ? '--' : Math.floor((ms % 86400000) / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor((ms % 3600000) / 60000);
    let s = isNaN(ms) ? '--' : Math.floor((ms % 60000) / 1000);
    return [h, ' *Hours*'].map(v => v.toString().padStart(2, '0')).join('');
}

function msToTimez(duration) {
	var milliseconds = parseInt((duration % 1000) / 100),
	seconds = Math.floor((duration / 1000) % 60),
	minutes = Math.floor((duration / (1000 * 60)) % 60),
	hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
	hours = (hours < 10) ? "0" + hours : hours
	minutes = (minutes < 10) ? "0" + minutes : minutes
	seconds = (seconds < 10) ? "0" + seconds : seconds
	return hours + " jam " + minutes + " menit " + seconds + " detik"
}