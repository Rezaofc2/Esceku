let handler = async (m, { conn, text, usedPrefix, command }) => {
  const data = db.data.sticker;
  let result = "";
  let index = 1;
  for (const key in data) {
    result += `*${index}. ${data[key].text}*\n`;
    result += `• Locked : ${data[key].locked}\n`;
    result += `• Creator : ${data[key].creator}\n`;
    result += `• Jid : wa.me/${data[key].jid}\n`;
    result += `• Sticker : ${data[key].url}\n\n`;
    index++;
  }
  m.reply(result);
};
handler.help = ['listcmd']
handler.tags = ['database']
handler.command = ['listcmd']

export default handler