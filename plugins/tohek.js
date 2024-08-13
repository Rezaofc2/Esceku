import createHash from 'crypto';

const egvuaxrl = async (m, { conn, text, args, command }) => {
  if (!text) throw 'Teksnya mana?';

  switch (command) {
    case "tohex":
      const hex = Buffer.from(text).toString('hex');
      m.reply(`Teks Asli :\n${text}\nHex :\n${hex}`);
      break;

    case "dechex":
      const decodedText = Buffer.from(text, 'hex').toString();
      m.reply(`Hex : \n${text}\nTeks Asli :\n${decodedText}`);
      break;

    case "decbase":
      const decBase64 = Buffer.from(text, 'base64').toString('utf-8');
      m.reply(`Original Text :\n${decBase64}`);
      break;

    case "tobase":
      const base64 = Buffer.from(text).toString('base64');
      m.reply(`Teks Asli :\n${text}\nBase64 :\n${base64}`);
      break;

    case "binary":
      if (/^[01] $/.test(text)) {
        const convertedText = text
          .match(/.{1,8}/g)
          .map((byte) => String.fromCharCode(parseInt(byte, 2)))
          .join('');
        m.reply(`Teks : ${convertedText}`);
      } else {
        const convertedText = text
          .split('')
          .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
          .join('');
        m.reply(`Binary : ${convertedText}`);
      }
      break;

    default:
      throw `Command tidak ditemukan!`;
      break;
  }
};

egvuaxrl.help = ["tohex", "tobase", "dechex", "decbase", "binary"];
egvuaxrl.tags = ['tools'];
egvuaxrl.command = /^(tohex|dechex|decbase|tobase|binary)$/i;

export default egvuaxrl