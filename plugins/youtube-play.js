import search from 'yt-search';
import { youtube } from 'btch-downloader';

let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw 'Enter Title / Link From YouTube!';
    try {
        const look = await search(text);
        const convert = look.videos[0];
        if (!convert) throw 'Video/Audio Tidak Ditemukan';
        if (convert.seconds >= 3600) {
            return conn.reply(m.chat, 'Video is longer than 1 hour!', m);
        } else {
            let audioUrl;
            try {
                audioUrl = await youtube(convert.url);
            } catch (e) {
                conn.reply(m.chat, 'Please wait...', m);
                audioUrl = await youtube(convert.url);
            }

            let caption = '';
            caption += `∘ Title : ${convert.title}\n`;
            caption += `∘ Ext : Search\n`;
            caption += `∘ ID : ${convert.videoId}\n`;
            caption += `∘ Duration : ${convert.timestamp}\n`;
            caption += `∘ Viewers : ${convert.views}\n`;
            caption += `∘ Upload At : ${convert.ago}\n`;
            caption += `∘ Author : ${convert.author.name}\n`;
            caption += `∘ Channel : ${convert.author.url}\n`;
            caption += `∘ Url : ${convert.url}\n`;
            caption += `∘ Description : ${convert.description}\n`;
            caption += `∘ Thumbnail : ${convert.image}`;

            await conn.sendFile(m.chat, convert.image, 'play.jpg', caption, m, false, { contextInfo: { mentionedJid: conn.parseMention(caption) }})
        await conn.sendFile(m.chat, audioUrl.mp3, convert.title + ".mp3", '', m, null, { mimetype: 'audio/mp4' })
        }
    } catch (e) {
        conn.reply(m.chat, `*Error:* ` + e.message, m);
    }
};

handler.help = ["play"];
handler.tags = ["downloader"];
handler.command = ["play"];
handler.limit = true;
handler.group = false;

export default handler