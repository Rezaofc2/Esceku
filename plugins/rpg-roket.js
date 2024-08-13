let handler = async (m, { conn }) => {
  let __timers = new Date() - global.db.data.users[m.sender].lastroket;
  let _timers = 300000 - __timers;
  let timers = clockString(_timers);
  let name = conn.getName(m.sender);
  let user = global.db.data.users[m.sender];
  if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *#eat*`)
  

  if (new Date() - global.db.data.users[m.sender].lastroket > 300000) {
   let ngerok1 = `${Math.floor(Math.random() * 10)}`
        let ngerok2 = `${Math.floor(Math.random() * 10)}`
        let ngerok4 = `${Math.floor(Math.random() * 5)}`
        let ngerok3 = `${Math.floor(Math.random() * 10)}`
        let ngerok5 = `${Math.floor(Math.random() * 10)}`
    let string = `${Math.floor(Math.random() * 50)}`
    let iron = `${Math.floor(Math.random() * 20)}`.trim()
    let batu = `${Math.floor(Math.random() * 50)}`.trim()
        let stamina = `${Math.floor(Math.random() * 40)}`

    let ngrk1 = (ngerok1 * 2)
        let ngrk2 = (ngerok2 * 10)
        let ngrk3 = (ngerok3 * 1)
        let ngrk4 = (ngerok4 * 15729)
        let ngrk5 = (ngerok5 * 120)
        let stamina1 = (stamina * 1)

        var zero1 = `${ngrk1}`
        var zero2 = `${ngrk2}`
        var zero3 = `${ngrk3}`
        var zero4 = `${ngrk4}`
        var zero5 = `${ngrk5}`
        var stamina2 = `${stamina1}`

    var dimas = `
🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`;

    var dimas2 = `
🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`;

    var dimas3 = `
🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`;

    var dimas4 = `
🌕🚀

➕ Sukses Mendarat.... 👨‍🚀
`;
var hsl = `
*—[ Hasil Ngroket ${name} ]—*
 ➕ Uang = [ ${zero4} ]
 ➕ Exp = [ ${zero5} ] 		 
 ➕ Batu = [ ${batu} ] 		 
 ➕ Iron = [ ${iron} ] 		 
 ➕ String = [ ${string} ] 		 
 ➕ Mendarat Selesai = +1
 
stamina -${stamina2} 
`

    var dimas5 = `
*👋HALLO, Waktunya misi Ke bulan Lagi kawan.*
`;

        global.db.data.users[m.sender].uang += ngrk4
        global.db.data.users[m.sender].exp += ngrk5
        global.db.data.users[m.sender].roket += 1
        global.db.data.users[m.sender].string += string * 1
        global.db.data.users[m.sender].iron += iron * 1
        global.db.data.users[m.sender].batu += batu * 1
        global.db.data.users[m.sender].stamina -= stamina2
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
      m.reply("Mempersiapkan Roket🚀");
    }, 0);
    user.lastroket = new Date() * 1;
  } else
    conn.reply(
      m.chat,
      `Sepertinya Anda Sudah Kecapean Silahkan Istirahat Dulu sekitar\n🕔 ${timers}`,
      m,
    );
};
handler.help = ["roket"];
handler.tags = ["rpg"];
handler.command = ["roket"];
handler.register = true;
handler.rpg = true

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    "\n" + d,
    " *Days ☀️*\n ",
    h,
    " *Hours 🕐*\n ",
    m,
    " *Minute ⏰*\n ",
    s,
    " *Second ⏱️* ",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}