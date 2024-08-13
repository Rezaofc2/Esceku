let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
  db.data.redeem = db.data.redeem || '';

  if (!text) throw `*• Example:* ${usedPrefix + command} new redeem`;
let list = Object.entries(global.db.data.users)
	list.map(([user, data], i) => (Number(data.lastcode = 0)))
	
  db.data.redeem = text;
  m.reply('✅ Successfully created the redeem code');

  const q = {
    "key": {
      "remoteJid": "status@broadcast",
      "participant": "0@s.whatsapp.net",
      "fromMe": false,
      "id": ""
    },
    "message": {
      "conversation": "_Code Redeem From Owner_"
    }
  };

  // Getting all group IDs
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us')).map(v => v[0]);

  // Function to send message to a group with retry mechanism
  const sendMessageWithRetry = async (id, message, options, retryCount = 3) => {
    for (let attempt = 1; attempt <= retryCount; attempt++) {
      try {
        await conn.sendMessage(id, message, options);
        break; // if successful, break out of the loop
      } catch (error) {
        if (attempt === retryCount) {
          console.error(`Failed to send message to ${id} after ${retryCount} attempts:`, error);
        } else {
          console.warn(`Attempt ${attempt} to send message to ${id} failed. Retrying...`);
        }
      }
    }
  };

  // Loop through each group and send the message
  for (let id of groups) {
    try {
      // Getting participants of the current group
      let groupMetadata = await conn.groupMetadata(id);
      let participantIds = groupMetadata.participants.map(p => p.id);
      let hasil = `*[ REDEEM CODE TODAY ]*
• Code Redeem : ${text}
ketik *.redeem ${text}* untuk claim code redeem`;
      
      await sendMessageWithRetry(id, {
        text: hasil,
        contextInfo: {
          forwardingScore: 9999999,
          isForwarded: true,
          mentionedJid: participantIds
        }
      }, { quoted: q });

      // Optional: Add delay between messages to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.error(`Error while sending message to group ${id}:`, e);
    }
  }
};

handler.help = ["setredeem"].map(a => a + ' *[new redeem]*');
handler.tags = ["owner"];
handler.command = ["setredeem"];
handler.owner = true;
export default handler