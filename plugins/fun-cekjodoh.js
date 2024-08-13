/*
*Plugin cek jodoh*
Recode by KiyoEditz.
Original bot: https://github.com/KiyoEditz/Elaina-MD

*Code (random mode):*
*/

let handler = async (m, { conn, text, mentionedJid, participants }) => {
    let members = participants.filter(p => p.id !== conn.user.jid && !p.isAdmin && !p.isSuperAdmin);

    if (members.length < 2) {
        return conn.reply(m.chat, 'Minimal harus ada 2 anggota di grup!', m);
    }
    let [user1, user2] = pickRandom(members, 2);

    let jodohReasons = [
        "Kalian berdua memiliki kesamaan yang luar biasa dan saling melengkapi.",
        "Hubungan kalian penuh dengan pengertian dan saling mendukung.",
        "Kalian memiliki chemistry yang kuat dan akan saling melengkapi.",
        "Kalian saling memahami satu sama lain tanpa perlu banyak kata.",
        "Kalian berdua selalu menemukan cara untuk membuat satu sama lain tersenyum.",
        "Kalian memiliki tujuan hidup yang sama dan saling mendukung.",
        "Kalian berdua memiliki rasa hormat yang besar satu sama lain.",
        "Kalian bisa saling mengandalkan dalam situasi apapun.",
        "Kalian selalu merasa nyaman dan aman saat bersama.",
        "Kalian berdua selalu tahu bagaimana membuat satu sama lain bahagia.",
        "Kalian memiliki ketertarikan yang sama dan dapat menikmatinya bersama.",
        "Kalian bisa saling melengkapi dalam banyak hal.",
        "Kalian selalu saling mendukung dan memberi semangat.",
        "Kalian berdua memiliki cara yang unik dalam menunjukkan cinta.",
        "Kalian berbagi banyak kenangan indah bersama.",
        "Kalian selalu menemukan cara untuk menyelesaikan masalah bersama.",
        "Kalian saling mengerti dan menerima kekurangan satu sama lain."
    ];

    let tidakReasons = [
        "Meskipun kalian baik, tapi kalian berdua mungkin tidak cocok bersama.",
        "Kalian mungkin lebih baik sebagai teman daripada pasangan.",
        "Perbedaan kalian terlalu besar untuk diatasi dalam hubungan romantis.",
        "Kalian mungkin memiliki visi hidup yang berbeda.",
        "Terlalu banyak perbedaan yang membuat hubungan kalian sulit.",
        "Kalian mungkin sulit menemukan kesamaan dalam hal penting.",
        "Kalian cenderung sering bertengkar dan sulit berkompromi.",
        "Kalian mungkin kurang memiliki kesamaan dalam nilai dan prinsip.",
        "Kalian mungkin lebih bahagia jika bersama orang lain.",
        "Perbedaan kepribadian kalian mungkin sulit untuk dijembatani.",
        "Kalian mungkin sulit berkomunikasi secara efektif.",
        "Kalian mungkin kurang bisa saling memahami kebutuhan satu sama lain.",
        "Kalian mungkin lebih baik menjalani hidup masing-masing.",
        "Kalian mungkin kurang memiliki kompatibilitas dalam jangka panjang.",
        "Kalian mungkin kurang memiliki kesamaan dalam hal penting.",
        "Kalian mungkin sulit untuk sepakat dalam hal penting."
    ];

    let result = pickRandom(["JODOH", "TIDAK"]);
    let reason = result === "JODOH" ? pickRandom(jodohReasons) : pickRandom(tidakReasons);
let ya = `
⬣───「 *CEK JODOH* 」───⬣
⬡ Pasangan 1: @${user1.id.split`@`[0]}
⬡ Pasangan 2: @${user2.id.split`@`[0]}
⬡ Hasil: ${result}
⬡ Alasan: ${reason}
⬣────────────────⬣
`.trim()
conn.reply(m.chat, ya, m, { contextInfo: { mentionedJid: conn.parseMention(ya),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: null, body: wm, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
}
handler.help = ['cekjodoh']
handler.command = /^cekjodoh$/i
handler.tags = ['fun']
handler.group = true
export default handler

function pickRandom(list, n = 1) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * list.length);
        result.push(list.splice(index, 1)[0]);
    }
    return result;
}