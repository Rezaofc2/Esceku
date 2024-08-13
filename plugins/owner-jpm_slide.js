let handler = async (m, { conn, text, participants, usedPrefix, command }) => {
	  let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
	  conn.reply(m.chat, `Sending Broadcast to Group : [ ${groups.length} ]`, m);
	  for (let id of anu) {
	    let participantIds = participants.map((a) => a.id);
	await conn.sendCarousel(id, [
	  [`*S E W A B O T - B O T*

Rp. 15.000 / 1 Bulan
> _Admin +Rp. 1.000,-_

*Manfaat Sewa Bot:*
*1.* Auto Welcome/Goodbye
*2.* Kick/Add Pakai Bot
*3.* Buka/Tutup Gc Pakai Bot
*3.* Fitur Enable
*4.* Acc Pakai Bot
*5.* Hidetag/tagall
*6.* bisa main game/rpg
*7.* enable game/rpg`, "Sewa bot click button dibawah", pickRandom(flaaa) + 'SewaBot', [],null, [
	["🛒 ORDER SEWA", `https://wa.me/${nomerown}?text=bang+sewa+bot`]
	]],
	  [`*P R E M I U M - B O T*

Rp. 15.000,- / 1 Bulan
> _Admin +Rp. 1.000,-_

*Manfaat Fitur Premium :*
*1.* Dapat Akses fitur premium
*2.* Limit Tidak Terbatas
*3.* Dapat Akses Menu Premium`, "Buyprem click button dibawah" , pickRandom(flaaa) + 'PremiumBot', [],null, [
	["🛒 ORDER PREMIUM", `https://wa.me/${nomerown}?text=bang+beli+premium`]
	]]
	], null,{
	  body: text ? text : `*RysBot menyediakan ⤵️*
	
* Sewa botwa
* Premium botwa
* Jasa Fix sc botwa
* Jasa add fitur botwa

*• Payment :*
* DANA
* GOPAY`
 });
      await conn.delay(1000);
	  }
	};
	
	handler.help = ["jpm_slide"].map((v) => v + " *[jpm with slide button]*");
	handler.tags = ["owner"];
	handler.command = ["jpm_slide"];
	handler.owner = true;
	export default handler
	
	const more = String.fromCharCode(8206);
	const readMore = more.repeat(4001);
	

	    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}