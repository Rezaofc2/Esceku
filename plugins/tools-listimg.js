import fs from 'fs';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let array = fs.readFileSync("./json/image.json");
  m.reply(`*List Image In Database :*\n==========================\n${JSON.parse(
    array,
  )
    .map((a, i) => `*${i + 1}.* ${a.name}`)
    .join("\n")}
==============================
Type *.getimg [number]* to get Image`);
};
handler.help = ["listimg"].map((a) => a + " *[get list image]*");
handler.tags = ["tools"];
handler.command = ["listimg"];
export default handler
