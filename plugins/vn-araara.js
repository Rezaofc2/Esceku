let handler = async (m, { conn }) => {
conn.sendFile(m.chat, './mp3/Ara ara.mp3', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [10,20,30,40,50,12,13,16,91,7] }, { quoted: m })
 }
handler.customPrefix = /^(.ara ara|.araara|ara ara|araara|ara)$/i
handler.command = new RegExp

export default handler