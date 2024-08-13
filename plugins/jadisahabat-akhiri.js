let handler = async (m, { conn }) => {
  let ayg = global.db.data.users[m.sender]

  if(ayg.sahabat == ""){
    return conn.reply(m.chat,`Anda tidak memiliki sahabat.`,m)
  }
  
  let beb = global.db.data.users[global.db.data.users[m.sender].sahabat]

  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].sahabat.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].sahabat]
    }})
    ayg.sahabat = ""
  }

  if (m.sender == beb.sahabat){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].sahabat.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].sahabat]
    }})
    ayg.sahabat = ""
    beb.sahabat = ""
  }else {
    conn.reply(m.chat,`Anda tidak memiliki sahabat.`,m)
  }
}
handler.help = ['akhiri']
handler.tags = ['jadian']
handler.command = /^(akhiri)$/i
handler.group = true
handler.limit = true
handler.fail = null
export default handler