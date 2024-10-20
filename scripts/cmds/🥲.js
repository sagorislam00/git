module.exports = {
  config: {
    name: "🥲",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "send you pic of messi",
    longDescription: "",
    category: "football",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "https://i.imgur.com/gq1TvwW.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「┏╮/╱ 🌺\n╰🌺•••••••••😽🌸\n╱/ ╰┛\n🌸𝄞⋆⃝উপন্যাসের ༅༎প্রতিটি༅༎\nপৃষ্ঠা♡𝄞⋆⃝༅༎এক- একটি\nভিন্ন༅༎গল্প⋆⃝𝄞♡💞🌷\n🌺𝄞⋆⃝আর༅༎প্রতিটা ༅༎গল্পের⋆⃝𝄞♡শেষ ༅༎🌺\nকথা ༅༎ ভালো ༅༎ থেকো⋆⃝𝄞🥀🍂\n┏╮/╱ 🌺\n╰🌺••••••••😽🌸 \n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
