/*import { promises as fsPromises } from 'fs';
import crypto from "crypto";
import fetch from "node-fetch";    

const Reg = /\|?(.*)([^\w\s])([0-9]*)$/i;

const handler = async (m, {
    conn, text, usedPrefix, command
}) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};

    if (conn.registrasi[m.chat]?.[m.sender]) return m.reply('You are requesting verification!');
    let user = global.db.data.users[m.sender];
    if (user.registered === true) return conn.reply(m.chat, '```✅ Nomor Kamu Udah Terverifikasi```', m)
    const umurRandom = Math.floor(Math.random() * 50) + 1;
    let zilabaka = m.name
    const formatSalah = `• *Example :* ${usedPrefix + command} ${zilabaka}.${umurRandom}`;
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    if (!Reg.test(text)) throw formatSalah;
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) return conn.reply(m.chat, "🚩 Nama tidak boleh kosong (Alphanumeric)", m)
    if (!age) return conn.reply(m.chat, "🚩 Umur tidak boleh kosong (Angka)", m)
    age = parseInt(age);
    if (age > 50) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nTua amat dah", m)
    if (age < 5) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nBanyak pedo", m)

    let sn = crypto.createHash("md5").update(m.sender).digest("hex");
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");

    let cap = `*Kamu terverifikasi*

• *Nama:* ${name}
• *Umur:* ${age} tahun
• *Serial Number (SN):* ${sn}`;

    const json = await createOtpCanvas(pp);

    let confirm = "Reply pesan ini dengan mengetik kode OTP yang ada pada gambar!";
    let { key } = await conn.sendFile(m.chat, json.image, '', confirm, m);

    conn.registrasi[m.chat] = {
        ...conn.registrasi[m.chat],
        [m.sender]: {
            message: m,
            sender: m.sender,
            otp: json.otp,
            verified: json.verified,
            caption: cap,
            pesan: conn,
            age,
            user,
            name,
            key,
            timeout: setTimeout(() => {
                conn.sendMessage(m.chat, { delete: key });
                delete conn.registrasi[m.chat][m.sender];
            }, 60 * 1000)
        }
    };
}

handler.before = async (m, { conn }) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};
    if (m.isBaileys) return;
    if (!conn.registrasi[m.chat]?.[m.sender]) return;
    if (!m.text) return;
    let { timeout, otp, verified, message, sender, pesan, caption, user, name, age, key } = conn.registrasi[m.chat]?.[m.sender];
    if (m.id === message.id) return;
    if (m.id === key.id) return;
    if (m.text == otp) {
        user.name = name.trim();
        user.age = age;
        user.regTime = +new Date;
        user.registered = true;
         let ppk = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");
        let capt = `✨ OTP Benar!\n${m.sender.split("@")[0]} telah di verifikasi!\n\n`
        capt += `*VERIFIKASI BERHASIL*\n\n`
        capt += `• *Nama:* ${name}\n`
        capt += `• *Umur:* ${age} tahun\n`
        capt += `• *Serial Number (SN):* .ceksn\n\n`
        capt += `Terima kasih telah melakukan verifikasi. Data pengguna telah disimpan dengan aman di database bot. Data kamu sekarang sudah terverifikasi.\n\n`
        capt += `🚀 Sekarang kamu dapat menggunakan fitur-fitur khusus yang hanya tersedia untuk pengguna terverifikasi.`
        pesan.reply(m.chat, capt, m, { contextInfo: { externalAdReply: {title: null, body: wm, sourceUrl: yt, thumbnailUrl: ppk }}})
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    } else {
        conn.reply(m.chat, `✖️ OTP Salah!\n${m.sender.split('@')[0]} tidak di verifikasi!`, m)
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    }
}

handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['main']

handler.command = /^(daftar|reg(ister)?)$/i

export default handler
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isNumber(x) {
    return !isNaN(x);
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = `https://fakeimg.pl/300x300/ffffff/000000/?text=${codetext}`
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: captchaBuffer
    };
}*/

import canvafy from "canvafy";
import { promises as fsPromises } from 'fs';
import crypto from "crypto";
import fetch from "node-fetch";    

const Reg = /\|?(.*)([^\w\s])([0-9]*)$/i;

