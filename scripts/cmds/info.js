const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    version: "1.3",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "utility",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const 𝗕𝗢𝗧𝗡𝗔𝗠𝗘 = "𝗝𝗢𝗬-𝗕𝗢𝗧";
    const 𝗕𝗢𝗧𝗣𝗥𝗘𝗙𝗜𝗫 = ".";
    const 𝗕𝗢𝗧𝗔𝗗𝗠𝗜𝗡 = "𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬";
    const 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 = "https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL";
    const 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 = "01709045888";
    const 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 = "@𝗺𝗱𝗷𝘂𝗯𝗮𝗲𝘁𝗮𝗵𝗺𝗲𝗱";

    const 𝘂𝗿𝗹𝘀 = JSON.parse(fs.readFileSync('loid.json'));
    const 𝗹𝗶𝗻𝗸 = urls[Math.floor(Math.random() * urls.length)];

    const 𝗡𝗼𝘄 = moment().tz('Asia/Manila');
    const 𝗗𝗮𝘁𝗲 = now.format('MMMM Do YYYY');
    const 𝗧𝗶𝗺𝗲 = now.format('h:mm:ss A');

    const 𝗨𝗽𝘁𝗶𝗺𝗲 = process.uptime();
    const 𝗦𝗲𝗰𝗼𝘂𝗻𝗱𝘀 = Math.floor(uptime % 60);
    const 𝗠𝗶𝗻𝗶𝘁𝘂𝗲𝘀 = Math.floor((uptime / 60) % 60);
    const 𝗛𝗼𝘂𝗿𝘀 = Math.floor((uptime / (60 * 60)) % 24);
    const 𝗗𝗮𝘆𝘀 = Math.floor(uptime / (60 * 60 * 24));
    const 𝗨𝗽𝘁𝗶𝗺𝗲𝘀𝘁𝗮𝗿𝗶𝗻𝗴 = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    message.reply({
      body: `===「 𝗕𝗢𝗧 & 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗠 」===\n❏Bot Name: ${botName}\n❏Bot Prefix: ${botPrefix}\n❏Name: ${authorName}\n❏Facebook: ${authorFB}\n❏Instagram: ${authorInsta}\n❏Status: ${status}\n❏Date: ${date}\n❏Time: ${time}\n❏Uptime: ${uptimeString}\n=====================`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  },

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.onStart({ message });
    }
  }
};
