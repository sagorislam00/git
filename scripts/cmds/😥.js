 module.exports = {
  config: {
    name: "😥",
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
   var link = [ "https://i.imgur.com/UWtND17.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 ࿐❛❛আঁগঁলে্ঁ ❛রাঁখঁতে্ঁ❜❜\n❛❛শিখো্ঁ ❛প্রি্ঁয়্ঁ❜❜-🥀😍࿐\n࿐❛❛😌কাঁরঁন্ঁ❜❛হাঁরিঁয়েঁ ❛ফেঁলাঁ ❛সঁহঁজঁ❜❜🥀😇࿐\n࿐❛❛😤কিঁন্তু্ঁ ❛ ফিঁরেঁ পাঁওঁয়াঁ ❜❜\n❛❛খুঁবঁইঁ ❛ কঁঠিঁন্ঁ❜❜🥀😘\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
