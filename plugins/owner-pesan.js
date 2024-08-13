import fetch from 'node-fetch';
import fs from 'fs';

let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim\n_Contoh : .pesan 6281395861695|Halo Bang_', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya\n_Contoh : .pesan 6281395861695|Halo Bang_', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]
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
    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*Pesan :* ${pesan}\n\n*Mau balas? silahkan ketik #balas*`

      conn.reply(korban + '@s.whatsapp.net', spam1, fdoc, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: '「 PESAN DARI OWNER 」', body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})

    let logs = `[ ✔️ ] Berhasil mengirim pesan wa ke nomor wa.me/${korban}`
    conn.reply(m.chat, logs, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.command = /^(pesan|chat)$/i
handler.tags = ['owner']
handler.help = ['pesan'];
handler.rowner = true
handler.limit = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler