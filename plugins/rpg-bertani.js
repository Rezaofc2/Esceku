let handler = async (m, { conn }) => {
  let __timers = new Date() - global.db.data.users[m.sender].lastbertani;
  let _timers = 300000 - __timers;
  let timers = clockString(_timers);
   let user = global.db.data.users[m.sender]
   if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *#eat*`)
  let name = conn.getName(m.sender);
  
  if (new Date() - global.db.data.users[m.sender].lastbertani > 300000) {
    let money = Math.floor(Math.random() * 26000) + 24000
          let exp = Math.floor(Math.random() * 1700) + 300
          let limit = Math.floor(Math.random() * 15) + 5
    let stamina = `${Math.floor(Math.random() * 40)}`.trim();
    let stamina1 = (stamina * 1)

    var dimas = `
Anda sedang mempersiapkan ladang untuk menanam padi.
`;

    var dimas2 = `
Sekarang Anda sedang membajak sawah.
`;

    var dimas3 = `
Sekarang Anda telah menanam padi.
`;

    var dimas4 = `
mendapatkan hasil tani....
`;

    var hsl = `
• *P A Y D A Y*

◦ Money *${money}*
◦ Exp *${exp}*
◦ Limit *${limit}*

stamina -${stamina1}
${wm}
`;

    var dimas5 = `
*waktunya tani lagi😅...*
`;

    global.db.data.users[m.sender].uang += money
          global.db.data.users[m.sender].exp += exp
          global.db.data.users[m.sender].limit += limit
    global.db.data.users[m.sender].stamina -= stamina1

    setTimeout(() => {
      setTimeout(() => {
        m.reply(`${dimas5}`);
      }, 79200000);

      m.reply(`${hsl}`);
    }, 27000);

    setTimeout(() => {
      m.reply(`${dimas4}`);
    }, 25000);

    setTimeout(() => {
      m.reply(`${dimas3}`);
    }, 20000);

    setTimeout(() => {
      m.reply(`${dimas2}`);
    }, 15000);

    setTimeout(() => {
      m.reply(`${dimas}`);
    }, 10000);

    setTimeout(() => {
      m.reply("jalan ke ladang.");
    }, 0);
    user.lastbertani = new Date() * 1;
  } else
    conn.reply(
      m.chat,
      `Tunggu *${timers}* lagi sebelum Anda dapat bertani lagi`,
      m,
    );
};
handler.help = ["bertani"];
handler.tags = ["rpg"];
handler.command = ["bertani","tani"];
handler.register = true;
handler.rpg = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
