
import fetch from 'node-fetch';
import fs from 'fs';
let handler = async (m, { conn, usedPrefix, command, text }) => {

let { limit, role, level, exp, money, premiumTime } = db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    readmore: readMore
   
    let Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
  let menyu = `「 *Tutorial ${info.namebot}* 」

〘 Tutorial EPIC RPG 〙
• *.hourly*
   Staterpack yang bisa di klaim 
   perjam
  *.daily*
   Staterpack yang bisa di klaim 
   perhari
  *.weekly*
   Staterpack yang bisa di klaim
   perminggu
  *.monthly*
   Staterpack yang bisa di klaim 
   perbulan
  *.yearly*
   Staterpack yang bisa di klaim
   pertahun
• *.berlatih*
• *.mulung*
• *.nebang*
• *.fight*
• *.fightkucing*
• *.fightnaga*
• *.fightcentaur*
• *.fightphonix*
• *.dungeon*
• *.bertani*
• *.roket*
• *.ngewe*
• *.nguli*
• *.ngocok*
• *.berdagang*
• *.berburu*
• *.berkebon*
• *.kerja*
• *.ojek*
• *.mining*
• *.spin*
• *.mancing*
• *.maling*
• *.membunuh*
• *.merampok*
• *.mission*
• *.gajian*
• *.nambang*
• *.bertani*
• *.adventure*
• *.berpetualang*
   Untuk mencari resource
   seperti Money, Exp, dll..
   dibutuhkan minimal 80 nyawa
   untuk bisa melakukannya
   dan, kamu tidak dapat spam 
   karena ada delay 5 menit
• *.kolam*
   untuk melihat hasil mancing
  *.kandang*
   untuk melihat hasil berburu
• *.shop buy potion <jumlah>*
   Untuk membeli potion dan
   ketik 
   *.use potion <jumlah>*
   untuk menggunakan potion
• *.shop <args>*
   Untuk membeli atau menjual
• *.shop buy <crate> <jumlah>*
   Untuk membeli Crate
• *.profile*
   untuk mengetahui No wamu
• *.inv*
• *.inventory*
• *.my*
   Untuk cek nyawa, money, dll.
• *.judi <jumlah>*
   *_Jangan judi, Karena gk bakal_*
   *_balik modal_*
  *.judipvp money <jumlah> @tag*
   *_sama kayak judi gabakal_*
   *_balik modal_*
• *.buy limit*
   _untuk membeli limit_
• *.bansos*
   _untuk korupsi uang rakyat_
• *.levelup*
   _untuk menaikkan level anda_
• *.atm*
   _untuk menabung di atm_
  *.pull*
   _untuk mengeluarkan uang_
   _dari atm_
• *.craft*
   _untuk membuat atm,pickaxe,_
   _armor,sword,pancingan_
  *.repair*
   _untuk memperbaiki armor,_
   _pickaxe,sword yang rusak_
   
〘 Tutorial fitur game 〙
  game seperti main kartu
• *.blackjack*
  *.bj* 
  *.dadu*
  
  game tebak"an seru
• *.family100*
  *.hangman*
  *.langkapikalimat*
  *.math*
  *.siapakahaku*
  *.sambungkata*
  *.susunkata*
  *.tebakbendera*
  *.tebakchara*
  *.tebakgambar*
  *.tebakgame*
  *.tebakhewan*
  *.tebakkata*
  *.tebakkimia*
  *.tebaklagu*
  *.tebaklirik*
  *.tebaklogo*
  *.tebaktebaktebakan*
  *.examipa*
  *.exammtk*
  *.tebakanime*
  *.tebakjenaka*
  *.tebakkabupaten*
  *.tebakkalimat*
  *.tebaksurah*
  *.tebaktekateki*
  
  game judi
  *.ppt*
  *.suit*
  *.suitpvp*

  top game paling seru
  *.war*
  *.werewolf*
  *.ww*
  *.skata*
  *.sambungkata*
 
〘 Tutorial fitur lainnya 〙
• *.s*
  *.sticker*
  _untuk membuat sticker_
• *.smeme*
  _untuk membuat sticker ada_
  _tulisannya_
• *.yts*
  _untuk mencari video youtube_
• *.ytmp4*
  _untuk mengunduh video di yt_
• *.ytmp3*
  _untuk mengunduh audio di yt_
• *.instagram*
  _untuk mengunduh video ig_
• *.tiktok*
  _untuk mengunduh video tiktok_
• *.twitter*
  _untuk mengunduh video_
  _twitter_
• *.facebook*
  _untuk mengunduh video fb_
• *.toimg*
  _untuk mengubah sticker_
  _menjadi foto_
• *.tovideo*
  _untuk mengubah stickergif_
  _menjadi video_
• *.tomp3/.tovn*
  _untuk mengubah video_
  _bersuara menjadi audio/vn_
• *.demote*
  _untuk menjadikan admin_
  _member_
• *.promote*
  _untuk menjadikan member_
  _admin_
• *.setwelcome/.setbye*
  _untuk set sapaan saat member_
  _keluar/masuk_
• *.ceksewa*
  _untuk melihat sisa waktu_
  _sewa_
• *.hidetag/.totag/.tagall*
  _untuk tag semua member_
  *.tagadmin/.listadmin*
  _untuk tag semua admin_
• *.kick*
  _untuk menggeluarkan_
  _seseorang_
• *.infogroup*
  _untuk melihat info group_
  
 *${wm}*`
let anu = await conn.reply(m.chat, "□", m)
  await conn.sendMessage(m.chat, {
            text: `□□`,
            edit: anu.key},{quoted:m})
            await conn.sendMessage(m.chat, {
            text: `□□□`,
            edit: anu.key},{quoted:m})
            await conn.sendMessage(m.chat, {
            text: `□□□□`,
            edit: anu.key},{quoted:m})
            await conn.sendMessage(m.chat, {
            text: `■□□□`,
            edit: anu.key},{quoted:m})
             await conn.sendMessage(m.chat, {
            text: `□■□□`,
            edit: anu.key},{quoted:m})
            await conn.sendMessage(m.chat, {
            text: `□□■□`,
            edit: anu.key},{quoted:m})
            await conn.sendMessage(m.chat, {
            text: `□□□■`,
            edit: anu.key},{quoted:m})
              await conn.sendMessage(m.chat, {
            text: `■□□□`,
            edit: anu.key},{quoted:m})
             await conn.sendMessage(m.chat, {
            text: `□■□□`,
            edit: anu.key},{quoted:m})
            await conn.sendMessage(m.chat, {
            text: `□□■□`,
            edit: anu.key},{quoted:m})
            await conn.sendMessage(m.chat, {
            text: `□□□■`,
            edit: anu.key},{quoted:m})
  await conn.sendMessage(m.chat, {
            text: `${Styles(`Jangan Lupa Join Grup Bot Kak Buat Nyoba Fitur RPG`)}`,
            edit: anu.key},{quoted:m})
  conn.sendMessage(m.chat, {
text: Styles(menyu),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: wm,
body: null,
thumbnailUrl: "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=tutorial",
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['tutorial']
handler.tags = ['main']
handler.command = /^(tutorial|game|games)$/i

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

