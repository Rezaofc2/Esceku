export async function before(m) {
	let setting = global.db.data.settings[this.user.jid]
	if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime);
		let bio = `ᴀᴋᴛɪғ sᴇʟᴀᴍᴀ ${uptime} | ᴍᴏᴅᴇ: [ ${global.opts['self'] ? 'ᴩʀɪᴠᴀᴛᴇ' : setting.self ? 'ᴩʀɪᴠᴀᴛᴇ' : global.opts['gconly'] ? 'ɢᴄᴏɴʟʏ' : 'ᴩᴜʙʟɪᴄ'} ]`

		await this.updateProfileStatus(bio).catch(_ => _)
		setting.status = new Date() * 1
	}
}

function clockString(ms) {
  var d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  var h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  var m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  return [d, h, m].map(v => v.toString().padStart(2, 0) ).join(':')
}

// buatan FokusDotId (Fokus ID)