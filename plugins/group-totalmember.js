import PhoneNum from 'awesome-phonenumber';
        let regionNames = new Intl.DisplayNames(["en"], {
            type: "region",
        });
let handler = async (m, { conn,
        usedPrefix,
        command,
        text,
        isOwner,
        isAdmin,
        participants,
        groupMetadata,
        isBotAdmin }) => {
    let countryMembers = {};
    for (let participant of participants) {
      let phoneNumber = "+" + participant.id.split("@")[0];
      let regionCode = PhoneNum(phoneNumber).getRegionCode("internasional");
      let country = regionNames.of(regionCode);
      if (!countryMembers[country]) {
        countryMembers[country] = [];
      }
      countryMembers[country].push(participant.id);
    }

    let countryCounts = Object.keys(countryMembers).map((country) => ({
      name: country,
      total: countryMembers[country].length,
      jid: countryMembers[country],
    }));

    let totalSum = countryCounts.reduce(
      (acc, country) => acc + country.total,
      0,
    );
    let totalRegion = Object.keys(countryMembers).length;

    let hasil = countryCounts.map(({ name, total, jid }) => ({
      name,
      total,
      jid,
      percentage: ((total / totalSum) * 100).toFixed(2) + "%",
    }));

    let cap = `┌─⭓「 *TOTAL MEMBER* 」
│ *• Name :* ${groupMetadata.subject}
│ *• Total :* ${participants.length}
│ *• Total Region :* ${totalRegion}
└───────────────⭓

┌─⭓「 *REGION MEMBER* 」
${hasil
  .sort((b, a) => a.total - b.total)
  .map(
    (a) => `│ *• Region :* ${a.name} *[ ${a.percentage} ]*
│ *• Total :* ${a.total} ${a.jid[0].startsWith("62") === true ? "" : `\n│ *• Jid :*\n${a.jid.map((i) => "│ @" + i.split("@")[0]).join("\n")}`}`,
  )
  .join("\n├───────────────⭓\n")}
└───────────────⭓`;
conn.reply(m.chat, cap, m, { contextInfo: { mentionedJid: conn.parseMention(cap),forwardingScore: 256,
      isForwarded: true, externalAdReply: { title: wm, body: null, sourceUrl: yt, thumbnailUrl: pickRandom(hwaifu) }}})
  }
handler.help = ["totalmem", "askot"]
handler.tags = ['group']
handler.group = true
handler.limit = true
handler.command = /^totalmem|askot|totalmember$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
