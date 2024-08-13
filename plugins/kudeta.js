
import fs from 'fs';

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

let handler = async (m, { conn, usedPrefix, text, command }) => {
  let [_, code] = text.match(linkRegex) || [];
  if (!text)
    throw `*[ PERINGATAN !! ]*
_⚠️ Jangan salah gunakan fitur ini untuk kesenangan semata, karena fitur ini dapat membuat orang lain di rugikan, jangan salahkan membuat fitur ini jika ada pihak lain yang dirugikan_

contoh pemakaian: ${usedPrefix + command} https://chat.whatsapp.com`;
  if (!linkRegex)
    throw `*[ PERINGATAN !! ]*
_⚠️ Jangan salah gunakan fitur ini untuk kesenangan semata, karena fitur ini dapat membuat orang lain di rugikan, jangan salahkan membuat fitur ini jika ada pihak lain yang dirugikan_

contoh pemakaian: ${usedPrefix + command} https://chat.whatsapp.com`;
  const { key } = await conn.sendMessage(m.chat, {
    text: "*😂 OTW KUDETA GRUP NYA YGY*",
  });

  try {
    const res = await conn.groupAcceptInvite(code);
    const data = await conn.groupMetadata(res);

    const jid = await data.participants
      .filter((item) => item.id !== conn.user.jid && item.admin)
      .map((a) => a.id);
    const isAdmin = await data.participants
      .filter((item) => item.admin)
      .map((a) => a.id);
    const member = await data.participants
      .filter((item) => m.isBaileys || conn.user.jid !== item.id)
      .map((a) => a.id);

    const admin = jid
      .map(
        (a, index) =>
          `*${index + 1}.* wa.me/${a.split("@")[0]}?text=ADMIN+GOBLOK+😂😂😂`,
      )
      .join("\n");

    if (!isAdmin.includes(conn.user.jid))
      await conn.sendMessage(m.chat, {
        text: "*😂 GIMANA MAU KUDETA KALO GW BUKAN ADMIN*",
        edit: key,
      });

   

    let subjek = "😈😈 9999 KUDETA BY RYSBOT" + "\nGRUP AMPAS  GAKGUNA";
    await conn.groupUpdateSubject(res, subjek);

    let desk = `*😈😈 GRUP INI UDAH GW KUDETA*\n\n*[ 😈 LIST ADMIN TOLOL DI GRUP INI ]*\n${admin}\n\n_⚠️ Pesan Untuk admin grup sini, lu jangan suka nyari masalah sama orang kalo gak mau kena akibatnya, kasian gw sama mental lu 😂😂`;
    await conn.groupUpdateDescription(res, desk);

    await conn.groupSettingUpdate(res, "announcement");

    setTimeout(() => {
      conn.groupParticipantsUpdate(res, member, "remove");
    }, 3000);

    setTimeout(() => {
      conn.groupParticipantsUpdate(res, jid, "demote");
    }, 3000);
    await conn.sendMessage(res, {
      text: "😈 *TUGAS GW DISINI UDAH KELAR*\n\n```group ini emang pantes bubar 😂```",
    });

    setTimeout(() => {
      conn.groupLeave(res);
    }, 3000);

    await conn.sendMessage(m.chat, {
      text: "*TUGAS GW UDAH SELESAI*",
      edit: key,
    });
  } catch (e) {
    await conn.sendMessage(m.chat, {
      text: "*WOYLA FITUR KUDETA ERROR* " + e,
      edit: key,
    });
  }
};
handler.help = ["kudeta"];
handler.tags = ["owner"];
handler.command = /^kudeta$/i;
handler.owner = true;

export default handler

