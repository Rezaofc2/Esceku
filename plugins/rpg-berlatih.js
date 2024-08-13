


let handler = async (m, { conn, text }) => {

    // Cek apakah pengguna sudah bertarung dalam 1 jam terakhir
try {
    let user = global.db.data.users[m.sender];

    // Cek apakah pengguna sudah bertarung dalam 1 jam terakhir
    if (new Date() - user.lastpractice < 3600000) {
      conn.reply(m.chat, '⏰ Anda hanya dapat berlatih sekali dalam 1 jam.', m);
      return;
    }
    // Lakukan latihan
    user.lastpractice = new Date() * 1

    // Hitung serangan pengguna (diubah sesuai kebutuhan)
    let userAttack = Math.floor(Math.random() * 50) + 10; // Serangan acak antara 50 hingga 149
    let userstamina = Math.floor(Math.random() * 50) + 10;
    let userexp = Math.floor(Math.random() * 10000) + 1000;

    // Kalkulasi penambahan kesehatan pengguna
    let healthIncrease = userAttack * 3;

    // Tambahkan kesehatan baru ke pengguna
    user.healt += healthIncrease;
    user.stamina += userstamina
    user.exp += userexp

    // Pesan hasil latihan
    let message = `Anda sedang berlatih dan mendapatkan peningkatan:\n\n`;
    message += `Exp pengguna sekarang: ${user.exp}\n`;
    message += `Kesehatan pengguna sekarang: ${user.healt}\n`;
    message += `Setamina pengguna sekarang: ${user.stamina}\n`;
    message += `Serangan yang dihasilkan: ${userAttack}\n`;
    message += `Anda dapat berlatih lagi dalam 1 jam.\n`;

    conn.reply(m.chat, message, m);
} catch (e) {
    console.log(e);
    conn.reply(m.chat, 'Error', m);
  }
}

handler.help = ['berlatih'];
handler.tags = ['rpg'];
handler.command = /^berlatih$/i;
handler.limit = true;
handler.fail = null;

handler.rpg = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '00' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '00' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '00' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}