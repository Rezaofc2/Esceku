function handler(m) {
  
  const kontak = {
	"displayName": nameown,
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${nameown}\nitem1.TEL;waid=${nomerown}:${nomerown}\nitem1.X-ABLabel:\nMy Owner\nURL;Email Owner: nb.boruto.official2@gmail.com\nORG: JASA SEWABOT\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

/*import moment from 'moment';
import PhoneNum from 'awesome-phonenumber';
let regionNames = new Intl.DisplayNames(["en"], { type: "region" });

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let nomor = global.nomerown;
  let array = [];

  if ("button" === "button") {
    for (let i of nomor) {
      let num = nomor + '@s.whatsapp.net'
      let img = await conn
        .profilePictureUrl(num, "image")
        .catch((_) => "https://telegra.ph/file/93c9aff7d28347b3ed2aa.png");
      let bio = await conn.fetchStatus(num).catch((_) => {});
      let name = await conn.getName(num);
      let format = PhoneNum(`+${num.split("@")[0]}`);
      let country = regionNames.of(format.getRegionCode("international"));

      let wea = `*[ PROFILE OWNER ]*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : "-"}\n*° Format Number :* ${format.getNumber("international")}\n*° Url Api :* wa.me/${num.split("@")[0]}\n*° Status :* ${bio?.status || "-"}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale("id").format("LL") : "-"}
      
Silahkan ketik .biodata untuk melihat about owner`;

      array.push([
        wea,
        null,
        img,
        [],
        null,
        [["CHAT ME", `https://wa.me/${num.split("@")[0]}?text=bang+botnya+bagus`]],
      ]);
    }

    conn.sendCarousel(m.chat, array, m, {
      body: `*BERIKUT ADALAH OWNER SAYA*

*[ INFORMATION ]*
> • Jangan Spam nomor Owner *[ Sanksi Blokir ]*
> • Jangan Call Nomor Owner *[ Sanksi Blokir ]*`,
    });
  } else {
    for (let i of nomor) {
      let nama = await conn.getName(i + "@s.whatsapp.net");
      array.push([i, nama]);
    }

    let caption = `*BERIKUT ADALAH CREATOR SAYA*
${global.owner.map((a, i) => `*${i + 1}.* @` + a + " *[" + " " + conn.getName(a + "@s.whatsapp.net") + "]*").join("\n")}

*[ INFORMATION ]*
> • _Jangan Spam nomor Owner *[ Sanksi Blokir ]*_
> • _Jangan Call Nomor Owner *[ Sanksi Blokir ]*_`;

    let reply = await conn.sendContact(m.chat, array, m);
    await conn.sendMessage(
      m.chat,
      {
        text: caption,
        mentions: conn.parseMention(caption),
      },
      {
        quoted: reply,
      },
    );
  }
};


handler.help = ["owner", "creator"].map((a) => a + " *[Contact Owner]*");
handler.tags = ["info"];
handler.command = ["owner", "creator"];

export default handler*/