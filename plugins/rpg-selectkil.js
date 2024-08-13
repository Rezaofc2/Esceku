/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, {
    conn,
    usedPrefix,
    text,
    command
}) => {

    var user = global.db.data.users[m.sender]

    global.skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]

    var bintang = {
        "satu": "⭐",
        "dua": "⭐⭐",
        "tiga": "⭐⭐⭐",
        "empat": "⭐⭐⭐⭐",
        "lima": "⭐⭐⭐⭐⭐",
        "Enam": "⭐⭐⭐⭐⭐⭐"
    } //star how good is the skill

    let skil = text.trim().toLowerCase() // to filter text

    if (!skill.includes(skil)) throw `Select *skill🃏* what do you want/pilih skill apa yg kamu inginkan:\n\n${skill.map(skil => `› ${skil}`).join('\n')}

     How To use/Cara menggunakan:
     ${usedPrefix + command} <nameskill>
     
     Example/Contoh:
     ${usedPrefix + command} necromancer
     `

    if (user.skill == "") {
        user.skill = skil
        m.reply(`Anda telah memilih Skill ${skil}`)
    } else if (user.skill) {
        m.reply(`Anda Sudah Punya skill ${user.skill} Tidak bisa diganti`)
    }

}

handler.help = ['selectskill <type>']
handler.tags = ['rpg']
handler.command = /^(slectskill|selectskill|pilihskill)$/i

handler.rpg = true
export default handler