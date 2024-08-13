import moment from 'moment-timezone'
import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (
  m,
  { conn, text, args, command, usedPrefix, isOwner, isGroup },
) => {
  const tanggal = async (numer) => {
  const myMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

  const tgl = new Date(numer);
  const day = tgl.getDate();
  const bulan = tgl.getMonth();
  const thisDay = tgl.getDay();
  const thisDayName = myDays[thisDay];
  const yy = tgl.getYear();
  const year = yy < 1000 ? yy + 1900 : yy;

  const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
  const d = new Date();
  const locale = "id";
  const gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
  const weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((d * 1 + gmt) / 84600000) % 5];

  return `${thisDayName}, ${day} - ${myMonths[bulan]} - ${year}`;
    };
  const eggid = 15;
  const krizz = 5
  const location = 26;
  const prefix = usedPrefix;
  const akiraa = conn;
  const pler = JSON.parse(fs.readFileSync("./json/idgrup.json").toString());
  const jangan = m.isGroup ? pler.includes(m.chat) : false;
  
  const pp = await conn
    .profilePictureUrl(m.sender, "image")
    .catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
  switch (command) {
    case "pannel":
      {
        m.reply(`*☁️ LIST PANNEL YANG TERSEDIA*
*• 1GB ✅*
*• 2GB ✅*
*• 3GB ✅*
*• 4GB ✅*
*• 5GB ✅*
*• 6GB ✅*
*• 7GB ✅*
*• 8GB ✅*
*• 9GB ✅*
*• 10GB ✅*
*• UNLI ✅*`);
      }
      break;
    case "addgc":
      if (!isOwner) return m.reply(`Khusus Owner`);
      pler.push(m.chat);
      fs.writeFileSync("./json/idgrup.json", JSON.stringify(pler));
      m.reply(`*[ System notice ]* sucess add accesss`);
      break;
    case "delgc":
      if (!isOwner) return m.reply(`Khusus Owner`);
      var ini = pler.indexOf(m.chat);
      pler.splice(ini, 1);
      fs.writeFileSync("./json/idgrup.json", JSON.stringify(pler));
      m.reply(`*[ System notice ]* sucess delete access`);

      break;
    case "1gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
                  let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024;
        let cpu = 30;
        let disk = 1024;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
        
          let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
       conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "2gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
                  let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 + 1024;
        let cpu = 30 + 30;
        let disk = 1024 + 1024;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
       
        let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "3gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 3;
        let cpu = 30 * 3;
        let disk = 1024 * 3;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
        
        let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "4gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 4;
        let cpu = 30 * 4;
        let disk = 1024 * 4;
        let email = username + "@rezastore.co.id";
        if (!u) return;
        
      let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "5gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
               let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 5;
        let cpu = 30 * 5;
        let disk = 1024 * 5;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
        
        
       let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "6gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
          if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
                let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 6;
        let cpu = 30 * 6;
        let disk = 1024 * 6;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
    
          let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "7gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
                if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 7;
        let cpu = 30 * 7;
        let disk = 1024 * 7;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
      
       let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "8gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
                if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 8;
        let cpu = 30 * 8;
        let disk = 1024 * 8;
        let email = username + "@rezaoffc.co.id";
        if (!u) return;
       
     let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di Reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "9gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
               if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 9;
        let cpu = 30 * 9;
        let disk = 1024 * 9;
        let email = username + "@RezaOffc.co.id";
        if (!u) return;
       
         let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
        conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "10gb":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
      if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
                 
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 1024 * 10;
        let cpu = 30 * 10;
        let disk = 1024 * 10;
        let email = username + "@Rezaoffc.co.id";
        if (!u) return;
   
        let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
       let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
conn.sendMessage(u, { text: ctf }, { quoted: m });
        
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

*© 🇮🇩 REZA STORE 2023 - 2024*`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
    case "unli":
      {
        if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
                if (global.db.data.users[m.sender].seller == false) return m.reply(`Khusus Seller Panel`);
        let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
        let username = t[0];
        let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        let name = username;
        let egg = "15";
        let loc = "1";
        let memo = 0;
        let cpu = 0;
        let disk = 0;
        let email = username + "@RezaOffc.co.id";
        if (!u) return;
     
         let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username,
            first_name: username,
            last_name: username,
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors)
          return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let f2 = await fetch(domain + "/api/application/nests/" + krizz + "/eggs/" + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let { key } = await akiraa.sendMessage(
          m.chat,
          { text: "*[ CREATING SERVER.... ]*" },
          { quoted: m },
        );
        let ctf = `*[ 📦 BERIKUT DATA PANNEL ANDA ]*
*• Username :* ${user.username}
*• Password :* ${password.toString()}
*• Login :* ${domain}
-------------------------------------------------------------------------------------
*🔴 Jangan Hilangkan Data Panel anda, Simpan history chat ini sebagai bukti claim garansi jika server mati/down*`;
conn.sendMessage(u, { text: ctf }, { quoted: m });
        let data2 = await f2.json();
        let startup_cmd = data2.attributes.startup;

        let f3 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: "🟢 " + name + " Server",
            description: "© Terimakasih telah order di reza store",
            user: user.id,
            egg: parseInt(egg),
            docker_image: data2.attributes.docker_image,
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: 0,
              AUTO_UPDATE: 0,
              CMD_RUN: "npm start",
            },
            limits: {
              memory: memo,
              swap: 0,
              disk: disk,
              io: 500,
              cpu: cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let res = await f3.json();
        if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
        let server = res.attributes;
        let p = `*[ SUCCESS CREATING SERVER ]*
*• User ID :* ${user.id}
*• Server ID :* ${server.id}
*• Memory :* ${server.limits.memory === 0 ? "Unlimited" : server.limits.memory + "Mb"}
*• Disk :* ${server.limits.disk === 0 ? "Unlimited" : server.limits.disk + "Mb"}
*• Cpu :* ${server.limits.cpu === 0 ? "Unlimited" : server.limits.cpu + "%"}
*• Create :* ${await tanggal(user.created_at)}

© 🇮🇩 REZA STORE 2023 - 2024`;
        await conn.sendMessage(m.chat, { text: p, edit: key }, { quoted: m });
      }
      break;
      case "addadmin": {
      if (!jangan)
          return m.reply(
            "*[ System Notice ]* the group can't access this feature",
          );
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
 let t = text.split(",");
        if (t.length < 2)
          return m.reply(
            `*• Example :* ${usedPrefix + command} *[username, number]*`,
          );
let username = t[0];
let email = username + "@RezaOffc.co.id";
        let name = username;
let password = pickRandom(["yowlmss","ajksbddj","jdkdhdksoapsj","idoaowjwhdodkh","osjdiwpqofjf","pslsjdoslwkshd","pslapwkfhfjf","pslsjdod","soisjsid","oskdjdk","lslapkosls","lslskd","soapao","pqpwjdkf","jsksoso","ospapap"])
let u = m.quoted
          ? m.quoted.sender
          : t[1]
            ? t[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
            : m.mentionedJid[0];
        
        if (!u) return;
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

let user = data.attributes

let tks = `
TYPE: ADMIN PANEL

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
conn.sendMessage(m.chat, { text: tks }, { quoted: m });

let y = `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`
conn.sendMessage(u, { text: y }, { quoted: m });
}
      break;
    case "listusr":
      {
        if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
        let txt = text ? text : 1;
        let f = await fetch(domain + "/api/application/users?page=" + txt, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let data = await f.json();
         
if (f.ok) {

let userList = `*A L L - U S E R*\n*Total: ${data.data.length} user*\n\n`

let adminList = data.data
.filter(user => user.attributes)
.map(user => {
userList += '```ID:```' + ` ${user.attributes.id}\n`
userList += '```Username:```' + ` ${user.attributes.username}\n`
userList += '```Email:```' + ` ${user.attributes.email}\n`
userList += '```First Name:```' + ` ${user.attributes.first_name}\n`
userList += '```Last Name:```' + ` ${user.attributes.last_name}\n`
userList += '```Language:```' + ` ${user.attributes.language}\n`
userList += '```Root Admin:```' + ` ${user.attributes.root_admin ? 'Yes' : 'No'}\n`
userList += '```2FA:```' + ` ${user.attributes['2fa'] ? 'Enabled' : 'Disabled'}\n`
userList += '```Created At:```' + `${user.attributes.created_at}\n\n`
})
conn.reply(m.chat, `${userList}${global.wm}`, m);
}
      }
      break;
    case "detusr":
      {
        if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
        if (!text) throw `*• Example :* ${usedPrefix + command} *[id user]*`;
        let f = await (
          await fetch(domain + "/api/application/users/" + text, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey,
            },
          })
        ).json();
        if (f.errors) return m.reply("*USER NOT FOUND*");
        let user = f.attributes;
        let cap = `*[ DETAIL USER  ${user.username.toUpperCase()} ]*
*• Email :* ${user.email}
*• Username :* ${user.username}
*• ID :* ${user.id}
*• UUID :* *[ ${user.uuid} ]*
*• First Name :* ${user.first_name}
*• Last Name :* ${user.last_name}
*• Admin :* ${user.root_admin ? "yes" : "no"}
*• Create :* ${await tanggal(user.created_at)}
*• Upadate :* ${await tanggal(user.updated_at)}

Silahkan ketik .delusr ${user.id} untuk menghapus usr`
m.reply(cap)
      }
      break;
    case "delusr":
      {
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
    if (!text) throw `*• Example :* ${usedPrefix + command} *[id user]*`;
        let f = await fetch(domain + "/api/application/users/" + text, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let res = f.ok
          ? {
              errors: null,
            }
          : await f.json();
        if (res.errors) return m.reply("*THERE ARE NO USERS*");
        m.reply("*SUCCESS DELETE USER*");
      }
      break;
    case "delsrv":
      {
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
    if (!text) throw `*• Example :* ${usedPrefix + command} *[id server]*`;
        let f = await fetch(domain + "/api/application/servers/" + text, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let res = f.ok
          ? {
              errors: null,
            }
          : await f.json();
        if (res.errors) return m.reply("*THERE ARE NO SERVERS*");
        m.reply("*SUCCES DELETE SERVERS*");
      }
      break;
    case "detsrv":
      {
    if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
    if (!text) throw `*• Example :* ${usedPrefix + command} *[id server]*`;
        let f = await (
          await fetch(domain + "/api/application/servers/" + text, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey,
            },
          })
        ).json();
        if (f.errors) return m.reply("*SERVERS NOT FOUND*");
        let s = f.attributes;
        let cap = `*[ DETAIL SERVERS ${s.name.toUpperCase()} ]*
*• Name :* ${s.name}        
*• ID :* ${s.id}
*• Desc :* ${s.description}
*• UUID :* *[ ${s.uuid} ]*
*• Memory :* ${s.limits.memory === 0 ? "Unlimited" : s.limits.memory + "Mb"}
*• Disk :* ${s.limits.disk === 0 ? "Unlimited" : s.limits.disk + "Mb"}
*• Cpu :* ${s.limits.cpu === 0 ? "Unlimited" : s.limits.cpu + "%"}
*• Create :* ${await tanggal(s.created_at)}
*• Update :* ${await tanggal(s.updated_at)}

Silahkan ketik delsrv ${s.id} untuk menghapus srv`
m.reply(cap)
      }
      break;
    case "listsrv":
      {
        if (!isOwner)
      return m.reply(`*[ System Notice ]* especially the owner`);
        let txt = text ? text : 1;
        let f = await fetch(domain + "/api/application/servers?page=" + txt, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        
       let data = await f.json();
         
if (f.ok) {
let totalServers = data.meta.pagination.total;
let servers = data.data;

let serverList = `*A L L - S E R V E R*\n*Total: ${data.data.length} server*\n\n`

servers.forEach(server => {
let serverInfo = server.attributes;
serverList += '```Server ID:```' + ` ${serverInfo.id}\n`
serverList += '```Server Name:```' + ` ${serverInfo.name}\n`
serverList += '```Code Server:```' + ` ${serverInfo.identifier}\n`
serverList += '```User ID:```' + ` ${serverInfo.user}\n`
serverList += '```Suspended:```' + ` ${serverInfo.suspended ? "Yes" : "No"}\n`
serverList += '```Updated At:```' + ` ${serverInfo.updated_at}\n`
serverList += '```Created At:```' + ` ${serverInfo.created_at}\n\n`
});

conn.reply(m.chat, `${serverList}${global.wm}`, m);
}
       }
      break;
  }
};
handler.command = handler.help = [
  "pannel",
  "addgc",
  "delgc",
  "1gb",
  "2gb",
  "3gb",
  "4gb",
  "5gb",
  "6gb",
  "7gb",
  "8gb",
  "9gb",
  "10gb",
  "unli",
  "listusr",
  "detusr",
  "delusr",
  "listsrv",
  "delsrv",
  "detsrv",
  "addadmin",
];
handler.tags = ["cpanel"];

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}