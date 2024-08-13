const delay = (time) => new Promise((res) => setTimeout(res, time));
let handler = (m) => m;

handler.before = async function (m, { conn }) {
  if (!m.chat.endsWith("@s.whatsapp.net")) return !0;
  this.menfess = this.menfess ? this.menfess : {};
  let room = Object.values(this.menfess).find((room) =>
    [room.dari, room.penerima].includes(m.sender),
  );
  if (m.text === "STOP") {
  const frez = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": "_RysBot Terverifikasi Whatsapp_"
      }
    }
    let other = [room.dari, room.penerima].find((user) => user !== m.sender);
    conn.reply(other, "*[ System Notice ]*\nmenfess telah dihentikan", frez);
    conn.reply(m.chat, "*[ System Notice ]*\nmenfess telah dihentikan", frez);
    delete this.menfess[room.id];
  } else if (room) {
    let other = [room.dari, room.penerima].find((user) => user !== m.sender);
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
     const frez2 = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": wm
      }
    }
    if (mime) {
      m.copyNForward(
        other,
        true,
        m.quoted && m.quoted.fromMe
          ? {
              contextInfo: {
                ...m.msg.contextInfo,
                forwardingScore: 1,
                isForwarded: true,
                participant: other,
              },
            }
          : {},
      );
    } else {
      conn.reply(other, "*`- Pesan Menfess :`*\n" + m.text, frez2);
    }
  }
  return !0;
};

export default handler