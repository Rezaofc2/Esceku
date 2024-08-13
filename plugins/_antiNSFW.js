import axios from 'axios'
import uploadFile from '../lib/uploadFile.js'

export async function before(m, {
    conn
}) {
  if (m.isBaileys && m.fromMe) return true;
    if (!m.isGroup) return false
    let data = db.data.chats[m.chat]
    if (data.antiNsfw) {
  const q = m || m.quoted;
  const mime = q.msg?.mimetype || "";
  if (!mime) return;

  const media = await q.download();
  if (!media) return;
  const link = await uploadFile(media);

  if (link) {
    const detect = await cekGambar(link);
    if (detect.nsfw) {
      await this.reply(m.chat, detect.msg, m);
      await this.sendMessage(m.chat, { delete: m.key });
      return;
    }
  }
}
}

async function cekGambar(img) {
  try {
    const response = await axios.get(
      "https://api.sightengine.com/1.0/check.json",
      {
        params: {
          url: img,
          models: "nudity,wad,gore", 
          api_user: "834789834", //671718818
          api_secret: "tcTcNJvTAid4QqqpuxehyPgJa7A3xaKm", //zs9QqkjFYZWq5N3nozXT
        },
      },
    );

    return {
      nsfw: response.data.nudity.safe < 0.8,
      msg: "*[ System notice ]* NSFW detected !!",
    };
  } catch (error) {
    console.error("Kesalahan dalam pemeriksaan gambar:", error);
  }
}
