 module.exports = {
  config: {
    name: "🥰",
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
   var link = [ "https://i.imgur.com/gsUZES5.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 😘🥰༊••༅༅জীবটা সেই মানুষের সাথে কাটানো❥••༅༅\n🌸●─༅༅উচিত●─༅༅🌸\n••࿔࿔۵༅যার চেহারা থেকে মনটা অনেক༅••ღ🌸🖤\n❥••ღসুন্দর࿐۵🥰😘❤\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
