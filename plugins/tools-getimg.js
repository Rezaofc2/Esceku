import fs from 'fs';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `*• Example :* ${usedPrefix + command} *[number]*\nGet List image Type *.listimg*`;
  let array = JSON.parse(fs.readFileSync("./json/image.json"));
  await conn.sendFile(m.chat, array[text - 1].url, null, `*• Result Form :* ${array[text - 1].name}`, m, null)
};
handler.help = ["getimg"].map((a) => a + " *[number]*");
handler.tags = ["tools"];
handler.command = ["getimg"];
export default handler
