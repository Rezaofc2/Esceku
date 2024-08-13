let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Platinum'
        : ((user.level >= 3) && (user.level <= 50)) ? 'Platinum'
            : ((user.level >= 50) && (user.level <= 150)) ? 'Emas'
                : ((user.level >= 150) && (user.level <= 250)) ? 'Perak'
                    : ((user.level >= 250) && (user.level <= 350)) ? 'Perunggu'
                        : ((user.level >= 350) && (user.level <= 450)) ? 'Ruby'
                            : ((user.level >= 450) && (user.level <= 550)) ? 'Zamrud'
                                : ((user.level >= 550) && (user.level <= 650)) ? 'Safir'
                                    : ((user.level >= 650) && (user.level <= 750)) ? 'Baja'
                                        : ((user.level >= 750) && (user.level <= 850)) ? 'Obsidian'
                                            : ((user.level >= 850) && (user.level <= 950)) ? 'Porselen'
                                                                                                 : ((user.level >= 950) && (user.level <= 1050)) ? 'Majin'
                                                                                                                                                    : ((user.level >= 1000) && (user.level <= 2000)) ? 'Demon lord seed'
                                                                                                                                                        : ((user.level >= 2000) && (user.level <= 3000)) ? 'Demon lord'
                                                                                                                                                            : ((user.level >= 3000) && (user.level <= 4000)) ? 'True demon lord'
                                                                                                                                                                : ((user.level >= 4000) && (user.level <= 5000)) ? 'Octagram'
                                                                                                                                                                    : ((user.level >= 5000) && (user.level <= 6000)) ? 'Older demon lord'
                                                                                                                                                                        : ((user.level >= 6000) && (user.level <= 7000)) ? 'Great demon lord'
                                                                                                                                                                            : ((user.level >= 7000) && (user.level <= 10000)) ? 'Strongest demon lord'
                                                                                                                                                                                                                                          : 'Strongest demon lord'
    user.role = role
    return true
}

export default handler 
