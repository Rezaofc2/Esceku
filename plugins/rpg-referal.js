import crypto from 'crypto'

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
 }
 
const mo_first_time = 3000
const mo_link_creator = 20000
const mo_bonus = {
    5: 45000,
   10: 150000,
   20: 300000,
   50: 1500000,
  100: 15000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    let extra2 = mo_bonus[count] || 0
    users[link_creator].uang += mo_link_creator + extra2
    users[m.sender].uang += mo_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Selamat!
+${xp_first_time} XP dan +${mo_first_time} MONEY
`.trim())
    m.reply(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP dan +${mo_link_creator + extra2} MONEY
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `Dapatkan 
${xp_first_time} XP
${mo_first_time} MONEY
untuk yang menggunakan link/kode referal dibawah ini

Referal Code: *${code}*

${command_link}
`.trim()
    m.reply(`Dapatkan
${xp_link_creator} XP
${mo_link_creator} MONEY 
untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

MONEY
5 Orang = Bonus 45000
10 Orang = Bonus 150000
20 Orang = Bonus 300000
50 Orang = Bonus 1500000
100 Orang = Bonus 15000000

EXP
${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp}`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['main']

handler.command = ['ref']

handler.register = true

export default handler