module.exports = {
  config: {
    name: "efa",
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
   var link = [ "https://i.imgur.com/GXtNx4V.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 ╮/╱🌼🌾\n🌼প্রিয়⊰💏\n╱/ ╰┛●───༆🌷❤️\n🥰❥༊━━❝তোমার ༅༎মন༅༎ খারাপের ༅༎ কারন ༅༎হতে༅༎ চাইনা༅༎!ღ᭄∘࿐🌻💚\n❥༊━━❝হঠাৎ༅༎ মনে পড়া ༅༎ঠোঁটের কোনে༅༎মুচকি ༅༎হাসির༅༎___🌸💙\nღকারন ༅༎হতে ༅༎চাই༅༎ღ᭄∘࿐🌻💚\n🌺●───ꃳ───●🌺\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
