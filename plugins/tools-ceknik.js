import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
    if (!text) throw `*Example:* ${usedPrefix + command} Nik KTP`;
        const api = await fetch(`https://api.kyuurzy.site/api/search/ceknik?query=${text}`);
        let telaso = await api.json();
        m.reply(`Status: *${telaso.result.status}*\nPesan : ${telaso.result.pesan}\n\nNik : *${telaso.result.data.nik}*\nKelamin : *${telaso.result.data.kelamin}*\nLahir : *${telaso.result.data.lahir}*\nProvinsi : *${telaso.result.data.provinsi}*\nKota/Kabupaten : *${telaso.result.data.kotakab}*\nKecamatan : *${telaso.result.data.kecamatan}*\nUniqcode : *${telaso.result.data.uniqcode}*\nKodepos : *${telaso.result.data.tambahan.kodepos}*\nPasaran : *${telaso.result.data.tambahan.pasaran}*\nUmur : *${telaso.result.data.tambahan.usia}*\nUltah : *${telaso.result.data.tambahan.ultah}*\nZodiak : *${telaso.result.data.tambahan.zodiak}*\n\n*Check Nik KTP (Not a Doxing Feature!!!*)`)
};

handler.command = handler.help = ['ceknik'];
handler.tags = ['tools'];
handler.premium = false;
handler.group = false;
handler.limit = true;

export default handler