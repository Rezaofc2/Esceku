import fetch from 'node-fetch';
let handler = async (m, { conn, command }) => {
    conn.sendFile(m.chat, pickRandom(flaaa) + 'donasi', 'hasil.jpg', `*Pulsa :* _${pulsa}_
*Dana :* _${dana}_
*Gopay :* _${gopay}_
    
*DONASI DENGAN VIA SUBSCRIBE CHANNEL OWNER JUGA BOLEH*
Link : ${yt}
    
Trimakasih buat orang baik yg sudah berdonasi 😊

 *WhatsApp Admin*\n*Nomor:* https://wa.me/${nomerown}`, m)
}
handler.help = ['donasi']
handler.command = /^(donasi|donate)$/i
handler.tags = ['main']
export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}