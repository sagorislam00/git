module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/ljXyviw.jpeg"];
var callback = () => api.sendMessage({body:` ╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇮 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮
(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-

☄️𝗕𝗼𝘁 𝗡𝗮𝗺𝗲☄️  ${global.config.BOTNAME}

🔥𝗕𝗼𝘁 𝗔𝗱𝗺𝗶𝗻🔥☞︎︎︎𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬☜︎︎︎✰💔🥀

𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸➪ www.facebook.com/priyanshu.rajput.official 💞🕊️

𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺👉 @𝗺𝗱𝗷𝘂𝗯𝗮𝗲𝘁𝗮𝗵𝗺𝗲𝗱😇

✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

♥️𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿♥️ ☞︎︎︎𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬☜︎︎︎✰ 

🥳𝗨𝗣𝗧𝗜𝗠𝗘🥳

🌪️𝗧𝗼𝗱𝗮𝘆 𝗶𝘀🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡𝗕𝗼𝘁 𝗶𝘀 𝗥𝘂𝗻𝗻𝗶𝗻𝗴⚡ ${hours}:${minutes}:${seconds}.

✅𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗺𝘆 𝘂𝘀𝗲 ${global.config.BOTNAME} Bot🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
