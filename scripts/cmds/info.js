const DIG = require("info");
const fs = require("fs-extra");
const Discord = require ("discord.js")
const request = require ("node-superfetch");
module.exports = {
  config: {
    name: "info",
    version: "1.1",
    author: "jun",
    countDown: 5,
    role: 0,
    shortDescription: "info",
    longDescription: "info",
    category: "auto",
    guide: {
    }
  },

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/ibkUjMa.jpeg", 
            
            "https://i.imgur.com/ibkUjMa.jpeg", 
            
            "https://i.imgur.com/ibkUjMa.jpeg",

"https://i.imgur.com/ibkUjMa.jpeg",
            
            "https://i.imgur.com/ibkUjMa.jpeg"];
  
var callback = () => api.sendMessage({body:`⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
۞ 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢 ۞
◎ ══════ ❈ ══════ ◎
╭─╮ 
  🔥 
╰─╯༊🌸𝗡𝗔𝗠𝗘👉 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬ツ࿐ 
╭─╮ 
  🔥 
╰─╯༊🌸𝗔𝗗𝗗𝗥𝗘𝗦𝗦👉 𝗦𝗔𝗥𝗜𝗦𝗛𝗔𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥ツ࿐ 
╭─╮ 
  🔥 
╰─╯༊🌸𝗪𝗛𝗔𝗧𝗦 𝗔𝗣𝗣👉 +8801709045888ツ࿐
╭─╮ 
  🔥 
╰─╯༊🌸𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡👉 𝗦𝗜𝗡𝗚𝗟𝗘ツ࿐

   𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 𝗙𝗕 𝗜𝗗
[ANY HELP CONTACT FB]

 ➷➷➷➷➷➷➷➷➷➷➷➷➷➷ https://www.facebook.com/profile.php?id=100089582321226

⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
┏•━•━•━ ◎ ━•━•━•┓
 ❂ 𝗕𝗢𝗧  𝗢𝗪𝗡𝗘𝗥 ❂
┗•━•━•━ ◎ ━•━•━•┛
╭────────────╮
✜𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬
╰────────────╯                       

❇️BOT PREFIX : ${global.config.PREFIX}              
OTHER NFORMATION__________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
