let handler = m => m

handler.before = async function (m) {
    let user = global.db.data.users[m.sender]

    //Health
    if (user.healt > 100) {
        user.healt = 100;
    }
    if (user.healt < 0) {
        user.healt = 0;
    }

    //Sword                            
    if (user.sword > 0) {
        if (user.sworddurability < 1) {
            user.sworddurability = 30
            user.sword -= 1
        }
    }
    if (user.sword == 0) {
        user.sworddurability = 0
    }

    //pickaxe
    if (user.pickaxe > 0) {
        if (user.pickaxedurability < 1) {
            user.pickaxedurability = 30
            user.pickaxe -= 1
        }
    }
    if (user.pickaxe == 0) {
        user.pickaxedurability = 0
    }

    //armor
    if (user.armor > 0) {
        if (user.armordurability < 1) {
            user.armordurability = 30
            user.armor -= 1
        }
    }
    if (user.armor == 0) {
        user.armordurability = 0
    }
}
export default handler