module.exports = {
config: {
  name: "goiadmin",
  aurthor:"?/zed",// Convert By Goatbot Zed
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "love",
  guide: "{pn}"
},
  onStart: async function ({ api, event }) {
  if (event.senderID !== "100065050393649") {
    var aid = ["100065050393649"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mention_দিস না _জয় বস এর মন মন ভালো নেই আজকে!💔🥀", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣", "এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘","এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😏","জয় বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰"];
      api.setMessageReaction("😺", event.messageID, (err) => {}, true);
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
},
  };