const handler = async (m, {
    conn, text, usedPrefix, command
}) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};

    if (conn.registrasi[m.chat]?.[m.sender]) return m.reply('You are requesting verification!');
    let user = global.db.data.users[m.sender];
    if (user.registered === true) return conn.reply(m.chat, '```✅ Nomor Kamu Udah Terverifikasi```', m)
    const umurRandom = Math.floor(Math.random() * 50) + 1;
    let zilabaka = m.name
    const formatSalah = `• *Example :* ${usedPrefix + command} ${zilabaka}.${umurRandom}`;
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    if (!Reg.test(text)) throw formatSalah;
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) return conn.reply(m.chat, "🚩 Nama tidak boleh kosong (Alphanumeric)", m)
    if (!age) return conn.reply(m.chat, "🚩 Umur tidak boleh kosong (Angka)", m)
    age = parseInt(age);
    if (age > 50) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nTua amat dah", m)
    if (age < 5) return conn.reply(m.chat, "🚩 *Gak boleh!*,\nBanyak pedo", m)

    let sn = crypto.createHash("md5").update(m.sender).digest("hex");
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mFzSckd12spppS8gAJ2KB2ER-ccZd4pBbw&usqp=CAU");

    let cap = `*Kamu terverifikasi*

• *Nama:* ${name}
• *Umur:* ${age} tahun
• *Serial Number (SN):* ${sn}`;

    const json = await createOtpCanvas(pp);

    let confirm = "Reply pesan ini dengan mengetik kode OTP yang ada pada gambar!";
    let { key } = await conn.sendFile(m.chat, json.image, '', confirm, m);

    conn.registrasi[m.chat] = {
        ...conn.registrasi[m.chat],
        [m.sender]: {
            message: m,
            sender: m.sender,
            otp: json.otp,
            verified: json.verified,
            caption: cap,
            pesan: conn,
            age,
            user,
            name,
            key,
            timeout: setTimeout(() => {
                conn.sendMessage(m.chat, { delete: key });
                delete conn.registrasi[m.chat][m.sender];
            }, 60 * 1000)
        }
    };
}

handler.before = async (m, { conn }) => {
    conn.registrasi = conn.registrasi ? conn.registrasi : {};
    if (m.isBaileys) return;
    if (!conn.registrasi[m.chat]?.[m.sender]) return;
    if (!m.text) return;
    let { timeout, otp, verified, message, sender, pesan, caption, user, name, age, key } = conn.registrasi[m.chat]?.[m.sender];
    if (m.id === message.id) return;
    if (m.id === key.id) return;
    if (m.text == otp) {
        user.name = name.trim();
        user.age = age;
        user.regTime = +new Date;
        user.registered = true;
        let capt = `✨ OTP Benar!\n${m.sender.split("@")[0]} telah di verifikasi!\n\n\n`
        capt += `*VERIFIKASI BERHASIL*\n\n`
        capt += `• *Nama:* ${name}\n`
        capt += `• *Umur:* ${age} tahun\n`
        capt += `• *Serial Number (SN):* .ceksn\n\n`
        capt += `Terima kasih telah melakukan verifikasi. Data pengguna telah disimpan dengan aman di database bot. Data kamu sekarang sudah terverifikasi.\n\n`
        capt += `🚀 Sekarang kamu dapat menggunakan fitur-fitur khusus yang hanya tersedia untuk pengguna terverifikasi.`
        pesan.sendFile(m.chat, verified, '', capt, m);
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    } else {
        conn.reply(m.chat, `✖️ OTP Salah!\n${m.sender.split('@')[0]} tidak di verifikasi!`, m)
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete conn.registrasi[m.chat]?.[m.sender];
    }
}

handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['main']

handler.command = /^(daftar|reg(ister)?)$/i

export default handler
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function isNumber(x) {
    return !isNaN(x);
}

function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://telegra.ph/file/d990684c4f35cfdd14d2b.jpg")
        .setCaptchaKey(codetext.toString())
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://telegra.ph/file/96b2851cae3f8ef95cb0c.jpg")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#f0f0f0")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#f0f0f0")
        .setOverlayOpacity(0.9)
        .build();
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}