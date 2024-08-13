let handler = async (m, { conn, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `*Tag target !*`, m)

  if (!text && !m.quoted){
    user = m.sender
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    let orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    let orang = "Orang yang kamu tag"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    let orang = "Orang yang kamu tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("*Orang yang anda tag tidak terdaftar di Bot.*")
  }

  if (typeof global.db.data.users[global.db.data.users[user].sahabat] == "undefined" && global.db.data.users[user].sahabat != ""){
    return m.reply("*Pacar/gebetan target tidak terdaftar di ArieTube bot.*")
  }

  if (global.db.data.users[user].sahabat == "") {
    conn.reply(m.chat, `*kamu tidak memiliki sahabat dan tidak sedang menembak siapapun*\n\n*Ketik /jadisahabat @user untuk menembak seseorang*`, m)
  }else if (global.db.data.users[global.db.data.users[user].sahabat].sahabat != user){
    conn.reply(m.chat, `*kamu sedang digantung oleh @${global.db.data.users[user].sahabat.split('@')[0]} karena sedang tidak diterima atau di tolak*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].sahabat]
    }})
  }else {
    conn.reply(m.chat, `*kamu sedang bersahabat dengan @${global.db.data.users[user].sahabat.split('@')[0]} 🥳🥳*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].sahabat]
    }})
  }
}
handler.help = ['ceksahabat']
handler.tags = ['jadian']
handler.command = /^(ceksahabat)$/i
handler.limit = true
handler.group = true
handler.fail = null
export default handler