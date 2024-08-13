let handler = async (m, { args }) => {
  if (args.length !== 1) {
    throw 'Silakan masukkan jumlah uang yang ingin diubah menjadi poin! Contoh: .moneytopoin 1000'
  }
  let uang = parseInt(args[0])
  if (isNaN(uang) || uang <= 0) {
    throw 'Jumlah uang yang dimasukkan harus angka positif!'
  }
  let poinAwal = global.db.data.users[m.sender].uang || 0
  if (poinAwal < uang) {
    throw 'Maaf, kamu tidak memiliki cukup money untuk menconvert uang'
  }
  let fee = Math.floor(uang * 0.5)
  let poin = Math.floor(uang * 0.5)
  let message = `• Kamu menconvert uang senilai ${uang}\n`
  message += `• Dan kamu mendapatkan poin senilai ${poin}\n`
  message += `• Biaya fee kamu adalah ${fee}`
  let user = global.db.data.users[m.sender]
  if (!user) {
    user = { poin: 0 }
    global.db.data.users[m.sender] = user
  }
  user.poin = (user.poin || 0) + poin
  global.db.data.users[m.sender].uang -= uang
  global.db.write()
  m.reply(message)
}

handler.help = ['moneytopoin <jumlah>']
handler.tags = ['game']
handler.command = /^moneytopoin$/i
handler.register = true
handler.limit = true

export default handler

/*
  * DannTeam
  * ig: @dannalwaysalone
*/