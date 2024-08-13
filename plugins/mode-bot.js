let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*• Example :* ${usedPrefix + command} *[on/off]*`;
  let chat = db.data.chats[m.chat];
  if (text === "off") {
    chat.mute = true;
    m.reply("Success Trun Off *[ Mute Mode ]*");
  } else if (text === "on") {
    chat.mute = false;
    m.reply("Success Trun On *[ Mute Mode ]*");
  } else throw `*• Example :* ${usedPrefix + command} *[on/off]*`;
};
handler.help = ["bot"].map((a) => a + "*[on/off]*");
handler.tags = ["group"];
handler.command = ["bot"];
handler.group = true;
handler.admin = true;
export default handler
