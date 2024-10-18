const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    version: "1.3",
    author: "Joy Ahmed",
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
    const botName = "Loid Bot";
    const botPrefix = "$";
    const authorName = "Loid Butter";
    const authorFB = "https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL";
    const authorInsta = "";
    const status = "hi, crush ko po kayong lahat";

    const urls = JSON.parse(fs.readFileSync('loid.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Manila');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    message.reply({
      body: `╔╝❮${name}❯╚╗\n━━━━━━━━━━━━━━━━━━━━━━\n𝗡𝗔𝗠𝗘: 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬\n𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌\n𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝗧𝗔𝗥𝗔𝗞𝗔𝗡𝗗𝗜, 𝗦𝗔𝗥𝗜𝗦𝗛𝗔𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥\n𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄\n𝐀𝐆𝐄: 16\n𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝗦𝗜𝗡𝗚𝗟𝗘\n𝐖𝐎𝐑𝐊: 𝗦𝗧𝗨𝗗𝗘𝗡𝗧\n𝐆𝐌𝐀𝐈𝐋: 𝗷𝗼𝘆𝗮𝗵𝗺𝗲𝗱𝘁𝘁@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL \n𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: m.me/100065050393649\n𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801709045888\n𝐈𝐌𝐎: 01709045888\n𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: @mdjubaedahmed\n━━━━━━━━━━━━━━━━━━━━━━\n\nBot Prefix: ( . )\nBot Name: 𝗝𝗢𝗬-𝗕𝗢𝗧\ngc Name: ${threadName}\nTime:【 ${date} || ${time} \n━━━━━━━━━━━━━━━━━━━━━━`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  },

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.onStart({ message });
    }
  }
};
