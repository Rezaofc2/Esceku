import gtts from 'node-gtts';
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import { spawn } from 'child_process';
import fetch from 'node-fetch';

const defaultLang = 'id'
let handler = async (m, { conn, args, usedPrefix, command }) => {

  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text) throw `• *Example :* ${usedPrefix + command} Siapa presiden Indonesia?`
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text
var apii = await fetch(`https://api.botcahx.eu.org/api/search/openai-chat?text=${text}&apikey=${btc}`)
  var aivn = await apii.json()
  let res
  try { res = await tts(aivn.message, lang) }
  catch (e) {
    m.reply(e + '')
    res = await tts(aivn.message)
  } finally {
    conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}
handler.help = ['aivoice *<text>*','aivn *<text>*','openaivn *<text>*'];
handler.command = /^aivoice|aivn|openaivn|openaivoice$/i
handler.tags = ['ai'];
handler.premium = false;
export default handler

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}