import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
let user = global.db.data.users[who]
let zila = m.name
let flaa = pickRandom(flaaa)
    let healt = global.db.data.users[who].healt
    let registered = global.db.data.users[who].registered
    let name = global.db.data.users[who].name
    let armor = global.db.data.users[who].armor 
    let makananhero = global.db.data.users[who].makananhero
    let premium = global.db.data.users[who].premium
    let premiumTime = global.db.data.users[who].premiumTime
   // let warn = global.db.data.users[m.sender].warn
   let poin = global.db.data.users[who].poin
    let pet = global.db.data.users[who].pet
    let kucing = global.db.data.users[who].kucing
    let _kucing = global.db.data.users[who].anakkucing
    let _hero = global.db.data.users[who].anakhero
    let rubah = global.db.data.users[who].rubah
    let _rubah = global.db.data.users[who].anakrubah
    let serigala = global.db.data.users[who].serigala
    let anak = global.db.data.users[who].anak
    let _anak = global.db.data.users[who].anakanak
    let _serigala = global.db.data.users[who].anakserigala
    let naga = global.db.data.users[who].naga
    let _naga = global.db.data.users[who].anaknaga
    let kuda = global.db.data.users[who].kuda
    let _kuda = global.db.data.users[who].anakkuda
    let phonix = global.db.data.users[who].phonix
    let _phonix = global.db.data.users[who].anakphonix
    let griffin = global.db.data.users[who].griffin
    let _griffin = global.db.data.users[who].anakgriffin
    let kyubi = global.db.data.users[who].kyubi
    let _kyubi = global.db.data.users[who].anakkyubi
    let centaur = global.db.data.users[who].centaur
    let _centaur = global.db.data.users[who].anakcentaur
    let diamond = global.db.data.users[who].diamond
    let potion = global.db.data.users[who].potion
    let ramuan = global.db.data.users[who].ramuan
    let common = global.db.data.users[who].common
    let makananpet = global.db.data.users[who].makananpet
    let makanannaga = global.db.data.users[who].makanannaga
    let makananphonix = global.db.data.users[who].makananphonix
    let makanangriffin = global.db.data.users[who].makanangriffin
    let makanankyubi = global.db.data.users[who].makanankyubi
    let makanancentaur = global.db.data.users[who].makanancentaur
    let uncommon = global.db.data.users[who].uncommon
    let mythic = global.db.data.users[who].mythic
    let legendary = global.db.data.users[who].legendary
    let level = global.db.data.users[who].level
    let uang = formatNumber(global.db.data.users[who].uang)   
    let role = global.db.data.users[who].role
    let exp = formatNumber(global.db.data.users[who].exp)
    let sampah = global.db.data.users[who].sampah
    let anggur = global.db.data.users[who].anggur
    let jeruk = global.db.data.users[who].jeruk
    let apel = global.db.data.users[who].apel
    let mangga = global.db.data.users[who].mangga
    let pisang = global.db.data.users[who].pisang
    let bibitanggur = global.db.data.users[who].bibitanggur
    let bibitjeruk = global.db.data.users[who].bibitjeruk
    let bibitapel = global.db.data.users[who].bibitapel
    let bibitmangga = global.db.data.users[who].bibitmangga
    let bibitpisang = global.db.data.users[who].bibitpisang 
    let gardenboxs = global.db.data.users[who].gardenboxs
    let nabung = global.db.data.users[who].nabung
    let bank = global.db.data.users[who].bank
    let lim = user.limit; // Mengubah limit user premium menjadi 'Infinity' jika pengguna adalah premium
    let cupon = global.db.data.users[who].cupon
    let tiketcoin = global.db.data.users[who].tiketcoin
    let tiketm = global.db.data.users[who].healtmonster
    let aqua = global.db.data.users[who].aqua
    let expg = global.db.data.users[who].expg
    let boxs = global.db.data.users[who].boxs
    let botol = global.db.data.users[who].botol
    let gelas = global.db.data.users[who].gelas
    let plastik = global.db.data.users[who].plastik
    let kayu = global.db.data.users[who].kayu 
    let batu = global.db.data.users[who].batu
    let iron = global.db.data.users[who].iron
    let sword = global.db.data.users[who].sword
    let string = global.db.data.users[who].string
    let kaleng = global.db.data.users[who].kaleng
    let kardus = global.db.data.users[who].kardus
    let berlian = global.db.data.users[who].berlian
    let stamina = global.db.data.users[who].stamina
    let emas = global.db.data.users[who].emas
    let emaspro = global.db.data.users[who].emasbatang
    let hero = global.db.data.users[who].hero
    let exphero = global.db.data.users[who].exphero
    let { max } = canLevelUp(user.level, user.exp, global.multiplier)
   // let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].uang - a[1].uang)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
        let sortedlimit = Object.entries(global.db.data.users).sort((a, b) => b[1].limit - a[1].limit)
    let sortedbank = Object.entries(global.db.data.users).sort((a, b) => b[1].bank - a[1].bank)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userslimit = sortedlimit.map(v => v[0])
    let usersbank = sortedbank.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `───「 *STATS* 」───
[ 👤 ] Name: *${registered ? '' + name + '': ''}*
[ 🏷 ] Status: *${who.split`@`[0] == global.nomerown ? 'Developer' : premium ? 'Premium User' : global.db.data.users[who].level >= 1000 ? 'Elite User' : 'Free User'}*
[ 🩸 ] Health: *${healt}*
[ 🫀 ] Stamina: *${stamina}*
[ 🎗️ ] Title: *${user.title == 0 ? 'Tidak Punya' : user.title}*
[ 🫎 ] Skil: *${user.skill == "" ? 'Tidak Punya' : user.skill}*
[ ⚔️ ] Sword: *[${user.sword}]* *${user.sword <= 0 ? 'Tidak Punya' : '' || user.sword == 1 ? 'Leather Sword' : '' || user.sword == 2 ? 'Iron Sword' : '' || user.sword == 3 ? 'Gold Sword' : '' || user.sword == 4 ? 'Diamond Sword' : '' || user.sword == 5 ? 'Netherite Sword' : 'Lv Max'}*
[ ⛏️ ] Pickaxe: *[${user.pickaxe}]* *${user.pickaxe <= 0 ? 'Tidak Punya' : '' || user.pickaxe == 1 ? 'Leather Pickaxe' : '' || user.pickaxe == 2 ? 'Iron Pickaxe' : '' || user.pickaxe == 3 ? 'Gold Pickaxe' : '' || user.pickaxe == 4 ? 'Diamond Pickaxe' : '' || user.pickaxe == 5 ? 'Netherite Pickaxe' : 'Lv Max'}*
[ 🥼 ] Armor: *[${armor}]* *${armor <= 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : 'Lv Max'}*
[ 🎣 ] Pancing : *[${user.pancingan}]* *${user.pancingan <= 0 ? 'Tidak Punya' : '' || user.pancingan == 1 ? 'lv 1' : '' || user.pancingan == 2 ? 'pancingan lv 2' : '' || user.pancingan == 3 ? 'lv 3' : '' || user.pancingan == 3 ? 'pancing lv 3' : '' || user.pancingan == 4 ? 'lv 4' : '' || user.pancingan == 5 ? 'lv 5' : '' || user.pancingan == 6 ? 'lv 6' : '' || user.pancingan == 7 ? 'lv 7' : '' || user.pancingan == 8 ? 'lv 8' : '' || user.pancingan == 9 ? 'lv max' : 'lv max'}*
[ 💰 ] Money: *${uang}*
[ ⛔ ] Limit: *${lim}*
[ 🎮 ] Level: *${level}*
[ 🎖️ ] Rank: *${role}*
[ 🔮 ] Exp: *${exp}*
[ 🏧 ] Atm: *${bank}*
[ 🎟️ ] Tiketcoin: *${tiketcoin}*
[ 🌟 ] Poin spin: *${poin}*
[ 👶 ] Anak: *${user.anak}*
[ 🛡️ ] Hero: *${hero == 0 ? 'Tidak Punya' : '' || hero == 1 ? 'Level 1' : '' || hero == 2 ? 'Level 2' : '' || hero == 3 ? 'Level 3' : '' || hero == 4 ? 'Level 4' : '' || hero == 5 ? 'Level 5' : '' || hero == 6 ? 'Level 6' : '' || hero == 7 ? 'Level 7' : '' || hero == 8 ? 'Level 8' : '' || hero == 9 ? 'Level 9' : '' || hero == 10 ? 'Level 10' : '' || hero == 11 ? 'Level 11' : '' || hero == 12 ? 'Level 12' : '' || hero == 13 ? 'Level 13' : '' || hero == 14 ? 'Level 14' : '' || hero == 15 ? 'Level 15' : '' || hero == 16 ? 'Level 16' : '' || hero == 17 ? 'Level 17' : '' || hero == 18 ? 'Level 18' : '' || hero == 19 ? 'Level 19' : '' || hero == 20 ? 'Level 20' : '' || hero == 21 ? 'Level 21' : '' || hero == 22 ? 'Level 22' : '' || hero == 23 ? 'Level 23' : '' || hero == 24 ? 'Level 24' : '' || hero == 25 ? 'Level 25' : '' || hero == 26 ? 'Level 26' : '' || hero == 27 ? 'Level 27' : '' || hero == 28 ? 'Level 28' : '' || hero == 29 ? 'Level 29' : '' || hero == 30 ? 'Level 30' : '' || hero == 31 ? 'Level 31' : '' || hero == 32 ? 'Level 32' : '' || hero == 33 ? 'Level 33' : '' || hero == 34 ? 'Level 34' : '' || hero == 35 ? 'Level 35' : '' || hero == 36 ? 'Level 36' : '' || hero == 37 ? 'Level 37'  : '' || hero == 38 ? 'Level 38' : '' || hero == 39 ? 'Level 39' : '' || hero == 40 ? 'Level MAX' : ''}*

───「 *BACKPACK* 」───
[ 🧃 ] Potion: *${potion}*
[ 🎣 ] Umpan: *${user.umpan}*
[ 🕳 ] Coal: *${user.coal}*
[ 🧴 ] Ramuan: *${ramuan}*
[ ⛓️ ] Iron: *${iron}*
[ 🕸️ ] String: *${string}*
[ 🗑️ ] Sampah: *${sampah}*
[ 🪵 ] Kayu: *${kayu}*
[ 🪨 ] Batu: *${batu}*
[ 🥤 ] Aqua: *${aqua}*
[ 💍 ] Berlian: *${berlian}*
[ 🪙 ] Emas: *${emas}*
[ 💎 ] Diamond: *${diamond}*
[ 🥫 ] Makanan Pet: *${makananpet}*
[ 🍖 ] Makanan Anak: *${user.makanananak}*
[ 🥩 ] Makanan Hero: *${makananhero}*
Total inv: *${diamond + potion + sampah + kayu + sword + iron + ramuan + string + makananpet  + common + uncommon + mythic + pet + legendary + kardus + botol + gelas+ plastik + kaleng + berlian + emas + aqua}* item

───「 *FOOD* 」───
[ 🦀 ] Kepiting Bakar: *${user.kepitingbakar}*
[ 🐳 ] Paus Bakar: *${user.pausbakar}*
[ 🍖 ] Ayam Bakar: *${user.ayambakar}*
[ 🦐 ] Udang Bakar: *${user.udangbakar}*
[ 🥘 ] Rendang: *${user.rendang}*
[ 🍗 ] Ayam Goreng: *${user.ayamgoreng}*
[ 🥠 ] Babi Panggang: *${user.babipanggang}*
[ 🍜 ] Opor Ayam: *${user.oporayam}*
[ 🐟 ] Ikan Bakar: *${user.ikanbakar}*

───「 *CRATE* 」───
[ 📦 ] Common: *${common}*
[ 📦 ] Uncommon: *${uncommon}*
[ 📦 ] Mythic: *${mythic}*
[ 📦 ] Legendary: *${legendary}*
[ 📦 ] Pet: *${pet}*

───「 *FRUITS* 」───
[ 🥭 ] Mangga: *${mangga}*
[ 🍇 ] Anggur: *${anggur}*
[ 🍌 ] Pisang: *${pisang}*
[ 🍊 ] Jeruk: *${jeruk}*
[ 🍎 ] Apel: *${apel}*

───「 *SEEDS* 」───
[ 🌱 ] Bibit Mangga: *${bibitmangga}*
[ 🌱 ] Bibit Anggur: *${bibitanggur}*
[ 🌱 ] Bibit Pisang: *${bibitpisang}*
[ 🌱 ] Bibit Jeruk: *${bibitjeruk}*
[ 🌱 ] Bibit Apel: *${bibitapel}*

───「 *TRASH MAN* 」───
[ 📦 ] Kardus: *${kardus}*
[ 🥃 ] Kaleng: *${kaleng}*
[ 🍶 ] Botol: *${botol}*
[ 🥛 ] Gelas: *${gelas}*
[ 🧧 ] Plastik: *${plastik}*

───「 *PET* 」───
[ 🐱 ] Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
[ 🐎 ] Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
[ 🐲 ] Naga: *${naga == 0 ? 'Tidak Punya' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level 5' : '' || naga == 6 ? 'Level 6' : '' || naga == 7 ? 'Level 7' : '' || naga == 8 ? 'Level 8' : '' || naga == 9 ? 'Level 9' : '' || naga == 10 ? 'Level 10' : '' || naga == 11 ? 'Level 11' : '' || naga == 12 ? 'Level 12' : '' || naga == 13 ? 'Level 13' : '' || naga == 14 ? 'Level 14' : '' || naga == 15 ? 'Level 15' : '' || naga == 16 ? 'Level 16' : '' || naga == 17 ? 'Level 17' : '' || naga == 18 ? 'Level 18' : '' || naga == 19 ? 'Level 19' : '' || naga == 20 ? 'Level MAX' : ''}*
[ 🐴 ] Centaur: *${centaur == 0 ? 'Tidak Punya' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level 5' : '' || centaur == 6 ? 'Level 6' : '' || centaur == 7 ? 'Level 7' : '' || centaur == 8 ? 'Level 8' : '' || centaur == 9 ? 'Level 9' : '' || centaur == 10 ? 'Level 10' : '' || centaur == 11 ? 'Level 11' : '' || centaur == 12 ? 'Level 12' : '' || centaur == 13 ? 'Level 13' : '' || centaur == 14 ? 'Level 14' : '' || centaur == 15 ? 'Level 15' : '' || centaur == 16 ? 'Level 16' : '' || centaur == 17 ? 'Level 17' : '' || centaur == 18 ? 'Level 18' : '' || centaur == 19 ? 'Level 19' : '' || centaur == 20 ? 'Level MAX' : ''}*
[ 🦊 ] Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*  
[ 🎠 ] Phonix: *${phonix == 0 ? 'Tidak Punya' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level 5' : '' || phonix == 6 ? 'Level 6' : '' || phonix == 7 ? 'Level 7' : '' || phonix == 8 ? 'Level 8' : '' || phonix == 9 ? 'Level 9' : '' || phonix == 10 ? 'Level 10' : '' || phonix == 11 ? 'Level 11' : '' || phonix == 12 ? 'Level 12' : '' || phonix == 13 ? 'Level 13' : '' || phonix == 14 ? 'Level 14' : '' || phonix == 15 ? 'Level MAX' : ''}*
[ 🐺 ] Serigala: *${serigala == 0 ? 'Tidak Punya' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || serigala == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level 5' : '' || serigala == 6 ? 'Level 6' : '' || serigala == 7 ? 'Level 7' : '' || serigala == 8 ? 'Level 8' : '' || serigala == 9 ? 'Level 9' : '' || serigala == 10 ? 'Level 10' : '' || serigala == 11 ? 'Level 11' : '' || serigala == 12 ? 'Level 12' : '' || serigala == 13 ? 'Level 13' : '' || serigala == 14 ? 'Level 14' : '' || serigala == 15 ? 'Level MAX' : ''}*\n
*Proges*
╭────────────────
│Level *${level}* To Level *${level}*
│Exp *${exp}* -> *${max}*
│
│Hero ${hero == 0 ? 'Tidak Punya' : '' || hero > 0 && hero < 40 ? `Level *${hero}* To level *${hero + 1}*\n│Exp *${_hero}* -> *${hero *500}*` : '' || hero == 40 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│ ➥Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *1000}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│ ➥Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *1000}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│ ➥Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *1000}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│ ➥Naga ${naga == 0 ? 'Tidak Punya' : '' || naga > 0 && naga < 20 ? `Level *${naga}* To level *${naga + 1}*\n│Exp *${_naga}* -> *${naga *10000}*` : '' || naga == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│ ➥Phonix ${phonix == 0 ? 'Tidak Punya' : '' || phonix > 0 && phonix < 15 ? `Level *${phonix}* To level *${phonix + 1}*\n│Exp *${_phonix}* -> *${phonix *10000}*` : '' || phonix == 15 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│ ➥Centaur ${centaur == 0 ? 'Tidak Punya' : '' || centaur > 0 && centaur < 20 ? `Level *${centaur}* To level *${centaur + 1}*\n│Exp *${_centaur}* -> *${centaur *10000}*` : '' || centaur == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│ ➥Serigala ${serigala == 0 ? 'Tidak Punya' : '' || serigala > 0 && serigala < 15 ? `Level *${serigala}* To level *${serigala + 1}*\n│Exp *${_serigala}* -> *${serigala *10000}*` : '' || serigala == 15 ? '*Max Level*' : ''}
╰────────────────\n
*Achievement*
1.Top level *${userslevel.indexOf(who) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(who) + 1}* dari *${usersmoney.length}*
3.Top Limit *${userslimit.indexOf(who) + 1}* dari *${userslimit.length}*
4.Top Bank *${usersbank.indexOf(who) + 1}* dari *${usersbank.length}*
5.Top Diamond *${usersdiamond.indexOf(who) + 1}* dari *${usersdiamond.length}*
6.Top Potion *${userspotion.indexOf(who) + 1}* dari *${userspotion.length}*
7.Top Common *${userscommon.indexOf(who) + 1}* dari *${userscommon.length}*
8.Top Uncommon *${usersuncommon.indexOf(who) + 1}* dari *${usersuncommon.length}*
9.Top Mythic *${usersmythic.indexOf(who) + 1}* dari *${usersmythic.length}*
10.Top Legendary *${userslegendary.indexOf(who) + 1}* dari *${userslegendary.length}*
11.Top Sampah *${userssampah.indexOf(who) + 1}* dari *${userssampah.length}*`.trim()
    await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
  conn.sendMessage(m.chat, {
    text: str,
    contextInfo: {
    forwardingScore: 9999,
    isForwarded: true, 
        externalAdReply: {
            title: wm,
            body: null,
            thumbnailUrl: flaa + 'Inventory',
            sourceUrl: yt,
            mediaType: 1,
            renderLargerThumbnail: true
        },
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363184819569813@newsletter',
        serverMessageId: 103,
        newsletterName: 'Subscribe YT: MrReza18',
    }
}
}, { quoted: m});
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory)$/i
handler.limit = true
handler.register = true
handler.group = false
handler.rpg = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function formatNumber(num) {
	let formatted = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	return formatted;
}