
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!user) throw 'You are not registered in the database'
  
    let ticketCoins = user.tiketcoin || 0
    m.reply(`🎟️ Your Coin Ticket: *${ticketCoins}*`)
  }
  
  handler.help = ['ticket']
  handler.tags = ['game']
  handler.command = /^ticket$/i
  
export default handler