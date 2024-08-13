import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
    let isEnable = /true|enable|(turn)?on|1/i.test(command)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[conn.user.jid] || {}
    let name = `${user.registered ? user.name : conn.getName(m.sender)}`
    let type = (args[0] || '').toLowerCase()
    let isAll = false,
    isUser = false
    let gambar = pickRandom(hwaifu)
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
    let caption = `
\`\`\`A D M I N  F E A T U R E\`\`\`
*• antilinkkick*
*• antilinkdelete*
*• antitoxic* 
*• antibadword*
*• antiviewonce* 
*• antisticker* 
*• antivirtex*
*• antitoxic*
*• antiaudio*
*• antivideo*
*• antiwame*
*• antinsfw*
*• simi*
*• game*
*• rpg* 
*• nsfw* 
*• welcome* 
*• autolevelup* 
*• autoacc* 

\`\`\`O W N E R  F E A T U R E\`\`\`
*• autobackup*
*• autocleartmp*
*• autoread*
*• composing*
*• gconly*
*• pconly*
*• public*
*• joinpaksa*
*• self*
*• swonly*
`.trim()
    switch (type) {
        case 'welcome':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.welcome = isEnable
            break
        case 'autolevelup':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.autolevelup = isEnable
            break
        case 'adminonly':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.adminonly = isEnable
            break
case 'antifoto':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiFoto = isEnable
      break
case 'antivideo':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVideo = isEnable
      break
case 'antiaudio':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiAudio = isEnable
      break
case 'antiwame':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiwame = isEnable
      break
case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break
      case 'antinsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiNsfw = isEnable
      break
      case 'autoacc':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.acc = isEnable
      break
        case 'detect':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.detect = isEnable
            break
        /*case 'delete':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.delete = isEnable
            break*/
        case 'antiviewonce':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.viewonce = isEnable
            break
        /*case 'antidelete':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.delete = !isEnable
            break*/
        /*case 'antispamlink':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antispam = isEnable
            break*/
        case 'text':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.teks = isEnable
            break
        case 'public':
        case 'self':
            isAll = true
            if (!isROwner) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['self'] = !isEnable
            break
        case 'antilinkkick':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiLinkkick = isEnable
            break
        case 'antilinkdelete':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiLinkdelete = isEnable
            break
        case 'nsfw':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.nsfw = isEnable
            break
        case 'rpg':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.rpg = isEnable
            break
       /*case 'allfitur':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.xmaze = isEnable
            break*/
        case 'antivirtex':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiVirtex = isEnable
            break
        case 'simi':
            if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
            }
            chat.simi = isEnable
            break
        case 'composing':
            if (!isROwner) {
                global.dfail('rowner', m, conn)
                throw false
            }
            bot.composing = isEnable
            break
        case 'antisticker':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiSticker = isEnable
            break
        case 'antibadword':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiBadword = isEnable
            break
        case 'antitoxic':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiToxic = isEnable
            break
        case 'restrict':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.pembatasan = isEnable
            break
        case 'game':
            if (m.isGroup) {
                if (!(isAdmin || isOwner)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.game = isEnable
            break
        case 'whitelistmycontacts':
            if (!isOwner) {
                global.dfail('owner', m, conn)
                throw false
            }
            conn.callWhitelistMode = isEnable
            break
        case 'autobackup':
            isAll = true
            if (!isOwner) {
                global.dfail('owner', m, conn)
                throw false
            }
            bot.backup = isEnable
            break
        case 'joinpaksa':
            isAll = true
            if (!isOwner) {
                global.dfail('owner', m, conn)
                throw false
            }
            chat.joinpaksa = isEnable
            break
        case 'autocleartmp':
            isAll = true
            if (!isOwner) {
                global.dfail('owner', m, conn)
                throw false
            }
            bot.cleartmp = isEnable
            break
        case 'autoread':
            isAll = true
            if (!isROwner) {
                global.dfail('rowner', m, conn)
                throw false
            }
            bot.autoread = isEnable
            break
        case 'pconly':
            isAll = true
            if (!isROwner) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['pconly'] = isEnable
            break
        case 'gconly':
            isAll = true
            if (!isROwner) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['gconly'] = isEnable
            break
        case 'swonly':
            isAll = true
            if (!isROwner) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['swonly'] = isEnable
            break
        default:
            return conn.reply(m.chat, Styles(caption), m, { contextInfo: { externalAdReply: {title: wm, body: null, sourceUrl: yt, thumbnailUrl: gambar }}})
        }
 let zila = `╔─『 *OPTIONS* 』
├▢ *ᴛyᴩᴇ:* ${Styles(type)} 
├▢ *ꜱᴛᴀᴛᴜꜱ:* ꜱᴜᴄᴄᴇꜱ √
├▢ *ᴏᴩᴛɪᴏɴꜱ:* ${isEnable ? 'ᴇɴᴀʙʟᴇ' : 'ᴅɪꜱᴀʙʟᴇ'}
├▢ *ꜰʀᴏᴍ:* ${isAll ? 'ᴛʜɪꜱ ʙᴏᴛ' : isUser ? '' : 'ᴛʜɪꜱ ᴄʜᴀᴛ'}
╚─────═┅═──────···⳹
`.trim()
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
let flaa = pickRandom(flaaa)
conn.sendMessage(m.chat, { 
text : zila,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: 'B O T -  S E T T I N G S',
body: null,
thumbnailUrl: flaa + `${type}`,
sourceUrl: null,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
handler.help = ['enable <command>']
handler.tags = ['group']
handler.command = /^((en|dis)able|setting|settings|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler

function wish() {
    let wishloc = ''
    const time = moment.tz('Asia/Jakarta').format('HH')
    wishloc = ('Hi')
    if (time >= 0) {
        wishloc = ('Selamat Malam')
    }
    if (time >= 4) {
        wishloc = ('Selamat Pagi')
    }
    if (time >= 11) {
        wishloc = ('Selamat Siang')
    }
    if (time >= 15) {
        wishloc = ('️Selamat Sore')
    }
    if (time >= 18) {
        wishloc = ('Selamat Malam')
    }
    if (time >= 23) {
        wishloc = ('Selamat Malam')
    }
    return wishloc
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}