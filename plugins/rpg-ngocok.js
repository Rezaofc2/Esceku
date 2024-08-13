let handler = async (m, { conn }) => {
  let __timers = new Date() - global.db.data.users[m.sender].lastngocok;
  let _timers = 300000 - __timers;
  let timers = clockString(_timers);
  let name = conn.getName(m.sender);
  let user = global.db.data.users[m.sender];
  if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *#eat*`)
  let waifu = [
    "yaemiko",
    "hutao",
    "tsunade",
    "miku",
    "nino",
    "yotsuba",
    "ichika",
    "uzaki",
    "sagiri",
    "mamako oosuki",
    "yui",
    "akeno",
    "lalatina",
    "megumin",
    "elaina",
  ];
  if (new Date() - global.db.data.users[m.sender].lastngocok > 300000) {
    let randomaku1 = `${Math.floor(Math.random() * 10)}`;
    let randomaku2 = `${Math.floor(Math.random() * 10)}`;
    let randomaku4 = `${Math.floor(Math.random() * 5)}`;
    let randomaku3 = `${Math.floor(Math.random() * 10)}`;
    let anak = `${Math.floor(Math.random() * 5)}`
    let randomaku5 = `${Math.floor(Math.random() * 10)}`
    let stamina = `${Math.floor(Math.random() * 40)}`.trim();

    let rbrb1 = randomaku1 * 2;
    let rbrb2 = randomaku2 * 10;
    let rbrb3 = randomaku3 * 1;
    let rbrb4 = randomaku4 * 15729;
    let rbrb5 = randomaku5 * 20000;
    let lee = (anak * 1)
    let stamina1 = (stamina * 1)

    var zero1 = `${rbrb1}`;
    var zero2 = `${rbrb2}`;
    var zero3 = `${rbrb3}`;
    var zero4 = `${rbrb4}`;
    var zero5 = `${rbrb5}`;

    var dimas = [
      `
memutup pintu kamar
`,
      `
memulaia ngocok...
`,
      `*Ah ah ah kimochi
`,
      `Ah Ah Ambtukan 😩💦`,
      `*—[ Hasil ngocok ]—*
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 
 
stamina -${stamina1}
${wm}
`,
    ];

    global.db.data.users[m.sender].uang += rbrb4;
    global.db.data.users[m.sender].exp += rbrb5;    
    global.db.data.users[m.sender].stamina -= stamina1

    let { key } = await conn.sendMessage(
      m.chat,
      { text: "jalan ke kamar.." },
      { quoted: m },
    );
    await conn.delay(3000);
    for (let i of dimas) {
      await conn.sendMessage(m.chat, { text: i, edit: key }, { quoted: m });
    }
    user.lastngocok = new Date() * 1;
  } else
    conn.reply(
      m.chat,
      `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`,
      m,
    );
};
handler.help = ["ngocok"];
handler.tags = ["rpg"];
handler.command = ["ngocok"];
handler.register = true;
handler.limit = true;
handler.rpg = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}