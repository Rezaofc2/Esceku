import { sticker } from '../lib/sticker.js'
import { googleImage } from '@bochilteam/scraper'
var handler = async (m, {
 conn, 
 command
 }) => {
    var error = (`https://telegra.ph/file/12141dd462ecabeed1347.png`)
    try {
        if (command == 'dinokuning' || command == 'sdino') {
        const res = await googleImage("sticker dinokuning")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'patrick') {
        const res = await googleImage("meme sticker patrick")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'spongebob') {
        const res = await googleImage("meme sticker spongebob")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'doge') {
        const res = await googleImage("meme sticker doge")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
          else if (command == 'gojo') {
        const res = await googleImage("gojo")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'sbucin') {
        const res = await googleImage("sticker pentol bucin")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'sgura') {
        const res = await googleImage("anime gwr gura")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'pentol') {
        const res = await googleImage("sticker pentol")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'paimon') {
        const res = await googleImage("paimon")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
        else if (command == 'manusialidi') {
        const res = await googleImage("sticker manusialidi")
        let image = res.getRandom()
        let link = image
        let stiker = await sticker(false, link, stickpack, stickauth)
            if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, null)
        }
    } catch (e) {
        console.log(e)
        await conn.sendFile(m.chat, error, 'error.webp', '', m)
    }
}
handler.command = handler.help = ['dinokuning', 'patrick', 'spongebob', 'doge', 'manusialidi','gojo','sbucin','sgura','pentol','dino','paimon','sdino']
handler.tags = ['sticker']
handler.limit = true
export default handler