const potion = 20000
const coal = 20000
const Spotion = 1000
const Bdiamond = 15000
const Sdiamond = 10000
const Bcommon = 100000
const Scommon = 1000
const Suncommon = 100
const Buncommon = 100000
const Bmythic = 100000
const Smythic = 1000
const Blegendary = 200000
const Slegendary = 5000
const Bsampah = 120
const Ssampah = 10
const Bkayu = 1000
const Skayu = 500
const Bbotol = 300
const Sbotol = 150
const Bgelas = 400
const Sgelas = 200
const Bplastik = 200
const Splastik = 100
const Bkaleng = 400
const Skaleng = 200
const Bkardus = 400
const Skardus = 200
const Bpisang = 5500
const Spisang = 1000
const Bmangga = 4600
const Smangga = 1500
const Bjeruk = 6000
const Sjeruk = 3000
const Banggur = 5500
const Sanggur = 1500
const Bapel = 5500
const Sapel = 4000
const Bbibitpisang = 550
const Sbibitpisang = 50
const Bbibitmangga = 550
const Sbibitmangga = 50
const Bbibitjeruk = 550
const Sbibitjeruk = 50
const Bbibitanggur = 550
const Sbibitanggur = 50
const Bbibitapel = 550
const Sbibitapel = 50
const Bberlian = 15000
const Sberlian = 10000
const Bemasbatang = 250000
const Semasbatang = 100000
const Bemasbiasa = 150000
const Semasbiasa = 150000
const Bmakananpet = 50000
const Smakananpet = 500
const Bmakanananak = 50000
const Smakanananak = 500
const Bpet = 150000
const Spet = 1000
const Blimit = 25000
const Slimit = 20000
const Bexp = 550
const Baqua = 5000
const Saqua = 2000
const Biron = 10000
const Siron = 5000
const Bstring = 2000
const Sstring = 1500
const Bumpan = 1500
const Sumpan = 1500
const Bbatu = 500
const Bhero = 100000
const Bmakananhero = 1000
const Sbatu = 200
const Sanak = 100000
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = pickRandom(hwaifu)
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `
Contoh: *${usedPrefix}shop buy potion 1*

*KEBUTUHAN | HARGA BELI*
Limit: ${Blimit}
Hero: ${Bhero}
Makananhero: ${Bmakananhero}
Coal: ${coal}
MakananPet: ${Bmakananpet}
makananAnak: ${Bmakanananak}

*KABUTUHAN | HARGA JUAL*
Limit: ${Slimit}
MakananPet: ${Smakananpet}
MakananAnak: ${Smakanananak}
Anak: ${Sanak}

*BIBIT BUAH | HARGA BELI*
BibitPisang: ${Bbibitpisang}
BibitAnggur: ${Bbibitanggur}
BibitMangga: ${Bbibitmangga}
BibitJeruk: ${Bbibitjeruk}
BibitApel: ${Bbibitapel}

*BARANG | HARGA BELI*
Potion: ${potion}
Diamond: ${Bdiamond}
Common: ${Bcommon}
Uncommon: ${Buncommon}
Mythic: ${Bmythic}
Legendary: ${Blegendary}
Sampah: ${Bsampah}
String: ${Bstring}
Iron: ${Biron}
Batu: ${Bbatu}
Botol: ${Bbotol}
Gelas: ${Bgelas}
Plastik: ${Bplastik}
Kaleng: ${Bkaleng}
Kardus: ${Bkardus}
Kayu: ${Bkayu}
Berlian: ${Bberlian}
Emas: ${Bemasbiasa}

*BARANG | HARGA JUAL*
Potion: ${Spotion}
Diamond: ${Sdiamond}
Common: ${Scommon}
Uncommon: ${Suncommon}
Mythic: ${Smythic}
Legendary: ${Slegendary}
Sampah: ${Ssampah}
String: ${Sstring}
Iron: ${Siron}
Batu: ${Sbatu}
Botol: ${Sbotol}
Gelas: ${Sgelas}
Plastik: ${Splastik}
Kaleng: ${Skaleng}
Kardus: ${Skardus}
Kayu: ${Skayu}
Berlian: ${Sberlian}
Emas: ${Semasbiasa}

*BUAH | HARGA BELI*
Pisang: ${Bpisang}
Anggur: ${Banggur}
Mangga: ${Bmangga}
Jeruk: ${Bjeruk}
Apel: ${Bapel}

*BUAH | HARGA JUAL*
Pisang: ${Spisang}
Anggur: ${Sanggur}
Mangga: ${Smangga}
Jeruk: ${Sjeruk}
Apel: ${Sapel}

*MINUMAN | HARGA BELI*
Aqua: ${Baqua}

*MINUMAN | HARGA JUAL*
Aqua: ${Saqua}

*FRISHING | HARGA BELI*
Umpan: ${Bumpan}
`.trim()
try {
if (/shop|toko/i.test(command)) {
const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
const sampah = global.db.data.users[m.sender].sampah
switch (jualbeli) {
case 'buy':
switch (_type) {
case 'potion':
if (global.db.data.users[m.sender].uang >= potion * count) {
global.db.data.users[m.sender].uang -= potion * count
global.db.data.users[m.sender].potion += count * 1
conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`,)
break
case 'coal':
if (global.db.data.users[m.sender].uang >= coal * count) {
global.db.data.users[m.sender].uang -= coal * count
global.db.data.users[m.sender].coal += count * 1
conn.reply(m.chat, `Succes membeli ${count} coal dengan harga ${coal * count} money\n\nGunakan coal dengan ketik: *${usedPrefix}.masak*`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} coal dengan harga ${coal * count} money`,)
break
case 'diamond':
if (global.db.data.users[m.sender].uang >= Bdiamond * count) {
global.db.data.users[m.sender].diamond += count * 1
global.db.data.users[m.sender].uang -= Bdiamond * count
conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} money`, m)
} else conn.reply(m.chat, `Money anda tidak cukup`, m)
break
case 'common':
if (global.db.data.users[m.sender].uang >= Bcommon * count) {
global.db.data.users[m.sender].common += count * 1
global.db.data.users[m.sender].uang -= Bcommon * count
conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
break
case 'uncommon':
if (global.db.data.users[m.sender].uang >= Buncommon * count) {
global.db.data.users[m.sender].uncommon += count * 1
global.db.data.users[m.sender].uang -= Buncommon * count
conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
break
case 'mythic':
if (global.db.data.users[m.sender].uang >= Bmythic * count) {
global.db.data.users[m.sender].mythic += count * 1
global.db.data.users[m.sender].uang -= Bmythic * count
conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
break
case 'legendary':
if (global.db.data.users[m.sender].uang >= Blegendary * count) {
global.db.data.users[m.sender].legendary += count * 1
global.db.data.users[m.sender].uang -= Blegendary * count
conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
break
case 'sampah':
if (global.db.data.users[m.sender].uang >= Bsampah * count) {
global.db.data.users[m.sender].sampah += count * 1
global.db.data.users[m.sender].uang -= Bsampah * count
conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`.trim(), m)
break
case 'kaleng':
if (global.db.data.users[m.sender].uang >= Bkaleng * count) {
global.db.data.users[m.sender].kaleng += count * 1
global.db.data.users[m.sender].uang -= Bkaleng * count
conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga ${Bkaleng * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kaleng dengan harga ${Bkaleng * count} money`.trim(), m)
break
case 'kardus':
if (global.db.data.users[m.sender].uang >= Bkardus * count) {
global.db.data.users[m.sender].kardus += count * 1
global.db.data.users[m.sender].uang -= Bkardus * count
conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga ${Bkardus * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kardus dengan harga ${Bkardus * count} money`.trim(), m)
break
case 'botol':
if (global.db.data.users[m.sender].uang >= Bbotol * count) {
global.db.data.users[m.sender].botol += count * 1
global.db.data.users[m.sender].uang -= Bbotol * count
conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga ${Bbotol * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} botol dengan harga ${Bbotol * count} money`.trim(), m)
break
case 'gelas':
if (global.db.data.users[m.sender].uang >= Bgelas * count) {
global.db.data.users[m.sender].gelas += count * 1
global.db.data.users[m.sender].uang -= Bgelas * count
conn.reply(m.chat, `Succes membeli ${count} gelas Dengan harga ${Bgelas * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} gelas dengan harga ${Bgelas * count} money`.trim(), m)
break
case 'plastik':
if (global.db.data.users[m.sender].uang >= Bplastik * count) {
global.db.data.users[m.sender].plastik += count * 1
global.db.data.users[m.sender].uang -= Bplastik * count
conn.reply(m.chat, `Succes membeli ${count} plastik Dengan harga ${Bplastik * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} plastik dengan harga ${Bplastik * count} money`.trim(), m)  
break
case 'kayu':
if (global.db.data.users[m.sender].uang >= Bkayu * count) {
global.db.data.users[m.sender].kayu += count * 1
global.db.data.users[m.sender].uang -= Bkayu * count
conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga ${Bkayu * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} kayu dengan harga ${Bkayu * count} money`.trim(), m)
break
case 'pisang':
if (global.db.data.users[m.sender].uang >= Bpisang * count) {
global.db.data.users[m.sender].pisang += count * 1
global.db.data.users[m.sender].uang -= Bpisang * count
conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga ${Bpisang * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pisang dengan harga ${Bpisang * count} money`.trim(), m)
break
case 'anggur':
if (global.db.data.users[m.sender].uang >= Banggur * count) {
global.db.data.users[m.sender].anggur += count * 1
global.db.data.users[m.sender].uang -= Banggur * count
conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga ${Banggur * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} anggur dengan harga ${Banggur * count} money`.trim(), m)
break
case 'mangga':
if (global.db.data.users[m.sender].uang >= Bmangga * count) {
global.db.data.users[m.sender].mangga += count * 1
global.db.data.users[m.sender].uang -= Bmangga * count
conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga ${Bmangga * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} mangga dengan harga ${Bmangga * count} money`.trim(), m)
break
case 'jeruk':
if (global.db.data.users[m.sender].uang >= Bjeruk * count) {
global.db.data.users[m.sender].jeruk += count * 1
global.db.data.users[m.sender].uang -= Bjeruk * count
conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga ${Bjeruk * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} jeruk dengan harga ${Bjeruk * count} money`.trim(), m)
break
case 'apel':
if (global.db.data.users[m.sender].uang >= Bapel * count) {
global.db.data.users[m.sender].apel += count * 1
global.db.data.users[m.sender].uang -= Bapel * count
conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bapel * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} apel dengan harga ${Bapel * count} money`.trim(), m)
break
case 'bibitpisang':
if (global.db.data.users[m.sender].uang >= Bbibitpisang * count) {
global.db.data.users[m.sender].bibitpisang += count * 1
global.db.data.users[m.sender].uang -= Bbibitpisang * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga ${Bbibitpisang * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit pisang dengan harga ${Bbibitpisang * count} money`.trim(), m)
break
case 'bibitanggur':
if (global.db.data.users[m.sender].uang >= Bbibitanggur * count) {
global.db.data.users[m.sender].bibitanggur += count * 1
global.db.data.users[m.sender].uang -= Bbibitanggur * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga ${Bbibitanggur * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit anggur dengan harga ${Bbibitanggur * count} money`.trim(), m)
break
case 'bibitmangga':
if (global.db.data.users[m.sender].uang >= Bbibitmangga * count) {
global.db.data.users[m.sender].bibitmangga += count * 1
global.db.data.users[m.sender].uang -= Bbibitmangga * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga ${Bbibitmangga * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit mangga dengan harga ${Bbibitmangga * count} money`.trim(), m)
break
case 'bibitjeruk':
if (global.db.data.users[m.sender].uang >= Bbibitjeruk * count) {
global.db.data.users[m.sender].bibitjeruk += count * 1
global.db.data.users[m.sender].uang -= Bbibitjeruk * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga ${Bbibitjeruk * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit jeruk dengan harga ${Bbibitjeruk * count} money`.trim(), m)
break
case 'bibitapel':
if (global.db.data.users[m.sender].uang >= Bbibitapel * count) {
global.db.data.users[m.sender].bibitapel += count * 1
global.db.data.users[m.sender].uang -= Bbibitapel * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit apel dengan harga ${Bbibitapel * count} money`.trim(), m)
break
case 'berlian':
if (global.db.data.users[m.sender].uang >= Bberlian * count) {
global.db.data.users[m.sender].berlian += count * 1
global.db.data.users[m.sender].uang -= Bberlian * count
conn.reply(m.chat, `Succes membeli ${count} Berlian dengan harga ${Bberlian * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} berlian dengan harga ${Bberlian * count} money`.trim(), m)
break
case 'emas':
if (global.db.data.users[m.sender].uang >= Bemasbiasa * count) {
global.db.data.users[m.sender].emas += count * 1
global.db.data.users[m.sender].uang -= Bemasbiasa * count
conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga ${Bemasbiasa * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} emas dengan harga ${Bemasbiasa * count} money`.trim(), m)
break 
case 'pet':
if (global.db.data.users[m.sender].uang >= Bpet * count) {
global.db.data.users[m.sender].pet += count * 1
global.db.data.users[m.sender].uang -= Bpet * count
conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga ${Bpet * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pet random dengan harga ${Bpet * count} money`.trim(), m)
break
case 'limit':
if (global.db.data.users[m.sender].uang >= Blimit * count) {
global.db.data.users[m.sender].limit += count * 1
global.db.data.users[m.sender].uang -= Blimit * count
conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} limit dengan harga ${Blimit * count} money`.trim(), m)
break 
case 'makananpet':
if (global.db.data.users[m.sender].uang >= Bmakananpet * count) {
global.db.data.users[m.sender].makananpet += count * 1
global.db.data.users[m.sender].uang -= Bmakananpet * count
conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} money`.trim(), m)
break 
case 'makanananak':
if (global.db.data.users[m.sender].uang >= Bmakanananak * count) {
global.db.data.users[m.sender].makanananak += count * 1
global.db.data.users[m.sender].uang -= Bmakanananak * count
conn.reply(m.chat, `Succes membeli ${count} Makanan Anak dengan harga ${Bmakanananak * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan Anak dengan harga ${Bmakanananak * count} money`.trim(), m)
break 
case 'aqua':
if (global.db.data.users[m.sender].uang >= Baqua * count) {
global.db.data.users[m.sender].aqua += count * 1
global.db.data.users[m.sender].uang -= Baqua * count
conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} money`.trim(), m)
break
case 'iron':
if (global.db.data.users[m.sender].uang >= Biron * count) {
global.db.data.users[m.sender].iron += count * 1
global.db.data.users[m.sender].uang -= Biron * count
conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} money`.trim(), m)
break
case 'string':
if (global.db.data.users[m.sender].uang >= Bstring * count) {
global.db.data.users[m.sender].string += count * 1
global.db.data.users[m.sender].uang -= Bstring * count
conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} uang`.trim(), m)
break
case 'batu':
if (global.db.data.users[m.sender].uang >= Bbatu * count) {
global.db.data.users[m.sender].batu += count * 1
global.db.data.users[m.sender].uang -= Bbatu * count
conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} uang`.trim(), m)
break 
case 'hero':
if (global.db.data.users[m.sender].uang >= Bhero * count) {
global.db.data.users[m.sender].hero += count * 1
global.db.data.users[m.sender].uang -= Bhero * count
conn.reply(m.chat, `Succes membeli ${count} hero dengan harga ${Bhero * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} hero dengan harga ${Bhero * count} uang`.trim(), m)
break 
case 'makananhero':
if (global.db.data.users[m.sender].uang >= Bmakananhero * count) {
global.db.data.users[m.sender].makananhero += count * 1
global.db.data.users[m.sender].uang -= Bmakananhero * count
conn.reply(m.chat, `Succes membeli ${count} makananhero dengan harga ${Bmakananhero * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makananhero dengan harga ${Bmakananhero * count} uang`.trim(), m)
break 
case 'umpan':
if (global.db.data.users[m.sender].uang >= Bumpan * count) {
global.db.data.users[m.sender].umpan += count * 1
global.db.data.users[m.sender].uang -= Bumpan * count
conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} uang`.trim(), m)
break 
default:
return conn.reply(m.chat, Kchat, m, { contextInfo: { mentionedJid: conn.parseMention(Kchat),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
break
case 'sell': 
switch (_type) {
case 'potion':
if (global.db.data.users[m.sender].potion >= count * 1) {
global.db.data.users[m.sender].uang += Spotion * count
global.db.data.users[m.sender].potion -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} uang`.trim(), m)
} else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
break
case 'common':
if (global.db.data.users[m.sender].common >= count * 1) {
global.db.data.users[m.sender].uang += Scommon * count
global.db.data.users[m.sender].common -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} uang`.trim(), m)
} else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
break
case 'uncommon':
if (global.db.data.users[m.sender].uncommon >= count * 1) {
global.db.data.users[m.sender].uang += Suncommon * count
global.db.data.users[m.sender].uncommon -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
} else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
break
case 'mythic':
if (global.db.data.users[m.sender].mythic >= count * 1) {
global.db.data.users[m.sender].uang += Smythic * count
global.db.data.users[m.sender].mythic -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
} else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
break
case 'legendary':
if (global.db.data.users[m.sender].legendary >= count * 1) {
global.db.data.users[m.sender].uang += Slegendary * count
global.db.data.users[m.sender].legendary -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
} else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
break
case 'sampah':
if (global.db.data.users[m.sender].sampah >= count * 1) {
global.db.data.users[m.sender].sampah -= count * 1
global.db.data.users[m.sender].uang += Ssampah * count
conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`, m)
} else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
break
case 'kaleng':
if (global.db.data.users[m.sender].kaleng >= count * 1) {
global.db.data.users[m.sender].kaleng -= count * 1
global.db.data.users[m.sender].uang += Skaleng * count
conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} money`, m)
} else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
break
case 'kardus':
if (global.db.data.users[m.sender].kardus >= count * 1) {
global.db.data.users[m.sender].kardus -= count * 1
global.db.data.users[m.sender].uang += Skardus * count
conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} money`, m)
} else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
break
case 'botol':
if (global.db.data.users[m.sender].botol >= count * 1) {
global.db.data.users[m.sender].botol -= count * 1
global.db.data.users[m.sender].uang += Sbotol * count
conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} money`, m)
} else conn.reply(m.chat, `Botol anda tidak cukup`, m)
break
case 'gelas':
if (global.db.data.users[m.sender].gelas >= count * 1) {
global.db.data.users[m.sender].gelas -= count * 1
global.db.data.users[m.sender].uang += Sgelas * count
conn.reply(m.chat, `Succes menjual ${count} gelas, dan anda mendapatkan ${Sgelas * count} money`, m)
} else conn.reply(m.chat, `gelas anda tidak cukup`, m)
break
case 'plastik':
if (global.db.data.users[m.sender].plastik >= count * 1) {
global.db.data.users[m.sender].plastik -= count * 1
global.db.data.users[m.sender].uang += Splastik * count
conn.reply(m.chat, `Succes menjual ${count} plastik, dan anda mendapatkan ${Splastik * count} money`, m)
} else conn.reply(m.chat, `plastik anda tidak cukup`, m)
break
case 'kayu':
if (global.db.data.users[m.sender].kayu >= count * 1) {
global.db.data.users[m.sender].kayu -= count * 1
global.db.data.users[m.sender].uang += Skayu * count
conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} money`, m)
} else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
break
case 'pisang':
if (global.db.data.users[m.sender].pisang >= count * 1) {
global.db.data.users[m.sender].pisang -= count * 1
global.db.data.users[m.sender].uang += Spisang * count
conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} uang`, m)
} else conn.reply(m.chat, `Pisang anda tidak cukup`, m)
break
case 'anggur':
if (global.db.data.users[m.sender].anggur >= count * 1) {
global.db.data.users[m.sender].anggur -= count * 1
global.db.data.users[m.sender].uang += Sanggur * count
conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} money`, m)
} else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
break
case 'mangga':
if (global.db.data.users[m.sender].mangga >= count * 1) {
global.db.data.users[m.sender].mangga -= count * 1
global.db.data.users[m.sender].uang += Smangga * count
conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} money`, m)
} else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
break
case 'jeruk':
if (global.db.data.users[m.sender].jeruk >= count * 1) {
global.db.data.users[m.sender].jeruk -= count * 1
global.db.data.users[m.sender].uang += Sjeruk * count
conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} money`, m)
} else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
break
case 'apel':
if (global.db.data.users[m.sender].apel >= count * 1) {
global.db.data.users[m.sender].apel -= count * 1
global.db.data.users[m.sender].uang += Sapel * count
conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} money`, m)
} else conn.reply(m.chat, `Apel anda tidak cukup`, m)
break
case 'berlian':
if (global.db.data.users[m.sender].berlian >= count * 1) {
global.db.data.users[m.sender].berlian -= count * 1
global.db.data.users[m.sender].uang += Sberlian * count
conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} money`, m)
} else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
break
case 'emas':
if (global.db.data.users[m.sender].emas >= count * 1) {
global.db.data.users[m.sender].emas -= count * 1
global.db.data.users[m.sender].uang += Semasbiasa * count
conn.reply(m.chat, `Succes menjual ${count} emas , dan anda mendapatkan ${Semasbiasa * count} money`, m)
} else conn.reply(m.chat, `Emas anda tidak cukup`, m)
break
case 'pet':
if (global.db.data.users[m.sender].pet >= count * 1) {
global.db.data.users[m.sender].pet -= count * 1
global.db.data.users[m.sender].uang += Spet * count
conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} money`, m)
} else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
break 
case 'makananpet':
if (global.db.data.users[m.sender].makananpet >= count * 1) {
global.db.data.users[m.sender].makananpet -= count * 1
global.db.data.users[m.sender].uang += Smakananpet * count
conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} money`, m)
} else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
break
case 'makanananak':
if (global.db.data.users[m.sender].makanananak >= count * 1) {
global.db.data.users[m.sender].makanananak -= count * 1
global.db.data.users[m.sender].uang += Smakanananak * count
conn.reply(m.chat, `Succes menjual ${count} makanan anak, dan anda mendapatkan ${Smakanananak * count} money`, m)
} else conn.reply(m.chat, `Makanan anak anda tidak cukup`, m)
break
case 'aqua':
if (global.db.data.users[m.sender].aqua >= count * 1) {
global.db.data.users[m.sender].aqua -= count * 1
global.db.data.users[m.sender].uang += Saqua * count
conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} money`, m)
} else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
break
case 'iron':
if (global.db.data.users[m.sender].iron >= count * 1) {
global.db.data.users[m.sender].iron -= count * 1
global.db.data.users[m.sender].uang += Siron * count
conn.reply(m.chat, `Succes menjual ${count} iron, dan anda mendapatkan ${Siron * count} money`, m)
} else conn.reply(m.chat, `Iron anda tidak cukup`, m)
break
case 'string':
if (global.db.data.users[m.sender].string >= count * 1) {
global.db.data.users[m.sender].string -= count * 1
global.db.data.users[m.sender].uang += Sstring * count
conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} money`, m)
} else conn.reply(m.chat, `String anda tidak cukup`, m)
break
case 'batu':
if (global.db.data.users[m.sender].batu >= count * 1) {
global.db.data.users[m.sender].batu -= count * 1
global.db.data.users[m.sender].uang += Sbatu * count
conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} money`, m)
} else conn.reply(m.chat, `Batu anda tidak cukup`, m)
break
case 'anak':
if (global.db.data.users[m.sender].anak >= count * 1) {
global.db.data.users[m.sender].anak -= count * 1
global.db.data.users[m.sender].uang += Sanak * count
conn.reply(m.chat, `Succes menjual ${count} anak, dan anda mendapatkan ${Sanak * count} money`, m)
} else conn.reply(m.chat, `anak anda tidak cukup`, m)
break
case 'limit':
if (global.db.data.users[m.sender].limit >= count * 1) {
global.db.data.users[m.sender].limit -= count * 1
global.db.data.users[m.sender].uang += Slimit * count
conn.reply(m.chat, `Succes menjual ${count} limit, dan anda mendapatkan ${Slimit * count} money`, m)
} else conn.reply(m.chat, `Limit anda tidak cukup`, m)
break
case 'diamond':
if (global.db.data.users[m.sender].diamond >= count * 1) {
global.db.data.users[m.sender].diamond -= count * 1
global.db.data.users[m.sender].uang += Sdiamond * count
conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
} else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
break
default:
return conn.reply(m.chat, Kchat, m, { contextInfo: { mentionedJid: conn.parseMention(Kchat),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
break
default:
return conn.reply(m.chat, Kchat, m, { contextInfo: { mentionedJid: conn.parseMention(Kchat),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
} else if (/beli|buy/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'potion':
if (global.db.data.users[m.sender].uang >= potion * count) {
global.db.data.users[m.sender].uang -= potion * count
global.db.data.users[m.sender].potion += count * 1
conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} uang\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`,m)
break
case 'coal':
if (global.db.data.users[m.sender].uang >= coal * count) {
global.db.data.users[m.sender].uang -= coal * count
global.db.data.users[m.sender].coal += count * 1
conn.reply(m.chat, `Succes membeli ${count} coal dengan harga ${coal * count} money\n\nGunakan coal dengan ketik: *${usedPrefix}masak*`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} coal dengan harga ${coal * count} uang`,m)
break
case 'diamond':
if (global.db.data.users[m.sender].uang >= Bdiamond * count) {
global.db.data.users[m.sender].diamond += count * 1
global.db.data.users[m.sender].uang -= Bdiamond * count
conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} uang`, m)
} else conn.reply(m.chat, `uang anda tidak cukup`, m)
break
case 'common':
if (global.db.data.users[m.sender].uang >= Bcommon * count) {
global.db.data.users[m.sender].common += count * 1
global.db.data.users[m.sender].uang -= Bcommon * count
conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
break
case 'uncommon':
if (global.db.data.users[m.sender].uang >= Buncommon * count) {
global.db.data.users[m.sender].uncommon += count * 1
global.db.data.users[m.sender].uang -= Buncommon * count
conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
break
case 'mythic':
if (global.db.data.users[m.sender].uang >= Bmythic * count) {
global.db.data.users[m.sender].mythic += count * 1
global.db.data.users[m.sender].uang -= Bmythic * count
conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
break
case 'legendary':
if (global.db.data.users[m.sender].uang >= Blegendary * count) {
global.db.data.users[m.sender].legendary += count * 1
global.db.data.users[m.sender].uang -= Blegendary * count
conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
break
case 'sampah':
if (global.db.data.users[m.sender].uang >= Bsampah * count) {
global.db.data.users[m.sender].sampah += count * 1
global.db.data.users[m.sender].uang -= Bsampah * count
conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`.trim(), m)
break
case 'kaleng':
if (global.db.data.users[m.sender].uang >= Bkaleng * count) {
global.db.data.users[m.sender].kaleng += count * 1
global.db.data.users[m.sender].uang -= Bkaleng * count
conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga ${Bkaleng * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kaleng dengan harga ${Bkaleng * count} money`.trim(), m)
break
case 'kardus':
if (global.db.data.users[m.sender].uang >= Bkardus * count) {
global.db.data.users[m.sender].kardus += count * 1
global.db.data.users[m.sender].uang -= Bkardus * count
conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga ${Bkardus * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kardus dengan harga ${Bkardus * count} money`.trim(), m)
break
case 'botol':
if (global.db.data.users[m.sender].uang >= Bbotol * count) {
global.db.data.users[m.sender].botol += count * 1
global.db.data.users[m.sender].uang -= Bbotol * count
conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga ${Bbotol * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} botol dengan harga ${Bbotol * count} money`.trim(), m)
break
case 'plastik':
if (global.db.data.users[m.sender].uang >= Bplastik * count) {
global.db.data.users[m.sender].plastik += count * 1
global.db.data.users[m.sender].uang -= Bplastik * count
conn.reply(m.chat, `Succes membeli ${count} plastik dengan harga ${Bplastik * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} plastik dengan harga ${Bplastik * count} money`.trim(), m)
break
case 'gelas':
if (global.db.data.users[m.sender].uang >= Bgelas * count) {
global.db.data.users[m.sender].gelas += count * 1
global.db.data.users[m.sender].uang -= Bgelas * count
conn.reply(m.chat, `Succes membeli ${count} gelas dengan harga ${Bgelas * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} gelas dengan harga ${Bgelas * count} money`.trim(), m)
                        
break
case 'kayu':
if (global.db.data.users[m.sender].uang >= Bkayu * count) {
global.db.data.users[m.sender].kayu += count * 1
global.db.data.users[m.sender].uang -= Bkayu * count
conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga ${Bkayu * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} kayu dengan harga ${Bkayu * count} money`.trim(), m)
                        
break
case 'pisang':
if (global.db.data.users[m.sender].uang >= Bpisang * count) {
global.db.data.users[m.sender].pisang += count * 1
global.db.data.users[m.sender].uang -= Bpisang * count
conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga ${Bpisang * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pisang dengan harga ${Bpisang * count} money`.trim(), m)
break
case 'anggur':
if (global.db.data.users[m.sender].uang >= Banggur * count) {
global.db.data.users[m.sender].anggur += count * 1
global.db.data.users[m.sender].uang -= Banggur * count
conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga ${Banggur * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} anggur dengan harga ${Banggur * count} uang`.trim(), m)
break
case 'mangga':
if (global.db.data.users[m.sender].uang >= Bmangga * count) {
global.db.data.users[m.sender].mangga += count * 1
global.db.data.users[m.sender].uang -= Bmangga * count
conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga ${Bmangga * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} mangga dengan harga ${Bmangga * count} money`.trim(), m)
break
case 'jeruk':
if (global.db.data.users[m.sender].uang >= Bjeruk * count) {
global.db.data.users[m.sender].jeruk += count * 1
global.db.data.users[m.sender].uang -= Bjeruk * count
conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga ${Bjeruk * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} jeruk dengan harga ${Bjeruk * count} money`.trim(), m)
break
case 'apel':
if (global.db.data.users[m.sender].uang >= Bapel * count) {
global.db.data.users[m.sender].apel += count * 1
global.db.data.users[m.sender].uang -= Bapel * count
conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bapel * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} apel dengan harga ${Bapel * count} money`.trim(), m)
break
case 'bibitpisang':
if (global.db.data.users[m.sender].uang >= Bbibitpisang * count) {
global.db.data.users[m.sender].bibitpisang += count * 1
global.db.data.users[m.sender].uang -= Bbibitpisang * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga ${Bbibitpisang * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit pisang dengan harga ${Bbibitpisang * count} uang`.trim(), m)
break
case 'bibitanggur':
if (global.db.data.users[m.sender].uang >= Bbibitanggur * count) {
global.db.data.users[m.sender].bibitanggur += count * 1
global.db.data.users[m.sender].uang -= Bbibitanggur * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga ${Bbibitanggur * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit anggur dengan harga ${Bbibitanggur * count} money`.trim(), m)
break
case 'bibitmangga':
if (global.db.data.users[m.sender].uang >= Bbibitmangga * count) {
global.db.data.users[m.sender].bibitmangga += count * 1
global.db.data.users[m.sender].uang -= Bbibitmangga * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga ${Bbibitmangga * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit mangga dengan harga ${Bbibitmangga * count} money`.trim(), m)
break
case 'bibitjeruk':
if (global.db.data.users[m.sender].uang >= Bbibitjeruk * count) {
global.db.data.users[m.sender].bibitjeruk += count * 1
global.db.data.users[m.sender].uang -= Bbibitjeruk * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga ${Bbibitjeruk * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit jeruk dengan harga ${Bbibitjeruk * count} money`.trim(), m)
break
case 'bibitapel':
if (global.db.data.users[m.sender].uang >= Bbibitapel * count) {
global.db.data.users[m.sender].bibitapel += count * 1
global.db.data.users[m.sender].uang -= Bbibitapel * count
conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit apel dengan harga ${Bbibitapel * count} money`.trim(), m)
break
case 'berlian':
if (global.db.data.users[m.sender].uang >= Bberlian * count) {
global.db.data.users[m.sender].berlian += count * 1
global.db.data.users[m.sender].uang -= Bberlian * count
conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bberlian * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} berlian dengan harga ${Bberlian * count} money`.trim(), m)
break
case 'emas':
if (global.db.data.users[m.sender].uang >= Bemasbiasa * count) {
global.db.data.users[m.sender].emas += count * 1
global.db.data.users[m.sender].uang -= Bemasbiasa * count
conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga ${Bemasbiasa * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} emas dengan harga ${Bemasbiasa * count} money`.trim(), m)
break  
case 'pet':
if (global.db.data.users[m.sender].uang >= Bpet * count) {
global.db.data.users[m.sender].pet += count * 1
global.db.data.users[m.sender].uang -= Bpet * count
conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga ${Bpet * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pet random dengan harga ${Bpet * count} uang`.trim(), m)
break
case 'limit':
if (global.db.data.users[m.sender].uang >= Blimit * count) {
global.db.data.users[m.sender].limit += count * 1
global.db.data.users[m.sender].uang -= Blimit * count
conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} limit dengan harga ${Blimit * count} uang`.trim(), m)
break 
case 'makananpet':
if (global.db.data.users[m.sender].uang >= Bmakananpet * count) {
global.db.data.users[m.sender].makananpet += count * 1
global.db.data.users[m.sender].uang -= Bmakananpet * count
conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} uang`.trim(), m)
break 
case 'makanananak':
if (global.db.data.users[m.sender].uang >= Bmakanananak * count) {
global.db.data.users[m.sender].makanananak += count * 1
global.db.data.users[m.sender].uang -= Bmakanananak * count
conn.reply(m.chat, `Succes membeli ${count} Makanan anak dengan harga ${Bmakanananak * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan anak harga ${Bmakanananak * count} uang`.trim(), m)
break 
case 'aqua':
if (global.db.data.users[m.sender].uang >= Baqua * count) {
global.db.data.users[m.sender].aqua += count * 1
global.db.data.users[m.sender].uang -= Baqua * count
conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} uang`.trim(), m)
break
case 'iron':
if (global.db.data.users[m.sender].uang >= Biron * count) {
global.db.data.users[m.sender].iron += count * 1
global.db.data.users[m.sender].uang -= Biron * count
conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} uang`.trim(), m)
break
case 'string':
if (global.db.data.users[m.sender].uang >= Bstring * count) {
global.db.data.users[m.sender].string += count * 1
global.db.data.users[m.sender].uang -= Bstring * count
conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} uang`.trim(), m)
break
case 'batu':
if (global.db.data.users[m.sender].uang >= Bbatu * count) {
global.db.data.users[m.sender].batu += count * 1
global.db.data.users[m.sender].uang -= Bbatu * count
conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} uang`.trim(), m)
break 
case 'hero':
if (global.db.data.users[m.sender].uang >= Bhero * count) {
global.db.data.users[m.sender].hero += count * 1
global.db.data.users[m.sender].uang -= Bhero * count
conn.reply(m.chat, `Succes membeli ${count} hero dengan harga ${Bhero * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} hero dengan harga ${Bhero * count} money`.trim(), m)
break 
case 'makananhero':
if (global.db.data.users[m.sender].uang >= Bmakananhero * count) {
global.db.data.users[m.sender].makananhero += count * 1
global.db.data.users[m.sender].uang -= Bmakananhero * count
conn.reply(m.chat, `Succes membeli ${count} makananhero dengan harga ${Bmakananhero * count} money`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makananhero dengan harga ${Bmakananhero * count} money`.trim(), m)
break 
case 'umpan':
if (global.db.data.users[m.sender].uang >= Bumpan * count) {
global.db.data.users[m.sender].umpan += count * 1
global.db.data.users[m.sender].uang -= Bumpan * count
conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} uang`, m)
} else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} uang`.trim(), m)                        
break
default:
return conn.reply(m.chat, Kchat, m, { contextInfo: { mentionedJid: conn.parseMention(Kchat),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
} else if (/sell|jual|/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
switch (type) {
case 'potion':
if (global.db.data.users[m.sender].potion >= count * 1) {
global.db.data.users[m.sender].uang += Spotion * count
global.db.data.users[m.sender].potion -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} uang`.trim(), m)
} else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
break
case 'common':
if (global.db.data.users[m.sender].common >= count * 1) {
global.db.data.users[m.sender].uang += Scommon * count
global.db.data.users[m.sender].common -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} uang`.trim(), m)
} else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
break
case 'uncommon':
if (global.db.data.users[m.sender].uncommon >= count * 1) {
global.db.data.users[m.sender].uang += Suncommon * count
global.db.data.users[m.sender].uncommon -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} uang`.trim(), m)
} else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
break
case 'mythic':
if (global.db.data.users[m.sender].mythic >= count * 1) {
global.db.data.users[m.sender].uang += Smythic * count
global.db.data.users[m.sender].mythic -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} uang`.trim(), m)
} else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
break
case 'legendary':
if (global.db.data.users[m.sender].legendary >= count * 1) {
global.db.data.users[m.sender].uang += Slegendary * count
global.db.data.users[m.sender].legendary -= count * 1
conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} uang`.trim(), m)
} else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
break
case 'sampah':
if (global.db.data.users[m.sender].sampah >= count * 1) {
global.db.data.users[m.sender].sampah -= count * 1
global.db.data.users[m.sender].uang += Ssampah * count
conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} uang`.trim(), m)
} else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
break
case 'kaleng':
if (global.db.data.users[m.sender].kaleng >= count * 1) {
global.db.data.users[m.sender].kaleng -= count * 1
global.db.data.users[m.sender].uang += Skaleng * count
conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} uang`, m)
} else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
break
case 'kardus':
if (global.db.data.users[m.sender].kardus >= count * 1) {
global.db.data.users[m.sender].kardus -= count * 1
global.db.data.users[m.sender].uang += Skardus * count
conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} uang`, m)
} else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
break
case 'botol':
if (global.db.data.users[m.sender].botol >= count * 1) {
global.db.data.users[m.sender].botol -= count * 1
global.db.data.users[m.sender].uang += Sbotol * count
conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} uang`, m)
} else conn.reply(m.chat, `Botol anda tidak cukup`, m)
break
case 'gelas':
if (global.db.data.users[m.sender].gelas >= count * 1) {
global.db.data.users[m.sender].gelas -= count * 1
global.db.data.users[m.sender].uang += Sgelas * count
conn.reply(m.chat, `Succes menjual ${count} gelas, dan anda mendapatkan ${Sgelas * count} uang`, m)
} else conn.reply(m.chat, `gelas anda tidak cukup`, m)
break
case 'plastik':
if (global.db.data.users[m.sender].plastik >= count * 1) {
global.db.data.users[m.sender].plastik -= count * 1
global.db.data.users[m.sender].uang += Splastik * count
conn.reply(m.chat, `Succes menjual ${count} plastik , dan anda mendapatkan ${Splastik * count} uang`, m)
} else conn.reply(m.chat, `plastik anda tidak cukup`, m)
break
case 'kayu':
if (global.db.data.users[m.sender].kayu >= count * 1) {
global.db.data.users[m.sender].kayu -= count * 1
global.db.data.users[m.sender].uang += Skayu * count
conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} uang`, m)
} else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
break
case 'pisang':
if (global.db.data.users[m.sender].pisang >= count * 1) {
global.db.data.users[m.sender].pisang -= count * 1
global.db.data.users[m.sender].uang += Spisang * count
conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} uang`, m)
} else conn.reply(m.chat, `Pisang anda tidak cukup`, m) 
break
case 'anggur':
if (global.db.data.users[m.sender].anggur >= count * 1) {
global.db.data.users[m.sender].anggur -= count * 1
global.db.data.users[m.sender].uang += Sanggur * count
conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} uang`, m)
} else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
break
case 'mangga':
if (global.db.data.users[m.sender].mangga >= count * 1) {
global.db.data.users[m.sender].mangga -= count * 1
global.db.data.users[m.sender].uang += Smangga * count
conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} uang`, m)
} else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
break
case 'jeruk':
if (global.db.data.users[m.sender].jeruk >= count * 1) {
global.db.data.users[m.sender].jeruk -= count * 1
global.db.data.users[m.sender].uang += Sjeruk * count
conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} uang`, m)
} else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
break
case 'apel':
if (global.db.data.users[m.sender].apel >= count * 1) {
global.db.data.users[m.sender].apel -= count * 1
global.db.data.users[m.sender].uang += Sapel * count
conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} uang`, m)
} else conn.reply(m.chat, `Apel anda tidak cukup`, m)
break
case 'berlian':
if (global.db.data.users[m.sender].berlian >= count * 1) {
global.db.data.users[m.sender].berlian -= count * 1
global.db.data.users[m.sender].uang += Sberlian * count
conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} uang`, m)
} else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
break
case 'emas':
if (global.db.data.users[m.sender].emas >= count * 1) {
global.db.data.users[m.sender].emas -= count * 1
global.db.data.users[m.sender].uang += Semasbiasa * count
conn.reply(m.chat, `Succes menjual ${count} emas, dan anda mendapatkan ${Semasbiasa * count} uang`, m)
} else conn.reply(m.chat, `Emas anda tidak cukup`, m)
break
case 'pet':
if (global.db.data.users[m.sender].pet >= count * 1) {
global.db.data.users[m.sender].pet -= count * 1
global.db.data.users[m.sender].uang += Spet * count
conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} uang`, m)
} else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
break 
case 'makananpet':
if (global.db.data.users[m.sender].makananpet >= count * 1) {
global.db.data.users[m.sender].makananpet -= count * 1
global.db.data.users[m.sender].uang += Smakananpet * count
conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} uang`, m)
} else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
break
case 'makanananak':
if (global.db.data.users[m.sender].makanananak >= count * 1) {
global.db.data.users[m.sender].makanananak -= count * 1
global.db.data.users[m.sender].uang += Smakanananak * count
conn.reply(m.chat, `Succes menjual ${count} makanan anak, dan anda mendapatkan ${Smakanananak * count} uang`, m)
} else conn.reply(m.chat, `Makanan anak anda tidak cukup`, m)
break
case 'aqua':
if (global.db.data.users[m.sender].aqua >= count * 1) {
global.db.data.users[m.sender].aqua -= count * 1
global.db.data.users[m.sender].uang += Saqua * count
conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} uang`, m)
} else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
break
case 'iron':
if (global.db.data.users[m.sender].iron >= count * 1) {
global.db.data.users[m.sender].iron -= count * 1
global.db.data.users[m.sender].uang += Siron * count
conn.reply(m.chat, `Succes menjual ${count} iron, dan anda mendapatkan ${Siron * count} uang`, m)
} else conn.reply(m.chat, `Iron anda tidak cukup`, m)
break
case 'string':
if (global.db.data.users[m.sender].string >= count * 1) {
global.db.data.users[m.sender].string -= count * 1
global.db.data.users[m.sender].uang += Sstring * count
conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} uang`, m)
} else conn.reply(m.chat, `String anda tidak cukup`, m)
break
case 'batu':
if (global.db.data.users[m.sender].batu >= count * 1) {
global.db.data.users[m.sender].batu -= count * 1
global.db.data.users[m.sender].uang += Sbatu * count
conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} uang`, m)
} else conn.reply(m.chat, `Batu anda tidak cukup`, m)
break
case 'anak':
if (global.db.data.users[m.sender].anak >= count * 1) {
global.db.data.users[m.sender].anak -= count * 1
global.db.data.users[m.sender].uang += Sanak * count
conn.reply(m.chat, `Succes menjual ${count} anak, dan anda mendapatkan ${Sanak * count} uang`, m)
} else conn.reply(m.chat, `anak anda tidak cukup`, m)
break
case 'limit':
if (global.db.data.users[m.sender].limit >= count * 1) {
global.db.data.users[m.sender].limit -= count * 1
global.db.data.users[m.sender].uang += Slimit * count
conn.reply(m.chat, `Succes menjual ${count} limit, dan anda mendapatkan ${Slimit * count} money`, m)
} else conn.reply(m.chat, `Limit anda tidak cukup`, m)
break
case 'diamond':
if (global.db.data.users[m.sender].diamond >= count * 1) {
global.db.data.users[m.sender].diamond -= count * 1
global.db.data.users[m.sender].uang += Sdiamond * count
                           conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
} else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
break
default:
return conn.reply(m.chat, Kchat, m, { contextInfo: { mentionedJid: conn.parseMention(Kchat),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pp }}})
}
}
} catch (e) {
conn.reply(m.chat, Kchat, m)
console.log(e)
}
}
handler.help = ['shop <sell|buy> <args>']
handler.tags = ['rpg'] 
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
handler.rpg = true
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}