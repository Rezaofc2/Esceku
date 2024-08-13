
let handler = async (m, { conn, args }) => {
    let user = global.db.data.users[m.sender]
    if (!user) throw 'Anda tidak terdaftar di database'
  
    if (!args[0] || !/^\d+$/.test(args[0])) {
      throw '*Example*: .ticketswap 1'
    }
  
    let ticketAmount = parseInt(args[0])
    let ticketCoins = user.tiketcoin || 0
    let exchangeRate = 1000
  
    if (ticketCoins < ticketAmount) {
      throw 'Tiket koin Anda tidak mencukupi'
    }
  
    let moneyToAdd = ticketAmount * exchangeRate
    user.uang += moneyToAdd
    user.tiketcoin -= ticketAmount
  
    m.reply(`✅ Anda telah menukar *${ticketAmount}* tiket koin menjadi money *${moneyToAdd}*`)
  }
  
  handler.help = ['ticketswap']
  handler.tags = ['game']
  handler.command = /^ticketswap|tikettomoney|tickettomoney/i
 export default handler 