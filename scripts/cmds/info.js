module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
    countDown: 5,
    role: 0,
    shortDescription: "admin and info",
    longDescription: "bot owner info",
    category: "auto ✅",
  },

  onStart: async function () {},

  onStart: async function ({ event, message, getLang, usersData, threadsData }) {
    const _0x52402d=_0x23b5;function _0x23b5(_0x49a4e2,_0x53597b){const _0x36946d=_0x1556();return _0x23b5=function(_0x3be694,_0x56c7e3){_0x3be694=_0x3be694-(0x1d58+0xd74+-0x2911);let _0x32fa12=_0x36946d[_0x3be694];return _0x32fa12;},_0x23b5(_0x49a4e2,_0x53597b);}(function(_0xcf083b,_0x5a4d4f){const _0x1a7b9b=_0x23b5,_0x422ea0=_0xcf083b();while(!![]){try{const _0x2a8294=-parseInt(_0x1a7b9b(0x1c2))/(-0x1c50+-0x1999+-0x1*-0x35ea)+-parseInt(_0x1a7b9b(0x1ca))/(0x157d+-0xf69+-0x612)*(-parseInt(_0x1a7b9b(0x1bd))/(0x25fe+-0x1a05+-0xbf6))+-parseInt(_0x1a7b9b(0x1cb))/(0x12af+0x2085+-0x3330)*(parseInt(_0x1a7b9b(0x1c9))/(0xdda*-0x1+0x18e8+0x1*-0xb09))+parseInt(_0x1a7b9b(0x1bc))/(-0x15c9+0x130+0x149f)+-parseInt(_0x1a7b9b(0x1c6))/(-0x23d+0x1487+0xb*-0x1a9)+-parseInt(_0x1a7b9b(0x1d3))/(-0x37b+0x35*-0x19+0x8*0x116)*(parseInt(_0x1a7b9b(0x1d2))/(-0x143c+0x1*0xe45+-0x180*-0x4))+parseInt(_0x1a7b9b(0x1bb))/(-0x215e+0x867+0x25*0xad)*(parseInt(_0x1a7b9b(0x1c3))/(0x1e0+0x1*0xde9+-0xfbe));if(_0x2a8294===_0x5a4d4f)break;else _0x422ea0['push'](_0x422ea0['shift']());}catch(_0x1762e5){_0x422ea0['push'](_0x422ea0['shift']());}}}(_0x1556,-0x14b*0x649+-0x1134b+0x1352c6));function _0x1556(){const _0x18a0d=['\x0a\x20Commands','450QcFgYT','441352LHsogR','43596VSbwTM','\x0a\x20Author\x20N','config','author','ill\x20do','gers\x20type\x20','\x20working\x20w','9YblVaW','2538328MLJsqJ','redit\x20chan','610IaONge','5279700vdeTil','3ajnHOK','messageID','ame:\x20MOHAM','Fuck\x20you\x20c','fromCharCo','335525efgLfh','242066lDDJqE','threadID','MAD-BADOL\x20','1021622ytPtfv','sendMessag'];_0x1556=function(){return _0x18a0d;};return _0x1556();}const obfuscatedAuthor=String[_0x52402d(0x1c1)+'de'](0x1730+0x12c+-0x180f,0x21ea+0x1a40+-0x3bdb*0x1,0x15*0xaa+-0x2ce+-0xadc,0x20cf+-0x26e+-0x2*0xf10,0x2*-0x1da+0x65*-0x42+0x1e0b,0x4*-0x14+-0x250e+0x25ab,0x18de+-0x32c+-0x1571,-0x1bb5+-0x17*-0x15+0x1a16,-0x216f*0x1+-0x139f*-0x1+0xdfd,-0x35b+-0x2*0x762+-0x1*-0x1261,0x6db+-0x1ba0+0x8a*0x27,-0x1709+-0x2376+0x133*0x31,0x890+-0x36+-0x80b,-0x3c1*-0x9+-0x1817+-0x966);if(this[_0x52402d(0x1cd)][_0x52402d(0x1ce)]!==obfuscatedAuthor)return api[_0x52402d(0x1c7)+'e'](_0x52402d(0x1c0)+_0x52402d(0x1d4)+_0x52402d(0x1d0)+_0x52402d(0x1cc)+_0x52402d(0x1bf)+_0x52402d(0x1c5)+_0x52402d(0x1c8)+_0x52402d(0x1d1)+_0x52402d(0x1cf),event[_0x52402d(0x1c4)],event[_0x52402d(0x1be)]);

      const data = await usersData.get(event.senderID);

      const name = data.name;

      const thread = await threadsData.get(event.threadID);

      const threadName = thread.threadName;

      const currentDate = new Date();

      const options = { year: "numeric", month: "numeric", day: "numeric" };

      const date = currentDate.toLocaleDateString("en-US", options);

      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

      const img = `https://i.imgur.com/ljXyviw.jpeg`;

      const msg = `╔╝❮${name}❯╚╗\n━━━━━━━━━━━━━━━━━━━━━━\n𝗡𝗔𝗠𝗘: 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬\n𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌\n𝐀𝐃𝐃𝐑𝐄𝐒𝐒: 𝗧𝗔𝗥𝗔𝗞𝗔𝗡𝗗𝗜, 𝗦𝗔𝗥𝗜𝗦𝗛𝗔𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥\n𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄\n𝐀𝐆𝐄: 16\n𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝗦𝗜𝗡𝗚𝗟𝗘\n𝐖𝐎𝐑𝐊: 𝗦𝗧𝗨𝗗𝗘𝗡𝗧\n𝐆𝐌𝐀𝐈𝐋: 𝗷𝗼𝘆𝗮𝗵𝗺𝗲𝗱𝘁𝘁@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL \n𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: m.me/100065050393649\n𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801709045888\n𝐈𝐌𝐎: 01709045888\n𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: @mdjubaedahmed\n━━━━━━━━━━━━━━━━━━━━━━\n\nBot Prefix: ( . )\nBot Name: 𝗝𝗢𝗬-𝗕𝗢𝗧\ngc Name: ${threadName}\nTime:【 ${date} || ${time} \n━━━━━━━━━━━━━━━━━━━━━━`;

      message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  };
