let handler = async (m, { conn, args, usedPrefix, command }) => {
 let lol = await (await fetch(`https://api.lolhuman.xyz/api/checkapikey?apikey=${args[0]}`)).json()
  let cap = `*[ CEK STATUS APIKEY ]*
*• Username :* ${lol.result.username}
*• Rank Api :* ${lol.result.account_type}
*• Total Request :* ${lol.result.requests}
*• Today Request :* ${lol.result.today}
*• Expired :* ${lol.result.expired}

_Upgrade Apikey minta ke syaii wir_`;
  conn.sendButtons(
    m.chat,
    [
      ["BACK TO MENU", ".menu"],
      ["OWNER BOT", ".owner"],
      ["PING", ".ping"],
    ],
    m,
    {
      body: cap,
    },
  );
};
handler.help = ["cekapi2"].map((a) => a + " [check status apikey]");
handler.tags = ["main"];
handler.command = ["cekapi2"];

export default handler