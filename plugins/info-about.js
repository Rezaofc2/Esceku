/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
	let aboutEN = `${info.namebot} merupakan bot WhatsApp pintar yang sangat berguna untuk membantu Anda menjawab pertanyaan dan memberikan solusi akurat dalam waktu singkat. Dikembangkan oleh ${nameown}, bot ini menggunakan sumber asli Botcahx yang terus diperbarui oleh ${nameown} untuk memberikan pengalaman interaktif yang lebih mudah dan menyenangkan.
 
Dengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, ${info.namebot} dapat membantu Anda dalam berbagai hal seperti mencari informasi tentang produk atau layanan, menjadwalkan janji temu, dan masih banyak lagi. ${info.namebot} juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.
 
Sebagai produk yang dikembangkan dan diperbarui oleh ${nameown}, ${info.namebot} selalu menerima pembaruan fitur terkini untuk memberikan layanan yang lebih baik dan lebih maju. Dengan ${info.namebot}, Anda tidak perlu khawatir dengan kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi terbaik bagi pengguna WhatsApp. Jadi tunggu apa lagi? Gunakan ${info.namebot} sekarang dan nikmati kemudahan dan kenyamanan berinteraksi dengan bot pintar ini di WhatsApp!`

  
	let about = `${aboutEN}`
  
	let fakeig = {
			fileLength: 1000, seconds: 10000,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: '',
                        mediaType: 1,
						description: 'Follow: ' + yt,
						title: oh, 
						renderLargerThumbnail: true,
						thumbnailUrl: pickRandom(flaaa) + 'about',
						sourceUrl: gcbot
					}
				}
			}

await conn.sendFile(m.chat, 'https://telegra.ph/file/7b35155f38c827735ffd5.png', null, about, m, null, fakeig)

}

handler.help = ['about']
handler.tags = ['info']
handler.command = /^(about|detile|aboutbot|tentang|detail)$/i
handler.register = true

export default handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}