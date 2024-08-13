let handler = async (m) => {
    let users = global.db.data.users;
    let chats = global.db.data.chats;
    let deletedUsers = 0;
  
    for (let user in users) {
      if (!users[user].registered && !users[user].banned) {
        delete users[user];
        deletedUsers++;
      if (chats[user]) {
          delete chats[user];
        }
      }
    }
  
    global.db.data.users = users;
    global.db.data.chats = chats;
    await global.db.write();
    
    let totalreg = Object.keys(users).length;
    let rtotalreg = Object.values(users).filter(user => user.registered == true).length;
    let kon = `• Total User Today : *[ ${totalreg} ]*
• Current Registration : *[ ${rtotalreg} ]*
*[ ${deletedUsers} ]* Deleted user, Because it is not registered `;
    m.reply(kon);
  };
handler.help = ['delete-unreg']
handler.command = ['delete-unreg','del-unreg']
handler.tags = ['owner']
handler.rowner = true
  
export default handler