
import fs from 'fs';
let handler = async(m, { conn, text }) => {
let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
    if (!text) throw 'Silahkan masukkan laporan'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*Nomor* : wa.me/${m.sender.split`@`[0]}\n*Pesan* : ${text}`
    conn.reply(nomerown + '@s.whatsapp.net', laporan, fdoc, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: '「 LAPORAN DARI USER 」', body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    let t = '✔️ Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi!'
    conn.reply(m.chat, t, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

export default handler
