import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(`${qris}`).then(res => res.buffer())
    conn.sendFile(m.chat, qris, 'hasil.jpg', `*Dana :* _${dana}_
*Gopay :* _${gopay}_
    
Jika melakukan Pembayaran melalui qris silahkan scan gambar di atas lalu kirim bukti ke WhatsApp Admin\n*Nomor:* https://wa.me/${nomerown}`, m)
}
handler.help = ['payment']
handler.command = /^(payment)$/i
handler.tags = ['info']
export default handler