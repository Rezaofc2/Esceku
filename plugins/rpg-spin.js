let handler = async (m, { args }) => {
  if (args.length !== 1) {
    throw 'Silakan masukkan total poin yang ingin dipertaruhkan! Contoh: .spin 1000'
  }
  let bet = parseInt(args[0])
  if (isNaN(bet) || bet < 1000) {
    throw 'Total poin yang ingin dipertaruhkan harus lebih dari atau sama dengan 1000!'
  }

  let message = ''
  let poin = global.db.data.users[m.sender].poin
  let user = global.db.data.users[m.sender]
  let poinAwal = global.db.data.users[m.sender].uang || 0
  let pointai = global.db.data.users[m.sender].poin || 0
  let aqua = global.db.data.users[m.sender].poin
  if (user.uang < -1 ) {
    throw 'Maaf, kamu sedang mempunyai hudang tolong lunasin dulu.'
    }
  if (pointai < bet) {
    throw 'Maaf, kamu tidak memiliki cukup poin untuk memainkan game spin \n KETIK: *.moneytopoin* \nuntuk mendapatkan poin.'
  }
  let poinAkhir = poinAwal - bet
  let spinResult = [
    { value: 0, sign: '-' },
    { value: 0, sign: '-' },
    { value: 0, sign: '-' }
  ]

  let winProbabilities = [
    { value: 80, sign: '+' },
    { value: 80, sign: '+' },
    { value: 20, sign: '+' }
  ]

  for (let i = 0; i < spinResult.length; i++) {
    let rand = Math.floor(Math.random() * 100) + 1
    let winProb = winProbabilities[i].value
    let sign = winProbabilities[i].sign
    if (rand <= winProb) {

      let winAmount = Math.floor(Math.random() * 5000) + 1000
      if (i === 2) {

        winAmount = Math.floor(Math.random() * 10000) + 10000
      }
      poinAkhir += winAmount
      spinResult[i].value = winAmount
      spinResult[i].sign = '+'
    } else {

      let loseAmount = Math.floor(Math.random() * 5000) + 1000
      poinAkhir -= loseAmount
      spinResult[i].value = loseAmount
    }
  }

  if (poinAkhir < 0) {
    poinAkhir = 0
  }

  message += 'Hasil Spin Kamu Adalah\n\n'
  for (let i = 0; i < spinResult.length; i++) {
    let value = spinResult[i].value
    let sign = spinResult[i].sign
    message += `    ${sign} ${value.toString().padStart(7)}\n`
  }
  message += '\n• Total : ' + (poinAkhir - poinAwal).toString()
  message += '\n\nmoney kamu sekarang: ' + poinAkhir.toString()
  message += `\n\npoin spin: -${bet}`

  global.db.data.users[m.sender].uang = poinAkhir
  global.db.data.users[m.sender].poin  -= bet
  global.db.write()

  await new Promise(resolve => setTimeout(resolve, 3000))

  m.reply(message)
}

handler.help = ['spin <total poin>']
handler.tags = ['game']
handler.command = /^spin$/i
handler.register = true
handler.limit = true

handler.rpg = true
export default handler

/*
  * DannTeam
  * ig: @dannalwaysalone
*/