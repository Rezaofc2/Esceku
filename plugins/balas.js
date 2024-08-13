import fetch from 'node-fetch';
import fs from 'fs';

let handler = async(m, { conn, text, usedPrefix }) => {
let [pesan] = text.split ` `

    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya\n_Contoh : .balas iya_', m)
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
    var nomor = m.sender
    let spam1 = `*Pesan :* ${text}`

      conn.reply(nomerown + '@s.whatsapp.net', spam1, fdoc, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: '「 BALASAN DARI USER 」', body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})

    let logs = `[ ✔️ ] Berhasil mengirim balasan ke nomor owner`
    conn.reply(m.chat, logs, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: fb, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.command = /^(balas)$/i
handler.limit = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler