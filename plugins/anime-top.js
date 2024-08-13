import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  
    let res = await (await fetch('https://api.jikan.moe/v4/top/anime'))
    
    let json = await res.json()
    if (!json.data) throw json
    let data = "*+ T O P - A N I M E*\nList Anime dengan rating tertinggi saat ini !"
    for (let i = 0; i < json.data.length; i++) {
      let { rank, title, indo, genres, season, type, year, source, episodes, status, duration, studios, rating, score, popularity } = json.data[i]
      data += `
      
*[ RANKING ${rank} ]*
*• Title :* ${title}
*• Genre :* *[ ${genres.map((genres) => genres.name).join(", ")}} ]*
*• Type :* ${type}
*• Season :* ${season} *[ ${year} ]*
*• Source :* ${source}
*• Total episode :* ${episodes}
*• Status :* ${status}
*• Duration :* ${duration}
*• Studio :* *[ ${studios.map((studios) => studios.name).join(", ")} ]*
*• Rating :* ${rating}
*• Score :* ${score}/10.0
*• Popularity :* ${popularity}`

    }
  m.reply(data)


}

handler.help = ['topanime']
handler.tags = ['internet',"anime"]
handler.command = /^(topanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

